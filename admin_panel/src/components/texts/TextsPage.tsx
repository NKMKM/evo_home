import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeIcon, EditIcon, SaveIcon, XIcon, FolderIcon, GlobeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TextData {
  language: string;
  namespace: string;
  path: string;
  content: Record<string, any>;
}

interface LanguageInfo {
  code: string;
  name: string;
  flag: string;
}

export function TextsPage() {
  const { t } = useTranslation('common');
  const [texts, setTexts] = useState<TextData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('it');
  const [selectedNamespace, setSelectedNamespace] = useState<string>('');
  const [editingText, setEditingText] = useState<any>(null);
  const [editingPath, setEditingPath] = useState<string>('');
  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  const languages: LanguageInfo[] = [
    { code: 'ru', name: 'Russo', flag: '🇷🇺' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  // Spazi dei namespace dalla struttura del progetto
  const namespaces = [
    'home/HomeStart',
    'home/AboutCompany',
    'home/Calculator',
    'home/Advantages',
    'home/Guarantees',
    'home/Services',
    'home/Reviews',
    'home/ImageComparisonSlider',
    'slider/Architect',
    'slider/Design',
    'slider/Discount',
    'AboutUs',
    'OurWorks',
    'Contacts',
    'Reviews',
    'components/Nav',
    'components/Footer',
    'components/LanguageSelector',
    'turnkey_renovation/TurnkeyRenovation',
    'turnkey_renovation/DesignerRenovation',
    'turnkey_renovation/ExclusiveRenovation',
    'turnkey_renovation/Studio',
    'turnkey_renovation/TworoomApartment',
    'turnkey_renovation/ThreeroomApartment',
    'turnkey_renovation/FourroomApartment',
    'turnkey_renovation/TwolevelApartment',
    'room_renovation/RoomRenovation',
    'room_renovation/LivingRoom',
    'room_renovation/Bedroom',
    'room_renovation/ChildrenRoomRenovation',
    'room_renovation/Corridor',
    'room_renovation/Kitchen',
    'room_renovation/Bathroom',
    'room_renovation/Stairs',
    'systems/Systems',
    'systems/ElectricalSystem',
    'systems/GasSystem',
    'systems/FloorHeating',
    'systems/Sewage',
    'systems/ClimateControl',
    'commercial_premises/CommercialPremises',
    'commercial_premises/BusinessCenter',
    'commercial_premises/Restaurant',
    'commercial_premises/CommercialPremisesProjects',
    'commercial_premises/Ofice',
    'commercial_premises/Warehouse',
    'commercial_premises/FitnessClub',
    'commercial_premises/Hotel',
    'turnkey_renovation/TurnkeyRenovation',
    'room_renovation/RoomRenovation',
    'commercial_premises/CommercialSpaces',
    'systems/Systems',
  ];

  // Evita duplicati che causano warning React sulle chiavi
  const uniqueNamespaces = Array.from(new Set(namespaces));

  // Inizializzazione dai parametri URL (?lang=..&ns=..)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      const nsParam = params.get('ns');
      if (langParam) setSelectedLanguage(langParam);
      if (nsParam) setSelectedNamespace(nsParam);
    } catch (e) {
      // Ignora parametri URL malformati ma logga per debug
      // eslint-disable-next-line no-console
      console.warn('Impossibile analizzare i parametri URL per TextsPage', e);
    }
  }, []);

  useEffect(() => {
    loadTexts();
  }, [selectedLanguage, selectedNamespace]);

  const loadTexts = async () => {
    setLoading(true);
    try {
      if (!selectedNamespace) {
        setTexts([]);
        setLoading(false);
        return;
      }
      const url = new URL(`${backendUrl}/api/texts`);
      url.searchParams.set('lang', selectedLanguage);
      url.searchParams.set('ns', selectedNamespace);
      const res = await fetch(url.toString(), { credentials: 'include' });
      if (!res.ok) {
    console.error('Errore caricamento:', res.status, res.statusText);
        setTexts([]);
        return;
      }
      const data = await res.json();
  console.log('Testi caricati:', data);
      setTexts([data]);
    } catch (e) {
      console.error('Errore caricamento testi:', e);
      setTexts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEditText = (content: any, path: string) => {
    setEditingText(JSON.parse(JSON.stringify(content)));
    setEditingPath(path);
  };

  const handleSaveText = async () => {
      if (!editingText || !editingPath) {
      alert('Nessun dato da salvare');
      return;
    }
    try {
      console.log('Salvataggio testi:', { language: selectedLanguage, namespace: selectedNamespace, content: editingText });
      const res = await fetch(`${backendUrl}/api/texts`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ language: selectedLanguage, namespace: selectedNamespace, content: editingText })
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Errore salvataggio: ${res.status} ${errorText}`);
      }
      const result = await res.json();
      console.log('Risultato salvataggio:', result);
  // Riflettiamo le modifiche localmente
      setTexts(texts.map(text => text.path === editingPath ? { ...text, content: editingText } : text));
      setEditingText(null);
      setEditingPath('');
    } catch (err) {
      console.error('Errore salvataggio:', err);
      const msg = err instanceof Error ? err.message : String(err);
    }
  };

  const handleCancelEdit = () => {
    setEditingText(null);
    setEditingPath('');
  };

  const updateNestedValue = (obj: any, path: string, value: string) => {
    // Work on a deep copy so we don't mutate state directly and handle null/undefined
    const copy = JSON.parse(JSON.stringify(obj || {}));
    const keys = path.split('.');
    let current: any = copy;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current) || typeof current[keys[i]] !== 'object' || current[keys[i]] === null) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    return copy;
  };

  const renderEditableFields = (obj: any, prefix = '', level = 0) => {
    if (!obj || typeof obj !== 'object') return null;
    // handle arrays as well
    const keys = Array.isArray(obj) ? Object.keys(obj) : Object.keys(obj);
    return keys.map(key => {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];
      
      if (typeof value === 'string') {
        return (
          <div key={fullPath} className="mb-6">
            <div className="flex items-center mb-2">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  level === 0 ? 'bg-blue-500' : 
                  level === 1 ? 'bg-green-500' : 'bg-purple-500'
                }`}></div>
                <label className="text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              </div>
              <div className="ml-auto text-xs text-gray-400 font-mono">
                {fullPath}
              </div>
            </div>
            <div className="relative">
                  {value && value.length > 100 ? (
                  <textarea
                    value={value ?? ''}
                    onChange={(e) => {
                      const newObj = updateNestedValue(editingText || {}, fullPath, e.target.value);
                      setEditingText(newObj);
                    }}
                  rows={Math.min(Math.max(Math.ceil(value.length / 80), 2), 6)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-sm text-sm leading-relaxed"
                  placeholder="Inserisci il testo..."
                />
              ) : (
                <input
                  type="text"
                    value={value ?? ''}
                  onChange={(e) => {
                    const newObj = updateNestedValue(editingText || {}, fullPath, e.target.value);
                    setEditingText(newObj);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm"
                  placeholder="Inserisci il testo..."
                />
              )}
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {value ? value.length : 0} caratteri
              </div>
            </div>
          </div>
        );
      } else if (typeof value === 'object' && value !== null) {
        return (
          <div key={fullPath} className={`mb-6 border rounded-lg p-4 ${
            level === 0 ? 'border-blue-200 bg-blue-50' :
            level === 1 ? 'border-green-200 bg-green-50' : 'border-purple-200 bg-purple-50'
          }`}>
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 rounded ${
                level === 0 ? 'bg-blue-500' : 
                level === 1 ? 'bg-green-500' : 'bg-purple-500'
              }`}></div>
              <h4 className="ml-2 text-sm font-semibold text-gray-800">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </h4>
              <div className="ml-auto text-xs text-gray-500 font-mono">
                {fullPath}
              </div>
            </div>
              <div className="space-y-3">
                {renderEditableFields(value, fullPath, level + 1)}
              </div>
          </div>
        );
      }
      
      return null;
    });
  };

  // Render di anteprima ricorsiva per mostrare anche campi annidati nel view-mode
  const renderPreviewFields = (obj: any, prefix = '', level = 0) => {
    if (!obj || typeof obj !== 'object') return null;
    const keys = Array.isArray(obj) ? Object.keys(obj) : Object.keys(obj);
    return keys.map(key => {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (typeof value === 'string') {
        return (
          <div key={fullPath} className="border-l-4 border-blue-400 pl-3 py-2 bg-white rounded-r mb-2">
            <div className="text-xs font-medium text-blue-600 mb-1">
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            </div>
            <div className="text-sm text-gray-700">
              {value}
            </div>
          </div>
        );
      } else if (typeof value === 'object' && value !== null) {
        return (
          <div key={fullPath} className={`mb-3 border rounded p-3 ${
            level === 0 ? 'border-blue-200 bg-blue-50' : level === 1 ? 'border-green-200 bg-green-50' : 'border-purple-200 bg-purple-50'
          }`}>
            <div className="flex items-center mb-2">
              <div className={`w-3 h-3 rounded mr-2 ${
                level === 0 ? 'bg-blue-500' : level === 1 ? 'bg-green-500' : 'bg-purple-500'
              }`}></div>
              <div className="text-sm font-semibold text-gray-800">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</div>
            </div>
            <div className="pl-4">
              {renderPreviewFields(value, fullPath, level + 1)}
            </div>
          </div>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-light text-gray-800 mb-1">
          {t('textsLabel')}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {t('action.editTexts.desc')}
        </p>

        {/* Фильтры */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <GlobeIcon className="inline w-4 h-4 mr-1" />
                {t('lang.it')}/{t('lang.ru')}
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FolderIcon className="inline w-4 h-4 mr-1" />
                Sezione
              </label>
              <select
                value={selectedNamespace}
                onChange={(e) => setSelectedNamespace(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Seleziona sezione</option>
                {uniqueNamespaces.map(ns => (
                  <option key={ns} value={ns}>{ns}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Контент */}
        {texts.length > 0 ? (
          <div className="space-y-6">
            {texts.map(text => (
              <motion.div
                key={text.path}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-50 text-blue-600 p-2 rounded-md">
                        <TypeIcon size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          {text.namespace}
                        </h3>
                        <p className="text-sm text-gray-500">{text.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleEditText(text.content, text.path)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <EditIcon size={18} />
                    </button>
                  </div>

                  {editingPath === text.path ? (
                    <div className="space-y-4">
                      <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-md p-4">
                        {renderEditableFields(editingText)}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveText}
                          className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                          <SaveIcon size={14} className="mr-1" />
                          Salva
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex items-center px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          <XIcon size={14} className="mr-1" />
                          Annulla
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-3 flex items-center justify-between">
                        <span>Anteprima</span>
                        <span className="bg-gray-200 px-2 py-1 rounded">JSON</span>
                      </div>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {renderPreviewFields(text.content)}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : selectedNamespace ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <TypeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Impossibile caricare i testi per la sezione selezionata
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <TypeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Seleziona una sezione per modificare i testi
            </p>
          </div>
        )}

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-yellow-800 mb-2">Istruzioni</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Seleziona lingua e sezione da modificare</li>
            <li>• Clicca il pulsante modifica</li>
            <li>• Aggiorna i testi necessari</li>
            <li>• Salva le modifiche</li>
            <li>• I testi si aggiorneranno sul sito</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}