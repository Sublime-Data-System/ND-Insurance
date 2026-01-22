import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Blog post type definitions
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  body: any[] // Portable Text content
  publishedAt: string
  author?: {
    name: string
    image?: {
      asset: {
        _ref: string
        _type: string
      }
    }
  }
  categories?: string[]
}

// GROQ queries
export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  "categories": categories[]->title
}`

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  publishedAt,
  author->{
    name,
    image
  },
  "categories": categories[]->title
}`
