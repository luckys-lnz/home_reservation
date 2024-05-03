import React, { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  icon?: ReactNode;
  variant: string;
  full?: boolean;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const GetInTouch_Btn: React.FC<ButtonProps> = ({ type, title, leftIcon, rightIcon, variant, icon, full = false, href, onClick }: ButtonProps) => {
  const buttonClass = `px-5 py-1.5 rounded-full justify-center items-center inline-flex ${variant} ${full && 'w-full'}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={buttonClass}>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          <span className="whitespace-nowrap cursor-pointer">
            {title}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
            {icon && <span className="ml-2">{icon}</span>}
          </span>
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className="whitespace-nowrap cursor-pointer">
        {title}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default GetInTouch_Btn;