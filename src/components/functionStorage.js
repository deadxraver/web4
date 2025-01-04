import {
	buttonText,
	isAuthorized,
	login,
	loginValue,
	passwordConfirm,
	passwordValue
} from "@/components/declareConsts.js";

import 'https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert@latest/minfile/quantumalert.js'
import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'

export function logregChange() {
	login.value = !login.value;
	localStorage.setItem("login", login.value);
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
	let login = loginValue.value;
	let password = passwordValue.value;
	let resp = axios.get(`https://super-shershni.ru:25002/WEB4-BACK/api/auth/login?login=${login}&password=${password}`);
	resp.then(function(value) {
		console.log(value);
		if (value.data === "Logged in") {
			isAuthorized.value = true;
			localStorage.setItem("login", login);
			localStorage.setItem("password", password);
			document.title = 'копаюсь... в чреве кита... грязюку всю';
		}
	});
	return false;
}

export function onRegistration() {
	let login = loginValue.value;
	let password = passwordValue.value;
	if (passwordValue.value !== passwordConfirm.value) {
		Qual.error("ээээм", "пароли не совпадают", err);
		return false;
	}
	axios.get(`https://super-shershni.ru:25002/WEB4-BACK/api/auth/register?login=${login}&password=${password}`).then(value => {
		if (value.data === "Registered") {
			isAuthorized.value = true;
			localStorage.setItem("login", login);
			localStorage.setItem("password", password);
			document.title = 'копаюсь... в чреве кита... грязюку всю';
		}
	});
	return false;
}