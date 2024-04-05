import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-gray-500 p-3 gap-5">
      <Link href="/">
        Home
      </Link>
      <Link href="/blog">Blog</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
      <Link href="/dashboard/setting">Setting</Link>
      <Link href="/dashboard/setting/password">Password</Link>
      <Link href="/dashboard/setting/profile">Profile</Link>
    </div>
  );
}

export default Header; 