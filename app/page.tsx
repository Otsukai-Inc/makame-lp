import Image from 'next/image'
import SkewBg from '@/components/elements/background/skew'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SkewBg className='w-full pt-20 -mt-20' background='white'>
        <header className="z-10 py-6 w-full flex justify-center text-sm">
          <Image src="/logo.svg" alt="logo" className='h-auto' width={325} height={126} />
        </header>
      </SkewBg>

      <SkewBg className='w-full pt-20 -mt-20' background="brand">
        {/* Hero */}
        <section className={`c-skew-container pt-20`}>
          <div className='flex flex-col md:flex-row justify-center'>
            {/* テキスト */}
            <div className='text-white w-1/2'>
              <h6>ホームページのサブスク</h6>
              <h1>制作費無料、月々7,900円でホームページを</h1>
              <p>マカミーは、中小企業・個人事業主に特化したホームページの月額定額サービスです。</p>
              <ul>
                <li>制作費無料</li>
                <li>運用までトータルサポート</li>
                <li>いつでも解約OK</li>
              </ul>
            </div>

            {/* 画像 */}
            <div className='w-1/2'>
              <Image src="/home/eyecatch.png" alt="プロにすべておまかせ！" className='w-full' width={940/2} height={994/2} />
            </div>
          </div>
        </section>
      </SkewBg>

      {/* Content Description */}
      <SkewBg background='dot'>
        <section className='container'>
          <h3>ホームページをすべておまかせで作れます</h3>
        </section>
      </SkewBg>

      {/* Content Plan */}
      <SkewBg background='gray'>
        <section className='container'>
          <h3>おまかせプランについて</h3>
        </section>
      </SkewBg>

      {/* Content Diff */}
      <SkewBg background='dot'>
        <section className='container'>
          <h3>他サービスとの比較</h3>
        </section>
      </SkewBg>

      {/* Cotent Getting Started */}
      <SkewBg background='gray'>
        <section className='container'>
          <h3>ご利用の流れ</h3>
        </section>
      </SkewBg>

      {/* Cotent FAQ */}
      <SkewBg background='white'>
        <section className='container'>
          <h3>FAQ</h3>
        </section>
      </SkewBg>

      {/* ご紹介キャンペーン */}
      <SkewBg background='brand'>
        <aside className='container flex flex-col items-center'>
          <Image src="/home/campaign-ttl.png" alt="ご紹介キャンペーン" width={100} height={100} />
          <Image src="/home/campaign-cashback.png" alt="7800円キャッシュバック" width={100} height={100} />
          <p className='text-white'>ご紹介いただいたお客様がご契約された場合、ご紹介者様に初回事務手数料をご返金いたします。</p>
        </aside>
      </SkewBg>

      {/* Footer */}
      <footer>
        <div>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <ul>
          <li>運営企業</li>
          <li>利用規約</li>
          <li>プライバシーポリシー</li>
        </ul>
        <div>
          © Otsukai All Rights Reserved.
        </div>
      </footer>
    </main>
  )
}
