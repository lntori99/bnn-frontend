import Image from "next/image";
import Reveal from "@/components/reveal";

interface Props {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
}

export default function PageHeader({ eyebrow, title, lead, image }: Props) {
  return (
    <header className="on-dark relative -mt-16 overflow-hidden bg-ink pb-20 pt-36 text-ivory sm:pb-24 sm:pt-44">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/40" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
              {eyebrow}
            </span>
          )}
          <p className="mt-5 max-w-2xl text-3xl leading-[1.05] text-ivory tracking-tight sm:text-4xl">
            {title}
          </p>
          {lead && (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ivory/70 ">
              {lead}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
