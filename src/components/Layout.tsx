import Footer from './Footer';
import Nav from './Nav';

interface ILayoutProps {}

const Layout: FCC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-grow flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
