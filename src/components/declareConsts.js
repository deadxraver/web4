import {ref} from "vue";

export const login = ref(true)
export const buttonText = ref(login.value ? 'Не зарегистрирован' : 'Уже зарегистрирован');

export const group = ref('P3215');
export const variant = ref(44444);
export const fullName = ref('Чумаченко Даниил Олегович');

export const count = ref(new Date().toLocaleDateString('ru-RU') + ' ' + new Date().toLocaleTimeString('ru-RU'));

export const nameStyle = `{color:rgb(rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})}`;
export const groupStyle = ref(`{color:rgb(rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})}`);
export const varStyle = `color:rgb(rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;