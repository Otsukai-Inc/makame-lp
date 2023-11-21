import styles from './skew.module.css'

interface Props {
  children: React.ReactNode;
  className?: string;
  background?: 'brand' | 'dot' | 'gray' | 'white' | 'none';
  paddings?: string;
}

export default function BackgroundSkew(props: Props) {
  const backgroundClass = {
    brand: 'bg-gradient-to-b from-brand to-[#2CA9D7]',
    dot: styles.bgdot,
    gray: 'bg-gray-100',
    white: 'bg-white',
    none: '',
  }[props.background ?? 'none']

  const paddingsClass = props.paddings ?? `py-60 -mt-60`

  return (
    <div className={`${styles.background} ${backgroundClass} ${paddingsClass} w-full ${props.className ?? ''}`}>
      {props.children}
    </div>
  )
}