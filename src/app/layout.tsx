import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script, Crimson_Text, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'], 
  variable: '--font-dancing-script',
  display: 'swap'
});

const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-text',
  display: 'swap'
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Thahseena & Fayis Wedding - Save the Date | Nikah Ceremony 2025',
  description: 'Join Thahseena and Fayis in celebrating their sacred Nikah ceremony on September 4, 2025. Explore wedding details, RSVP, and more!',
  keywords: ['Thahseena and Fayis wedding', 'Nikah ceremony 2025', 'Islamic wedding', 'save the date', 'wedding invitation', 'September 2025 wedding'],
  authors: [{ name: 'Thahseena & Fayis', url: 'https://thahseena-fayis-wedding.com' }],
  creator: 'Thahseena & Fayis Wedding Team',
  publisher: 'Thahseena & Fayis Wedding',
  openGraph: {
    title: 'Thahseena & Fayis Wedding - Save the Date | Nikah Ceremony 2025',
    description: 'Join Thahseena and Fayis in celebrating their sacred Nikah ceremony on September 4, 2025. Explore wedding details, RSVP, and more!',
    url: 'https://thahseena-fayis-wedding.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thahseena & Fayis Wedding',
    images: [
      {
        url: 'https://thahseena-fayis-wedding.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thahseena and Fayis Wedding Invitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thahseena & Fayis Wedding - Save the Date | Nikah Ceremony 2025',
    description: 'Join Thahseena and Fayis in celebrating their sacred Nikah ceremony on September 4, 2025. Explore wedding details, RSVP, and more!',
    images: ['https://thahseena-fayis-wedding.com/og-image.jpg'],
    creator: '@ThahseenaFayis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://thahseena-fayis-wedding.com',
    languages: {
      'en-US': 'https://thahseena-fayis-wedding.com/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="google-site-verification" content="FfzVsyaS2M5ojeVmNI3qwKlkP6yqjM7mHMN9lL-_twA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`
        ${inter.variable} 
        ${playfair.variable} 
        ${dancingScript.variable} 
        ${crimsonText.variable} 
        ${montserrat.variable} 
        font-sans antialiased bg-gradient-to-br from-emerald-50 to-amber-50 min-h-screen
      `}>
        {children}
      </body>
    </html>
  );
}