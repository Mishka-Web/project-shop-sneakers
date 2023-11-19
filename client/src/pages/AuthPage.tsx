import { Helmet } from "react-helmet";
import FormAuth from "../components/FormAuth";

export default function AuthPage() {
	return (
		<>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>
			<FormAuth />
		</>
	);
}
