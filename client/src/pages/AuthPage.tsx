import { Helmet } from "react-helmet";
import FormAuth from "../components/FormAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/");
		}
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
