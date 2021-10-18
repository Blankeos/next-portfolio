import { Link } from "react-scroll";

interface SectionLinkProps {
  active?: boolean;
  href: string;
  onClick?: () => any;
}

const SectionLink: React.FC<SectionLinkProps> = ({
  children,
  active = false,
  href,
  onClick = () => null,
}) => {
  return (
    <Link
      to={href}
      smooth={true}
      offset={5}
      duration={500}
      className="select-none relative group cursor-pointer px-1 py-0.5"
      onClick={onClick}
    >
      <div className="relative">
        <span className="relative group-hover:text-blue-500 transition-all duration-500 ease-out">
          {children}
        </span>
        <span
          className={`group-hover:w-full group-hover:bg-blue-500 block absolute h-0.5 bg-gray-500 transition-all duration-500 ease-out ${
            active ? "w-full" : "w-0"
          }`}
        ></span>
      </div>
    </Link>
  );
};

export default SectionLink;
