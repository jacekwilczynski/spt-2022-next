import { Cloudinary, CloudinaryImage, CloudinaryVideo } from '@cloudinary/url-gen'

/**
 * Wraps the Cloudinary class, providing extra functionality and preventing access to encapsulation-breaking methods.
 */
export class CloudinaryWrapper implements Pick<Cloudinary, 'image' | 'video'> {
  constructor(
    private readonly inner: Cloudinary,
    private readonly pathPrefix: string = '',
  ) {
  }

  image(publicID: string | undefined): CloudinaryImage {
    return this.inner.image(this.pathPrefix + publicID)
  }

  video(publicID: string | undefined): CloudinaryVideo {
    return this.inner.video(this.pathPrefix + publicID)
  }
}
