import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// 🟢 Apply stored theme BEFORE React renders
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark" || storedTheme === "light") {
  document.documentElement.setAttribute("data-theme", storedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute(
    "data-theme",
    prefersDark ? "dark" : "light"
  );
}

const Root = () => {
  const content = (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  // ✅ Auth enabled only if Clerk key exists
  return clerkKey ? (
    <ClerkProvider publishableKey={clerkKey}>
      {content}
    </ClerkProvider>
  ) : (
    content
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
