'use client'

import { useEffect } from 'react'
import { initGTM, initGA } from '@/utils/analytics'

export default function Analytics() {
  useEffect(() => {
    // Initialize Google Tag Manager
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    if (gtmId) {
      initGTM(gtmId)
    }

    // Initialize Google Analytics
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (gaId) {
      initGA(gaId)
    }
  }, [])

  return (
    <>
      {/* GTM noscript fallback */}
     <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WZJXT2F');</script>
<!-- End Google Tag Manager -->
    </>
  )
}
