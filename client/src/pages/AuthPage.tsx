import { Helmet } from "react-helmet";
import FormAuth from "../components/FormAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";

export default function AuthPage() {
	const navigate = useNavigate();
	const { isAuth: userIsAuth } = useUserStore();

	useEffect(() => {
		if (localStorage.getItem("token") || userIsAuth) navigate("/");
	});

	return (
		<>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>
			<FormAuth />
		</>
	);
}
