import { Article, type IArticle, type IComment } from "@/entities";
import type { IArticlesService } from "./articles.types";

export class ArticlesService implements IArticlesService {
  articles: IArticle[];

  constructor(articles: IArticle[]) {
    this.articles = articles;
  }

  getAll(): IArticle[] {
    return this.articles;
  }

  getById(id: number): IArticle | undefined {
    const article = this.articles.find((article) => article.id === id);
    if (article === undefined) {
      return;
    }
    return new Article({ ...article });
  }

  createComment(id: number, comment: IComment): IArticle {
    const article = this.getById(id);

    if (article === undefined)
      throw new Error("the article doesn't exist in DB.");
    if (!comment.validate()) throw new Error("the comment is not valid.");

    article.comments.push(comment);
    return article;
  }
}
