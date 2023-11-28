interface Props {
  children: React.ReactNode;
  className?: string;
  heading?: React.ReactNode;
}

export default function HomeSkewSection(props: Props) {
  return (
    <section className={`container flex flex-col items-center py-12 ${props.className}`}>
      {/* headingが指定されている場合出力する */}
      {props.heading && (
        <h2 className='text-h2 mb-8 text-center'><strong>{props.heading}</strong></h2>
      )}
      {/* メインコンテンツ */}
      {props.children}
    </section>
  )
}