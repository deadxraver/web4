import {buttonText, login, loginValue, passwordConfirm, passwordValue} from "@/components/declareConsts.js";

import 'https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert@latest/minfile/quantumalert.js'

export function logregChange() {
	login.value = !login.value;
	sessionStorage.setItem("login", login.value);
	buttonText.value = login.value ? 'Не зарегистрирован' : 'Уже зарегистрирован';
}

export function onLoginInput(e) {
	loginValue.value = e.target.value.replaceAll(' ', '');
}

export function onPasswordInput(e) {
	passwordValue.value = e.target.value.replaceAll(' ', '');
}

export function onPasswordConfirm(e) {
	passwordConfirm.value = e.target.value.replaceAll(' ', '');
}

export function onLogin() {
	return false; // заглушечка
}

export function onRegistration() {
	if (passwordValue.value !== passwordConfirm.value) {
		Qual.error("ээээм", "пароли не совпадают", err);
		return false;
	}
	return false; // заглушечка
}