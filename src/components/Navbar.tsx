"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { HiBars3, HiXMark, HiArrowUpRight } from "react-icons/hi2";
import Logo from "./logo";
import { site } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/core/hook";
import { setMobileMenu } from "@/core/store";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const open = useAppSelector((s) => s.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    dispatch(setMobileMenu(false));
  }, [pathname, dispatch]);

  const closeMenu = () => dispatch(setMobileMenu(false));

  return (
    <>
      <header
        className={`on-dark fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out ${
          scrolled
            ? "border-b border-ivory/10 bg-ink/90 backdrop-blur-md"
            : "border-transparent bg-linear-to-b from-ink/60 via-ink/20 to-transparent"
        }`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-gold focus:px-3 focus:py-2">
          Skip to content
        </a>
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8">
          <div className="flex min-w-0 flex-1">
            <Logo onDark />
          </div>

          <nav aria-label="Main" className="hidden flex-none items-center justify-center gap-6 xl:flex">
            {site.nav.slice(0, 6).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium uppercase transition-colors ${
                    active ? "text-gold underline decoration-gold decoration-2 underline-offset-8" : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
           
            <Link
              href="/community"
              className="hidden items-center gap-1.5 rounded-xs bg-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 xl:inline-flex"
            >
              Join the Community
              <HiArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => dispatch(setMobileMenu(true))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold xl:hidden"
              aria-label="Open menu"
            >
              <HiBars3 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <Transition show={open}>
        <Dialog onClose={closeMenu} className="relative z-50 xl:hidden">
          <TransitionChild
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-ink/70 backdrop-blur-sm" aria-hidden="true" />
          </TransitionChild>

          <TransitionChild
            enter="duration-400 ease-out"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="duration-300 ease-in"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="on-dark fixed inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-ivory/10 bg-ink p-6 text-ivory">
              <div className="flex items-center justify-between">
                <Logo onDark />
                <button
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory hover:border-gold hover:text-gold"
                >
                  <HiXMark className="h-5 w-5" />
                </button>
              </div>

              <div className="kente-band kente-band--thin my-7" aria-hidden="true" />

              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {site.nav.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-2 font-display text-xl uppercase text-ivory transition-colors hover:text-gold"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={site.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="rounded-xs border-2 border-current px-6 py-3 text-center text-[0.78rem] font-bold uppercase tracking-wide text-ivory hover:text-gold"
                >
                  Buy the Book
                </a>
                <Link
                  href="/community"
                  onClick={closeMenu}
                  className="rounded-xs bg-gold px-6 py-3 text-center text-[0.78rem] font-bold uppercase tracking-wide text-ink hover:bg-gold-soft"
                >
                  Join the Community
                </Link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
