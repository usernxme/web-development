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
    .then(  
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