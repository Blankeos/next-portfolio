import Footer from "./Footer";
import Nav from "./Nav";

interface ILayoutProps {}

const Layout: FCC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
