import { describe, expect, it } from "vitest";
import { Comment, mockCommentsData } from "../comment";
import { Article } from "./article";
import { mockArticlesData } from "./article.mock";

describe("Article", () => {
  describe("constructor", () => {
    it("should instantiate id only if it was provided.", () => {
      const id = 1;
      const entityWithId = new Article({
        ...mockArticlesData()[0],
        id,
      });
      expect(entityWithId.id).toBe(id);

      const entityNoId = new Article({
        ...mockArticlesData()[0],
        id: undefined,
      });
      expect(entityNoId.id).toBeUndefined();
    });

    it("should instantiate createdAt only if it was provided.", () => {
      const createdDateString = Date();
      const entityWithDate = new Article({
        ...mockArticlesData()[0],
        createdAt: createdDateString,
      });
      expect(entityWithDate.createdAt).toBe(createdDateString);

      const entityNoDate = new Article({
        ...mockArticlesData()[0],
        createdAt: undefined,
      });
      expect(entityNoDate.createdAt).toBeUndefined();
    });

    it("should instantiate Comments", () => {
      const entity = new Article({
        ...mockArticlesData()[0],
        comments: mockCommentsData(),
      });

      expect(entity.comments[0]).toBeInstanceOf(Comment);
    });
  });
});
