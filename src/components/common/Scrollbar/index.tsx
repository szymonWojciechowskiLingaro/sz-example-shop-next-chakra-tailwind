import cn from 'classnames'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/css/OverlayScrollbars.css'

type ScrollbarProps = {
  children: React.ReactNode
  className?: string
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children, className }) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn('os-theme-thin', className),
        scrollbars: {
          autoHide: 'scroll',
        },
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  )
}

export default Scrollbar
