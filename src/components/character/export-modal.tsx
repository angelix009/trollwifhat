'use client';

import React, { useState } from 'react';
import { X, Download, Twitter, MessageCircle, Instagram, Coins } from 'lucide-react';
import { TrollCharacter, ExportOptions } from '@/types/character';
import { exportCharacterAsImage, downloadImage, generateFilename, getOptimalExportSettings } from '@/lib/export-utils';
import { TrollCharacterComponent } from './troll-character';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: TrollCharacter;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, character }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportOptions, setExportOptions] = useState<ExportOptions>({
    format: 'png',
    size: 512,
    quality: 90,
    includeWatermark: true,
  });

  if (!isOpen) return null;

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Find the visible SVG element
      const visibleSvg = document.querySelector('.troll-character-svg') as SVGSVGElement;
      if (!visibleSvg) {
        throw new Error('Could not find character SVG');
      }

      const dataURL = await exportCharacterAsImage(visibleSvg, exportOptions);
      const filename = generateFilename(character, exportOptions.format);
      downloadImage(dataURL, filename);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePresetExport = async (purpose: 'twitter' | 'discord' | 'instagram' | 'nft') => {
    const presetOptions = getOptimalExportSettings(purpose);
    setIsExporting(true);
    
    try {
      // Find the visible SVG element
      const visibleSvg = document.querySelector('.troll-character-svg') as SVGSVGElement;
      if (!visibleSvg) {
        throw new Error('Could not find character SVG');
      }

      const dataURL = await exportCharacterAsImage(visibleSvg, presetOptions);
      const filename = generateFilename(character, presetOptions.format);
      downloadImage(dataURL, filename);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Export Your Troll</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Preview</h3>
              <div className="flex justify-center">
                <div className="inline-block">
                  <TrollCharacterComponent 
                    character={character} 
                    size={exportOptions.size > 512 ? 400 : exportOptions.size * 0.8}
                    className="border-2 border-gray-200 rounded-lg"
                  />
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p><strong>Size:</strong> {exportOptions.size}x{exportOptions.size}px</p>
                <p><strong>Format:</strong> {exportOptions.format.toUpperCase()}</p>
                <p><strong>Quality:</strong> {exportOptions.quality}%</p>
                <p><strong>Watermark:</strong> {exportOptions.includeWatermark ? 'Yes' : 'No'}</p>
              </div>
            </div>

            {/* Export Options */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Export Options</h3>

              {/* Quick Presets */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Quick Export</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handlePresetExport('twitter')}
                    disabled={isExporting}
                    className="flex items-center gap-2 p-3 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
                  >
                    <Twitter size={20} className="text-blue-500" />
                    <div className="text-left">
                      <div className="font-medium">Twitter</div>
                      <div className="text-xs text-gray-500">512px PNG</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePresetExport('discord')}
                    disabled={isExporting}
                    className="flex items-center gap-2 p-3 border border-indigo-300 rounded-lg hover:bg-indigo-50 transition-colors disabled:opacity-50"
                  >
                    <MessageCircle size={20} className="text-indigo-500" />
                    <div className="text-left">
                      <div className="font-medium">Discord</div>
                      <div className="text-xs text-gray-500">512px PNG</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePresetExport('instagram')}
                    disabled={isExporting}
                    className="flex items-center gap-2 p-3 border border-pink-300 rounded-lg hover:bg-pink-50 transition-colors disabled:opacity-50"
                  >
                    <Instagram size={20} className="text-pink-500" />
                    <div className="text-left">
                      <div className="font-medium">Instagram</div>
                      <div className="text-xs text-gray-500">1024px JPG</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePresetExport('nft')}
                    disabled={isExporting}
                    className="flex items-center gap-2 p-3 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors disabled:opacity-50"
                  >
                    <Coins size={20} className="text-purple-500" />
                    <div className="text-left">
                      <div className="font-medium">NFT</div>
                      <div className="text-xs text-gray-500">2048px PNG</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Custom Settings */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Custom Settings</h4>
                <div className="space-y-4">
                  {/* Format */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                    <div className="flex gap-2">
                      {['png', 'jpg', 'webp'].map((format) => (
                        <button
                          key={format}
                          onClick={() => setExportOptions(prev => ({ ...prev, format: format as 'png' | 'jpg' | 'webp' }))}
                          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            exportOptions.format === format
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {format.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <div className="flex gap-2">
                      {[256, 512, 1024, 2048].map((size) => (
                        <button
                          key={size}
                          onClick={() => setExportOptions(prev => ({ ...prev, size: size as 256 | 512 | 1024 | 2048 }))}
                          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            exportOptions.size === size
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {size}px
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quality (for JPG/WebP) */}
                  {(exportOptions.format === 'jpg' || exportOptions.format === 'webp') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quality: {exportOptions.quality}%
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={exportOptions.quality}
                        onChange={(e) => setExportOptions(prev => ({ ...prev, quality: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  )}

                  {/* Watermark */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="watermark"
                      checked={exportOptions.includeWatermark}
                      onChange={(e) => setExportOptions(prev => ({ ...prev, includeWatermark: e.target.checked }))}
                      className="mr-2"
                    />
                    <label htmlFor="watermark" className="text-sm font-medium text-gray-700">
                      Include watermark
                    </label>
                  </div>
                </div>
              </div>

              {/* Custom Export Button */}
              <button
                onClick={handleExport}
                disabled={isExporting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 font-medium"
              >
                <Download size={20} />
                {isExporting ? 'Exporting...' : 'Custom Export'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;