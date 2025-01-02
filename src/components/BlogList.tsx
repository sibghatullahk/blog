// src/components/BlogList.tsx
import React from "react";
import Link from "next/link";

// Ensure your posts.json is structured like this:
import posts from "@/data/posts.json";

const BlogList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border rounded-md p-4 shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-blue-500 hover:text-blue-700 hover:underline transition-colors"
            >
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
