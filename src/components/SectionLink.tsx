import { Link } from "react-scroll";

interface SectionLinkProps {
  active?: boolean;
  href: string;
}

const SectionLink: React.FC<SectionLinkProps> = ({
  children,
  active = false,
  href,
}) => {
  return (
    <Link
      to={href}
      smooth={true}
      offset={5}
      duration={500}
      className="select-none relative group cursor-pointer"
    >
      <span className="relative group-hover:text-blue-500 transition-all duration-500 ease-out">
        {children}
      </span>
      <span
        className={`group-hover:w-full group-hover:bg-blue-500 block absolute w-0 h-0.5 bg-gray-500 transition-all duration-500 ease-out ${
          active && "w-full"
        }`}
      ></span>
    </Link>
  );
};

export default SectionLink;
