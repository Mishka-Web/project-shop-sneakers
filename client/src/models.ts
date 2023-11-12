// export interface IProduct {
// 	id: number,
// 	title: string
// }

// export interface IUser {
// 	id: number,
// 	login: string,
// 	password: string
// }

export interface VisibleState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}