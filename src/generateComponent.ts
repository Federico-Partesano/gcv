import { skeletonJs, skeletonTs } from "./skeletonsComponent";

export const generateComponent = (
  type: "tsx" | "jsx",
  name: string,
  extensionStyle: string
) => {
  switch (type) {
    case "tsx":
      return skeletonTs(name, extensionStyle);
    case "jsx":
      return skeletonJs(name, extensionStyle);
    default:
      return skeletonTs(name, extensionStyle);
  }
};
