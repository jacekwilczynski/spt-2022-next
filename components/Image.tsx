import { cloudinary } from '@/util/cloudinary'
import { AdvancedImage } from '@cloudinary/react'

export const Image = (props: ImageProps) => {
  const { name, ...otherProps } = props

  return <AdvancedImage cldImg={cloudinary.image(name)} {...otherProps} />
}

export type ImageProps =
  Omit<JSX.IntrinsicElements['img'], 'ref' | 'src' | 'srcSet'> &
  { name: string }
