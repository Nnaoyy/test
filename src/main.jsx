import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { QCM } from "./pages/QCM";
import { Intrus } from "./pages/Intrus";
import { Rules34 } from "./pages/Rules34";
import { Test } from "./pages/Test";
import { QCMT } from "./pages/QCMT";
import { QCMTQuest } from "./componants/qcmt/QCMTQuest";
import { ImgQuest } from "./componants/image/ImgQuest";
import { Img } from "./pages/Img";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "quest/:questId",
        element: <QCM />
      },
      {
        path: "questInt/:questId",
        element: <Intrus />
      },
      {
        path: "rule/:ruleId",
        element: <Rules34 />
      },
      {
        path: "test/:questId",
        element: <Test />
      },
      {
        path: "qcmt",
        element: <QCMT />
      },

      {
        path: "qcmt/:theme/:Id",
        element: <QCMTQuest />
      },
      {
        path: "img/:id",
        element: <ImgQuest />
      },
      {
        path: "image/:imgId",
        element: <Img />
      }



    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)