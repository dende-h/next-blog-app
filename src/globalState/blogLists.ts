import { atom } from "recoil";
import { Post } from "../API";

const initialList = [] as Post[];

export const blogLists = atom({
	key: "blogLists",
	default: initialList
});
