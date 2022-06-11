const btn=document.getElementsByClassName("btn"),btnoff=document.getElementsByClassName("btnoff"),form=document.querySelector(".main__questionnaire"),contentForm=document.querySelector(".questionnaire-content"),bgform=document.querySelector(".popup"),error=document.querySelector(".form__error");function logKey(e){"Escape"==e.code&&popupOff()}function popupOn(){form.classList.add("popup_form-on"),bgform.classList.add("popup_bg-on"),form.classList.remove("popup_form-off"),bgform.classList.remove("popup_bg-off"),contentForm.style.display="flex"}function popupOff(){form.classList.add("popup_form-off"),bgform.classList.add("popup_bg-off"),form.classList.remove("popup_form-on"),bgform.classList.remove("popup_bg-on"),error.classList.add("form__error-off"),error.classList.remove("form__error-on")}function popupError(){contentForm.style.display="none",error.classList.add("form__error-on"),error.classList.remove("form__error-off")}[].forEach.call(btn,(function(e){e.addEventListener("click",(()=>{const e=requestAnimationFrame(popupOn);return cancelAnimationFrame(e),requestAnimationFrame(popupOn)}))})),[].forEach.call(btnoff,(function(e){e.addEventListener("click",(()=>{const e=requestAnimationFrame(popupOff);return cancelAnimationFrame(e),requestAnimationFrame(popupOff)}))})),document.onkeydown=logKey;const elementEmail=document.querySelector(".form__email"),elementName=document.querySelector(".form__name"),elementActivity=document.querySelector(".form__activity"),elementAgreement=document.querySelector(".form__checkbox"),formButton=document.querySelector(".form__button"),nameExpression=new RegExp("^[A-Za-zА-Яа-я -]+$"),emailExpression=new RegExp("^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+.[A-Za-z]{2,}$");formButton.addEventListener("click",(async()=>{elementName.classList.remove("input_error"),elementEmail.classList.remove("input_error"),elementActivity.classList.remove("input_error");let e=!0;if(nameExpression.test(elementName.value)||(elementName.classList.add("input_error"),e=!1),emailExpression.test(elementEmail.value)||(elementEmail.classList.add("input_error"),e=!1),"-"===elementActivity.value&&(elementActivity.classList.add("input_error"),e=!1),!e)return;const o={email:elementEmail.value,first_name:elementName.value,activity:elementActivity.value,agreement:1==elementAgreement.checked?"on":"off"};fetch("save_survey.php",{method:"POST",body:JSON.stringify(o)}).then((e=>e.text())).then((e=>{200!==JSON.parse(e).status?(console.log(e),popupError()):(console.log(e),popupOff())})).catch((e=>console.log(e)))}));