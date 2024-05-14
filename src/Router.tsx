import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExamplePage from "./pages/ExamplePage/ExamplePage";
import Pokemon from "./pages/ExamplePage/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: < ExamplePage />,
  },
  {
    path: "pokemon",
    element: <Pokemon/>,
  },
  // {
  //   path: "flights",
  //   element: < Pokemon />,
  // },
  // {
  //   path: "sightseeing",
  //   element: < Pokemon />,
  //     },
]);
