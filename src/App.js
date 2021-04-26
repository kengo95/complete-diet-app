import React from "react"
import Router from "./Router"
import "./assetes/reset.css"
import "./assetes/style.css"
import Header from "./components/products/Header"
import Footer from "./components/products/Footer"

function App() {
  return (
    <div >
      <Header />
        <div className="main">
        <Router />
        </div>
      <Footer />
    </div>
  );
}

export default App;
