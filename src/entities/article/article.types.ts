import type { IComment, ICommentData } from "../comment/comment.types";

export interface IArticleData {
    readonly id?: number;
    readonly title: string;
    readonly content: string;
    readonly extract: string;
    readonly createdAt?: Date | string;
    readonly isActive: boolean;
    readonly picture: string;
    readonly tags: string[];

    readonly comments: ICommentData[];
}

export interface IArticle extends IArticleData {
    readonly comments: IComment[];
}
