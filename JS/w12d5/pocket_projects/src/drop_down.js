import { htmlGenerator } from "./warmup";

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const ul = document.getElementsByClassName('drop-down-dog-list')[0];

function dogLinkCreator() {
  const keys = Object.keys(dogs);
  const dogLinksA = [];
  keys.forEach(dog => {
    let a = document.createElement('a');
    a.innerHTML = dog;
    a.setAttribute('href', dogs[dog]);

    let liTag = document.createElement('li');
    liTag.classList.add('dog-link');
    // liTag.classList.add('hidden');
    liTag.appendChild(a);
    dogLinksA.push(liTag);
  });
  return dogLinksA;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  dogLinks.forEach(dogLink => {
    ul.appendChild(dogLink);
  });
}

function handleEnter(e) {
  ul.classList.remove('hidden');
  ul.classList.add('visible');
}

function handleLeave(e) {
  ul.classList.remove('visible');
  ul.classList.add('hidden');
}

const dropDown = document.getElementsByClassName('drop-down-dog-nav')[0];
dropDown.addEventListener('mouseenter', handleEnter);
dropDown.addEventListener('mouseleave', handleLeave);
attachDogLinks();

