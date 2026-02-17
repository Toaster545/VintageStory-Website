import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Devlog } from "./pages/Devlog";
import { Forum } from "./pages/Forum";
import { Buy } from "./pages/Buy";
import { ClientArea } from "./pages/ClientArea";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "devlog", Component: Devlog },
      { path: "forum", Component: Forum },
      { path: "buy", Component: Buy },
      { path: "client", Component: ClientArea },
      { path: "*", Component: NotFound },
    ],
  },
]);
