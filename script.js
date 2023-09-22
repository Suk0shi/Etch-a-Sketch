const container = document.querySelector('#container');

ii = 0
while (ii < 16) {
    i = 0;
    while (i<16) {
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
        i++;
    }
    const next = document.createElement('div');
    next.classList.add('next');
    container.appendChild(next);
    ii++;
}


const content = document.querySelectorAll("div");
console.log(content);
content.forEach((contents) => {
    contents.addEventListener("mouseover", (event) => { //fix content.addEventListener is not a function
    console.log("working");
    contents.setAttribute('style', 'background: pink');
    });

});

