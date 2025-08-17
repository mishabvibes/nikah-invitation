'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Bell } from 'lucide-react';

export default function WeddingInvitation() {
  // Load Google Fonts via CDN
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Dancing+Script:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Function to create Google Calendar link
  const createGoogleCalendarLink = (event) => {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text: event.title,
      dates: `${event.startDate}/${event.endDate}`,
      details: event.details,
      location: event.location,
      sf: 'true',
      output: 'xml'
    });
    return `${baseUrl}&${params.toString()}`;
  };

  // Event details for calendar integration
  const nikahEvent = {
    title: 'Thahseena & Fayis - Nikah Ceremony',
    startDate: '20251004T093000', // 2025-10-04 09:30 AM
    endDate: '20251004T113000',   // 2025-10-04 11:30 AM
    details: 'Join us for the sacred Nikah ceremony of Thahseena and Fayis. By the grace of Allah, witness as two hearts unite as one in the blessed bond of marriage.',
    location: 'Masjid Rahman Juma Masjid, Changaleeri, Mothikkal'
  };

  const walimaEvent = {
    title: 'Thahseena & Fayis - Walima Reception',
    startDate: '20251004T120000', // 2025-10-04 12:00 PM
    endDate: '20251004T150000',   // 2025-10-04 03:00 PM
    details: 'Celebrate with us at the Walima reception following the Nikah ceremony. Join us for a joyous feast and celebration.',
    location: 'Majmahul Uloom Madrasa, Changaleeri, Mothikkal'
  };

  // Function to create Outlook Calendar link
  const createOutlookCalendarLink = (event) => {
    const baseUrl = 'https://outlook.live.com/calendar/0/deeplink/compose?';
    const params = new URLSearchParams({
      subject: event.title,
      startdt: event.startDate,
      enddt: event.endDate,
      body: event.details,
      location: event.location
    });
    return `${baseUrl}${params.toString()}`;
  };

  // Component for calendar buttons
  const CalendarButtons = ({ event, className = "" }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      <button
        onClick={() => window.open(createGoogleCalendarLink(event), '_blank')}
        className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors font-medium"
        style={{fontFamily: 'Playfair Display, serif'}}
      >
        <Calendar size={16} />
        Add to Google Calendar
      </button>
      <div className="flex gap-2">
        <button
          onClick={() => window.open(createOutlookCalendarLink(event), '_blank')}
          className="flex items-center justify-center gap-1 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded text-xs transition-colors flex-1"
          style={{fontFamily: 'Playfair Display, serif'}}
        >
          Outlook
        </button>
        <button
          onClick={() => window.open(createGoogleCalendarLink(event), '_blank')}
          className="flex items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded text-xs transition-colors flex-1"
          style={{fontFamily: 'Playfair Display, serif'}}
        >
          Apple
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-8 px-4">
      <div className="max-w-sm mx-auto">
        {/* Main Save The Date Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          {/* Bismillah Header */}
          <div className="text-center mb-6">
            <p className="text-lg text-emerald-700 mb-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </p>
            <p className="text-xs text-gray-600 italic" style={{fontFamily: 'Playfair Display, serif'}}>
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl text-emerald-700 mb-6" style={{fontFamily: 'Dancing Script, cursive'}}>
              Save The Date
            </h1>
            
            {/* Date with Images */}
            <div className="flex justify-center items-center gap-1 mb-6">
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-lg" style={{fontFamily: 'Playfair Display, serif'}}>04</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-lg" style={{fontFamily: 'Playfair Display, serif'}}>10</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-lg" style={{fontFamily: 'Playfair Display, serif'}}>25</span>
                </div>
              </div>
            </div>

            {/* Couple Names */}
            <div className="mb-8">
              <h2 className="text-3xl text-emerald-700 mb-2 leading-tight font-semibold" style={{fontFamily: 'Dancing Script, cursive'}}>
                Thahseena & Fayis
              </h2>
              <p className="text-lg text-amber-600 mb-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
                فاطمة تحسينة ومحمد فايس
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
                ARE GETTING MARRIED
              </p>
            </div>
          </div>

          {/* Islamic Message */}
          <div className="text-center mb-8 bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-500">
            <h3 className="text-lg text-emerald-700 mb-4 font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
              Dear Beloved Family & Friends!
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              By the grace of Allah, we are blessed to share this joyous occasion with you as two hearts unite as one.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed" style={{fontFamily: 'Playfair Display, serif'}}>
              With immense pleasure, we invite you to witness and celebrate our sacred union in the blessed bond of Nikah.
            </p>
          </div>

          {/* Reminder Alert */}
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border-l-4 border-amber-500">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="text-amber-600" size={18} />
              <h3 className="text-lg text-amber-700 font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
                Set Your Reminder
              </h3>
            </div>
            <p className="text-sm text-amber-700 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
              Don't miss this special day! Add our wedding events to your calendar and get notified.
            </p>
          </div>

          {/* Calendar */}
          <div className="mb-8">
            <h4 className="text-lg font-light text-center mb-4 text-emerald-700 italic" style={{fontFamily: 'Playfair Display, serif'}}>
              October 2025
            </h4>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>SUN</div>
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>MON</div>
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>TUE</div>
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>WED</div>
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>THU</div>
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>FRI</div>
              <div className="text-gray-500 py-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>SAT</div>
              
              <div className="py-2"></div>
              <div className="py-2"></div>
              <div className="py-2"></div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>1</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>2</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>3</div>
              <div className="py-2 bg-gradient-to-r from-emerald-500 to-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto font-bold shadow-lg relative" style={{fontFamily: 'Playfair Display, serif'}}>
                4
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
              </div>
              
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>5</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>6</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>7</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>8</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>9</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>10</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>11</div>
              
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>12</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>13</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>14</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>15</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>16</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>17</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>18</div>
              
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>19</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>20</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>21</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>22</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>23</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>24</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>25</div>
              
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>26</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>27</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>28</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>29</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>30</div>
              <div className="py-2 text-gray-600" style={{fontFamily: 'Playfair Display, serif'}}>31</div>
            </div>
          </div>

          {/* Nikah Ceremony Details */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl text-emerald-700 mb-4 font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
              Nikah Ceremony
            </h3>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={16} className="text-emerald-600" />
                <p className="text-2xl mb-0 text-emerald-800 font-light" style={{fontFamily: 'Playfair Display, serif'}}>
                  04.10 | 09:30 AM
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={16} className="text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-700 font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
                    Masjid Rahman Juma Masjid
                  </p>
                  <p className="text-sm text-emerald-600" style={{fontFamily: 'Playfair Display, serif'}}>
                    Changaleeri, Mothikkal
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.app.goo.gl/hAYELRbtiWyH9MX6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide transition-colors font-medium"
                  style={{fontFamily: 'Playfair Display, serif'}}
                >
                  VIEW ON MAP
                </a>
                <CalendarButtons event={nikahEvent} />
              </div>
            </div>
          </div>
        </div>

        {/* Second Card - Reception Details */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Walima Reception */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center text-amber-600">
                🍽️
              </div>
            </div>
            <h3 className="text-xl text-amber-700 mb-4 font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
              Walima Reception
            </h3>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={16} className="text-amber-600" />
                <p className="text-2xl mb-0 text-amber-800 font-light" style={{fontFamily: 'Playfair Display, serif'}}>
                  04.10 | 12:00 PM
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={16} className="text-amber-600" />
                <div>
                  <p className="text-sm text-gray-700 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
                    Majmahul Uloom Madrasa
                  </p>
                  <p className="text-sm text-amber-800" style={{fontFamily: 'Playfair Display, serif'}}>
                    Changaleeri, Mothikkal
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.app.goo.gl/dkskR1DqbhveLajMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide transition-colors font-medium"
                  style={{fontFamily: 'Playfair Display, serif'}}
                >
                  VIEW ON MAP
                </a>
                <CalendarButtons event={walimaEvent} />
              </div>
            </div>
          </div>

          {/* Islamic Quote */}
          <div className="mb-8 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg p-4 border-l-4 border-emerald-500">
            <p className="text-sm text-emerald-700 text-center mb-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا"
            </p>
            <p className="text-xs text-gray-600 text-center italic" style={{fontFamily: 'Playfair Display, serif'}}>
              "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them" - Quran 30:21
            </p>
          </div>

          {/* Details */}
          <div className="mb-8">
            <h3 className="text-xl text-emerald-700 mb-4 text-center text-2xl" style={{fontFamily: 'Dancing Script, cursive'}}>
              Special Notes
            </h3>
            <p className="text-sm text-gray-700 text-center mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Your presence is the greatest gift to us. If you wish to honor us with a gift, we would be grateful for contributions towards our new journey together.
            </p>
            <p className="text-sm text-gray-700 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              We are working to make this celebration memorable, so we would appreciate if you could confirm your attendance by 02.10.2025
            </p>
          </div>

          {/* Islamic Dua */}
          <div className="text-center mb-6 bg-emerald-50 rounded-lg p-4">
            <p className="text-sm text-emerald-700 mb-2 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
              بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className="text-xs text-gray-600 italic" style={{fontFamily: 'Playfair Display, serif'}}>
              "May Allah bless you, shower His blessings upon you, and bring you together in goodness"
            </p>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-emerald-600 mb-4 uppercase tracking-wide font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
              We eagerly await your presence!
            </p>
            <p className="text-2xl text-emerald-700 mb-2 font-semibold" style={{fontFamily: 'Dancing Script, cursive'}}>
              Thahseena & Fayis
            </p>
            <p className="text-lg text-amber-600 font-medium" style={{fontFamily: 'Playfair Display, serif'}}>
              تحسينة وفايس
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}