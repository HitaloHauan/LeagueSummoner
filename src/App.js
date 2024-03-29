import React from "react";
import ContentPage from "./app/main/Content/ContentPage";
import Navbar from './app/main/TopNavbar/Navbar'
import Footer from './app/main/Footer/Footer'

function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar/>
      <ContentPage/>
      <Footer/>
    </div>
  );
}

export default App;