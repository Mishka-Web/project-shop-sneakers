export interface IProduct {
	id: number;
	title: string;
	cost: string;
	image: string[];
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
}
