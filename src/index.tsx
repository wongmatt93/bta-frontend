import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./context/AuthContextProvider";
import PreferencesContextProvider from "./context/PreferencesContextProvider";
import VotedOnContextProvider from "./context/VotedOnContextProvider";
import { PlannedTripsContextProvider } from "./context/PlannedTripsContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <PreferencesContextProvider>
      <VotedOnContextProvider>
        <PlannedTripsContextProvider>
          <App />
        </PlannedTripsContextProvider>
      </VotedOnContextProvider>
    </PreferencesContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
