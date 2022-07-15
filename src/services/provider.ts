import { ArticlesService } from "./articles";
import type { IProvider } from "./provider.types";
import data from "./data.json";
import { Article, type IArticleData } from "@/entities";

const articles = data.map((item) => new Article(item as IArticleData));
export const provider = (): IProvider => ({
  articles: new ArticlesService(articles),
});
