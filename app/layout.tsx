import { Noto_Sans_JP } from "next/font/google";
import type { Metadata } from 'next'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body id='layout-main' className={baseFont.className}>{children}</body>
    </html>
  )
}
