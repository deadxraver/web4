import {
	buttonText, dots,
	isAuthorized,
	login,
	loginValue,
	passwordConfirm,
	passwordValue, url
} from "@/components/declareConsts.js";

import 'https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert@latest/minfile/quantumalert.js'
import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'

export function logregChange() {
	login.value = !login.value;
	localStorage.setItem("login", login.value);
	buttonText.value = login.value ? 'Я новенький' : 'Я уже смешарик';
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
	let resp = axios.get(`${url}/auth/login?login=${login}&password=${password}`);
	resp.then(function (value) {
		isAuthorized.value = true;
		localStorage.setItem("login", login);
		localStorage.setItem("password", password);
		document.title = 'копаюсь... в чреве кита... грязюку всю';
		console.log(value.data);
		document.getElementById("canvas").style.display = '';
	}).catch(function (err) {
		console.log(err.message);
		Qual.error("Ошибка", err.message);
	});
	return false;
}

export function onRegistration() {
	let login = loginValue.value;
	let password = passwordValue.value;
	if (passwordValue.value !== passwordConfirm.value) {
		Qual.error("ээээм", "пароли не совпадают");
		return false;
	}
	axios.get(`${url}/auth/register?login=${login}&password=${password}`).then(() => {
		isAuthorized.value = true;
		localStorage.setItem("login", login);
		localStorage.setItem("password", password);
		document.title = 'копаюсь... в чреве кита... грязюку всю';
		document.getElementById("canvas").style.display = '';
	}).catch((err) => {
		Qual.error("error", err.message);
	});
	return false;
}

export function onLogout() {
	localStorage.removeItem("login");
	localStorage.removeItem("password");
	isAuthorized.value = false;
	document.title = 'лаба 4 (послежняя)'
	document.getElementById("canvas").style.display = 'none';
}

export function onDelete() {
	Qual.confirm(
		"Внимание!",
		"Вы уверены, что хотите удалить аккаунт?",
		war,
		"ДА я хорошо подумал",
		"Ой нет я передумал",
		"window.deleteConfirm",
		"window.closePopup"
	);
}

window.closePopup = () => {
	document.getElementById('closepopup').click();
}

window.deleteConfirm = () => {
	let login = localStorage.getItem("login");
	let password = localStorage.getItem("password");
	axios.get(`${url}/auth/remove?login=${login}&password=${password}`).then(value => {
		if (value.data === "Deleted") {
			isAuthorized.value = false;
			localStorage.removeItem("login");
			localStorage.removeItem("password");
			document.title = 'копаюсь... в чреве кита... грязюку всю';
			window.closePopup();
			dots.value = [];
			document.getElementById("canvas").style.display = 'none';
		} else {
			Qual.error("error", "какая то ошибка");
		}
	}).catch(() => {
		Qual.error("error", "какая то ошибка");
	});
}