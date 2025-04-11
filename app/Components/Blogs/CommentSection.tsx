"use client";
import React, { useState } from "react";
import UserAvatar from "./UserAvatar";

const CommentSection = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted comment:", { username, comment });
    setUsername("");
    setComment("");
  };

  return (
    <section className="mx-0 my-10" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="mb-5 text-2xl font-bold text-black">
        Comments
      </h2>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row gap-5 items-center mb-10"
      >
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <input
            type="text"
            placeholder="User name"
            className="p-2.5 text-sm border-[none] text-neutral-400 flex-grow"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Your username"
          />
          <div className="hidden sm:block w-px h-10 bg-stone-300" aria-hidden="true" />
          <input
            type="text"
            placeholder="Your comment......."
            className="p-2.5 text-sm border-[none] text-neutral-400 flex-grow"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            aria-label="Your comment"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 text-base text-white bg-sky-500 rounded-md cursor-pointer border-[none] w-full sm:w-auto"
        >
          Comment
        </button>
      </form>

      <div className="flex flex-col gap-5">
        <Comment
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc."
          username="User"
          timeAgo="a min ago"
        />
        <Comment
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc."
          username="User"
          timeAgo="a min ago"
        />
        <Comment
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc."
          username="User"
          timeAgo="a min ago"
        />
      </div>
    </section>
  );
};

interface CommentProps {
  text: string;
  username: string;
  timeAgo: string;
}

const Comment: React.FC<CommentProps> = ({ text, username, timeAgo }) => {
  return (
    <article className="flex px-6 py-4 bg-white rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <UserAvatar />
      <div className="ml-5">
        <p className="mb-6 text-lg text-black text-opacity-80">{text}</p>
        <div className="flex gap-8">
          <span className="text-black text-opacity-80">{username}</span>
          <button className="text-black">Reply</button>
          <time className="text-sky-500 text-opacity-50">{timeAgo}</time>
        </div>
      </div>
    </article>
  );
};

export default CommentSection;
