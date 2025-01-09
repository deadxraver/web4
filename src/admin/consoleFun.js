import {url} from "@/components/declareConsts.js";
import {adminPassword, adminUsername, authorized, users, userToBeRemoved} from "@/admin/consoleConsts.js";

export function handleSubmit() {
	axios.get(`${url}/admin/auth?username=${adminUsername.value}&password=${adminPassword.value}`).then((response) => {
		console.log(response.data);
		users.value = response.data;
		authorized.value = true;
		localStorage.setItem("admin_username", adminUsername.value);
		localStorage.setItem("admin_password", adminPassword.value);
	}).catch((error) => {
		console.log(error);
		Qual.error('Ошибка', error.message);
	});
	return false;
}

export function deleteUser() {
	console.log(adminUsername.value, adminPassword.value);
	axios.get(`${url}/admin/remove?username=${userToBeRemoved.value}&admin_username=${adminUsername.value}&admin_password=${adminPassword.value}`).then(() => {
		Qual.success("Success", `User ${userToBeRemoved.value} successfully deleted`);
		users.value = users.value.filter((user) => user.login !== adminUsername.value);
	}).catch((error) => {
		console.log(error);
		Qual.error('Ошибка', error.message);
	});
	return false;
}