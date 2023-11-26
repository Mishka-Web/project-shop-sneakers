export interface IProduct {
	id: number;
	img: string;
	title: string;
	price: string;
}

export interface IFormInputs {
	email: string;
	password: string;
}

export interface IVisibleMenuState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

export interface IUserState {
	isAuth: boolean;
	auth: () => void;
	exit: () => void,
}

export interface IBasketState {
	count: number,
	updateInfo: () => void,
}