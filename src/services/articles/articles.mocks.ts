import { mockArticles } from "@/entities";
import { ArticlesService } from "./articles";
import type { IArticlesService } from "./articles.types";

export const mockArticlesService = (): IArticlesService =>
  new ArticlesService(mockArticles());
