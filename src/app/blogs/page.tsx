import React from 'react'
import type { Metadata } from 'next'
import BlogList from '@/components/Blog/BlogList'
import { client, blogPostsQuery, BlogPost } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Blog | ND Insurance',
  description: 'Stay informed with the latest insights, news, and tips from ND Insurance',
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(blogPostsQuery)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

const BlogPage = async () => {
  const posts = await getBlogPosts()

  return (
    <div className="w-full">
      <BlogList posts={posts} />
    </div>
  )
}

export default BlogPage
