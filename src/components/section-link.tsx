import { Link } from 'react-scroll';
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
      className="group relative cursor-pointer select-none px-1 py-0.5"
      onClick={onClick}
    >
      <div className="relative">
        <span
          className={`${
            active && 'text-blue-500'
          } relative transition-all duration-500 ease-out group-hover:text-blue-500`}
        >
          {children}
        </span>
        <span
          className={`absolute right-0 block h-[0.115rem] transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full group-hover:bg-blue-500 ${
            active ? 'left-0 w-full bg-blue-500' : 'w-0 bg-gray-500'
          }`}
        ></span>
      </div>
    </Link>
  );
};

export default SectionLink;
