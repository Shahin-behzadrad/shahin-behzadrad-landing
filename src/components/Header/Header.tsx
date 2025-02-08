import Image from "next/image";
import classes from "./Header.module.scss";

import logo1 from "@public/logo/logo-1.png";
import logo2 from "@public/logo/logo-2.png";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={classes.header}>
      <Link href="#hero" className={classes.logoContainer}>
        <Image src={logo1} width={20} alt="logo" />
        <Image src={logo2} width={20} alt="logo" />
      </Link>
      <div className={classes.navbarBtns}>
        <Link href="#hero">About</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
