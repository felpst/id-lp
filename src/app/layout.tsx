import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Script from 'next/script'
import TagManager from 'react-gtm-module'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Infodrops',
  description: 'Stay Informed, Stay Ahead',
}

const tagManagerArgs = {
  gtmId: 'GTM-WXG6HBGT',
}

TagManager.initialize(tagManagerArgs)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXG6HBGT');`,
          }}
        ></Script>
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
