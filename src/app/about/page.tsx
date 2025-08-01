import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">About TrollWifHat</h1>
          <p className="text-xl text-gray-600">
            The story behind the ultimate troll face creator
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Origin Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">The Legendary Troll Face</h2>
            <div className="bg-gray-50 p-6 border-l-4 border-black mb-6">
              <p className="text-gray-700 mb-4">
                The Troll Face, also known as &quot;Coolface&quot; or &quot;Problem?&quot;, is one of the most iconic memes 
                in internet history. Created by Carlos Ramirez in 2008, this simple yet expressive face 
                became the universal symbol of online trolling and mischief.
              </p>
              <p className="text-gray-700">
                What started as a doodle in MS Paint became a cultural phenomenon, spawning countless 
                variations, rage comics, and an entire generation of internet humor.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              TrollWifHat was born from a simple idea: what if we could give the classic troll face 
              the customization it deserves? We've assembled the most comprehensive collection of 
              troll faces, accessories, and backgrounds to let you create the perfect embodiment 
              of your trolling spirit.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're a crypto degen, a gaming veteran, or just someone who appreciates 
              good old-fashioned internet humor, we've got the tools to help you express yourself 
              through the timeless art of the troll face.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">What Makes Us Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">🎨 Authentic Assets</h3>
                <p className="text-gray-700">
                  Every troll face and accessory is carefully curated to maintain the authentic 
                  meme aesthetic while providing maximum customization options.
                </p>
              </div>
              
              <div className="border-2 border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">🔥 Meme Culture</h3>
                <p className="text-gray-700">
                  Our backgrounds and accessories reference the best of internet culture, 
                  from crypto and gaming to classic meme moments.
                </p>
              </div>
              
              <div className="border-2 border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">⚡ Simple & Fast</h3>
                <p className="text-gray-700">
                  No bloated interfaces or unnecessary animations. Just clean, professional 
                  tools that let you create without getting in your way.
                </p>
              </div>
              
              <div className="border-2 border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">🆓 Completely Free</h3>
                <p className="text-gray-700">
                  Create unlimited troll faces, download high-quality images, and troll 
                  to your heart's content. No subscriptions, no watermarks.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-12 bg-black text-white p-8 -mx-4">
            <h2 className="text-2xl font-bold mb-6 text-center">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">14+</div>
                <div className="text-gray-300">Troll Face Variants</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">19+</div>
                <div className="text-gray-300">Hats & Accessories</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40+</div>
                <div className="text-gray-300">Epic Backgrounds</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-gray-300">Possible Combinations</div>
              </div>
            </div>
          </section>

          {/* The Team */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">The Team</h2>
            <p className="text-gray-700 mb-6">
              TrollWifHat is built by meme enthusiasts, for meme enthusiasts. Our team combines 
              deep internet culture knowledge with professional development skills to create 
              tools that honor the legacy of the troll face while pushing it into the modern era.
            </p>
            <p className="text-gray-700">
              We believe in keeping the internet weird, wonderful, and full of harmless mischief. 
              The troll face represents the playful spirit of the early internet, and we're here 
              to make sure it lives on for future generations of trolls.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-black mb-2">Can I use these images commercially?</h3>
                <p className="text-gray-700">
                  The troll face is considered fair use for most purposes. However, we recommend 
                  checking local copyright laws if you plan to use the images for commercial purposes.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-black mb-2">Do you add new content?</h3>
                <p className="text-gray-700">
                  Yes! We regularly add new backgrounds, accessories, and troll face variants 
                  based on current meme trends and community requests.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-black mb-2">Is this really free?</h3>
                <p className="text-gray-700">
                  Absolutely. No hidden costs, no premium tiers, no watermarks. We believe 
                  meme creation should be accessible to everyone.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-black mb-2">How do I request new features?</h3>
                <p className="text-gray-700">
                  We love feedback! While we don't have a formal system yet, the best trolls 
                  always find a way to make their voices heard. Keep an eye out for future 
                  community features.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12 bg-gray-50 -mx-4 px-4">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Join the Troll Army?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Create your perfect troll face and become part of internet history
            </p>
            <Link
              href="/creator"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Trolling Now
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}