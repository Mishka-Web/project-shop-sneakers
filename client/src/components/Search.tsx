export default function Search() {
	return (
		<search role="search">
			<form
				className="flex items-center gap-[1.375rem] pl-[1.8rem] pr-[1rem] border border-[#F3F3F3] rounded-[1rem] max-w-[32rem] w-full"
				name="form-search"
			>
				<span className="inline-flex w-[1.425rem] h-[1.425rem] object-contain">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
					>
						<path
							d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
							stroke="#E4E4E4"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				<input
					className="w-full h-[4.5rem] placeholder:text-[#C4C4C4] outline-none"
					type="text"
					placeholder="Поиск..."
				/>
			</form>
		</search>
	);
}
