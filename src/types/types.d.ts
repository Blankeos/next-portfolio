// == React 18 compatibility Custom Type for a React functional component with props AND CHILDREN ==
// Source: https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc/71800185#71800185 solution by ashuvssut
// Import syntax in d.ts files: https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts
type FCC<P = {}> = import("react").FC<import("react").PropsWithChildren<P>>;

// Usage without:
// interface LayoutProps {
//
// }

// const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
//   return (
//      ...
//   );
// };
//
// Usage:
// interface LayoutProps {

// }

// const Layout: FCC<LayoutProps> = ({ children }) => {
//   return (
//      ...
//   );
// };
