export interface TrollCharacter {
  id: string;
  name?: string;
  face: {
    expression: 'classic' | 'smirk' | 'laughing' | 'wink' | 'evil';
    skinColor: string;
    eyeStyle: 'normal' | 'sunglasses' | 'laser' | 'sleepy' | 'heart';
    eyeColor: string;
    mouthStyle: 'classic' | 'wide' | 'smug' | 'o-face' | 'tongue';
  };
  hat: {
    type: HatType;
    color: string;
    pattern?: string;
    accessories?: string[];
  };
  accessories: {
    facial: string[];
    jewelry: string[];
    special: string[];
  };
  background: {
    type: 'solid' | 'gradient' | 'pattern' | 'scene';
    colors: string[];
    pattern?: string;
  };
}

export type HatType = 
  | 'none'
  | 'beanie'
  | 'cap'
  | 'fedora'
  | 'wizard'
  | 'crown'
  | 'cowboy'
  | 'beret'
  | 'helmet'
  | 'bandana'
  | 'top-hat'
  | 'snapback'
  | 'bucket'
  | 'crypto-cap'
  | 'diamond-crown'
  | 'rocket-hat';

export interface CustomizationOptions {
  expressions: string[];
  skinColors: string[];
  eyeStyles: string[];
  eyeColors: string[];
  mouthStyles: string[];
  hatTypes: HatType[];
  hatColors: string[];
  patterns: string[];
  accessories: {
    facial: string[];
    jewelry: string[];
    special: string[];
  };
  backgrounds: {
    solid: string[];
    gradients: string[][];
    patterns: string[];
    scenes: string[];
  };
}

export interface ExportOptions {
  format: 'png' | 'jpg' | 'webp';
  size: 256 | 512 | 1024 | 2048;
  quality: number;
  includeWatermark: boolean;
}