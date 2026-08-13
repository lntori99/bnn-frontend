"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: Props) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-ink/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-ivory p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            {title && (
              <DialogTitle className="text-2xl font-medium tracking-tight">
                {title}
              </DialogTitle>
            )}
            <button
              aria-label="Close dialog"
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-colors hover:border-[#d6ac63] hover:text-[#d6ac63]"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
