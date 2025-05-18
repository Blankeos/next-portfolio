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
      className="group pointer-events-auto relative cursor-pointer px-1 py-0.5 select-none"
      onClick={onClick}
    >
      <div className="relative">
        <span
          className={`${
            active && 'text-primary'
          } group-hover:text-primary relative transition-all duration-500 ease-out`}
        >
          {children}
        </span>
        <span
          className={`group-hover:bg-primary absolute right-0 block h-[0.115rem] transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full ${
            active ? 'bg-primary left-0 w-full' : 'w-0 bg-gray-500'
          }`}
        ></span>
      </div>
    </Link>
  );
};

export default SectionLink;
