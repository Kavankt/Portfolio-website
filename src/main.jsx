// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./state/store"; // ✅ your store file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  {/* ✅ Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);