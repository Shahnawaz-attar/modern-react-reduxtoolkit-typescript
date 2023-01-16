import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  rest?: string | unknown;
}

const Panel: React.FC<Props> = ({ children, className, onClick, ...rest }) => {
  const finalClasses = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div className={finalClasses} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
