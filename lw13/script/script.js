const btn = document.getElementsByClassName('btn');
const btnoff = document.getElementsByClassName('btnoff');

const form = document.querySelector('.main__questionnaire');
const contentForm = document.querySelector('.questionnaire-content');
const bgform = document.querySelector('.popup');
const error = document.querySelector('.form__error');

[].forEach.call(btn, function (el) {
        el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOn);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOn);
    })
});

[].forEach.call(btnoff, function (el) {
        el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOff);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOff);
    })
});

document.onkeydown = logKey;
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
    contentForm.style.display = 'flex';
}

function popupOff() {
    form.classList.add('popup_form-off');
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on');
    bgform.classList.remove('popup_bg-on');
    error.classList.add('form__error-off');
    error.classList.remove('form__error-on');    
}

function popupError() {
    contentForm.style.display = 'none';
    error.classList.add('form__error-on');
    error.classList.remove('form__error-off');
}

const elementEmail = document.querySelector('.form__email'); 
const elementName = document.querySelector('.form__name');
const elementActivity = document.querySelector('.form__activity');
const elementAgreement = document.querySelector('.form__checkbox');
const formButton = document.querySelector('.form__button');

const nameExpression = new RegExp('^[A-Za-zА-Яа-я \-]+$'); // 
const emailExpression = new RegExp('^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z]{2,}$'); 

formButton.addEventListener('click', async () => {
    elementName.classList.remove('input_error');
    elementEmail.classList.remove('input_error');
    elementActivity.classList.remove('input_error');
    let valid = true; 

    if (!nameExpression.test(elementName.value)) {
        elementName.classList.add('input_error');
        valid = false;
    }
    
    if (!emailExpression.test(elementEmail.value)) {
        elementEmail.classList.add('input_error');
        valid = false;
    }

    if (elementActivity.value === '-') {
        elementActivity.classList.add('input_error');
        valid = false;
    }

    if (!valid) {
        return;
    }

    const user = { 
        email: elementEmail.value, 
        first_name: elementName.value,
        activity: elementActivity.value,
        agreement: elementAgreement.checked == 1 ? 'on' : 'off'
    };
    
    fetch('save_survey.php', {
        method: 'POST',
        body: JSON.stringify(user) //перевод в объект
    })
    .then(  // 2 функции, одна на корректный ответ, другая на ошибку
        response => {
            return response.text();
        }
    )
    .then(
        result => { 
            if (JSON.parse(result)['status'] !== 200) {
                console.log(result);
                popupError();                    
            } else {
                console.log(result);
                popupOff();
            }
        }
    )
    .catch(
        error => console.log(error)
    );
});