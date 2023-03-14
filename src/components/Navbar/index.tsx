import { Key } from "react";
interface Navbar {
  menu: Array<any>;
  className?: string;
}

const Navbar = ({ menu, className }: Navbar) => {
  return (
    <nav className="navbar">
      <ul className={`navbar__container navbar__container--${className}`}>
        {menu.map(
          (
            item: {
              text: string;
              href: string;
            },
            index: Key | null | undefined
          ) => {
            return (
              <li className={`navbar__menu ${className}__menu`} key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
