import React from 'react';
import { 
  Dancing_Script, 
  Playfair_Display, 
  Cormorant_Garamond,
  Alex_Brush,
  Crimson_Text,
  EB_Garamond
} from 'next/font/google';

// Elegant script fonts for names and headers
const dancingScript = Dancing_Script({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

const alexBrush = Alex_Brush({ 
  subsets: ['latin'], 
  weight: '400' 
});

// Sophisticated serif fonts for formal text
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  style: ['normal', 'italic']
});

const ebGaramond = EB_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
});

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8 px-4">
      <div className="max-w-sm mx-auto">
        {/* Main Save The Date Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          {/* Bismillah Header */}
          <div className="text-center mb-6">
            <p className={`text-lg text-emerald-600 mb-2 ${ebGaramond.className} font-medium`}>
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </p>
            <p className={`text-xs text-gray-500 italic ${crimsonText.className}`}>
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl text-emerald-700 mb-6 ${alexBrush.className}`}>
              Save The Date
            </h1>
            
            {/* Date with Images */}
            <div className="flex justify-center items-center gap-1 mb-6">
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold text-white drop-shadow-lg ${playfairDisplay.className}`}>04</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold text-white drop-shadow-lg ${playfairDisplay.className}`}>09</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-300/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold text-white drop-shadow-lg ${playfairDisplay.className}`}>25</span>
                </div>
              </div>
            </div>

            {/* Couple Names */}
            <div className="mb-8">
              <h2 className={`text-3xl text-emerald-700 mb-2 leading-tight ${dancingScript.className} font-semibold`}>
                Thahseena Kamaliya & Muhammad Fayis Wafy
              </h2>
              <p className={`text-lg text-amber-600 mb-2 ${ebGaramond.className} font-medium`}>
                فاطمة تحسينة قمالية ومحمد فايس وافي
              </p>
              <p className={`text-sm uppercase tracking-widest text-gray-500 ${cormorantGaramond.className} font-medium`}>
                ARE GETTING MARRIED
              </p>
            </div>
          </div>

          {/* Islamic Message */}
          <div className="text-center mb-8 bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-400">
            <h3 className={`text-lg text-emerald-700 mb-4 ${playfairDisplay.className} font-semibold`}>
              Dear Beloved Family & Friends!
            </h3>
            <p className={`text-sm text-gray-600 leading-relaxed mb-4 ${crimsonText.className}`}>
              By the grace of Allah, we are blessed to share this joyous occasion with you as two hearts unite as one.
            </p>
            <p className={`text-sm text-gray-600 leading-relaxed ${crimsonText.className}`}>
              With immense pleasure, we invite you to witness and celebrate our sacred union in the blessed bond of Nikah.
            </p>
          </div>

          {/* Calendar */}
          <div className="mb-8">
            <h4 className="text-lg font-light text-center mb-4 text-emerald-700" style={{fontFamily: 'Playfair Display, serif', fontStyle: 'italic'}}>
              October
            </h4>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>MON</div>
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>TUE</div>
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>WED</div>
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>THU</div>
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>FRI</div>
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>SAT</div>
              <div className={`text-gray-400 py-2 font-medium ${cormorantGaramond.className}`}>SUN</div>
              
              <div className="py-2"></div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>2</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>3</div>
              <div className={`py-2 bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto font-medium shadow-lg ${playfairDisplay.className}`}>4</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>5</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>6</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>7</div>
              
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>8</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>9</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>10</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>11</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>12</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>13</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>14</div>
              
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>15</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>16</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>17</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>18</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>19</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>20</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>21</div>
              
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>22</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>23</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>24</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>25</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>26</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>27</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>28</div>
              
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>29</div>
              <div className={`py-2 text-gray-600 ${playfairDisplay.className}`}>30</div>
            </div>
          </div>

          {/* Nikah Ceremony Details */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 border-2 border-emerald-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
            <h3 className={`text-xl text-emerald-700 mb-4 ${playfairDisplay.className} font-semibold`}>
              Nikah Ceremony
            </h3>
            <div className="text-center">
              <p className={`text-2xl mb-2 text-emerald-800 ${cormorantGaramond.className} font-light`}>
                04.09 | 09:30
              </p>
              <p className={`text-sm text-gray-600 mb-2 font-semibold ${crimsonText.className}`}>
                Masjid Rahman Juma Masjid 
                <span className={`font-normal line-clamp-2 text-emerald-600 block ${crimsonText.className}`}>
                  Changaleeri, Mothikkal
                </span>
              </p>
              <a
                href="https://maps.app.goo.gl/hAYELRbtiWyH9MX6A"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide transition-colors mb-2 ${cormorantGaramond.className} font-medium`}
              >
                VIEW ON MAP
              </a>
            </div>
          </div>
        </div>

        {/* Second Card - Reception Details */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Walima Reception */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center text-amber-500">
                🍽️
              </div>
            </div>
            <h3 className={`text-xl text-amber-700 mb-4 ${playfairDisplay.className} font-semibold`}>
              Walima Reception
            </h3>
            <div className="text-center mb-6">
              <p className={`text-2xl mb-2 text-amber-800 ${cormorantGaramond.className} font-light`}>
                04.09 | 12:00
              </p>
              <p className={`text-sm text-gray-600 mb-1 font-medium ${crimsonText.className}`}>
                Majmahul Uloom Madrasa
              </p>
              <p className={`text-sm text-amber-800 mb-4 ${crimsonText.className}`}>
                Changaleeri, Mothikkal
              </p>
              <a
                href="https://maps.app.goo.gl/dkskR1DqbhveLajMA"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide transition-colors ${cormorantGaramond.className} font-medium`}
              >
                VIEW ON MAP
              </a>
            </div>
          </div>

          {/* Islamic Quote */}
          <div className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border-l-4 border-purple-400">
            <p className={`text-sm text-purple-700 text-center mb-2 ${ebGaramond.className} font-medium`}>
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا"
            </p>
            <p className={`text-xs text-gray-600 text-center italic ${crimsonText.className}`}>
              "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them" - Quran 30:21
            </p>
          </div>

          {/* Details */}
          <div className="mb-8">
            <h3 className={`text-xl text-emerald-700 mb-4 text-center ${alexBrush.className} text-2xl`}>
              Special Notes
            </h3>
            <p className={`text-sm text-gray-600 text-center mb-4 ${crimsonText.className}`}>
              Your presence is the greatest gift to us. If you wish to honor us with a gift, we would be grateful for contributions towards our new journey together.
            </p>
            <p className={`text-sm text-gray-600 text-center ${crimsonText.className}`}>
              We are working to make this celebration memorable, so we would appreciate if you could confirm your attendance by 02.06.2025
            </p>
          </div>

          {/* Islamic Dua */}
          <div className="text-center mb-6 bg-emerald-50 rounded-lg p-4">
            <p className={`text-sm text-emerald-700 mb-2 ${ebGaramond.className} font-medium`}>
              بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className={`text-xs text-gray-600 italic ${crimsonText.className}`}>
              "May Allah bless you, shower His blessings upon you, and bring you together in goodness"
            </p>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className={`text-sm text-emerald-600 mb-4 uppercase tracking-wide ${cormorantGaramond.className} font-medium`}>
              We eagerly await your presence!
            </p>
            <p className={`text-2xl text-emerald-700 mb-2 ${dancingScript.className} font-semibold`}>
              Thahseena & Fayis
            </p>
            <p className={`text-lg text-amber-600 ${ebGaramond.className} font-medium`}>
              تحسينة وفايس
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this to your package.json dependencies:
/*
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
*/