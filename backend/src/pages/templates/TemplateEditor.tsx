import React, { useEffect, useState, Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SaveIcon, EyeIcon, TrashIcon, PlusIcon, LayoutIcon, TextIcon, ImageIcon, GridIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon, MoveIcon, XIcon, SlidersIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { toast } from 'react-toastify';
// Component types for the template builder
interface ComponentBase {
  id: string;
  type: string;
  label: string;
}
interface HeadingComponent extends ComponentBase {
  type: 'heading';
  content: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  align: 'left' | 'center' | 'right';
}
interface TextComponent extends ComponentBase {
  type: 'text';
  content: string;
  align: 'left' | 'center' | 'right';
}
interface ImageComponent extends ComponentBase {
  type: 'image';
  src: string;
  alt: string;
  width: string;
  height: string;
}
interface ButtonComponent extends ComponentBase {
  type: 'button';
  text: string;
  url: string;
  variant: 'primary' | 'secondary' | 'outline';
  align: 'left' | 'center' | 'right';
}
interface SpacerComponent extends ComponentBase {
  type: 'spacer';
  height: number;
}
interface DividerComponent extends ComponentBase {
  type: 'divider';
  style: 'solid' | 'dashed' | 'dotted';
}
interface ContainerComponent extends ComponentBase {
  type: 'container';
  children: TemplateComponent[];
  columns: number;
  gap: number;
  background: string;
  padding: number;
}
type TemplateComponent = HeadingComponent | TextComponent | ImageComponent | ButtonComponent | SpacerComponent | DividerComponent | ContainerComponent;
interface Template {
  id: string;
  name: string;
  description: string;
  components: TemplateComponent[];
  lastModified: string;
}
const TemplateEditor = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== undefined;
  const [template, setTemplate] = useState<Template>({
    id: id || `template-${Date.now()}`,
    name: 'New Template',
    description: 'Template description',
    components: [],
    lastModified: new Date().toISOString()
  });
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [draggingComponent, setDraggingComponent] = useState<string | null>(null);
  const [showComponentPanel, setShowComponentPanel] = useState(true);
  const [showSettingsPanel, setShowSettingsPanel] = useState(true);
  // Load template data if editing
  useEffect(() => {
    if (isEditing && id) {
      // In a real app, fetch the template from an API
      // For now, we'll use mock data
      const mockTemplates = [{
        id: 'template-1',
        name: 'Landing Page',
        description: 'A template for landing pages',
        components: [{
          id: 'heading-1',
          type: 'heading',
          label: 'Main Heading',
          content: 'Welcome to our Website',
          level: 1,
          align: 'center'
        }, {
          id: 'text-1',
          type: 'text',
          label: 'Intro Text',
          content: 'This is a sample landing page template that you can customize to your needs.',
          align: 'center'
        }, {
          id: 'spacer-1',
          type: 'spacer',
          label: 'Spacer',
          height: 30
        }, {
          id: 'container-1',
          type: 'container',
          label: 'Features Section',
          columns: 3,
          gap: 20,
          background: '#f8fafc',
          padding: 20,
          children: [{
            id: 'heading-2',
            type: 'heading',
            label: 'Feature 1',
            content: 'Feature One',
            level: 3,
            align: 'left'
          }, {
            id: 'heading-3',
            type: 'heading',
            label: 'Feature 2',
            content: 'Feature Two',
            level: 3,
            align: 'left'
          }, {
            id: 'heading-4',
            type: 'heading',
            label: 'Feature 3',
            content: 'Feature Three',
            level: 3,
            align: 'left'
          }]
        }],
        lastModified: '2023-06-15T10:30:00Z'
      }];
      const loadedTemplate = mockTemplates.find(t => t.id === id);
      if (loadedTemplate) {
        setTemplate(loadedTemplate);
      } else {
        toast.error('Template not found');
        navigate('/templates');
      }
    }
  }, [id, isEditing, navigate]);
  // Generate a unique ID for new components
  const generateId = (type: string) => {
    return `${type}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };
  // Add a new component to the template
  const addComponent = (type: string) => {
    let newComponent: TemplateComponent;
    switch (type) {
      case 'heading':
        newComponent = {
          id: generateId('heading'),
          type: 'heading',
          label: 'Heading',
          content: 'New Heading',
          level: 2,
          align: 'left'
        };
        break;
      case 'text':
        newComponent = {
          id: generateId('text'),
          type: 'text',
          label: 'Text Block',
          content: 'Enter your text here',
          align: 'left'
        };
        break;
      case 'image':
        newComponent = {
          id: generateId('image'),
          type: 'image',
          label: 'Image',
          src: 'https://via.placeholder.com/400x300',
          alt: 'Placeholder image',
          width: '100%',
          height: 'auto'
        };
        break;
      case 'button':
        newComponent = {
          id: generateId('button'),
          type: 'button',
          label: 'Button',
          text: 'Click Me',
          url: '#',
          variant: 'primary',
          align: 'center'
        };
        break;
      case 'spacer':
        newComponent = {
          id: generateId('spacer'),
          type: 'spacer',
          label: 'Spacer',
          height: 50
        };
        break;
      case 'divider':
        newComponent = {
          id: generateId('divider'),
          type: 'divider',
          label: 'Divider',
          style: 'solid'
        };
        break;
      case 'container':
        newComponent = {
          id: generateId('container'),
          type: 'container',
          label: 'Container',
          children: [],
          columns: 2,
          gap: 20,
          background: '#ffffff',
          padding: 20
        };
        break;
      default:
        return;
    }
    setTemplate(prev => ({
      ...prev,
      components: [...prev.components, newComponent],
      lastModified: new Date().toISOString()
    }));
    setActiveComponent(newComponent.id);
  };
  // Remove a component from the template
  const removeComponent = (id: string) => {
    setTemplate(prev => ({
      ...prev,
      components: prev.components.filter(c => c.id !== id),
      lastModified: new Date().toISOString()
    }));
    if (activeComponent === id) {
      setActiveComponent(null);
    }
  };
  // Update a component's properties
  const updateComponent = (id: string, updates: Partial<TemplateComponent>) => {
    setTemplate(prev => ({
      ...prev,
      components: prev.components.map(c => c.id === id ? {
        ...c,
        ...updates
      } : c),
      lastModified: new Date().toISOString()
    }));
  };
  // Handle drag start
  const handleDragStart = (id: string) => {
    setDraggingComponent(id);
  };
  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  // Handle drop to reorder components
  const handleDrop = (targetId: string) => {
    if (!draggingComponent || draggingComponent === targetId) {
      setDraggingComponent(null);
      return;
    }
    const components = [...template.components];
    const draggedComponent = components.find(c => c.id === draggingComponent);
    const targetIndex = components.findIndex(c => c.id === targetId);
    if (draggedComponent && targetIndex !== -1) {
      // Remove the dragged component
      const newComponents = components.filter(c => c.id !== draggingComponent);
      // Insert it at the target position
      newComponents.splice(targetIndex, 0, draggedComponent);
      setTemplate(prev => ({
        ...prev,
        components: newComponents,
        lastModified: new Date().toISOString()
      }));
    }
    setDraggingComponent(null);
  };
  // Move component up or down
  const moveComponent = (id: string, direction: 'up' | 'down') => {
    const components = [...template.components];
    const currentIndex = components.findIndex(c => c.id === id);
    if (currentIndex === -1) return;
    if (direction === 'up' && currentIndex > 0) {
      // Swap with the previous component
      ;
      [components[currentIndex - 1], components[currentIndex]] = [components[currentIndex], components[currentIndex - 1]];
    } else if (direction === 'down' && currentIndex < components.length - 1) {
      // Swap with the next component
      ;
      [components[currentIndex], components[currentIndex + 1]] = [components[currentIndex + 1], components[currentIndex]];
    } else {
      return;
    }
    setTemplate(prev => ({
      ...prev,
      components: components,
      lastModified: new Date().toISOString()
    }));
  };
  // Save the template
  const saveTemplate = () => {
    // In a real app, save to an API
    toast.success('Template saved successfully');
    navigate('/templates');
  };
  // Preview the template
  const previewTemplate = () => {
    // In a real app, open a preview in a new tab
    toast.info('Preview functionality would open in a new tab');
  };
  // Render a component based on its type
  const renderComponent = (component: TemplateComponent) => {
    const isActive = activeComponent === component.id;
    const isDragging = draggingComponent === component.id;
    const componentClasses = `relative p-4 border ${isActive ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} ${isDragging ? 'opacity-50' : ''} rounded-md mb-4 hover:border-blue-300 cursor-pointer transition-colors`;
    const componentControls = isActive && <div className="absolute top-2 right-2 flex space-x-1 bg-white rounded shadow-sm border border-gray-200 p-1">
        <button className="p-1 text-gray-500 hover:text-gray-700 rounded" onClick={() => moveComponent(component.id, 'up')} title="Move Up">
          <ChevronUpIcon size={14} />
        </button>
        <button className="p-1 text-gray-500 hover:text-gray-700 rounded" onClick={() => moveComponent(component.id, 'down')} title="Move Down">
          <ChevronDownIcon size={14} />
        </button>
        <button className="p-1 text-red-500 hover:text-red-700 rounded" onClick={() => removeComponent(component.id)} title="Delete">
          <TrashIcon size={14} />
        </button>
      </div>;
    switch (component.type) {
      case 'heading':
        const HeadingTag = `h${component.level}` as keyof JSX.IntrinsicElements;
        return <div key={component.id} className={componentClasses} onClick={() => setActiveComponent(component.id)} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)}>
            <HeadingTag className={`text-gray-900 font-bold ${component.align === 'center' ? 'text-center' : component.align === 'right' ? 'text-right' : 'text-left'}`} style={{
            margin: 0
          }}>
              {component.content}
            </HeadingTag>
            {componentControls}
          </div>;
      case 'text':
        return <div key={component.id} className={componentClasses} onClick={() => setActiveComponent(component.id)} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)}>
            <p className={`text-gray-700 ${component.align === 'center' ? 'text-center' : component.align === 'right' ? 'text-right' : 'text-left'}`}>
              {component.content}
            </p>
            {componentControls}
          </div>;
      case 'image':
        return <div key={component.id} className={componentClasses} onClick={() => setActiveComponent(component.id)} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)}>
            <img src={component.src} alt={component.alt} className="max-w-full mx-auto" style={{
            width: component.width,
            height: component.height
          }} />
            {componentControls}
          </div>;
      case 'button':
        return <div key={component.id} className={componentClasses} onClick={() => setActiveComponent(component.id)} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)}>
            <div className={`${component.align === 'center' ? 'text-center' : component.align === 'right' ? 'text-right' : 'text-left'}`}>
              <button className={`px-4 py-2 rounded-md ${component.variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : component.variant === 'secondary' ? 'bg-gray-600 text-white hover:bg-gray-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                {component.text}
              </button>
            </div>
            {componentControls}
          </div>;
      case 'spacer':
        return <div key={component.id} className={componentClasses} onClick={() => setActiveComponent(component.id)} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)} style={{
          minHeight: `${component.height}px`
        }}>
            <div className="text-center text-gray-400 text-xs">
              Spacer ({component.height}px)
            </div>
            {componentControls}
          </div>;
      case 'divider':
        return <div key={component.id} className={componentClasses} onClick={() => setActiveComponent(component.id)} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)}>
            <hr className={`border-t ${component.style === 'dashed' ? 'border-dashed' : component.style === 'dotted' ? 'border-dotted' : 'border-solid'} border-gray-300`} />
            {componentControls}
          </div>;
      case 'container':
        return <div key={component.id} className={componentClasses} onClick={e => {
          e.stopPropagation();
          setActiveComponent(component.id);
        }} draggable onDragStart={() => handleDragStart(component.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(component.id)} style={{
          backgroundColor: component.background,
          padding: `${component.padding}px`
        }}>
            <div className="grid gap-4" style={{
            gridTemplateColumns: `repeat(${component.columns}, 1fr)`,
            gap: `${component.gap}px`
          }}>
              {component.children.map(child => <div key={child.id} className="border border-dashed border-gray-300 p-3 rounded">
                  {/* Render child components here */}
                  <div className="text-sm text-gray-500">
                    {child.label} ({child.type})
                  </div>
                </div>)}
              {component.children.length === 0 && <div className="col-span-full text-center py-8 text-gray-400 border border-dashed border-gray-300 rounded">
                  Empty Container
                </div>}
            </div>
            {componentControls}
          </div>;
      default:
        return null;
    }
  };
  // Render component settings based on active component
  const renderComponentSettings = () => {
    if (!activeComponent) {
      return <div className="text-center p-6 text-gray-500">
          Select a component to edit its settings
        </div>;
    }
    const component = template.components.find(c => c.id === activeComponent);
    if (!component) return null;
    const commonSettings = <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Label (for editor only)
        </label>
        <input type="text" value={component.label} onChange={e => updateComponent(component.id, {
        label: e.target.value
      })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>;
    switch (component.type) {
      case 'heading':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heading Text
              </label>
              <input type="text" value={component.content} onChange={e => updateComponent(component.id, {
              content: e.target.value
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heading Level
              </label>
              <select value={component.level} onChange={e => updateComponent(component.id, {
              level: parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value={1}>H1 - Main Heading</option>
                <option value={2}>H2 - Section Heading</option>
                <option value={3}>H3 - Subsection Heading</option>
                <option value={4}>H4 - Minor Heading</option>
                <option value={5}>H5 - Small Heading</option>
                <option value={6}>H6 - Smallest Heading</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alignment
              </label>
              <div className="flex space-x-2">
                <button className={`p-2 rounded ${component.align === 'left' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'left'
              })}>
                  <AlignLeftIcon size={16} />
                </button>
                <button className={`p-2 rounded ${component.align === 'center' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'center'
              })}>
                  <AlignCenterIcon size={16} />
                </button>
                <button className={`p-2 rounded ${component.align === 'right' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'right'
              })}>
                  <AlignRightIcon size={16} />
                </button>
              </div>
            </div>
          </div>;
      case 'text':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text Content
              </label>
              <textarea value={component.content} onChange={e => updateComponent(component.id, {
              content: e.target.value
            })} rows={4} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alignment
              </label>
              <div className="flex space-x-2">
                <button className={`p-2 rounded ${component.align === 'left' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'left'
              })}>
                  <AlignLeftIcon size={16} />
                </button>
                <button className={`p-2 rounded ${component.align === 'center' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'center'
              })}>
                  <AlignCenterIcon size={16} />
                </button>
                <button className={`p-2 rounded ${component.align === 'right' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'right'
              })}>
                  <AlignRightIcon size={16} />
                </button>
              </div>
            </div>
          </div>;
      case 'image':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input type="text" value={component.src} onChange={e => updateComponent(component.id, {
              src: e.target.value
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alt Text
              </label>
              <input type="text" value={component.alt} onChange={e => updateComponent(component.id, {
              alt: e.target.value
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Width
                </label>
                <input type="text" value={component.width} onChange={e => updateComponent(component.id, {
                width: e.target.value
              })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="100%, 300px, etc." />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height
                </label>
                <input type="text" value={component.height} onChange={e => updateComponent(component.id, {
                height: e.target.value
              })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="auto, 200px, etc." />
              </div>
            </div>
          </div>;
      case 'button':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Text
              </label>
              <input type="text" value={component.text} onChange={e => updateComponent(component.id, {
              text: e.target.value
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL
              </label>
              <input type="text" value={component.url} onChange={e => updateComponent(component.id, {
              url: e.target.value
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Style
              </label>
              <select value={component.variant} onChange={e => updateComponent(component.id, {
              variant: e.target.value as 'primary' | 'secondary' | 'outline'
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="outline">Outline</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alignment
              </label>
              <div className="flex space-x-2">
                <button className={`p-2 rounded ${component.align === 'left' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'left'
              })}>
                  <AlignLeftIcon size={16} />
                </button>
                <button className={`p-2 rounded ${component.align === 'center' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'center'
              })}>
                  <AlignCenterIcon size={16} />
                </button>
                <button className={`p-2 rounded ${component.align === 'right' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} onClick={() => updateComponent(component.id, {
                align: 'right'
              })}>
                  <AlignRightIcon size={16} />
                </button>
              </div>
            </div>
          </div>;
      case 'spacer':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height (px)
              </label>
              <input type="number" value={component.height} onChange={e => updateComponent(component.id, {
              height: parseInt(e.target.value)
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" min="1" max="500" />
            </div>
          </div>;
      case 'divider':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Style
              </label>
              <select value={component.style} onChange={e => updateComponent(component.id, {
              style: e.target.value as 'solid' | 'dashed' | 'dotted'
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </div>
          </div>;
      case 'container':
        return <div className="p-4">
            {commonSettings}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Columns
              </label>
              <input type="number" value={component.columns} onChange={e => updateComponent(component.id, {
              columns: parseInt(e.target.value)
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" min="1" max="12" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gap (px)
              </label>
              <input type="number" value={component.gap} onChange={e => updateComponent(component.id, {
              gap: parseInt(e.target.value)
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" min="0" max="100" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Background Color
              </label>
              <input type="text" value={component.background} onChange={e => updateComponent(component.id, {
              background: e.target.value
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="#ffffff, rgba(255,255,255,0.5), etc." />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Padding (px)
              </label>
              <input type="number" value={component.padding} onChange={e => updateComponent(component.id, {
              padding: parseInt(e.target.value)
            })} className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" min="0" max="100" />
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div>
          <input type="text" value={template.name} onChange={e => setTemplate(prev => ({
          ...prev,
          name: e.target.value
        }))} className="text-xl font-bold text-gray-800 border-0 focus:outline-none focus:ring-0 p-0" placeholder="Template Name" />
          <p className="text-sm text-gray-500">
            Last modified: {new Date(template.lastModified).toLocaleString()}
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={() => navigate('/templates')}>
            Cancel
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors" onClick={previewTemplate}>
            <EyeIcon size={16} className="mr-2" />
            Preview
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={saveTemplate}>
            <SaveIcon size={16} className="mr-2" />
            Save Template
          </button>
        </div>
      </div>
      {/* Editor Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Components Panel */}
        <div className={`w-64 border-r border-gray-200 bg-white overflow-y-auto transition-all duration-300 ${showComponentPanel ? 'translate-x-0' : '-translate-x-full w-0'}`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-gray-700">Components</h3>
            <button className="text-gray-400 hover:text-gray-500" onClick={() => setShowComponentPanel(false)}>
              <XIcon size={16} />
            </button>
          </div>
          <div className="p-4 space-y-2">
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('heading')}>
              <div className="mr-3 p-2 rounded-full bg-blue-100 text-blue-600">
                <div size={16} />
              </div>
              <div>
                <div className="font-medium">Heading</div>
                <div className="text-xs text-gray-500">Add a heading</div>
              </div>
            </button>
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('text')}>
              <div className="mr-3 p-2 rounded-full bg-green-100 text-green-600">
                <div size={16} />
              </div>
              <div>
                <div className="font-medium">Text</div>
                <div className="text-xs text-gray-500">Add a text block</div>
              </div>
            </button>
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('image')}>
              <div className="mr-3 p-2 rounded-full bg-purple-100 text-purple-600">
                <ImageIcon size={16} />
              </div>
              <div>
                <div className="font-medium">Image</div>
                <div className="text-xs text-gray-500">Add an image</div>
              </div>
            </button>
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('button')}>
              <div className="mr-3 p-2 rounded-full bg-indigo-100 text-indigo-600">
                <div size={16} />
              </div>
              <div>
                <div className="font-medium">Button</div>
                <div className="text-xs text-gray-500">Add a button</div>
              </div>
            </button>
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('spacer')}>
              <div className="mr-3 p-2 rounded-full bg-gray-100 text-gray-600">
                <div size={16} />
              </div>
              <div>
                <div className="font-medium">Spacer</div>
                <div className="text-xs text-gray-500">Add vertical space</div>
              </div>
            </button>
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('divider')}>
              <div className="mr-3 p-2 rounded-full bg-gray-100 text-gray-600">
                <div size={16} />
              </div>
              <div>
                <div className="font-medium">Divider</div>
                <div className="text-xs text-gray-500">
                  Add a horizontal line
                </div>
              </div>
            </button>
            <button className="w-full flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left" onClick={() => addComponent('container')}>
              <div className="mr-3 p-2 rounded-full bg-orange-100 text-orange-600">
                <GridIcon size={16} />
              </div>
              <div>
                <div className="font-medium">Container</div>
                <div className="text-xs text-gray-500">
                  Add a multi-column layout
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Canvas */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-8">
          {!showComponentPanel && <button className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-r-md shadow-md border border-gray-200" onClick={() => setShowComponentPanel(true)}>
              <ChevronRightIcon size={16} />
            </button>}
          {template.components.length === 0 ? <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <LayoutIcon size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Start Building Your Template
              </h3>
              <p className="text-gray-500 mb-4">
                Add components from the panel on the left to build your
                template.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={() => setShowComponentPanel(true)}>
                <PlusIcon size={16} className="inline mr-2" />
                Add Component
              </button>
            </div> : <div className="bg-white border border-gray-200 rounded-lg shadow-sm min-h-[500px] max-w-4xl mx-auto">
              <div className="p-8">
                {template.components.map(component => renderComponent(component))}
              </div>
            </div>}
        </div>
        {/* Settings Panel */}
        <div className={`w-80 border-l border-gray-200 bg-white overflow-y-auto transition-all duration-300 ${showSettingsPanel ? 'translate-x-0' : 'translate-x-full w-0'}`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-gray-700">Settings</h3>
            <button className="text-gray-400 hover:text-gray-500" onClick={() => setShowSettingsPanel(false)}>
              <XIcon size={16} />
            </button>
          </div>
          {renderComponentSettings()}
        </div>
        {!showSettingsPanel && <button className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-l-md shadow-md border border-gray-200" onClick={() => setShowSettingsPanel(true)}>
            <SlidersIcon size={16} />
          </button>}
      </div>
    </div>;
};
export default TemplateEditor;