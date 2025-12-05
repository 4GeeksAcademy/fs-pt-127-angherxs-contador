import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from "./components/SecondsCounter";

ReactDOM.createRoot(document.getElementById('root')).render(

  <SecondsCounter />


)
let counter = 0;

function secondsCounter() {
  counter++;
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<SecondsCounter seconds={counter} />);
}

setInterval(secondsCounter, 1000)
