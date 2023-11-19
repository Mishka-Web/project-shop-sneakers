import { $authInstance, $inst } from "./index";
import { jwtDecode } from "jwt-decode";

async function reg(opts: object) {
	const { data } = await $inst.post("user/reg", { ...opts });
	localStorage.setItem("token", data.token);
	return jwtDecode(data.token);
}

async function login(opts: object) {
	const { data } = await $inst.post("user/login", { ...opts });
	localStorage.setItem("token", data.token);
	return jwtDecode(data.token);
}

async function isAuth() {
	const { data } = await $authInstance.get("user/auth");
	localStorage.setItem("token", data.token);
	return jwtDecode(data.token);
}

export { reg, login, isAuth };
