import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, Search, Filter, Grid, List, Trash2, Edit, Download } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { MediaFile } from '../../utils/types';
import { formatDistanceToNow } from 'date-fns';
import { it } from 'date-fns/locale';

export function MediaLibrary() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<MediaFile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'image' | 'video' | 'document'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchMediaFiles();
  }, []);

  useEffect(() => {
    filterFiles();
  }, [mediaFiles, searchTerm, typeFilter]);

  const fetchMediaFiles = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/media`, {
        credentials: 'include',
      });
      if (response.ok) {
        const files = await response.json();
        setMediaFiles(files);
      }
    } catch (error) {
      console.error('Errore durante il caricamento dei file multimediali:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterFiles = () => {
    let filtered = mediaFiles;

    if (searchTerm) {
      filtered = filtered.filter(file =>
        file.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.alt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(file => file.type === typeFilter);
    }

    setFilteredFiles(filtered);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);

    try {
      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${backendUrl}/api/media/upload`, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });

        if (response.ok) {
          const newFile = await response.json();
          setMediaFiles(prev => [newFile, ...prev]);
        }
      }
    } catch (error) {
      console.error('Errore durante il caricamento dei file:', error);
    } finally {
      setUploading(false);
    }
  }, [backendUrl]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'video/*': ['.mp4', '.webm', '.ogg'],
      'application/pdf': ['.pdf'],
    },
    multiple: true,
  });

  const deleteFile = async (fileId: string) => {
    if (!confirm('Sei sicuro di voler eliminare questo file?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/media/${fileId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setMediaFiles(files => files.filter(file => file.id !== fileId));
        setSelectedFiles(selected => selected.filter(id => id !== fileId));
      }
    } catch (error) {
      console.error('Errore durante l\'eliminazione del file:', error);
    }
  };

  const deleteSelectedFiles = async () => {
    if (selectedFiles.length === 0) return;
    
    if (!confirm(`Sei sicuro di voler eliminare ${selectedFiles.length} file?`)) {
      return;
    }

    try {
      await Promise.all(
        selectedFiles.map(fileId =>
          fetch(`${backendUrl}/api/media/${fileId}`, {
            method: 'DELETE',
            credentials: 'include',
          })
        )
      );

      setMediaFiles(files => files.filter(file => !selectedFiles.includes(file.id)));
      setSelectedFiles([]);
    } catch (error) {
      console.error('Errore durante l\'eliminazione dei file:', error);
    }
  };

  const toggleFileSelection = (fileId: string) => {
    setSelectedFiles(prev =>
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return '🖼️';
      case 'video':
        return '🎥';
      case 'document':
        return '📄';
      default:
        return '📁';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Caricamento media...</div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-light text-gray-800 mb-1">Libreria media</h1>
            <p className="text-sm text-gray-500">
              Gestione di immagini, video e documenti
            </p>
          </div>
          <div className="flex items-center gap-3">
            {selectedFiles.length > 0 && (
              <button
                onClick={deleteSelectedFiles}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Trash2 size={16} />
                Elimina ({selectedFiles.length})
              </button>
            )}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
                <Upload size={48} className="mx-auto mb-4 text-gray-400" />
          {uploading ? (
            <p className="text-gray-600">Caricamento file...</p>
          ) : isDragActive ? (
            <p className="text-blue-600">Rilascia i file per caricare</p>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">
                Trascina i file qui o clicca per selezionare
              </p>
              <p className="text-sm text-gray-500">
                Supportati: immagini, video, PDF
              </p>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca file..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400" />
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
              >
                <option value="all">Tutti i tipi</option>
                <option value="image">Immagini</option>
                <option value="video">Video</option>
                <option value="document">Documenti</option>
              </select>
            </div>
          </div>
        </div>

        {/* Files Display */}
        {filteredFiles.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredFiles.map((file) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                    selectedFiles.includes(file.id) ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => toggleFileSelection(file.id)}
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    {file.type === 'image' ? (
                      <img
                        src={file.url}
                        alt={file.alt || file.originalName}
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <span className="text-4xl">{getFileIcon(file.type)}</span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.originalName}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-100">
                {filteredFiles.map((file) => (
                  <div
                    key={file.id}
                    className={`flex items-center p-4 hover:bg-gray-50 transition-colors ${
                      selectedFiles.includes(file.id) ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center flex-1 gap-4">
                      <input
                        type="checkbox"
                        checked={selectedFiles.includes(file.id)}
                        onChange={() => toggleFileSelection(file.id)}
                        className="rounded"
                      />
                      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                        {file.type === 'image' ? (
                          <img
                            src={file.url}
                            alt={file.alt || file.originalName}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <span className="text-xl">{getFileIcon(file.type)}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{file.originalName}</p>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.size)} • {file.type} • 
                          {formatDistanceToNow(new Date(file.uploadedAt), { 
                            addSuffix: true, 
                            locale: it 
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Download size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFile(file.id);
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="text-gray-400 mb-4">
              <Upload size={48} className="mx-auto mb-4 opacity-20" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nessun file</h3>
            <p className="text-gray-500">
              {searchTerm || typeFilter !== 'all' 
                ? 'Nessun file trovato per i criteri specificati'
                : 'Carica i primi file per iniziare'
              }
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}