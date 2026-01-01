import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostDetail from '@/components/Blog/BlogPostDetail'
import { client, blogPostBySlugQuery, blogPostsQuery, BlogPost } from '@/lib/sanity'

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(blogPostsQuery)
    return posts.map((post) => post.slug.current)
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | ND Insurance',
    }
  }

  return {
    title: `${post.title} | ND Insurance Blog`,
    description: post.excerpt || `Read ${post.title} on ND Insurance blog`,
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="w-full">
      <BlogPostDetail post={post} />
    </div>
  )
}

export default BlogPostPage
