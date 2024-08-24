import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <NavLink href={"/meals"} />
          <li>
            <Link href={"/community"}>Foods Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
