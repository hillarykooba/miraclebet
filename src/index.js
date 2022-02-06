import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Major from "./Major";
import en from "./routes/en";
import ContactUs from "./routes/ContactUs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="en" element={<en />} />
          <Route path="contact" element={<ContactUs />} />
          <Route index element={<Major />} />
          <Route
            path="*"
            element={
              <main>
                <p>there's nothing</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
