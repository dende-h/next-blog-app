import { atom } from "recoil";

const initialName = "" as string;

export const handleName = atom({
	key: "handleName",
	default: initialName
});
