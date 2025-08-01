# 🧌 TrollWifHat Character Creator

A modern, interactive web application for creating custom troll characters with hats, expressions, and accessories. Perfect for profile pictures, NFTs, and meme collections!

## ✨ Features

### 🎨 Character Customization
- **Facial Expressions**: Classic, smirk, laughing, wink, evil
- **Eye Styles**: Normal, sunglasses, laser eyes, sleepy, heart-shaped
- **Mouth Styles**: Classic grin, wide smile, smug, surprised, tongue out
- **Hat Collection**: Beanie, cap, wizard hat, crown, cowboy hat, beret, and more
- **Color Customization**: Extensive color palette for skin, eyes, hats, and backgrounds
- **Random Generator**: "Surprise Me" button for instant character generation

### 🖼️ Export & Sharing
- **Multiple Formats**: PNG, JPG, WebP support
- **Size Options**: 256px, 512px, 1024px, 2048px for different use cases
- **Quick Presets**: 
  - Twitter (512px PNG)
  - Discord (512px PNG) 
  - Instagram (1024px JPG)
  - NFT Ready (2048px PNG)
- **Quality Control**: Adjustable compression for JPG/WebP
- **Optional Watermark**: Branding toggle for exports

### 📱 Modern UX
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Real-time Preview**: Live character updates as you customize
- **Intuitive Interface**: Organized tabs and easy-to-use controls
- **Smooth Animations**: Polished transitions and hover effects
- **Accessibility**: WCAG compliant design with proper contrast

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for rapid development
- **State Management**: Zustand for lightweight global state
- **Icons**: Lucide React for beautiful icons
- **Character Rendering**: SVG-based for crisp, scalable graphics
- **Export**: HTML5 Canvas for high-quality image generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd troll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm start
```

## 🎮 Usage

1. **Customize Your Troll**
   - Use the tabs to switch between Face, Hat, and Background customization
   - Click colors and options to see real-time updates
   - Try the "Random" button for inspiration

2. **Export Your Creation**
   - Click "Export PFP" to open the export modal
   - Choose from quick presets or customize format, size, and quality
   - Download your character as a high-quality image

3. **Share Your Troll**
   - Perfect for social media profile pictures
   - Use in Discord servers and communities
   - Create NFT collections
   - Print on merchandise

## 🎨 Customization Options

### Face Options
- **5 Expressions**: From classic troll grin to evil smirk
- **5 Eye Styles**: Including laser eyes and heart shapes
- **5 Mouth Styles**: Various grins and expressions
- **Color Palette**: 10+ colors for skin and features

### Hat Collection
- Basic: Beanie, Cap, Beret
- Fancy: Crown, Top Hat, Wizard Hat  
- Themed: Cowboy, Crypto Cap, Rocket Hat
- None: Go hatless if you prefer

### Backgrounds
- Solid colors with extensive palette
- Future: Gradients and patterns (coming soon)

## 🔧 Architecture

### Project Structure
```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── character/       # Character-related components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── stores/             # Zustand state stores
└── types/              # TypeScript type definitions
```

### Key Components
- **TrollCharacterComponent**: SVG-based character renderer
- **CustomizationPanel**: Interactive controls interface
- **ExportModal**: Advanced export functionality
- **CharacterCreator**: Main application container

### State Management
- **useCharacterStore**: Global character state with Zustand
- **useResponsive**: Hook for responsive behavior
- Real-time updates across all components

## 🎯 Future Enhancements

### Phase 2 Features
- **Mini-Games**: Collect hats through gameplay
- **Community Gallery**: Share and vote on creations
- **More Accessories**: Facial hair, jewelry, special effects
- **Animation Support**: Animated GIF exports
- **Background Scenes**: Crypto themes, space, meme references

### Phase 3 Features  
- **User Accounts**: Save and manage multiple characters
- **NFT Integration**: Direct blockchain minting
- **Social Features**: Following, likes, comments
- **Merchandise**: Physical product integration
- **API Access**: Programmatic character generation

## 🤝 Contributing

We welcome contributions! Areas where help is needed:
- New hat designs and accessories
- Additional character expressions
- Performance optimizations
- Mobile UX improvements
- Accessibility enhancements

## 📜 License

This project is open source. Please respect the troll face meme origins and use responsibly.

## 🧌 About TrollWifHat

TrollWifHat celebrates internet meme culture while providing a modern, professional character creation experience. Whether you're creating a profile picture, designing an NFT, or just having fun with memes, TrollWifHat makes it easy to express your unique troll personality.

---

**Made with 💚 for the meme community**

*Embrace the troll. Wear the hat. Be the meme.*
# trollwifhat
