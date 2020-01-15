import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import {Tab} from "./tab";

const tabContent = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second pane here' },
    { title: 'three', content: 'Third pane here' }
]

function Root(){
    return (
     <div>
         <Clock />
         <Tab tabContent={tabContent}/>
     </div> 
    )
};



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
});

// Your widgets.jsx should have a DOMContentLoaded listener that calls
//  ReactDOM.render() with a Root component and a main DOM element as the hook.