// import { useState } from 'react'
import "./App.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom"; //Aprender isso aqui

function App() {
  return <RouterProvider router={router} />;
}

export default App;
