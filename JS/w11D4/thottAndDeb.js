Function.prototype.myThrott = function (context) {
    let tooSoon = false;
    return (...args) => {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => tooSoon = false, interval);
            this(...args);
        } 
    }
}

// Important similar to clock.js setInterval(callback, delay[, ...args])
Function.prototype.myDeboun = function (interval) {
    
}


// Assign searchBar.search to the returned debounced version
// searchBar.search = searchBar.search.myDebounce(500);