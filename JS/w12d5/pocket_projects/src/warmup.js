
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let newElement = document.createElement('p');
    newElement.innerHTML = string;
    Array.from(htmlElement.children).forEach(child => {
        htmlElement.removeChild(child);
    });
    htmlElement.appendChild(newElement);
};

htmlGenerator('Party Time.', partyHeader);
