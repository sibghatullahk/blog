// src/app/blog/[slug]/page.tsx
"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";

const BlogPostPage = () => {
  return (
    <div className="blog-post-page">
      <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
      <p className="mb-8">This is the content of the blog post.</p>
      <CommentSection />
    </div>
  );
};

export default BlogPostPage;
