const container = document.querySelector('#container');

ii = 0
while (ii < 16) {
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flexContainer');
    container.appendChild(flexContainer);
    i = 0;
    while (i<16) {
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


const content = document.getElementsByClassName("content");

for (const contents of content) {
    contents.addEventListener("mouseover", (event) => { 
        contents.setAttribute('style', 'background: pink');
    }
)};
