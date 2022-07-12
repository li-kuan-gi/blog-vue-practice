import { describe, expect, it } from "vitest";

import { Comment } from "./comment";
import { COMMENTS_MAX_AUTHOR_LENGTH, COMMENTS_MAX_CONTENT_LENGTH } from "./comment.types";
import { mockCommentsData, mockComments } from './comment.mock';


describe('Comment', () => {
    it('should instantiate id only if it was provided.', () => {
        const id = 1;
        const entityWithId = new Comment({
            ...mockCommentsData()[0],
            id,
        });
        expect(entityWithId.id).toBe(id);

        const entityNoId = new Comment({
            ...mockCommentsData()[0],
            id: undefined
        });
        expect(entityNoId.id).toBeUndefined();
    });

    it('should instantiate createdAt only if it was provided.', () => {
        const createdDateString = Date();
        const entityWithDate = new Comment({
            ...mockCommentsData()[0],
            createdAt: createdDateString
        });
        expect(entityWithDate.createdAt).toBe(createdDateString);

        const entityNoDate = new Comment({
            ...mockCommentsData()[0],
            createdAt: undefined
        });
        expect(entityNoDate.createdAt).toBeUndefined();
    });

    describe('validate', () => {
        it('should fail validation if title is empty.', () => {
            const entity = new Comment({
                ...mockCommentsData()[0],
                title: '',
            });
            expect(entity.validate()).toBeFalsy();
        });

        it('should fail validation if title is too long.', () => {
            const entity = new Comment({
                ...mockCommentsData()[0],
                title: 'a'.repeat(COMMENTS_MAX_CONTENT_LENGTH + 1),
            });

            expect(entity.validate()).toBeFalsy();
        });

        it('should fail validation if author is empty.', () => {
            const entity = new Comment({
                ...mockCommentsData()[0],
                author: '',
            });
            expect(entity.validate()).toBeFalsy();
        });

        it('should fail validation if author is too long.', () => {
            const entity = new Comment({
                ...mockCommentsData()[0],
                author: 'a'.repeat(COMMENTS_MAX_AUTHOR_LENGTH + 1),
            });

            expect(entity.validate()).toBeFalsy();
        });

        it('should fail validation if content is empty.', () => {
            const entity = new Comment({
                ...mockCommentsData()[0],
                content: '',
            });
            expect(entity.validate()).toBeFalsy();
        });

        it('should fail validation if content is too long.', () => {
            const entity = new Comment({
                ...mockCommentsData()[0],
                content: 'a'.repeat(COMMENTS_MAX_CONTENT_LENGTH + 1),
            });

            expect(entity.validate()).toBeFalsy();
        });

        it('should return true if entity is valid', () => {
            const entity = mockComments()[0];
            expect(entity.validate()).toBeTruthy();
        });
    });
});
