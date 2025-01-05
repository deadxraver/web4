import {ref} from "vue";

export const x = ref(0);
export const y = ref(0);
export const r = ref(0);

export const yErrorText = ref('')

export function checkY(pButtob) {
	if (y.value < -3 || y.value > 3) {
		pButtob.style = "display:none";
		yErrorText.value = 'Значение может быть от -3 до 3';
	}
	else {
		pButtob.style = "display:visible"
		yErrorText.value = '';
	}
}