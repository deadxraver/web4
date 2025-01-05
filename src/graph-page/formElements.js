import {ref} from "vue";
import 'https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert@latest/minfile/quantumalert.js'

export const x = ref(0);
export const y = ref(0);
export const r = ref(0);

export const yErrorText = ref('')

export function checkY(pButtob) {
	if (y.value === '' || y.value < -3 || y.value > 3) {
		pButtob.style = "display:none";
		yErrorText.value = 'Значение может быть от -3 до 3';
	}
	else {
		pButtob.style = "display:visible"
		yErrorText.value = '';
	}
}

export function handleSubmit() {
	if (yErrorText.value) {
		Qual.error("Ошибка", "Проверьте правильность ввода всех полей формы");
		return false;
	}
	// TODO: отправка формы
	Qual.success("урааа","тут скоро форма будет отправляться");
	return false;
}