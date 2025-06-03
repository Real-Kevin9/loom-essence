'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import '@/styles/navbar.css'; // adjust path if needed

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => setIsOverlayOpen(!isOverlayOpen);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
        <div className="container-fluid px-5 d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <Image src="/assets/main_logo.png" alt="Logo" width={70} height={70} />
            <span className="">LOOM ESSENCE</span>
          </Link>

          {/* Icons */}
          <div className="d-flex align-items-center gap-4 fs-4 px-5">
            <i className="bi bi-bag" role="button" />
            <i className="bi bi-person" role="button" />
            <i className="bi bi-search" role="button" />
            <i className="bi bi-list" role="button" onClick={toggleOverlay} />
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      {isOverlayOpen && (
        <div className="nav-overlay">
          <div className="overlay-header">
            <Image src="/assets/main_logo.png" alt="Logo" width={70} height={70} />
            <i className="bi bi-x-lg overlay-close" onClick={toggleOverlay} />
          </div>

          <ul className="overlay-menu">
            <li><Link href="#">Loom Exclusives<i className="bi bi-caret-right hover-icon"></i></Link></li>
            <li><Link href="#">New In<i className="bi bi-caret-right hover-icon"></i></Link></li>
            <li><Link href="#">Women<i className="bi bi-caret-right hover-icon"></i></Link></li>
            <li><Link href="#">Men<i className="bi bi-caret-right hover-icon"></i></Link></li>
            <li><Link href="#">Children<i className="bi bi-caret-right hover-icon"></i></Link></li>
            <li><Link href="#">Gifts<i className="bi bi-caret-right hover-icon"></i></Link></li>
          </ul>

          <div className="overlay-footer">
            <Link href="#">Loom Services</Link>
            <Link href="#">World of Loom Essence</Link>
          </div>
        </div>
      )}
    </>
  );
}
