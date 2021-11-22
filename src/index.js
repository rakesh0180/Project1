import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <Suspense
      fallback={
        <div>
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
