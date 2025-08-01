import { create } from 'zustand';
import { TrollCharacter, HatType } from '@/types/character';

interface CharacterState {
  character: TrollCharacter;
  isLoading: boolean;
  updateFace: (updates: Partial<TrollCharacter['face']>) => void;
  updateHat: (updates: Partial<TrollCharacter['hat']>) => void;
  updateAccessories: (updates: Partial<TrollCharacter['accessories']>) => void;
  updateBackground: (updates: Partial<TrollCharacter['background']>) => void;
  randomizeCharacter: () => void;
  resetCharacter: () => void;
  setLoading: (loading: boolean) => void;
}

const defaultCharacter: TrollCharacter = {
  id: crypto.randomUUID(),
  name: 'My Troll',
  face: {
    expression: 'classic',
    skinColor: '#90EE90',
    eyeStyle: 'normal',
    eyeColor: '#000000',
    mouthStyle: 'classic',
  },
  hat: {
    type: 'beanie',
    color: '#FF6B6B',
    pattern: 'solid',
    accessories: [],
  },
  accessories: {
    facial: [],
    jewelry: [],
    special: [],
  },
  background: {
    type: 'solid',
    colors: ['#87CEEB'],
  },
};

const hatTypes: HatType[] = [
  'none', 'beanie', 'cap', 'fedora', 'wizard', 'crown', 'cowboy',
  'beret', 'helmet', 'bandana', 'top-hat', 'snapback', 'bucket',
  'crypto-cap', 'diamond-crown', 'rocket-hat'
];

const expressions = ['classic', 'smirk', 'laughing', 'wink', 'evil'] as const;
const eyeStyles = ['normal', 'sunglasses', 'laser', 'sleepy', 'heart'] as const;
const mouthStyles = ['classic', 'wide', 'smug', 'o-face', 'tongue'] as const;
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];

export const useCharacterStore = create<CharacterState>((set) => ({
  character: defaultCharacter,
  isLoading: false,

  updateFace: (updates) =>
    set((state) => ({
      character: {
        ...state.character,
        face: { ...state.character.face, ...updates },
      },
    })),

  updateHat: (updates) =>
    set((state) => ({
      character: {
        ...state.character,
        hat: { ...state.character.hat, ...updates },
      },
    })),

  updateAccessories: (updates) =>
    set((state) => ({
      character: {
        ...state.character,
        accessories: { ...state.character.accessories, ...updates },
      },
    })),

  updateBackground: (updates) =>
    set((state) => ({
      character: {
        ...state.character,
        background: { ...state.character.background, ...updates },
      },
    })),

  randomizeCharacter: () =>
    set((state) => ({
      character: {
        ...state.character,
        id: crypto.randomUUID(),
        face: {
          expression: expressions[Math.floor(Math.random() * expressions.length)],
          skinColor: colors[Math.floor(Math.random() * colors.length)],
          eyeStyle: eyeStyles[Math.floor(Math.random() * eyeStyles.length)],
          eyeColor: colors[Math.floor(Math.random() * colors.length)],
          mouthStyle: mouthStyles[Math.floor(Math.random() * mouthStyles.length)],
        },
        hat: {
          type: hatTypes[Math.floor(Math.random() * hatTypes.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          pattern: 'solid',
          accessories: [],
        },
        background: {
          type: 'solid',
          colors: [colors[Math.floor(Math.random() * colors.length)]],
        },
      },
    })),

  resetCharacter: () => set({ character: { ...defaultCharacter, id: crypto.randomUUID() } }),

  setLoading: (loading) => set({ isLoading: loading }),
}));