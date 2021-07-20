import React from "react";

interface Props {
  children?: any;
  className?: string;
  maxWidth?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full";
}

const Container: React.FC<Props> = ({
  children,
  className,
  maxWidth = "6xl",
}) => {
  return (
    <div className={`max-w-${maxWidth} mx-auto p-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
