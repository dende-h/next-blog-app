export type Blog = {
	id: string;
	title?: string;
	content?: string;
	userBlogId?: string;
	createdAt?: string;
	updatedAt?: string;
	owner?: string;
};

export type User = {
	id: string;
	userName?: string;
	blog?: Blog;
	profile?: string;
	createdAt?: Date;
	updatedAt?: Date;
	owner?: string;
};
