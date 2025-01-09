import {ref} from "vue";

export const adminUsername = ref(localStorage.getItem("admin_username"));
export const adminPassword = ref(localStorage.getItem("admin_password"));
if (adminPassword.value === 'null' || adminUsername.value === 'null') {
	localStorage.removeItem("admin_username");
	localStorage.removeItem("admin_password");
	adminPassword.value = '';
	adminUsername.value = '';
}

export const authorized = ref(false);

export const users = ref([]);

export const userToBeRemoved = ref("");