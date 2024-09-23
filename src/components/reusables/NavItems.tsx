import Link from "next/link";
import React from "react";

function NavItems({ className }: { className: string }) {
  return (
    <ul className={className}>
      <li>
        <Link href="/categories/Family">Family</Link>
      </li>
      <li>
        <Link href="/categories/Sport">Sport</Link>
      </li>
      <li>
        <Link href="/categories/Concert">Concert</Link>
      </li>
      <li>
        <Link href="/categories/Theater">Theater</Link>
      </li>
    </ul>
  );
}

export default NavItems;
