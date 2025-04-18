import { sendEmail, sendTelegram } from '../$/index.js';

export function form() {
    console.log('form works');

    const sendForm = document.querySelector('.sendForm');
    const sendForm__inputs = document.querySelectorAll('.sendForm__input');
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirmPassword');
    const message = document.querySelector('.message');

    sendForm__inputs.forEach(sendForm__input => {
        if (sendForm__input.getAttribute('name') === 'username') {
            const usernameError = document.querySelector('.usernameError');
            let touched = false;

            username.addEventListener('focus', () => {
                touched = true;
            });

            username.addEventListener('input', () => {
                if (touched && username.value === '') {
                    usernameError.innerText = 'Пусто';
                } else if (username.value.length < 3) {
                    usernameError.innerText = 'Поле должно содержать не менее 3 символов';
                } else if (username.value.length > 20) {
                    usernameError.innerText = 'Поле должно содержать не более 20 символов';
                } else {
                    usernameError.innerText = '';
                }
            });

            username.addEventListener('blur', () => {
                username.value = username.value.trim();

                if (username.value === '') {
                    usernameError.innerText = 'Пусто';
                }
            });
        } else if (sendForm__input.getAttribute('name') === 'email') {
            const emailError = document.querySelector('.emailError');
            let touched = false;

            email.addEventListener('focus', () => {
                touched = true;
            });

            email.addEventListener('input', () => {
                if (touched && email.value === '') {
                    emailError.innerText = 'Пусто';
                } else if (!emailRegExp.test(email.value)) {
                    emailError.innerText = 'почта не валидна';
                } else {
                    emailError.innerText = '';
                }
            });

            email.addEventListener('blur', () => {
                email.value = email.value.trim();

                if (email.value === '') {
                    emailError.innerText = 'Пусто';
                }
            });
        } else if (sendForm__input.getAttribute('name') === 'password') {
            const passwordError = document.querySelector('.passwordError');
            let touched = false;

            password.addEventListener('focus', () => {
                touched = true;
            });

            password.addEventListener('input', () => {
                if (touched && password.value === '') {
                    passwordError.innerText = 'Пусто';
                } else if (password.value.length < 6) {
                    passwordError.innerText = 'Поле должно содержать не менее 6 символов';
                } else if (password.value.length > 12) {
                    passwordError.innerText = 'Поле должно содержать не более 12 символов';
                } else {
                    passwordError.innerText = '';
                }
            });

            password.addEventListener('blur', () => {
                password.value = password.value.trim();

                if (password.value === '') {
                    passwordError.innerText = 'Пусто';
                }
            });
        } else if (sendForm__input.getAttribute('name') === 'confirmPassword') {
            const confirmPasswordError = document.querySelector('.confirmPasswordError');
            let touched = false;

            confirmPassword.addEventListener('focus', () => {
                touched = true;
            });

            confirmPassword.addEventListener('input', () => {
                if (touched && confirmPassword.value === '') {
                    confirmPasswordError.innerText = 'Пусто';
                } else if (confirmPassword.value != password.value) {
                    confirmPasswordError.innerText = 'password и confirmPassword отличаются';
                } else {
                    confirmPasswordError.innerText = '';
                }
            });

            confirmPassword.addEventListener('blur', () => {
                confirmPassword.value = confirmPassword.value.trim();

                if (confirmPassword.value === '') {
                    confirmPasswordError.innerText = 'Пусто';
                } else if (confirmPassword.value == password.value) {
                    confirmPasswordError.innerText = '';
                }
            });
        } else if (sendForm__input.getAttribute('name') === 'message') {
            const messageError = document.querySelector('.messageError');
            let touched = false;

            message.addEventListener('focus', () => {
                touched = true;
            });

            message.addEventListener('input', () => {
                if (touched && message.value === '') {
                    messageError.innerText = 'Пусто';
                } else {
                    messageError.innerText = '';
                }
            });

            message.addEventListener('blur', () => {
                message.value = message.value.trim();

                if (message.value === '') {
                    messageError.innerText = 'Пусто';
                } else {
                    messageError.innerText = '';
                }
            });
        }
    });

    sendForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const noUser =
            username.value === '' || username.value.length < 3 || username.value.length > 20;
        const noEmail = email.value === '' || !emailRegExp.test(email.value);
        const noPassword =
            password.value === '' || password.value.length < 6 || password.value.length > 12;
        const confirmedPassword = password.value == confirmPassword.value;
        const noMessage = message.value === '';

        if (noUser || noEmail || noPassword || noMessage) {
            console.log('❌ Ошибка валидации формы');
        } else if (!noUser && !noEmail && !noPassword && confirmedPassword && !noMessage) {
            // sendEmail({ username, email, message });
            sendTelegram({ username, email, message });
            sendForm.reset();
        }
    });
}
