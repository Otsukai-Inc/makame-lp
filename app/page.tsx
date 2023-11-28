import Image from 'next/image'
import SkewBg from '@/components/elements/background/skew'
import SkewSection from '@/components/pages/home/skew-section'
import ToggleContent from '@/components/pages/home/toggle-content'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const numberFormatter = new Intl.NumberFormat('ja-JP');
  const price = 7900;
  const taxRate = 1.1;
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero */}
      <div className='flex justify-center w-full py-20 bg-gradient-to-b from-brand to-[#2CA9D7] relative'>
        <header className="absolute w-full -mt-16 md:-mt-10">
          <SkewBg background='white' padding="py-2" className='flex justify-center'>
            <Image src="/logo.svg" alt="logo" className='w-40 md:w-60 h-auto' width={325} height={126} />
          </SkewBg>
        </header>

        <section className={`
          w-4/5 md:w-3/4
          pt-20 md:pt-40
          pb-10 md:pb-20
        `}>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            {/* テキスト */}
            <div className='text-white md:w-1/2 text-center md:text-left whitespace-normal'>
              <h6 className='mb-4 font-bold tracking-widest'>ホームページのサブスク</h6>
              <h1 className='mb-4 font-bold text-[10vw] md:text-[5vw] md:leading-relaxed'>制作費無料、<br />月々{numberFormatter.format(price)}円でホームページを</h1>
              <p className='mb-8'>マカミーは、<br />中小企業・個人事業主に特化したホームページの月額定額サービスです。</p>

              <div className='flex items-center justify-center md:justify-start'>
                <ul className='
                  grid grid-flow-col gap-4 auto-cols-max
                '>
                  {
                    [
                      '制作費\n無料',
                      '運用まで\nトータル\nサポート',
                      'いつでも\n解約OK',
                    ].map((text, index) => (
                      <li key={index} className='
                        bg-[url(/home/circle-frame.svg)] bg-no-repeat bg-center bg-contain
                        flex items-center justify-center
                        text-center
                        h-28 md:h-32
                        w-28 md:w-32
                      '>
                        <span className='
                          font-bold
                          text-sm md:text-base
                          whitespace-pre-wrap
                        '>{text}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
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
          <ul className='text-left mb-6 w-full'>
            {
              [
                'プロにすべてまかせたい',
                '時間やお金をかけずにサクッと作ってほしい',
                'サイトが古いので刷新したい',
                '更新がなかなかできない',
              ].map((text, index) => (
                <li key={index} className='
                  bg-gray-100
                  rounded-xl
                  font-bold
                  flex items-center
                  p-6 md:p-10
                  mb-6
                '>
                  <FontAwesomeIcon icon={faCircleCheck} className='mr-4 w-6 text-brand' />
                  {text}
                </li>
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
          <ul className='w-full'>
            {/* Point 01 ~ 03のカード */}
            {
              [
                {
                  heading: `月額${numberFormatter.format(price)}円で、いつでも解約が可能`,
                  description: <>
                    <p className='mb-4'>通常、数十万円かかるホームページと同じクオリティのホームページが、月額{numberFormatter.format(price)}円（税込価格{numberFormatter.format(price * taxRate)}円）で持つことができます。<br />いつでも解約が可能で、長期の契約縛りもありません。</p>
                    <small className='text-gray-500'>※ 初回のみ事務手数料{numberFormatter.format(price)}円（税込価格{numberFormatter.format(price * taxRate)}円）がかかります。</small>
                  </>
                },
                {
                  heading: 'すべて”おまかせ”大歓迎です',
                  description: '面倒なドメイン取得やサーバーの契約もすべて私たちが行います。\nその他、問い合わせフォーム、SNS連携、独自ドメインの実装など、お客様のビジネス目的に合わせて最適な機能を選定し、目的を叶えるホームページをご提案いたします。'
                },
                {
                  heading: '更新作業もおまかせください',
                  description: <>
                    <p className='mb-4'>
                      更新作業は、月5回まで無料です。<br />画像の変更やテキスト変更、お知らせページの更新など臨機応変に対応いたします。
                    </p>
                    <small className='text-gray-500'>※ 大きなレイアウト変更やページ追加などは別途ご相談となります。</small>
                  </>
                },
              ].map(({heading, description}, index) => (
                <li key={index} className='
                  bg-white
                  rounded-xl
                  drop-shadow-md
                  p-6 md:p-10
                  mb-6
                '>
                  <Image src={`/home/about-plan-0${index + 1}.png`} alt={heading} className='w-1/2 md:w-1/4 mx-auto' width={940/3} height={994/3} />
                  <h6 className='flex items-center mb-4'>
                    <span className='text-white text-xs font-bold px-2 mr-2 bg-[url(/home/about-plan-point-bg.svg)] bg-contain bg-center bg-no-repeat'>Point</span>
                    <span className='text-brand font-bold text-4xl'>0{index + 1}</span>
                  </h6>
                  <h3 className='font-bold text-xl mb-4'>{heading}</h3>
                  <div className='whitespace-pre-wrap'>{description}</div>
                </li>
              ))
            }
          </ul>
        </SkewSection>
      </SkewBg>

      {/* Content Diff */}
      <SkewBg background='dot'>
        <SkewSection
          heading='他サービスとの比較'
        >
          <div className='w-full flex justify-start md:justify-center overflow-x-scroll md:overflow-x-auto'>
            {/* テーブルに角丸つける @see https://jito-site.com/css-table-radius/ */}
            <table className='
              font-bold
              min-w-[50rem] md:min-w-full
              border-t border-l border-separate border-spacing-0 rounded-xl
            '>
              <thead>
                <tr>
                  <th className='bg-gray-100 border-r border-b rounded-tl-xl w-64 py-4'></th>
                  <th className='bg-brand text-white border-r border-b w-64 py-4'>マカミー</th>
                  <th className='bg-gray-400 text-white border-r border-b w-64 py-4'>A社<br />(サブスクWEB提供)</th>
                  <th className='bg-gray-400 text-white border-r border-b w-64 rounded-tr-xl py-4'>B社<br />(格安WEB制作提供)</th>
                </tr>
              </thead>
              <tbody className='text-center'>
              {
                // テーブルコンテンツ
                [
                  {
                    heading: '初期費用',
                    makame: `${numberFormatter.format(price)}円`,
                    a: `${numberFormatter.format(5000)}円`,
                    b: `${numberFormatter.format(59800)}円`,
                  },
                  {
                    heading: '月額料金',
                    makame: `${numberFormatter.format(price)}円`,
                    a: `${numberFormatter.format(9800)}円`,
                    b: `${numberFormatter.format(9800)}円`,
                  },
                  {
                    heading: 'ページ数',
                    makame: '6',
                    a: '1',
                    b: '1',
                  },
                  {
                    heading: '画像、文章、デザイン全ておまかせ',
                    makame: '◯',
                    a: '文章のみ',
                    b: '追加オプション',
                  },
                  {
                    heading: 'サイト更新',
                    makame: '毎月5回 更新無料',
                    a: <>3回まで無料<br />※ 作業時間制限あり</>,
                    b: '都度見積もり',
                  },
                  {
                    heading: '解約条件',
                    makame: 'なし',
                    a: '最低1年契約',
                    b: 'なし',
                  }
                ].map(({heading, makame, a, b}, index) => (
                  <tr key={index} className='group'>
                    <td className={`bg-gray-100 border-r border-b py-4 px-12 group-last:rounded-bl-xl`}>{heading}</td>
                    <td className='bg-white border-r border-b text-brand py-4'>{makame}</td>
                    <td className='bg-white border-r border-b py-4'>{a}</td>
                    <td className={`bg-white border-r border-b py-4 group-last:rounded-br-xl`}>{b}</td>
                  </tr>
                ))
              }</tbody>
            </table>
          </div>
        </SkewSection>
      </SkewBg>

      {/* Cotent Getting Started */}
      <SkewBg background='gray'>
        <SkewSection
          heading='ご利用の流れ'
        >
          <div className='w-full bg-white rounded-xl drop-shadow-md py-12 px-16'>
            <dl>
              {
                [
                  {
                    heading: '申し込み',
                    description: '簡単な申し込みフォームから質問にお答えください。基本情報から最適なホームページを制作。',
                  },
                  {
                    heading: 'オンラインヒアリング',
                    description: <>
                      <p className='mb-4'>オンラインミーティングでお客様の要望をくみ取り、理想のデザインや機能について詳細に話し合います。</p>
                      <p className='text-hint'>※ 必要ない場合は、フォーム入力の内容のみでご提案を行います</p>
                    </>,
                  },
                  {
                    heading: '撮影',
                    description: <>
                      <p className='mb-4'>専門フォトグラファーがビジネス魅力を最高のアングルで撮影。製品やサービスの魅力を引き立てます。</p>
                      <p className='text-hint'>※ 必要ない場合は、撮影をなくす事ができます</p>
                    </>,
                  },
                  {
                    heading: 'デザイン&制作',
                    description: 'プロデザイナーがお客様の要望に基づき、使いやすく魅力的なサイトを制作。お客様のビジョンを具現化。',
                  },
                  {
                    heading: '公開',
                    description: '制作完了後、新しいホームページを公開。お客様の満足のいくよう、問題なく公開いたします。',
                  },
                ].map(({heading, description}, index) => (
                  <div key={index} className={`relative pb-4 border-l-4 ${index < 4 ? 'border-brand' : 'border-white'}`}>
                    <dt className='
                      absolute -left-10
                      bg-brand text-white
                      rounded-full w-20 h-20
                      flex flex-col items-center justify-center
                    '>
                      <div className='text-xs pb-1 border-b border-white'>Step</div>
                      <div className='font-bold text-4xl'>0{index + 1}</div>
                    </dt>
                    <dd className='pl-12'>
                      <h3 className='font-bold text-xl mb-4'>{heading}</h3>
                      <div>{description}</div>
                      <div className='flex justify-center'>
                        <Image src={`/home/getting-started-${index + 1}.png`} alt={heading} width={208/2} height={208/2} />
                      </div>
                    </dd>
                  </div>
                ))
              }
            </dl>
          </div>
        </SkewSection>
      </SkewBg>

      {/* Cotent FAQ */}
      <SkewBg background='white'>
        <SkewSection
          heading='FAQ'
        >
          <ul className='w-full'>
            {
              [
                {
                  heading: 'どんなホームページが作れますか？',
                  content: 'TOPページ、サービス紹介、求人、新着情報、会社情報、お問い合わせ、のような形で、6ページまでの一般的なホームページを制作いたします。\nお客様がホームページを持ちたいと考えた理由をヒアリングさせていただいた上で、私たちから最適なご提案を行いますので、具体的なイメージがなくてもご安心くださいませ。',
                },
                {
                  heading: '追加料金や、ほかに何かお金はかかりますか？',
                  content: `初回事務手数料${numberFormatter.format(price)}円（税込価格${numberFormatter.format(price * taxRate)}円）と、公開後に月額${numberFormatter.format(price)}円（税込価格${numberFormatter.format(price * taxRate)}円）をお支払いいただくのみで、そのほかは一切不要です。\nただし、ホームページのレイアウトを含めた大規模な更新やページの追加などは、別途お見積りが必要となりますので予めご了承くださいませ。`
                },
                {
                  heading: '解約はできますか？また解約金はありますか？',
                  content: '掲載開始月の翌月から解約が可能です。解約金などは一切ございません。\n※ すぐに解約する事を前提としたご契約はご遠慮下さいませ。'
                },
                {
                  heading: '更新はどうすればいいですか？',
                  content: '更新は弊社担当へご連絡ください。毎月5回まで無料で対応させていただきます。最新情報の更新や、画像・テキストの変更、フォームの追加など、基本的な更新は、2営業日以内に対応いたします。\n※ お急ぎの場合はできる限りすぐに対応いたしますので、お申し付けください。',
                },
              ].map(({heading, content}, index) => (
                <li key={index} className='
                  border rounded-xl
                  p-6 md:p-10
                  mb-6
                '>
                  <ToggleContent heading={heading}>{content}</ToggleContent>
                </li>
              ))
            }
          </ul>
        </SkewSection>
      </SkewBg>

      {/* ご紹介キャンペーン */}
      <SkewBg background='brand'>
        <SkewSection>
          <Image src="/home/campaign-ttl.png" alt="ご紹介キャンペーン" width={681/2} height={69/2} />
          <Image src="/home/campaign-cashback.png" alt="7800円キャッシュバック" width={1096/2} height={520/2} className='mb-6' />
          <p className='text-white'>ご紹介いただいたお客様がご契約された場合、紹介した方、紹介された方双方に初回事務手数料をご返金いたします。</p>
        </SkewSection>
      </SkewBg>

      {/* Footer */}
      <footer className='pt-20 pb-48 text-center'>
        <div className='flex justify-center'>
          <Image src="/logo.svg" alt="logo" width={132} height={51} />
        </div>
        <ul className='font-bold flex justify-center my-10'>
          {
            [
              {href: 'https://otsukai.com/company', text: '運営企業'},
              // {href: 'https://otsukaimangatokyo.freshdesk.com/support/solutions/articles/35000032529', text: '利用規約'}, // 弁護士間に合ってないのでいったん消す
              {href: 'https://otsukaimangatokyo.freshdesk.com/support/solutions/articles/35000086437', text: 'プライバシーポリシー'},
            ].map(({href, text}, index) => (
              <li key={index} className='px-2'>
                <a href={href}>{text}</a>
              </li>
            ))
          }
        </ul>
        <div className='text-hint'>
          © Otsukai All Rights Reserved.
        </div>
      </footer>

      <aside className='fixed flex justify-center bottom-6'>
        <a href="https://forms.gle/8deXzausnXwfdj6t7" className='
          block
          bg-primary
          brightness-100 hover:brightness-105 transition duration-300
          py-4 px-16
          drop-shadow-md
          text-center
          rounded-full
          font-bold
        '>
          <p className='text-sm md:text-base'>＼ お気軽にお問い合わせください ／</p>
          <p className='text-2xl my-3'>お申し込みはこちら</p>
          <div className='text-sm inline-block bg-white text-red-500 p-1'>申し込み無料</div>
        </a>
      </aside>
    </main>
  )
}
