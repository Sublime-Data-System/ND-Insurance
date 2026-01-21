import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { H1Grey, H2, Paragraph } from '../typography'
import { BlogPost } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity.image'
import Link from 'next/link'

interface BlogPostDetailProps {
  post: BlogPost
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(600).url() : null

  // Portable Text components for custom rendering
  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="my-8">
            <Image
              src={urlFor(value).width(800).url()}
              alt={value.alt || 'Blog post image'}
              width={800}
              height={450}
              className="rounded-lg w-full h-auto"
            />
            {value.caption && (
              <p className="text-center text-sm text-[#858585] mt-2">{value.caption}</p>
            )}
          </div>
        )
      },
    },
    block: {
      h1: ({ children }: any) => <H1Grey className="mb-4 mt-8">{children}</H1Grey>,
      h2: ({ children }: any) => <H2 className="mb-4 mt-6">{children}</H2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-semibold mb-3 mt-5">{children}</h3>,
      normal: ({ children }: any) => <Paragraph className="mb-4">{children}</Paragraph>,
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <Link
          href={value?.href || '#'}
          className="text-[#41357B] underline hover:text-[#2F2F2F]"
          target={value?.blank ? '_blank' : undefined}
          rel={value?.blank ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      ),
    },
  }

  return (
    <article className="w-full py-8 md:py-12 px-4 md:px-10 max-w-[1200px] mx-auto">
      {/* Back Button - Large and Center Aligned */}
      <div className="mb-8 md:mb-10">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-3 text-[#41357B] hover:text-[#2F2F2F] transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-lg md:text-xl font-semibold">Back to Blog</span>
        </Link>
      </div>

      {/* Categories */}
      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-[#ECE8FF] text-[#41357B] text-sm font-medium rounded-full border border-[#A9BF6838]"
            >
              {typeof category === 'string' ? category : category}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <H1Grey className="mb-6 text-left">{post.title}</H1Grey>

      {/* Excerpt */}
      {post.excerpt && (
        <H2 className="text-[#858585] mb-8 text-left italic leading-relaxed">{post.excerpt}</H2>
      )}

      {/* Author and Date */}
      <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200">
        {post.author && (
          <div className="flex items-center gap-4">
            {post.author.image && (
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0">
                <Image
                  src={urlFor(post.author.image).width(56).height(56).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <Paragraph className="font-semibold mb-1 text-[#2F2F2F]">
                {post.author.name}
              </Paragraph>
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="text-sm text-[#858585]">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Featured Image */}
      {imageUrl && (
        <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      )}

      {/* Content */}
      {post.body && (
        <div className="prose prose-lg max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:mb-6 prose-p:leading-relaxed prose-img:rounded-lg prose-img:shadow-md prose-a:text-[#41357B] prose-a:no-underline hover:prose-a:underline">
          <PortableText value={post.body} components={components} />
        </div>
      )}
    </article>
  )
}

export default BlogPostDetail
