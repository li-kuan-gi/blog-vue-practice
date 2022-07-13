import {
  COMMENTS_MAX_AUTHOR_LENGTH,
  COMMENTS_MAX_CONTENT_LENGTH,
  COMMENTS_MAX_TITLE_LENGTH,
  type IComment,
  type ICommentData,
} from "./comment.types";
export class Comment implements IComment {
  id?: number | undefined;
  title: string;
  content: string;
  author: string;
  createdAt?: string | Date | undefined;

  constructor(data: ICommentData) {
    if (data.id) {
      this.id = data.id;
    }
    if (data.createdAt) {
      this.createdAt = data.createdAt;
    }
    this.title = data.title;
    this.content = data.content;
    this.author = data.author;
  }
  validate(): boolean {
    return (
      this.title.length > 0 &&
      this.title.length <= COMMENTS_MAX_TITLE_LENGTH &&
      this.author.length > 0 &&
      this.author.length <= COMMENTS_MAX_AUTHOR_LENGTH &&
      this.content.length > 0 &&
      this.content.length <= COMMENTS_MAX_CONTENT_LENGTH
    );
  }
}
