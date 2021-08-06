interface SectionHeadingProps {
  text: [string] | [string, string];
  className?: string;
}

const SectionHeading = ({
  text,
  className = "font-light text-5xl",
}: SectionHeadingProps) => {
  return (
    <h2 className={`flex flex-col ${className}`}>
      {text.map((stringVal, i) => {
        return (
          <span key={i} className={i === 1 ? "ml-16" : ""}>
            {stringVal}
          </span>
        );
      })}
    </h2>
  );
};

export default SectionHeading;
