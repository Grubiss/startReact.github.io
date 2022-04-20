import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
// import Footer from "./components/Footer";
// import MainContent from "./components/MainContant"








function Page() {
    return (
        <div className="main"> 
            <App/>
        </div>
    )
}




ReactDOM.render(<Page />, document.getElementById("root"))