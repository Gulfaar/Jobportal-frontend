import React from "react";

const RelatedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Waltmart",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8267f38f7b49d428d61aae1266d20b2f4d793ef",
    },
    {
      id: 2,
      title: "Waltmart",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8267f38f7b49d428d61aae1266d20b2f4d793ef",
    },
    {
      id: 3,
      title: "Waltmart",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8267f38f7b49d428d61aae1266d20b2f4d793ef",
    },
    {
      id: 4,
      title: "Waltmart",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8267f38f7b49d428d61aae1266d20b2f4d793ef",
    },
  ];

  return (
    <section className="mx-0 my-10" aria-labelledby="related-posts-heading">
      <h2
        id="related-posts-heading"
        className="mb-8 text-2xl font-bold text-black text-opacity-80"
      >
        More Posts
      </h2>
      <div className="flex gap-8 max-md:flex-wrap max-md:justify-center">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col justify-between p-10 rounded-xl bg-teal-800 bg-opacity-50 h-[281px] w-[281px] max-sm:w-full"
          >
            <figure>
              <img
                src={post.image}
                className="rounded-md h-[121px] w-[198px]"
                alt="Walmart store"
              />
            </figure>
            <h3 className="text-2xl font-bold text-center text-white">
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
