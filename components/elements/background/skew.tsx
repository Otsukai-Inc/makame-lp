import styles from './skew.module.css'

interface Props {
  children: React.ReactNode;
  className?: string;
  background?: 'brand' | 'dot' | 'gray' | 'white' | 'none';
}

export default function BackgroundSkew(props: Props) {
  const backgroundClass = {
    brand: 'bg-gradient-to-b from-brand to-[#2CA9D7]',
    dot: 'bg-gradient-to-r from-brand to-[#2CA9D7]',
    gray: 'bg-gray-100',
    white: 'bg-white',
    none: '',
  }[props.background ?? 'none']

  return (
    <div className={`${styles.background} ${backgroundClass} py-20 w-full ${props.className ?? ''}`}>
      <div className={`${styles.container}`}>
        {props.children}
      </div>
    </div>
  )
}