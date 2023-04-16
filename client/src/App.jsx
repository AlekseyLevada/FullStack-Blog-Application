import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage";
import { AllPosts } from "./pages/AllPosts";
import { PostPage } from "./pages/PostPage";
import { AddPost } from "./pages/AddPost";
import {RegisterPage} from './pages/RegisterPage';
import {LoginPage} from './pages/LoginPage';
import {EditPost} from './pages/EditPost';

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
      </Layout>
  );
};