import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="z-10 max-w-5xl w-full flex justify-center text-sm lg:flex">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </header>

      {/* Fist View */}
      <section>
        <div>
          {/* テキスト */}
          <div>
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
          <div>
            <Image src="/home/eyecatch.png" alt="プロにすべておまかせ！" width={100} height={100} />
          </div>
        </div>
      </section>

      <section>
        {/* Content Description */}
        <div>
          <h3>ホームページをすべておまかせで作れます</h3>
        </div>

        {/* Content Plan */}
        <div>
          <h3>おまかせプランについて</h3>
        </div>

        {/* Content Diff */}
        <div>
          <h3>他サービスとの比較</h3>
        </div>

        {/* Cotent Getting Started */}
        <div>
          <h3>ご利用の流れ</h3>
        </div>

        {/* Cotent FAQ */}
        <div>
          <h3>FAQ</h3>
        </div>
      </section>

      {/* ご紹介キャンペーン */}
      <aside>
        <Image src="/home/campaign-ttl.png" alt="ご紹介キャンペーン" width={100} height={100} />
        <Image src="/home/campaign-cashback.png" alt="7800円キャッシュバック" width={100} height={100} />
      </aside>

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
