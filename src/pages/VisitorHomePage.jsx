import React from "react";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { Visitor } from "../visitor/Visitor";
import { VisitorPost } from "../visitor/VisitorPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";

export const VisitorHomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Visitor />} />
        <Route path="/write" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/posts/:postId" element={<VisitorPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
