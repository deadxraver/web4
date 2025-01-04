import {ref} from "vue";

export const login = ref(true)
export const buttonText = ref(login.value ? 'Не зарегистрирован' : 'Уже зарегистрирован');

export const loginValue = ref('');
export const passwordValue = ref('');
export const passwordConfirm = ref('');

export const group = ref('P3215');
export const variant = ref(44444);
export const fullName = ref('Чумаченко Даниил Олегович');

export const count = ref(new Date().toLocaleDateString('ru-RU') + ' ' + new Date().toLocaleTimeString('ru-RU'));