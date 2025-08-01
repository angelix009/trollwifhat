import { TrollCharacter, ExportOptions } from '@/types/character';

export const exportCharacterAsImage = async (
  svgElement: SVGSVGElement,
  options: ExportOptions
): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Could not get canvas context');
      }

      // Set canvas size
      canvas.width = options.size;
      canvas.height = options.size;

      // Convert SVG to string
      const svgData = new XMLSerializer().serializeToString(svgElement);
      
      // Create a data URL from the SVG
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      // Create an image element
      const img = new Image();
      
      img.onload = () => {
        // Clear canvas with white background for JPG format
        if (options.format === 'jpg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        // Draw the image to canvas
        ctx.drawImage(img, 0, 0, options.size, options.size);
        
        // Add watermark if requested
        if (options.includeWatermark) {
          addWatermark(ctx, canvas.width, canvas.height);
        }
        
        // Convert to data URL
        const mimeType = `image/${options.format}`;
        const dataURL = canvas.toDataURL(mimeType, options.quality / 100);
        
        // Clean up
        URL.revokeObjectURL(url);
        
        resolve(dataURL);
      };
      
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load SVG image'));
      };
      
      img.src = url;
    } catch (error) {
      reject(error);
    }
  });
};

const addWatermark = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const watermarkText = 'TrollWifHat.com';
  const fontSize = Math.max(12, width * 0.03);
  
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 1;
  ctx.font = `${fontSize}px Arial, sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  
  const x = width - 10;
  const y = height - 10;
  
  // Draw text with stroke for better visibility
  ctx.strokeText(watermarkText, x, y);
  ctx.fillText(watermarkText, x, y);
  
  ctx.restore();
};

export const downloadImage = (dataURL: string, filename: string) => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const generateFilename = (character: TrollCharacter, format: string): string => {
  const name = character.name || 'troll';
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '');
  return `${name.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.${format}`;
};

export const getOptimalExportSettings = (purpose: 'twitter' | 'discord' | 'instagram' | 'nft' | 'custom'): ExportOptions => {
  switch (purpose) {
    case 'twitter':
      return { format: 'png', size: 512, quality: 90, includeWatermark: false };
    case 'discord':
      return { format: 'png', size: 512, quality: 90, includeWatermark: false };
    case 'instagram':
      return { format: 'jpg', size: 1024, quality: 85, includeWatermark: true };
    case 'nft':
      return { format: 'png', size: 2048, quality: 100, includeWatermark: false };
    default:
      return { format: 'png', size: 512, quality: 90, includeWatermark: true };
  }
};