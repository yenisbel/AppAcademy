// set up an event listener on the window for the scroll e
const imgs = Array.from(document.querySelectorAll('.slide'));
function myEvenImg(e){

  imgs.forEach(img => {
    
    const middleOfImg = (img.offsetTop + (img.height /2));
    const bottomOfImg = img.offsetTop + img.height;
    const bottomOfScreen = window.scrollY + window.innerHeight;
    const topOfScreen = window.scrollY;

    let isOnScreen = (middleOfImg < bottomOfScreen);
    
    if (isOnScreen) {
      // debugger;
      // console.log(img);
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
    
    // img.height;
    // img.offsetTop;
  });
}

// window.scrollY
// window.innerHeight




window.addEventListener('scroll', debounce(myEvenImg))

function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    const context = this;
    const args = arguments;

    // The function to be called after debounce time has elapsed
    const later = function () {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not in the beginning
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period - returns true
    timeout = setTimeout(later, wait);

    // Call immediately if you're doing a leading end execution
    if (callNow) func.apply(context, args);
  };
}