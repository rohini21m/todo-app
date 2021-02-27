let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let eL = document.getElementsByTagName('li');


btn.onclick = function () {
    let txt = input.value;
    if (txt === "") {
        alert("enter some activity");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = "";

    }

};
list.onclick = function (ev) {
    if (ev.target.tagName == "LI") {
        ev.target.classList.toggle('checked');
    }
};
