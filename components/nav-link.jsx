"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href }) => {
  const path = usePathname();

  return (
    <li>
      <Link href={href}>Browse Meals</Link>
    </li>
  );
};

export default NavLink;
