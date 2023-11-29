import { Noto_Sans_JP } from "next/font/google";
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import './layout.css'

// @see https://nextjs.org/docs/messages/google-fonts-missing-subsets
const baseFont = Noto_Sans_JP({
  preload: false,
});

const siteName = 'マカミー | 中小個人専用おまかせホームページ制作サービス - 月額7900円でプロのWebを手に入れよう';
const description = '中小企業・個人事業向け『マカミー』。初回事務手数料7900円、月額7900円。プロのデザイナーが手がけるおまかせホームページ制作。独自ドメインやSNS連携、更新作業まで全て込み。手軽な価格でWebをまかせてビジネスに専念しましょう';
const url = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: siteName,
  description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url,
    title: siteName,
    description,
    images: [
      {
        url: `${url}/ogp.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    siteName,
  },
}

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
            window.dataLayer = window.dataLayer || [];`,
        }}
      />
      <body id='layout-main' className={baseFont.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" className='hidden invisible'></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        {children}
      </body>
    </html>
  )
}
