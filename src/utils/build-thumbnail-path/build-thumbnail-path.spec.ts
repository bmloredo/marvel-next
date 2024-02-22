import { buildThumbnailPath } from ".";

describe("SkeletonDetails", () => {
  it("should be return thumbnail formatted", () => {
    const thumbnail = buildThumbnailPath({ extension: "png", path: "example" });

    expect(thumbnail).toBe("example.png");
  });

  it("should be not format thumbnail url without extension", () => {
    const thumbnail = buildThumbnailPath({ extension: "", path: "example" });

    expect(thumbnail).not.toBe("example.png");
    expect(thumbnail).toBe("");
  });

  it("should be not format thumbnail url without path", () => {
    const thumbnail = buildThumbnailPath({ extension: "png", path: "" });

    expect(thumbnail).not.toBe("example.png");
    expect(thumbnail).toBe("");
  });

  it("should be not format thumbnail url without all params", () => {
    const thumbnail = buildThumbnailPath({ extension: "", path: "" });

    expect(thumbnail).not.toBe("example.png");
    expect(thumbnail).toBe("");
  });
});
