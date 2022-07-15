import { mockArticlesService } from "./articles";
import type { IProvider } from "./provider.types";

export const mockProvider = (): IProvider => ({
  articles: mockArticlesService(),
});
