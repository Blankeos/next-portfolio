import { Link } from "react-scroll";
interface SectionLinkProps {
  active?: boolean;
  clicked?: boolean;
  href: string;
  onClick?:
    | ((() => void) & React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
}

const SectionLink: FCC<SectionLinkProps> = ({
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
        <span
          className={`${
            active && "text-blue-500"
          } relative group-hover:text-blue-500 transition-all duration-500 ease-out`}
        >
          {children}
        </span>
        <span
          className={`group-hover:w-full group-hover:left-0 group-hover:bg-blue-500 block absolute right-0 h-[0.115rem] transition-all duration-500 ease-out ${
            active ? "w-full left-0 bg-blue-500" : "w-0 bg-gray-500"
          }`}
        ></span>
      </div>
    </Link>
  );
};

export default SectionLink;
