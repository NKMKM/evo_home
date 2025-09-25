const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const frontendSrc = path.join(repoRoot, 'frontend', 'src');
const pagesDir = path.join(frontendSrc, 'pages');
const pagesJsonPath = path.join(repoRoot, 'backend', 'pages.json');

const exts = new Set(['.js', '.jsx', '.ts', '.tsx']);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir)) {
    const full = path.join(dir, e);
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (st.isFile() && exts.has(path.extname(e))) out.push(full);
  }
  return out;
}

function resolveImport(fromFile, spec) {
  try {
    if (spec.startsWith('.')) {
      const base = path.dirname(fromFile);
      const full = path.resolve(base, spec);
      const candidates = [full, full + '.jsx', full + '.js', full + '.tsx', full + '.ts', path.join(full, 'index.jsx'), path.join(full, 'index.js')];
      for (const c of candidates) if (fs.existsSync(c)) return c;
    }
    if (spec.includes('/assets/')) return spec;
  } catch(e){}
  return null;
}

function extractRel(candidate, frontendSrc) {
  if (!candidate) return null;
  const normalized = candidate.replace(/\\/g, '/');
  const idx = normalized.indexOf('/assets/');
  if (idx !== -1) {
    const rel = normalized.slice(idx + '/assets/'.length);
    if (/^images\//i.test(rel)) return rel;
  }
  if (candidate.startsWith(frontendSrc)) {
    const parts = path.relative(path.join(frontendSrc, 'assets'), candidate).replace(/\\/g, '/');
    if (parts && parts.startsWith('images/')) return parts;
  }
  return null;
}

function parseFile(entryPath) {
  const images = new Set();
  const visited = new Set();
  function parse(fp) {
    if (!fp || visited.has(fp)) return;
    visited.add(fp);
    if (!fs.existsSync(fp)) return;
    const content = fs.readFileSync(fp, 'utf-8');

    const importDefaultRegex = /import\s+([A-Za-z0-9_\$]+)\s+from\s+['"]([^'"]+)['"]/g;
    const importMap = {};
    let im;
    while ((im = importDefaultRegex.exec(content)) !== null) {
      importMap[im[1]] = im[2];
    }

    const requireRegex = /require\(['"]([^'"]+)['"]\)/g;
    let mr;
    while ((mr = requireRegex.exec(content)) !== null) {
      try{
        const resolved = resolveImport(fp, mr[1]) || mr[1];
        const rel = extractRel(resolved, frontendSrc);
        if (rel) images.add(rel);
      }catch(e){}
    }

    const inlineRegex = /\/assets\/images\/[A-Za-z0-9_\-./]+/g;
    let m;
    while ((m = inlineRegex.exec(content)) !== null) {
      const rel = m[0].replace(/^\/assets\//, '');
      if (/^images\//i.test(rel)) images.add(rel);
    }

    const imgSrcAttrRegex = /<img[^>]+src=["']([^"']+)["']/g;
    while ((m = imgSrcAttrRegex.exec(content)) !== null) {
      const spec = m[1];
      try{
        const resolved = resolveImport(fp, spec) || spec;
        const rel = extractRel(resolved, frontendSrc);
        if (rel) images.add(rel);
      }catch(e){}
    }

    const imgSrcExprRegex = /<img[^>]+src=\{\s*([A-Za-z0-9_\$]+)\s*\}/g;
    while ((m = imgSrcExprRegex.exec(content)) !== null) {
      const ident = m[1];
      const spec = importMap[ident];
      if (spec) {
        const resolved = resolveImport(fp, spec) || spec;
        const rel = extractRel(resolved, frontendSrc);
        if (rel) images.add(rel);
      }
    }

    const importRegex = /import\s+[^'"\n]*from\s+['"]([^'"]+)['"]/g;
    while ((m = importRegex.exec(content)) !== null) {
      const spec = m[1];
      if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(spec) || /\/assets\//i.test(spec)) {
        const resolved = resolveImport(fp, spec) || spec;
        const rel = extractRel(resolved, frontendSrc);
        if (rel) images.add(rel);
        continue;
      }
      const resolvedModule = resolveImport(fp, spec);
      if (resolvedModule && resolvedModule.startsWith(frontendSrc)) {
        parse(resolvedModule);
      }
    }
  }
  parse(entryPath);
  return Array.from(images);
}

// collect all page files
const pageFiles = walk(pagesDir);
const pageToImages = {};
for (const p of pageFiles) {
  const rel = path.relative(pagesDir, p).replace(/\\/g, '/');
  const imgs = parseFile(p);
  pageToImages[rel] = imgs;
}

// read existing pages.json
const pagesData = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf-8'));

// backup original
fs.writeFileSync(pagesJsonPath + '.bak.' + Date.now(), JSON.stringify(pagesData, null, 2), 'utf-8');

// helper to find page by mapping
const pageFilesMapping = {
  'home': ['Main.jsx'],
  'about-us': ['AboutUs.jsx'],
  'our-works': ['OurWorks.jsx'],
  'contacts': ['Contacts.jsx'],
  'reviews': ['Reviews.jsx'],
  'turnkey-renovation': ['turnkey_renovation/TurnkeyRenovation.jsx'],
  'designer-renovation': ['turnkey_renovation/DesignerRenovation.jsx'],
  'exclusive-renovation': ['turnkey_renovation/ExclusiveRenovation.jsx'],
  'studio': ['turnkey_renovation/Studio.jsx'],
  'two-room-apartment': ['turnkey_renovation/TworoomApartment.jsx'],
  'three-room-apartment': ['turnkey_renovation/ThreeroomApartment.jsx'],
  'four-room-apartment': ['turnkey_renovation/FourroomApartment.jsx'],
  'two-story-apartment': ['turnkey_renovation/TwostoryApartment.jsx'],
  'room-renovation': ['room_renovation/RoomRenovation.jsx'],
  'living-room': ['room_renovation/LivingRoom.jsx'],
  'bedroom': ['room_renovation/Bedroom.jsx'],
  'children-room': ['room_renovation/ChildrenRoom.jsx'],
  'corridor': ['room_renovation/Corridor.jsx'],
  'kitchen': ['room_renovation/Kitchen.jsx'],
  'bathroom': ['room_renovation/Bathroom.jsx'],
  'stairs': ['room_renovation/Stairs.jsx'],
  'systems': ['systems/Systems.jsx'],
  'electrical-system': ['systems/ElectricalSystem.jsx'],
  'gas-system': ['systems/GasSystem.jsx'],
  'floor-heating': ['systems/FloorHeating.jsx'],
  'sewage': ['systems/Sewage.jsx'],
  'climate-control': ['systems/ClimateControl.jsx'],
  'commercial-premises': ['commercial_premises/CommercialPremises.jsx'],
  'business-center': ['commercial_premises/BusinessCenter.jsx'],
  'restaurant': ['commercial_premises/Restaurant.jsx'],
  'commercial-premises-renovation': ['commercial_premises/CommercialPremisesRenovation.jsx'],
  'office': ['commercial_premises/Office.jsx'],
  'warehouse': ['commercial_premises/Warehouse.jsx'],
  'fitness-club': ['commercial_premises/FitnessClub.jsx'],
  'hotel': ['commercial_premises/Hotel.jsx'],
  'services': ['servises/ServisesPhone.jsx'],
  'turnkey-renovation-services': ['servises/TurnkeyRenovationServices.jsx'],
  'room-renovation-services': ['servises/RoomRenovationServices.jsx'],
  'commercial-premises-services': ['servises/CommercialPremisesServices.jsx'],
  'systems-services': ['servises/SystemsServices.jsx']
};

function normalizeKey(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

let newPages = pagesData.map(p => {
  const pid = p.id;
  let imgs = [];
  if (pageFilesMapping[pid]) {
    for (const relFile of pageFilesMapping[pid]) {
      if (pageToImages[relFile]) imgs.push(...pageToImages[relFile]);
    }
  } else {
    // try to find by filename match
    const normalized = normalizeKey(pid);
    for (const rel in pageToImages) {
      const name = path.basename(rel, path.extname(rel));
      if (normalizeKey(name) === normalized || normalizeKey(rel).includes(normalized)) {
        imgs.push(...pageToImages[rel]);
      }
    }
  }
  // dedupe
  imgs = Array.from(new Set(imgs));

  // merge into pages.json images keeping existing metadata where possible
  const existing = p.images || [];
  const existingSrcs = new Set(existing.map(e => String(e.src).replace(/^images[\/]/, '')));
  const merged = [...existing];
  let nextId = existing.reduce((acc, cur) => Math.max(acc, cur.id || 0), 0) + 1;
  for (const img of imgs) {
  const cleaned = img.replace(/^images\//, '').replace(/^[\/]/, '');
    if (!existingSrcs.has(cleaned)) {
      merged.push({ id: nextId++, src: img, alt: '', title: '', description: '' });
    }
  }

  return { ...p, images: merged };
});

// EXTRA: ensure service pages (with servises-* ids) get images by scanning category directories
const assetsImagesDir = path.join(frontendSrc, 'assets', 'images');
function getAllImageFiles(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = fs.statSync(full);
    if (st.isDirectory()) getAllImageFiles(full, out);
    else if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(entry)) out.push(full);
  }
}

const serviceDirMap = {
  'servises-servisesphone': ['turnkey_renovation/','room_renovation/','commercial_premises/','systems/'],
  'servises-turnkeyrenovationservices': ['turnkey_renovation/'],
  'servises-roomrenovationservices': ['room_renovation/'],
  'servises-commercialpremisesservices': ['commercial_premises/'],
  'servises-systemsservices': ['systems/']
};

// helper: pick evenly spread N items from array
function pickEvenlySpread(arr, count) {
  if (arr.length <= count) return arr.slice();
  const out = [];
  const step = (arr.length - 1) / (count - 1);
  for (let i = 0; i < count; i++) {
    const idx = Math.round(i * step);
    out.push(arr[idx]);
  }
  return Array.from(new Set(out));
}

// Select one or two representative images per direct subfolder
function pickCoversPerSubfolder(baseDir, relDirs, maxPerSub = 2, allowedExts = /(png|jpg|jpeg|webp|gif)$/i) {
  const picks = [];
  for (const rel of relDirs) {
    const root = path.join(baseDir, rel);
    if (!fs.existsSync(root)) continue;
    const entries = fs.readdirSync(root);
    for (const entry of entries) {
      const full = path.join(root, entry);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        // pick first 1-2 images in this subfolder
        const files = fs.readdirSync(full)
          .filter(f => allowedExts.test(f))
          .slice(0, maxPerSub)
          .map(f => path.join(full, f));
        picks.push(...files);
      }
    }
    // if folder has images directly, include a couple
    const directFiles = fs.readdirSync(root)
      .filter(f => allowedExts.test(f))
      .slice(0, maxPerSub)
      .map(f => path.join(root, f));
    picks.push(...directFiles);
  }
  // dedupe
  return Array.from(new Set(picks));
}

// limits per page
const perPageLimit = {
  'servises-servisesphone': 24,
  'servises-turnkeyrenovationservices': 12,
  'servises-roomrenovationservices': 12,
  'servises-commercialpremisesservices': 12,
  'servises-systemsservices': 12
};

newPages = newPages.map(p => {
  if (!serviceDirMap[p.id]) return p;
  const dirs = serviceDirMap[p.id];
  // Prefer covers per immediate subfolder
  let collected = pickCoversPerSubfolder(assetsImagesDir, dirs, 2);
  // Fallback to all images if not enough
  if (collected.length < (perPageLimit[p.id] || 12)) {
    for (const d of dirs) {
      const abs = path.join(assetsImagesDir, d);
      getAllImageFiles(abs, collected);
    }
    collected = Array.from(new Set(collected));
  }
  // stable sort by path to make selection deterministic
  const unique = Array.from(new Set(collected)).sort((a,b) => a.localeCompare(b));
  const limit = perPageLimit[p.id] || 12;
  const limited = pickEvenlySpread(unique, limit);
  const relLimited = limited.map(f => path.relative(assetsImagesDir, f).replace(/\\/g, '/'));
  const images = relLimited.map((rel, idx) => ({ id: idx + 1, src: 'images/' + rel, alt: '', title: '', description: '' }));
  return { ...p, images };
});

fs.writeFileSync(pagesJsonPath, JSON.stringify(newPages, null, 2), 'utf-8');
console.log('pages.json updated, backup created.');

// print report summary
for (const p of newPages) {
  console.log(`${p.id}: ${p.images.length} images`);
}
