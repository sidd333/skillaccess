import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        redirectUri="http://localhost:3000/collage/dashboard">
          {/* redirectUri= "https://skillaccessclient.netlify.app/collage/dashboard" */}
      <App />
    </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
