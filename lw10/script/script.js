let btn = document.querySelectorAll('.btn'); // buttons
let btnoff = document.querySelectorAll('.btnoff'); 


let form = document.querySelector('.main__questionnaire'); // возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов
let bgform = document.querySelector('.popup'); //затемнение заднего  фона 

btn.forEach( (el) => { 
    el.addEventListener('click', () => {
        return requestAnimationFrame(popupOn);
    })
});

btnoff.forEach( (el) => { //нэйминг
    el.addEventListener('click', () => {
        return requestAnimationFrame(popupOff);
    })
});

document.onkeydown = logKey; // если кнопка escape нажата 
function logKey(e) {
    if (e.code == "Escape") {
        popupOff();
    }
}


function popupOn() {
    form.classList.add('popup_form-on'); 
    bgform.classList.add('popup_bg-on');
    form.classList.remove('popup_form-off');
    bgform.classList.remove('popup_bg-off');
}

function popupOff() {
    form.classList.add('popup_form-off'); 
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on'); 
    bgform.classList.remove('popup_bg-on');
}