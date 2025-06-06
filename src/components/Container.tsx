import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`max-w-[1240px] px-4 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
