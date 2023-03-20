import React from "react";
import ReactDOM from "react-dom/client";

const obj = {
  firstname: "Ankit",
  lastname: "Kumar",
  myname: () => {
    console.log(this);
  },
};

obj.myname(this);
console.log(obj.firstname);
