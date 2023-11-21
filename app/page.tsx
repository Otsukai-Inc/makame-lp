import Image from 'next/image'
import SkewBg from '@/components/elements/background/skew'
import SkewSection from '@/components/pages/home/skew-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero */}
      <div className='flex justify-center w-full py-20 bg-gradient-to-b from-brand to-[#2CA9D7] relative'>
        <header className="absolute w-full -mt-20">
          <SkewBg background='white' padding="py-4" className='flex justify-center'>
            <Image src="/logo.svg" alt="logo" className='h-auto' width={325} height={126} />
          </SkewBg>
        </header>

        <section className={`w-3/4 pt-20`}>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            {/* テキスト */}
            <div className='text-white md:w-1/2'>
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
            <div className='md:w-1/2'>
              <Image src="/home/eyecatch.png" alt="プロにすべておまかせ！" className='w-full' width={940/2} height={994/2} />
            </div>
          </div>
        </section>
      </div>

      {/* Content Description */}
      <SkewBg background='dot' className='-mt-20'>
        <SkewSection
          heading={<>ホームページを<span className='text-brand'>すべておまかせ</span>で作れます</>}
        >
          <p className='mb-4'>マカミーはこんな方におすすめです</p>
          <ul className='text-left mb-6'>
            {
              [
                'プロにすべてまかせたい',
                '時間やお金をかけずにサクッと作ってほしい',
                'サイトが古いので刷新したい',
                '更新がなかなかできない',
              ].map((text, index) => (
                <li key={index}>{text}</li>
              ))
            }
          </ul>
          {/* 24px */}
          <strong className='text-2xl c-bg-marker-primary'>すべて<span className='text-brand'>マカミーにおまかせ</span>ください！</strong>
        </SkewSection>
      </SkewBg>

      {/* Content Plan */}
      <SkewBg background='gray'>
        <SkewSection
          heading={<><span className='text-brand'>おまかせプラン</span>について</>}
        >
        </SkewSection>
      </SkewBg>

      {/* Content Diff */}
      <SkewBg background='dot'>
        <SkewSection
          heading='他サービスとの比較'
        >
        </SkewSection>
      </SkewBg>

      {/* Cotent Getting Started */}
      <SkewBg background='gray'>
        <SkewSection
          heading='ご利用の流れ'
        >
        </SkewSection>
      </SkewBg>

      {/* Cotent FAQ */}
      <SkewBg background='white'>
        <SkewSection
          heading='FAQ'
        >
        </SkewSection>
      </SkewBg>

      {/* ご紹介キャンペーン */}
      <SkewBg background='brand'>
        <SkewSection>
          <Image src="/home/campaign-ttl.png" alt="ご紹介キャンペーン" width={100} height={100} />
          <Image src="/home/campaign-cashback.png" alt="7800円キャッシュバック" width={100} height={100} />
          <p className='text-white'>ご紹介いただいたお客様がご契約された場合、ご紹介者様に初回事務手数料をご返金いたします。</p>
        </SkewSection>
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
