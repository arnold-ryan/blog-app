import React from "react";
import { LatestBlogs } from "../blog/LatestBlogs";
import { RecomBlog } from "../blog/RecomBlog";
import { Footer } from "../footer/Footer";
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
      <Footer />
    </>
  );
};
