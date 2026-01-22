import React from 'react'
import { H1Grey, H2 } from '../typography'
import BlogCard from './BlogCard'
import { BlogPost } from '@/lib/sanity'

interface BlogListProps {
  posts: BlogPost[]
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="w-full py-12 px-4 md:px-10 max-w-[1336px] mx-auto">
      <div className="mb-12 text-center">
        <H1Grey className="mb-4 text-[#4D3E99]">Our Blogs</H1Grey>
        <H2 className="text-[#9d9d9d] max-w-5xl mx-auto text-2xl">
          Stay informed with the latest insights, news, and tips from ND Insurance
        </H2>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-2xl">
          <H2 className="text-[#9d9d9d]">No blog posts available yet. Check back soon!</H2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogList
