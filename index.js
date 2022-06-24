
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);




let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

let elem = document.getElementById('elem');
elem.style.background = 'yellow';
elem.style.fontSize = '32px';


let elements = document.querySelectorAll('ul > li:last-child');
for (let elem of elements) {
    alert(elem.innerHTML); // "тест", "пройден"
}


let chapter = document.querySelector('.chapter'); // LI
alert(chapter.closest('.book')); // UL
alert(chapter.closest('.contents')); // DIV

alert(chapter.closest('h1')); // null (потому что h1 - не предок)

let divs = document.getElementsByTagName('div');
alert(divs);

let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
}




