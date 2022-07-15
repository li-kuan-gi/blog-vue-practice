import { describe, expect, it, vi } from "vitest";
import { ArticlesService } from "./articles";
import { provider } from "./provider";

vi.mock("./articles");
describe("Provider", () => {
  it("should instantiate Articles Service", () => {
    provider();
    expect(ArticlesService).toBeCalled();
  });
});
