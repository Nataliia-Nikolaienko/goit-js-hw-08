import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('.feedback-form textarea'),
}

const STORAGE_KEY = 'feedback-form-state';
const formDate = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInputClick);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));

populateTextarea(formDate);


function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('Email');
    console.log(formDate);
};

function onInputClick(evt) {
    formDate[evt.target.name] = evt.target.value;
}

function onEmailInput(evt) {
    const email = JSON.stringify(formDate[evt.target.name]);

    localStorage.setItem('Email', email);
};

function onMessageInput(evt) {
    const message = JSON.stringify(formDate[evt.target.name]);

    localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedEmail = localStorage.getItem('Email');

    if (savedMessage) {
        refs.message.value = JSON.parse(savedMessage);
        formDate.message = refs.message.value;
    }

    if (savedEmail) {
        refs.email.value = JSON.parse(savedEmail);
        formDate.email = refs.email.value;
    }
}