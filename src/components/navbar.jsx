import React from "react";
import { useState } from "react";

function Navbar(props) {
    const[color, setColor] = useState("red");
  return (
    
    <div className="W-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className="bg-gray-800 text-white p-4 ">
    <div className="container mx-auto flex items-center justify-between ">
      <button className="navbar-toggler bg-red-500 p-3 rounded-lg w-30 " onClick={() => setColor("red")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">red</span>
    </button>
    <button className="navbar-toggler bg-blue-500 p-3 rounded-lg w-30" onClick={() => setColor("blue")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">blue</span>
    </button> 
    <button className="navbar-toggler bg-pink-500 p-3 rounded-lg w-30" onClick={() => setColor("pink")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">pink</span>
    </button> 
       <button className="navbar-toggler bg-yellow-500 p-3 rounded-lg w-30" onClick={() => setColor("yellow")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">yellow</span>
    </button>
     <button className="navbar-toggler bg-green-500 p-3 rounded-lg w-30" onClick={() => setColor("green")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">green</span>
    </button>
       <button className="navbar-toggler bg-orange-500 p-3 rounded-lg w-30" onClick={() => setColor("orange")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">orange</span>
    </button>
     <button className="navbar-toggler bg-olive-500 p-3 rounded-lg w-30" onClick={() => setColor("olive")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">olive</span>
    </button>
     <button className="navbar-toggler bg-purple-500 p-3 rounded-lg w-30" onClick={() => setColor("purple")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">purple</span>
    </button>
     <button className="navbar-toggler bg-violet-500 p-3 rounded-lg w-30" onClick={() => setColor("violet")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">violet</span>
    </button>
     <button className="navbar-toggler bg-gray-500 p-3 rounded-lg w-30" onClick={() => setColor("gray")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">grey</span>
    </button>
     
</div>
    </div>  
    </div>
  );
}

export default Navbar;