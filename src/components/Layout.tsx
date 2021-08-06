import Footer from "./Footer";
import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
