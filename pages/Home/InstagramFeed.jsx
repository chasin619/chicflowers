import React from "react";

const feedData = ["/feed-1.jpg", "/feed-2.jpg", "/feed-3.jpg", "/feed-4.jpg"];

const getFeed = async () => {
  if (!process.env.INSTAGRAM_KEY) return;

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;

  const data = await fetch(url);

  const feed = await data.json();

  return feed;
};

const InstagramFeed = async () => {
  const feed = await getFeed();

  return (
    <div className="flex flex-col items-center text-center mt-24 sm:mt-32 lg:mt-40 mb-10 gap-9 sm:gap-12">
      <h2 className="uppercase text-[40px] sm:text-[46px] lg:text-[52px] !leading-[1.1em] font-italiana font-semibold">
        FOLLOW ALONG
      </h2>

      <h3 className="uppercase font-italiana text-lg font-semibold">
        @chic.flowers
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        {feed?.data
          .filter((post) => post.media_type === "IMAGE")
          .slice(0, 4)
          .map((post, i) => (
            <a
              key={i}
              target="_blank"
              href={post.permalink}
              className="w-full h-full"
            >
              <img
                src={post.media_url}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
