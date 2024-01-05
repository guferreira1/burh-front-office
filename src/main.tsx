import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SchoolProvider } from "./context/school.context.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "./context/modal.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ModalProvider>
        <SchoolProvider>
          <App />
        </SchoolProvider>
      </ModalProvider>
    </ChakraProvider>
  </React.StrictMode>
);
