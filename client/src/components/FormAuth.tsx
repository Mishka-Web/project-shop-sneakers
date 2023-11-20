import { useState } from "react";
import { login as userLogin, reg as userReg } from "../http/user-api";
import { motion } from "framer-motion";
import { IFormInputs } from "../models";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";

export default function FormAuth() {
	const [index, setIndex] = useState(0);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInputs>();

	const onFormSubmit: SubmitHandler<IFormInputs> = (data) => {
		userLogin({ ...data }).then((res) =>
			localStorage.setItem(
				"user-email",
				(res?.email).toString() || "Error.."
			)
		);
		// return (window.location.href = "/");
	};

	const onFormRegSubmit: SubmitHandler<IFormInputs> = (data) => {
		userReg({ ...data }).then((res) =>
			localStorage.setItem(
				"user-email",
				(res?.email).toString() || "Error.."
			)
		);
		// return (window.location.href = "/");
	};

	return (
		<motion.div
			key="home-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 1.25,
			}}
		>
			<div className="flex flex-col rounded-[1rem] overflow-hidden max-w-[55rem] min-h-[33.2rem] bg-[#fff] w-full fixed z-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[rgba(100,100,111,0.1)_0_0.7rem_2.9rem_0]">
				<div className="flex items-center">
					<button
						className={
							index === 0
								? "flex-[1_1_50%] h-[40px] bg-green-500 text-[#fff] transition-colors"
								: "flex-[1_1_50%] h-[40px] hover:bg-[#f5f5f5] transition-colors"
						}
						type="button"
						onClick={() => {
							setIndex(0);
							reset();
						}}
					>
						Авторизация
					</button>
					<button
						className={
							index === 1
								? "flex-[1_1_50%] h-[40px] bg-green-500 text-[#fff] transition-colors"
								: "flex-[1_1_50%] h-[40px] hover:bg-[#f5f5f5] transition-colors"
						}
						type="button"
						onClick={() => {
							setIndex(1);
							reset();
						}}
					>
						Регистрация
					</button>
				</div>
				<div className="flex flex-col p-[4.4rem_3.2rem_3.2rem]">
					<form
						name="form-auth"
						className="flex flex-col gap-6"
						autoComplete="false"
						onSubmit={
							index === 0
								? handleSubmit(onFormSubmit)
								: handleSubmit(onFormRegSubmit)
						}
					>
						<label className="flex flex-col gap-[0.6rem]">
							Почта:
							<input
								{...register("email", {
									required: "Поле обязательно",
								})}
								className="inline-flex w-full h-[3.6rem] text-[1.4rem] px-5 outline-none border-b border-b-[#e4e4e4] transition-all focus:placeholder:opacity-0 placeholder:transition-all focus:border-b-[#222]"
								type="email"
								placeholder="Введите email"
							/>
							<ErrorMessage
								name="email"
								errors={errors}
								render={({ message }) => <span className="text-red-500">{message}</span>}
							/>
						</label>
						<label className="flex flex-col gap-[0.6rem]">
							Пароль:
							<input
								{...register("password", {
									required: "Поле обязательно",
									minLength: {
										message: "Пароль должен содержать больше 5 символов",
										value: 5
									}
								})}
								className="inline-flex w-full h-[3.6rem] text-[1.4rem] px-5 outline-none border-b border-b-[#e4e4e4] transition-all focus:placeholder:opacity-0 placeholder:transition-all focus:border-b-[#222]"
								type="password"
								placeholder="Введите пароль"
							/>
							<ErrorMessage
								name="password"
								errors={errors}
								render={({ message }) => <span className="text-red-500">{message}</span>}
							/>
							<span className="text-red-500 text-[12px]"></span>
						</label>
						<button
							className="flex items-center justify-center mt-[3.2rem] h-[3.6rem] bg-[#e4e4e4] rounded-[0.25rem] hover:text-[#fff] hover:bg-green-500 transition-all px-20 mx-auto max-w-[24.3rem] w-full"
							type="submit"
						>
							{index === 0 ? "Войти" : "Зарегистрироваться"}
						</button>
					</form>
				</div>
			</div>
		</motion.div>
	);
}
