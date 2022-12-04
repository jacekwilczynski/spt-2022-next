import { asPercentage } from '@/util/percent'
import classNames from 'classnames'
import styles from './ResponsiveIFrame.module.scss'

export const ResponsiveIFrame = (props: JSX.IntrinsicElements['iframe'] & {
  heightToWidthRatio: number | `${string}%`
}) => {
  const { heightToWidthRatio, className, ...otherProps } = props
  const computedRatio = asPercentage(heightToWidthRatio)

  return (
    <div
      className={styles.wrapper}
      style={{ paddingBottom: computedRatio }}
    >
      <iframe
        className={classNames(styles.iframe, className)}
        {...otherProps}
      />
    </div>
  )
}
