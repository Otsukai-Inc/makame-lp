import type { Metadata } from 'next'
import './globals.css'
import './layout.css'

const siteName = 'マカミー';
const description = '制作費無料、月々7,900円でホームページを。マカミーは、中小企業・個人事業主に特化したホームページの月額定額サービスです。';
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
      <body id='layout-main'>{children}</body>
    </html>
  )
}
