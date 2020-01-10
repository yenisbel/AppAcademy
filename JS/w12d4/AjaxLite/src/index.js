const DomNodeCollection = require('./dom_node_collection.js');

window.$l = (selector) =>  {
    if (typeof selector === 'string') {
        return getNodes(selector);
    } else if (typeof selector === 'function') {
        return readyDoc()
    }else {
        return new DomNodeCollection(selector);
    }

}

readyDoc = () =>{
    $(() => alert("the document is ready"));
}

getNodes = (selector) => {
    const nodesList = document.querySelectorAll(selector);

    return new DomNodeCollection(Array.from(nodesList))
} 

document.addEventListener("DOMContentLoaded", function () {
    console.log("the document is ready");
});

$l.extend = (obj, ...values)=>{
    values.forEach(value => {
        for (const key in value) {
            // if (arg.hasOwnProperty(key)) 
            obj[key] = value[key];   
        }
    });
    // hash
    return obj
}
// const objA = { a: "a", b: "a", c: "a" };
// const objB = { b: "b", c: "b" };
// const objC = { c: "c" };

// $l.extend(objA, objB, objC); //=> {a: 'a', b: 'b', c: 'c'}


// Create xhr obje
//  Make a defaults object
// ---Provide defaults for success, error, url, method, data, and contentType.
// Merge the options onto the defaults


 $l.ajax = (options) =>{
     const xhr = new XMLHttpRequest();
     const defaults = {
        method: 'GET',
        url: "",
        success: "We have your weather!",
        error: "An error occurred.",
        data: {},
        contentType: 'json',

     };
    xhr.open(defaults.method, defaults.url) ;
    xhr.onload = function () {
        console.log(xhr.status)
        if (xhr.status !== 404) {
            options.success = defaults.success
        }
      
        
    }

 }

/* 
 $.ajax({
      type: 'GET',
      url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
      success(data) {
        console.log("We have your weather!")
        console.log(data);
      },
      error() {
        console.error("An error occurred.");
      },
   });
*/