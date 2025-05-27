// src/components/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="container-fluid px-5">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image src="/assets/main_logo.png" alt="Logo" width={70} height={70} />
          <span className="">LOOM ESSENCE</span>
        </Link>

        <div className="d-flex align-items-center gap-4 fs-4 px-5">
          <i className="bi bi-bag" />
          <i className="bi bi-person" />
          <i className="bi bi-search" />
          <span><i className="bi bi-list" />Menu</span>          
        </div>
      </div>
    </nav>
  );
}
