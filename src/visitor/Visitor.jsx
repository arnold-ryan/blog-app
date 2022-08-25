import React from "react";
import { LatestBlogs } from "../blog/LatestBlogs";
import { RecomBlog } from "../blog/RecomBlog";
import { Header } from "../header/Header";
import { Navbar } from "../navbar/Navbar";

export const Visitor = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <RecomBlog />
        <LatestBlogs />
      </main>
    </>
  );
};
