export interface SabiBtnProps {
  btnType?: string
  size?: string
  theme?: string
  width?: string
  transition?: string
  fontSize?: string
  height?: string
  leftIcon?: any
  rightIcon?: any
  borderRadius?: string
  onFocus?: (e: React.FocusEventHandler<HTMLButtonElement>) => void
  onClick?: () => void
  shadow?: string
  border?: string
  children: any
}
