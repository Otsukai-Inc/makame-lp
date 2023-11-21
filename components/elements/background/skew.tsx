import styles from './skew.module.css'

interface Props {
  children: React.ReactNode;
  className?: string;
  background?: 'brand' | 'dot' | 'gray' | 'white' | 'none';
  padding?: string;
}

export default function BackgroundSkew(props: Props) {
  const backgroundClass = {
    brand: 'after:bg-gradient-to-b from-brand to-[#2CA9D7]',
    dot: styles.bgdot,
    gray: 'after:bg-gray-100',
    white: 'after:bg-white',
    none: '',
  }[props.background ?? 'none']

  const padding = props.padding ?? 'py-16'

  return (
    <div className={`${styles.background} ${backgroundClass} ${padding} w-full ${props.className ?? ''}`}>
      {props.children}
    </div>
  )
}