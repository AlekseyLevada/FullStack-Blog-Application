import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { AllPosts } from "./pages/AllPosts";
import { PostPage } from "./pages/PostPage";
import { AddPost } from "./pages/AddPost";
import {RegisterPage} from './pages/RegisterPage/RegisterPage';
import {LoginPage} from './pages/LoginPage/LoginPage';
import {EditPost} from './pages/EditPost';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
      <Layout>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path="posts" element={<AllPosts />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="new" element={<AddPost />} />
        <Route path="register" element={<RegisterPage/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="edit" element={<EditPost />} />
      </Routes>
          <ToastContainer
              position={"bottom-right"}
              hideProgressBar={true}
              autoClose={2000}
          />
      </Layout>
  );
};
