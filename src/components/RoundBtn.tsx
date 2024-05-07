import React, { ReactNode } from "react";

type BtnProps = {
  type: "button" | "submit";
  title?: string;
  icon?: ReactNode;
  variant: string;
  href?: string;
};

const RoundBtn: React.FC<BtnProps> = ({ type, title, icon, variant, href }: BtnProps) => {
  const BtnClass = `p-2 rounded-full inline-flex justify-center items-center ${variant}`;

  const renderButton = () => {
    if (href) {
      return (
        <a href={href} className={BtnClass} title={title}>
          {icon && <span className={!title ? 'flex justify-center' : 'mr-2'}>{icon}</span>}
          {title}
        </a>
      );
    } else {
      return (
        <button type={type} className={BtnClass} title={title}>
          {icon && <span className={!title ? 'flex justify-center' : 'mr-2'}>{icon}</span>}
          {title}
        </button>
      );
    }
  };

  return renderButton();
};

export default RoundBtn;
