"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Logo from "./Logo";
import { site } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/core/hook";
import { setMobileMenu } from "@/core/store";

export default function Navbar() {
  const pathname = usePathname();
  const open = useAppSelector((s) => s.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-gold focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
          {site.nav.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold hover:text-forest ${pathname === item.href ? "text-forest underline decoration-gold decoration-2 underline-offset-8" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/community" className="btn btn-forest !py-2">Join the Community</Link>
          <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold !py-2">
            Buy the Book
          </a>
        </nav>
        <button
          className="p-2 xl:hidden"
          aria-label="Open menu"
          onClick={() => dispatch(setMobileMenu(true))}
        >
          <HiBars3 className="h-7 w-7" />
        </button>
      </div>

      <Dialog open={open} onClose={() => dispatch(setMobileMenu(false))} className="relative z-50 xl:hidden">
        <div className="fixed inset-0 bg-ink/60" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-ink p-6 text-ivory on-dark">
          <div className="flex items-center justify-between">
            <Logo onDark />
            <button aria-label="Close menu" onClick={() => dispatch(setMobileMenu(false))} className="p-2">
              <HiXMark className="h-7 w-7" />
            </button>
          </div>
          <div className="kente-band kente-band--thin my-6" aria-hidden="true" />
          {/* Mobile priority: Join Community and Buy Book first */}
          <div className="mb-6 grid gap-3">
            <Link href="/community" onClick={() => dispatch(setMobileMenu(false))} className="btn btn-gold justify-center">
              Join the Community
            </Link>
            <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center text-ivory">
              Buy the Book
            </a>
          </div>
          <nav aria-label="Mobile" className="grid gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => dispatch(setMobileMenu(false))}
                className="rounded px-2 py-3 text-lg font-semibold hover:bg-ink-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
