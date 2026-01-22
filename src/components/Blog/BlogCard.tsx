import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { H5, Paragraph } from '../typography'
import { BlogPost } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity.image'

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : null

  return (
    <Link href={`/blogs/${post.slug.current}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        {imageUrl && (
          <div className="relative w-full h-64">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 3).map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#ECE8FF] text-[#41357B] text-xs rounded-full border border-[#A9BF6838]"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          <H5 className="mb-3 line-clamp-2">{post.title}</H5>
          {post.excerpt && (
            <Paragraph className="text-[#858585] mb-4 line-clamp-3">{post.excerpt}</Paragraph>
          )}
          <div className="mt-auto flex items-center justify-between text-sm text-[#858585]">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(32).height(32).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span>{post.author.name}</span>
              </div>
            )}
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
