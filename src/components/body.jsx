import React from "react";
import { connect } from 'react-redux';
import Nav from "./Nav";
import Home from "./home";

function Body({ darkMode }) {
    return (
        <div className={`Bod ${darkMode ? "dark" : ""}`}>

        <Nav/>
        <Home/>
          
        </div>
      );


}

const mapStateToProps = (state) => ({
    darkMode: state.darkMode,
  });
  
  export default connect(mapStateToProps)(Body);