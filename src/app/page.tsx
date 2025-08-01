import Link from 'next/link';
import Image from 'next/image';
import Typewriter from '@/components/ui/typewriter';
import FallingTrolls from '@/components/ui/falling-trolls';
import LegendaryCreations from '@/components/showcase/legendary-creations';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-6 md:py-12 px-4 overflow-hidden bg-white">
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center min-h-[50vh] md:min-h-[60vh]">
            {/* Left Side - Content */}
            <div className="space-y-4 md:space-y-8 z-10 relative text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 border-2 border-black text-xs md:text-sm font-medium">
                <Image src="/assets/logo.png" alt="TrollWifHat" width={16} height={16} className="md:w-5 md:h-5" />
                <span>The Original PFP Creator</span>
              </div>
              
              {/* Main Title */}
              <div>
                <h1 className="text-3xl md:text-meme-xl text-black mb-2 md:mb-4 leading-none font-meme">
                  TROLL<span className="text-gray-600">WIF</span>HAT
                </h1>
                <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 font-medium">
                  <Typewriter 
                    phrases={[
                      "Create Epic PFPs 🎨",
                      "Authentic Troll Vibes 😏", 
                      "40+ Legendary Backgrounds 🖼️",
                      "19+ Drip Accessories 👑",
                      "Export Ready Images 📸",
                      "Web3 Meme Culture 🚀"
                    ]}
                    speed={80}
                    pauseDuration={1500}
                  />
                </div>
                <div className="w-16 md:w-24 h-1 bg-black mx-auto lg:mx-0"></div>
              </div>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg leading-relaxed">
                Build the <strong>perfect troll PFP</strong> with authentic meme vibes. 
                From classic trolls to epic hat combinations.
              </p>
              
              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-4 md:gap-8 py-2 md:py-4">
                <div className="text-center">
                  <div className="text-xl md:text-meme-md text-black font-meme">14+</div>
                  <div className="text-xs md:text-sm text-gray-600">Troll Faces</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-meme-md text-black font-meme">19+</div>
                  <div className="text-xs md:text-sm text-gray-600">Hats & Gear</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-meme-md text-black font-meme">40+</div>
                  <div className="text-xs md:text-sm text-gray-600">Backgrounds</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/creator"
                  className="bg-black text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 border-2 border-black text-center"
                >
                  🎨 Create PFP
                </Link>
                <Link
                  href="/gallery"
                  className="border-2 border-black text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-black hover:text-white transition-all transform hover:scale-105 text-center"
                >
                  👀 View Gallery
                </Link>
              </div>
            </div>

            {/* Right Side - Animated Troll */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image
                  src="/assets/animation/hero.gif"
                  alt="Dancing Troll"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
                
                {/* Speech bubble */}
                <div className="absolute -top-6 md:-top-16 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black px-3 md:px-4 py-1 md:py-2 shadow-lg rounded-xl z-10">
                  <div className="font-meme text-xs md:text-sm">Problem? 😏</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 px-4 relative bg-black text-white overflow-hidden">
        {/* Falling trolls animation */}
        <FallingTrolls />

        {/* Texture background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-white text-black text-xs md:text-sm font-medium mb-4 md:mb-6 rounded-full shadow-lg">
              <span>⚡</span>
              <span className="font-meme">POWERFUL FEATURES</span>
            </div>
            <h2 className="text-2xl md:text-meme-xl text-white mb-4 md:mb-6 leading-tight font-meme">
              WHAT MAKES US
              <br />
              <span className="text-gray-300">LEGENDARY</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-white mx-auto mb-3 md:mb-4"></div>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Discover the most authentic troll face creator with professional-grade features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            {/* Troll Faces Card */}
            <div className="bg-white border-4 border-white p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 relative group rounded-lg">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rotate-45 group-hover:rotate-90 transition-transform"></div>
              
              {/* Multiple troll face previews */}
              <div className="flex justify-center mb-6 relative">
                <div className="grid grid-cols-2 gap-2">
                  <Image src="/assets/trollfaces/Black.png" alt="Black Troll" width={30} height={30} className="border border-gray-300 rounded" />
                  <Image src="/assets/trollfaces/Green.png" alt="Green Troll" width={30} height={30} className="border border-gray-300 rounded" />
                  <Image src="/assets/trollfaces/Blue.png" alt="Blue Troll" width={30} height={30} className="border border-gray-300 rounded" />
                  <Image src="/assets/trollfaces/Red.png" alt="Red Troll" width={30} height={30} className="border border-gray-300 rounded" />
                </div>
              </div>
              
              <h3 className="text-meme-md text-black mb-4 text-center">AUTHENTIC TROLLS</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Choose from <strong>14+ genuine troll faces</strong> in multiple colors and styles. 
                From classic black & white to rainbow variants that'll make your enemies seethe.
              </p>
              
              <div className="flex justify-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white text-white text-xs flex items-center justify-center font-bold">+11</div>
                </div>
              </div>
            </div>
            
            {/* Hats Card */}
            <div className="bg-white border-4 border-white p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 relative group rounded-lg">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rotate-45 group-hover:rotate-90 transition-transform"></div>
              
              {/* Hat previews with drip effect */}
              <div className="flex justify-center mb-6 relative">
                <div className="grid grid-cols-2 gap-3 relative">
                  <div className="relative group">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-lg overflow-hidden group-hover:border-yellow-400 transition-colors bg-gradient-to-br from-yellow-50 to-yellow-100">
                      <Image src="/assets/hats/Crown.png" alt="Crown" fill className="object-contain p-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="relative group">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-lg overflow-hidden group-hover:border-blue-400 transition-colors bg-gradient-to-br from-blue-50 to-blue-100">
                      <Image src="/assets/hats/BlackBeanie.png" alt="Beanie" fill className="object-contain p-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="relative group">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-lg overflow-hidden group-hover:border-green-400 transition-colors bg-gradient-to-br from-green-50 to-green-100">
                      <Image src="/assets/hats/Nerd.png" alt="Nerd Glasses" fill className="object-contain p-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="relative group">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-lg overflow-hidden group-hover:border-purple-400 transition-colors bg-gradient-to-br from-purple-50 to-purple-100">
                      <Image src="/assets/hats/Durag.png" alt="Durag" fill className="object-contain p-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Drip effects */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-bold">
                  
                </div>
              </div>
              
              <h3 className="text-meme-md text-black mb-4 text-center">DRIP COLLECTION</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                <strong>19+ hats & accessories</strong> from crowns to beanies, durags to nerd glasses. 
                Express your unique troll personality and flex on the haters.
              </p>
              
              <div className="text-center">
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="px-2 py-1 bg-black text-white text-xs border border-gray-300 rounded">👑 CROWN</span>
                  <span className="px-2 py-1 bg-black text-white text-xs border border-gray-300 rounded">🧢 BEANIE</span>
                  <span className="px-2 py-1 bg-black text-white text-xs border border-gray-300 rounded">🤓 NERD</span>
                  <span className="px-2 py-1 bg-black text-white text-xs border border-gray-300 rounded">🎩 FANCY</span>
                </div>
              </div>
            </div>
            
            {/* Backgrounds Card */}
            <div className="bg-white border-4 border-white p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 relative group rounded-lg">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rotate-45 group-hover:rotate-90 transition-transform"></div>
              
              {/* Background previews */}
              <div className="flex justify-center mb-6">
                <div className="grid grid-cols-3 gap-1">
                  <Image src="/assets/backgrounds/Minecraft.png" alt="Minecraft" width={20} height={20} className="border border-gray-300 rounded" />
                  <Image src="/assets/backgrounds/Solana.png" alt="Solana" width={20} height={20} className="border border-gray-300 rounded" />
                  <Image src="/assets/backgrounds/WaffleHouse.png" alt="Waffle House" width={20} height={20} className="border border-gray-300 rounded" />
                  <Image src="/assets/backgrounds/Runescape.png" alt="Runescape" width={20} height={20} className="border border-gray-300 rounded" />
                  <Image src="/assets/backgrounds/Dark.png" alt="Dark" width={20} height={20} className="border border-gray-300 rounded" />
                  <Image src="/assets/backgrounds/Nuketown.png" alt="Nuketown" width={20} height={20} className="border border-gray-300 rounded" />
                </div>
              </div>
              
              <h3 className="text-meme-md text-black mb-4 text-center">EPIC SCENES</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                <strong>40+ legendary backgrounds</strong> from Minecraft to Solana, Waffle House to Runescape. 
                Every iconic meme scene and crypto environment covered.
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden relative group hover:border-black transition-colors">
                  <Image src="/assets/backgrounds/Minecraft.png" alt="Minecraft" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <span className="text-white text-xs font-bold">Minecraft</span>
                  </div>
                </div>
                <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden relative group hover:border-black transition-colors">
                  <Image src="/assets/backgrounds/Solana.png" alt="Solana" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <span className="text-white text-xs font-bold">Solana</span>
                  </div>
                </div>
                <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden relative group hover:border-black transition-colors">
                  <Image src="/assets/backgrounds/WaffleHouse.png" alt="Waffle House" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <span className="text-white text-xs font-bold">Waffle House</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-white p-8 rounded-lg shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <div>
                  <h3 className="text-meme-md text-white mb-2">INSTANT EXPORT</h3>
                  <p className="text-gray-300 text-sm">PNG & JPG formats ready for any platform</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-white p-8 rounded-lg shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-meme-md text-white mb-2">WEB3 READY</h3>
                  <p className="text-gray-300 text-sm">Perfect for NFTs, PFPs, and crypto culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-12 md:py-24 px-4 bg-white relative overflow-hidden z-20">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-black text-white text-xs md:text-sm font-medium mb-4 md:mb-6 rounded-full">
              <span>🎨</span>
              <span className="font-meme">GALLERY SHOWCASE</span>
            </div>
            <h2 className="text-2xl md:text-meme-xl text-black mb-4 md:mb-6 font-meme">
              LEGENDARY
              <br />
              <span className="text-gray-600">CREATIONS</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-black mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              See what the community is creating with our powerful troll face generator
            </p>
          </div>

          {/* Featured Gallery Grid */}
          <LegendaryCreations />

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 border-2 border-black rounded-lg"
            >
              🖼️ View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-5xl font-meme text-black mb-4 group-hover:scale-110 transition-transform">14+</div>
              <div className="text-lg font-medium text-gray-800 mb-2">Troll Faces</div>
              <div className="text-sm text-gray-600">Authentic variants</div>
            </div>
            <div className="group">
              <div className="text-5xl font-meme text-black mb-4 group-hover:scale-110 transition-transform">19+</div>
              <div className="text-lg font-medium text-gray-800 mb-2">Accessories</div>
              <div className="text-sm text-gray-600">Epic drip collection</div>
            </div>
            <div className="group">
              <div className="text-5xl font-meme text-black mb-4 group-hover:scale-110 transition-transform">40+</div>
              <div className="text-lg font-medium text-gray-800 mb-2">Backgrounds</div>
              <div className="text-sm text-gray-600">Legendary scenes</div>
            </div>
            <div className="group">
              <div className="text-5xl font-meme text-black mb-4 group-hover:scale-110 transition-transform">∞</div>
              <div className="text-lg font-medium text-gray-800 mb-2">Combinations</div>
              <div className="text-sm text-gray-600">Endless possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rotate-45"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h2 className="text-meme-xl text-white mb-6">READY TO TROLL?</h2>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the <strong>thousands of memers</strong> creating legendary troll face combinations. 
              Your perfect troll is just a few clicks away.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/creator"
              className="bg-white text-black px-10 py-5 text-xl font-medium hover:bg-gray-100 transition-all transform hover:scale-105 border-4 border-white font-meme"
            >
              🎨 CREATE YOUR TROLL
            </Link>
            <Link
              href="/gallery"
              className="border-4 border-white text-white px-10 py-5 text-xl font-medium hover:bg-white hover:text-black transition-all transform hover:scale-105 font-meme"
            >
              👀 BROWSE GALLERY
            </Link>
          </div>
          
          <div className="mt-12 text-gray-400 text-sm">
            <p>100% Free • No Watermarks • Unlimited Downloads</p>
          </div>
        </div>
      </section>
    </div>
  );
}