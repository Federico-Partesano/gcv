import { skeletondf, skeletonSetup } from "./skeletonsComponent";

export const generateComponent = (name: string, flags: string[]) => {
  console.log('flags', flags);
  console.log('name', name);
  switch (true) {
    case flags.includes('-s'):
      return skeletonSetup();
    case flags.includes('-d'):
      return skeletondf(name);
    default:
      return skeletonSetup();
  }
};
