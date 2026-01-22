import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
