"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";
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
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ivory/10 bg-ink/90 py-3 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-gold focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Logo onDark />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden shrink-0 items-center gap-6 xl:flex">
          {site.nav.map((item) =>
            item.children ? (
              <Popover key={item.href} className="relative shrink-0">
                <PopoverButton className="inline-flex items-center gap-1 whitespace-nowrap text-sm uppercase text-ivory/85 transition-colors hover:text-gold focus:outline-none data-open:text-gold">
                  {item.label}
                  <HiChevronDown className="text-xs transition-transform data-open:rotate-180" />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute left-0 top-full z-50 mt-3 w-60 rounded-2xl border border-ivory/10 bg-ink p-2 shadow-2xl transition duration-200 ease-out data-closed:translate-y-1 data-closed:opacity-0"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block whitespace-nowrap rounded-xl px-4 py-2.5 text-sm text-ivory/80 transition-colors hover:bg-ivory/5 hover:text-gold"
                    >
                      {child.label}
                    </Link>
                  ))}
                </PopoverPanel>
              </Popover>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 whitespace-nowrap text-sm uppercase transition-colors hover:text-gold ${
                  pathname === item.href ? "text-gold" : "text-ivory/85"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/community"
            className="whitespace-nowrap rounded-full border-2 border-ivory/40 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Join the Community
          </Link>
          <a
            href={site.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-soft"
          >
            Buy the Book
          </a>
        </div>

        <button
          type="button"
          onClick={() => dispatch(setMobileMenu(true))}
          className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold xl:hidden"
          aria-label="Open menu"
        >
          <HiBars3 className="text-xl" />
        </button>
      </div>

      {/* Mobile menu — Join Community & Buy Book are prioritised at the top */}
      <AnimatePresence>
        {open && (
          <Dialog static open={open} onClose={closeMenu} className="relative z-60 xl:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex justify-end">
              <DialogPanel className="flex w-full max-w-sm">
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="on-dark flex h-full w-full flex-col overflow-y-auto border-l border-ivory/10 bg-ink px-7 py-6 text-ivory"
                >
                  <div className="flex items-center justify-between">
                    <Logo onDark />
                    <button
                      type="button"
                      onClick={closeMenu}
                      className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-gold hover:text-gold"
                      aria-label="Close menu"
                    >
                      <HiXMark className="text-xl" />
                    </button>
                  </div>

                  <div className="mt-8 grid gap-3">
                    <Link
                      href="/community"
                      onClick={closeMenu}
                      className="rounded-full bg-gold px-6 py-3 text-center text-[0.78rem] font-bold uppercase tracking-wide text-ink hover:bg-gold-soft"
                    >
                      Join the Community
                    </Link>
                    <a
                      href={site.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="rounded-full border-2 border-current px-6 py-3 text-center text-[0.78rem] font-bold uppercase tracking-wide text-ivory hover:text-gold"
                    >
                      Buy the Book
                    </a>
                  </div>

                  <div className="kente-band kente-band--thin mt-8" aria-hidden="true" />

                  <nav aria-label="Mobile" className="mt-6">
                    {site.nav.map((item) => (
                      <div key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block py-2.5 font-display text-lg uppercase text-ivory transition-colors hover:text-gold"
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <div className="ml-4 border-l border-ivory/10 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMenu}
                                className="block py-2 text-sm text-ivory/60 transition-colors hover:text-gold"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <p className="mt-auto pt-8 text-xs text-ivory/40">{site.tagline}</p>
                </motion.div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
