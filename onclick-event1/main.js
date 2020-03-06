const content = document.getElementById('content');
const button = document.querySelector('#show-more');

button.addEventListener('click', changeBox);

function changeBox() {
    if(content.className == "open") {
        // shrink the box
        content.className = ""
        button.innerHTML = 'Show More'
    } else {
        //  expand the box
        content.className = 'open'
        button.innerHTML = 'Show Less'
    }
}