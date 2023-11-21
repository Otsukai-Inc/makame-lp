interface Props {
  children: React.ReactNode;
  // className?: string;
  heading?: React.ReactNode;
}

export default function HomeSkewSection(props: Props) {
  return (
    <section className="container flex flex-col items-center py-12">
      {/* headingが指定されている場合出力する */}
      {props.heading && (
        <h2 className='text-3xl mb-8'><strong>{props.heading}</strong></h2>
      )}
      {/* メインコンテンツ */}
      {props.children}
    </section>
  )
}