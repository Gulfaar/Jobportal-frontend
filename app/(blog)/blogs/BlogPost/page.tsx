"use client";
import React from "react";
import Breadcrumb from "@/app/Components/Blogs/Breadcrumb";
import BlogContent from "@/app/Components/Blogs/BlogContent";
import TableOfContents from "@/app/Components/Blogs/TableOfContents";
import SocialShare from "@/app/Components/Blogs/SocialShare";
import RelatedPosts from "@/app/Components/Blogs/RelatedPosts";
import CommentSection from "@/app/Components/Blogs/CommentSection";
import Footer from "@/app/Components/Home/Footer";
import Header from "@/app/Components/Header/Header";

const BlogPost = () => {
    return (
        <div className="flex flex-col  min-h-screen">
            <link
                href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&family=Montserrat:wght@400;500&display=swap"
                rel="stylesheet"
            />

            <Header title="Blogs"
              subtitle="Explore a wide range of explore our blogs" />

            <main className="flex-grow">
                

                <h1 className="mt-10  mx-10 my-5 text-5xl font-bold text-black max-sm:text-4xl">
                    News and Blog
                </h1>

                <section className="relative px-10 py-0 max-md:px-5 max-md:py-0">
                    <BlogContent />
                    <TableOfContents />
                    <SocialShare />
                    <RelatedPosts />
                    <CommentSection />
                </section>
            </main>

            <Footer />

        </div>
    );
};

export default BlogPost;
