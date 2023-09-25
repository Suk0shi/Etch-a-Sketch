
let gridSize = 16;

function createGrid() {
let container = document.getElementById('container');
console.log(container);
ii = 0
    while (ii < gridSize) {
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('flexContainer');
        container.appendChild(flexContainer);
        i = 0;
        while (i < gridSize) {
            const content = document.createElement('div');
            content.classList.add('content');
            flexContainer.appendChild(content);
            i++;
        }
        //const next = document.createElement('div');
        //next.classList.add('next');
        //container.appendChild(next);
        ii++;
    }
}

createGrid();

const content = document.getElementsByClassName("content");


function hoverChange() {
    for (const contents of content) {
    contents.addEventListener("mouseover", (event) => { 
        contents.setAttribute('style', 'background: red');
    }
)};
}
hoverChange();


//button

const button = document.getElementsByClassName("button");
console.log(button);
button[0].addEventListener("click", (clicked) => {
    console.log("working");
    gridSize = prompt("choose grid size", "e.g. 50");

    if (gridSize > 0 && gridSize <= 100) {
        console.log("sizechange");
        const removeContainer = document.getElementById("container");
        removeContainer.remove();
        const gridCenter = document.querySelector('#gridCenter');
        let container = document.createElement('div');
        container.classList.add('container');
        gridCenter.appendChild(container);
        container.setAttribute("id", "container");
        createGrid();
        hoverChange();
    }
    
});