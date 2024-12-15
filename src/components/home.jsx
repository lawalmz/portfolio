import React from "react";
import { connect } from 'react-redux';



function Home({darkMode}) {
    return (
     
        <div className= {`home-container ${darkMode ? "dark" : ""}`}>
           <h1 className= {`name ${darkMode ? "dark" : ""}`}>HEY, I'M LAWAL LAWAL MUAZU</h1>
           <p>A results-driven web developer who creates and oversees websites and web applications to ensure the success of the finished product</p>
           <button className="home-btn">Projects</button>
        </div>
        
    );
}


const mapStateToProps = (state) => ({
    darkMode: state.darkMode,
  });
  
  export default connect(mapStateToProps)(Home);