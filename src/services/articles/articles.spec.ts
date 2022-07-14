import { Comment, mockArticles, mockComments } from "@/entities";
import { describe, expect, it } from "vitest";
import { ArticlesService } from "./articles";

describe("Article Service", () => {
  const article = mockArticles()[0];
  const service = new ArticlesService(mockArticles());
  describe("getAll", () => {
    it("should return all data", () => {
      expect(service.getAll()).toEqual(mockArticles());
    });
  });

  describe("getById", () => {
    it("should return one article by provided id", () => {
      const article = mockArticles()[0];
      const id = article.id as number;
      expect(service.getById(id)).toEqual(article);
    });

    it("should return undefined if no article found", () => {
      expect(service.getById(Number.POSITIVE_INFINITY)).toBeUndefined();
    });
  });

  describe("createComment", () => {
    const comment = mockComments()[0];

    it("should add new comment to provided article and return it", () => {
      const id = article.id as number;
      const newArticle = service.createComment(id, comment);
      expect(newArticle.id).toEqual(id);
      expect(newArticle.comments.length).toEqual(article.comments.length + 1);
    });

    it("should throw an error if the article with the provided id doesn't exist.", () => {
      expect(() =>
        service.createComment(Number.POSITIVE_INFINITY, comment)
      ).toThrow();
    });

    it("should throw an error if the comment is not valid.", () => {
      const wrongComment = new Comment({
        ...comment,
        title: "",
      });
      expect(() =>
        service.createComment(article.id as number, wrongComment)
      ).toThrow();
    });
  });
});
