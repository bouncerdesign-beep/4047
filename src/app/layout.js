import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/shared/Analytics'
import JsonLd from '@/components/seo/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '7/24 Mobil Lastikçi | Acil Yol Yardım Hizmeti',
  description: 'İstanbul\'da 7/24 mobil lastik değişimi, akü takviyesi ve yol yardım hizmeti. Hızlı, güvenilir ve profesyonel hizmet. Hemen arayın: 0542 469 79 19',
  keywords: [
    'mobil lastikçi',
    'yol yardım',
    'acil lastik tamiri',
    'akü takviye',
    'lastikçi',
    '7/24 lastikçi',
    'istanbul lastikçi',
    'oto lastikçi',
    'lastik tamircisi',
    'en yakın lastikçi'
  ],
  authors: [{ name: '7/24 Mobil Lastikçi' }],
  creator: '7/24 Mobil Lastikçi',
  publisher: '7/24 Mobil Lastikçi',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '7/24 Mobil Lastikçi | Acil Yol Yardım Hizmeti',
    description: 'İstanbul\'da 7/24 mobil lastik değişimi, akü takviyesi ve yol yardım hizmeti. Hızlı ve güvenilir.',
    url: '/',
    siteName: '7/24 Mobil Lastikçi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '7/24 Mobil Lastikçi - Acil Yol Yardım',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7/24 Mobil Lastikçi | Acil Yol Yardım',
    description: 'İstanbul\'da 7/24 mobil lastik ve yol yardım hizmeti. Hemen arayın!',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
      </head>
      <body className={inter.className}>
     
        <Analytics />
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
