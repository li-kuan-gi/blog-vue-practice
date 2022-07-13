import { Comment, type IComment } from "../comment";
import type { IArticle, IArticleData } from "./article.types";
export class Article implements IArticle {
  readonly comments: IComment[];
  readonly id?: number | undefined;
  readonly title: string;
  readonly content: string;
  readonly extract: string;
  readonly createdAt?: string | Date | undefined;
  readonly isActive: boolean;
  readonly picture: string;
  readonly tags: string[];

  constructor(data: IArticleData) {
    if (data.id) {
      this.id = data.id;
    }

    if (data.createdAt) {
      this.createdAt = data.createdAt;
    }

    this.comments = data.comments.map((comment) => new Comment(comment));

    this.title = data.title;
    this.content = data.content;
    this.extract = data.extract;
    this.isActive = data.isActive;
    this.picture = data.picture;
    this.tags = data.tags;
  }
}
