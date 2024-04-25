import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store.ts";

import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import "./global.css";

import router from "./routes/root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
    {/* </React.StrictMode> */}
  </Provider>
);
