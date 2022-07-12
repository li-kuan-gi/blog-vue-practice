import type { IArticleData, IArticle } from "./article.types";
import { Article } from "./article";

export const mockArticlesData = (): IArticleData[] => [
    {
        id: 1,
        title: 'title',
        content: 'content',
        extract: 'extract',
        createdAt: '2019-12-19T11:54:04 +05:00',
        isActive: false,
        picture: 'http://image.img',
        tags: ['z', 'x', 'y'],
        comments: []
    }, {
        id: 2,
        title: 'title2',
        content: 'content2',
        extract: 'extract',
        createdAt: '2019-12-07T11:54:04 +05:00',
        isActive: true,
        picture: 'http://image.img',
        tags: ['z', 'x', 'y'],
        comments: []
    }
];

export const mockArticles = (data: IArticleData[]): IArticle[] =>
    data.map(item => new Article(item));
