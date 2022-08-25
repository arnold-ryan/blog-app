import React from "react";
import { PostTag } from "./PostTag";

export const Post = () => {
  return (
    <article className="px-4 py-4 ml-20 mx-auto lg:max-w-7xl">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4">
        {/*w-full mx-auto md:w-3/4 lg:w-1/2 */}
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="object-cover w-full h-64 bg-center rounded-lg"
          alt=""
        />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          Development
        </p>
        <div className="flex justify-between">
          <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            title="Rise of Tailwind - A Utility First CSS Framework"
          >
            Rise of Tailwind - A Utility First CSS Framework
          </h1>
          <div className="flex items-center space-x-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
        <div className="flex mb-6 space-x-2">
          <PostTag name="CSS" />
          <PostTag name="Tailwind" />
          <PostTag name="AlpineJs" />
        </div>
        <a className="flex items-center text-gray-700" href="/">
          <div className="avatar">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Praveen Juge"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>

      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let’s find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          ‘utility’. It is basically a set of classes that you can use in your
          HTML.
        </p>
        <p>
          Therefore, we don’t have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let’s find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          ‘utility’. It is basically a set of classes that you can use in your
          HTML.
        </p>
        <p>
          Therefore, we don’t have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let’s find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          ‘utility’. It is basically a set of classes that you can use in your
          HTML.
        </p>
        <p>
          Therefore, we don’t have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let’s find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          ‘utility’. It is basically a set of classes that you can use in your
          HTML.
        </p>
        <p>
          Therefore, we don’t have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let’s find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          ‘utility’. It is basically a set of classes that you can use in your
          HTML.
        </p>
        <p>
          Therefore, we don’t have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
      </div>
    </article>
  );
};
