import React from "react";

function Cards({
  username =/**defult */ "OG",
  post = "Not assigned yet",
  place = "not found",
}) {
  // console.log(props)
  const img =
    "https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg";
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={img}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-mediu">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepeid
              nisi ullam. Quas quisquam nesciunt autem excepturi, dolore
              dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet, iste!
            </p>
          </blockquote>
          <figcaption>
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}, {place}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Cards;
