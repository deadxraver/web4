import {ref} from "vue";
import 'https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert@latest/minfile/quantumalert.js'
import {url} from "@/components/declareConsts.js";

export const x = ref(0);
export const y = ref(0);
export const r = ref(0);

export function handleSubmit() {
	let login = localStorage.getItem("login");
	let password = localStorage.getItem("password");
	axios.get(`${url}/main/add?login=${login}&password=${password}&x=${x.value}&y=${y.value}&r=${r.value}`).then(msg => {
		console.log(msg.data);
	}).catch(msg => {
		console.log(msg.message);
	})
	return false;
}