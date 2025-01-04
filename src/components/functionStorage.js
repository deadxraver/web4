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
// import 'https://unpkg.com/axios/dist/axios.min.js'

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
	// axios.post('/user', {
	// 	login: loginValue.value,
	// 	password: passwordValue.value
	// })
	// 	.then(function (response) {
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});

	let resp = axios.get(`https://super-shershni.ru:25002/WEB4-BACK/api/auth/login?login=${loginValue.value}&password=${passwordValue.value}`);
	resp.then(function(value) {
		console.log(value);
		if (value.data === "Logged in") {
			isAuthorized.value = true;
			// window.location.href="/main.html";
		}
	});
	return false; // заглушечка
}

export function onRegistration() {
	if (passwordValue.value !== passwordConfirm.value) {
		Qual.error("ээээм", "пароли не совпадают", err);
		return false;
	}
	console.log(axios.get(`https://super-shershni.ru:25002/WEB4-BACK/api/auth/register?login=${loginValue.value}&password=${passwordValue.value}`));
	return false; // заглушечка
}