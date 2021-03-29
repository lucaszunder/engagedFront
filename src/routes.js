import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, NotLoggedLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import SelectUser from "./views/SelectUser";
import Courses from "./views/Courses";
import Course from "./views/Course";
import Lesson from "./views/Lesson";
import CreateLesson from "./views/CreateLesson";
import CreateCourse from "./views/CreateCourse";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />,
    role: ["student", "contentCreator"]
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview,
    role: ["student", "contentCreator"]
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite,
    role: ["student", "contentCreator"]
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost,
    role: ["student", "contentCreator"]
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
    role: ["student", "contentCreator"]
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview,
    role: ["student", "contentCreator"]
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables,
    role: ["student", "contentCreator"]
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts,
    role: ["student", "contentCreator"]
  },
  {
    path: "/new-course",
    exact: true,
    layout: DefaultLayout,
    component: CreateCourse,
    role: ["contentCreator"]
  },
  {
    path: "/course/:id/create",
    exact: true,
    layout: DefaultLayout,
    component: CreateLesson,
    role: ["contentCreator"]
  },
  {
    path: "/courses",
    exact: true,
    layout: DefaultLayout,
    component: Courses,
    role: ["student", "contentCreator"]
  },
  {
    path: "/course/:id",
    exact: true,
    layout: DefaultLayout,
    component: Course,
    role: ["student", "contentCreator"]
  },
  {
    path: "/course/:id/lesson/:lesson_id",
    exact: true,
    layout: DefaultLayout,
    component: Lesson,
    role: ["student", "contentCreator"]
  },
  {
    path: "*",
    layout: NotLoggedLayout,
    component: SelectUser,
    role: ["none"]
  },
  {
    path: "/login",
    layout: NotLoggedLayout,
    component: () => <Redirect to="/login" />,
    role: ["none"]
  }
];
