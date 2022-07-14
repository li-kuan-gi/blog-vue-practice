import type { IArticle, IComment } from "@/entities";

export interface IArticlesService {
  getAll(): IArticle[];
  getById(id: number): IArticle | undefined;
  createComment(id: number, data: IComment): IArticle;
}
