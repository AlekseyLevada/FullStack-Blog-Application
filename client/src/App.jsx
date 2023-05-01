import React from "react";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { AllPosts } from "./pages/AllPosts";
import { PostPage } from "./pages/PostPage";
import { AddPost } from "./pages/AddPost";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { EditPost } from "./pages/EditPost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<WelcomePage />} />
        <Route path={"/main"} element={<MainPage />} />
        <Route path="posts" element={<AllPosts />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="new" element={<AddPost />} />
        <Route path="edit" element={<EditPost />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position={"bottom-right"} autoClose={3000} />
    </Layout>
  );
};
