import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
	email: string;
	password: string;
}

export default function FormAuth() {
	const [index, setIndex] = useState(0);

	const { register, handleSubmit } = useForm<IFormInput>();

	const onFormSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

	return (
		<div className="flex flex-col rounded-[1rem] overflow-hidden max-w-[55rem] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[rgba(100,100,111,0.1)_0_0.7rem_2.9rem_0]">
			<div className="flex flex-grow items-center">
				<button
					className={
						index === 0
							? "flex-[1_1_50%] h-[40px] bg-green-500 text-[#fff] transition-colors"
							: "flex-[1_1_50%] h-[40px] hover:bg-[#f5f5f5] transition-colors"
					}
					type="button"
					onClick={() => setIndex(0)}
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
					onClick={() => setIndex(1)}
				>
					Регистрация
				</button>
			</div>
			<div className="flex flex-col p-[4.4rem_3.2rem_3.2rem]">
				<div className={index === 0 ? "visible" : "hidden"}>
					<form
						name="form-auth"
						className="flex flex-col gap-6"
						onSubmit={handleSubmit(onFormSubmit)}
					>
						<label className="flex flex-col gap-[0.6rem]">
							Почта:
							<input
								{...register("email", { required: true })}
								className="inline-flex w-full h-[3.6rem] text-[1.4rem] px-5 outline-none border-b border-b-[#e4e4e4] transition-all focus:placeholder:opacity-0 placeholder:transition-all focus:border-b-[#222]"
								type="email"
								placeholder="Введите email"
							/>
						</label>
						<label className="flex flex-col gap-[0.6rem]">
							Пароль:
							<input
								{...register("password", { required: true })}
								className="inline-flex w-full h-[3.6rem] text-[1.4rem] px-5 outline-none border-b border-b-[#e4e4e4] transition-all focus:placeholder:opacity-0 placeholder:transition-all focus:border-b-[#222]"
								type="password"
								placeholder="Введите пароль"
							/>
						</label>
						<button
							className="flex items-center justify-center mt-[3.2rem] h-[3.6rem] bg-[#e4e4e4] rounded-[0.25rem] hover:text-[#fff] hover:bg-green-500 transition-all px-20 mx-auto max-w-[24.3rem] w-full"
							type="submit"
						>
							Войти
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
