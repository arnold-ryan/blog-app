import React from "react";
import { LatestPost } from "./LatestPost";

export const LatestBlogs = () => {
  return (
    <section
      className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="latest"
    >
      <h2 className="text-xl mb-6 font-medium text-gray-900">Latest Blogs</h2>
      <div className="mb-10 border-t border-b border-purple-200 divide-y">
        <LatestPost
          link="#"
          category="Books"
          date="Aug 18 2022"
          title="Sharing technology and supporting innovation is not just about equity. "
          text="Inequity has plagued the responses to harmful pathogens. Take COVID-19: an unprecedented 11.9 billion vaccine doses have been. Pay no attention to the leaky toilet or the gaping pit in the bathroom, but instead these fun little succulents that I’ve placed"
        />
        <LatestPost
          link="#"
          category="Books"
          date="Aug 18 2022"
          title="I Asked 167 Successful Entrepreneurs How to Start a Business"
          text="Inequity has plagued the responses to harmful pathogens. Take COVID-19: an unprecedented 11.9 billion vaccine doses have been"
        />
        <LatestPost
          link="#"
          category="Books"
          date="Aug 18 2022"
          title="When I Sleep, I Dream About A Comic Book Shop That Never Ends"
          text="Inequity has plagued the responses to harmful pathogens. Take COVID-19: an unprecedented 11.9 billion vaccine doses have been"
        />
        <LatestPost
          link="#"
          category="Books"
          date="Aug 18 2022"
          title="Has the sun set on the profession of illustrator?"
          text="Inequity has plagued the responses to harmful pathogens. Take COVID-19: an unprecedented 11.9 billion vaccine doses have been"
        />
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See all articles
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </section>
  );
};
