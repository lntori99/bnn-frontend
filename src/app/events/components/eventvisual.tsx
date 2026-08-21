import Image from "next/image";

interface Props {
  image?: string | null;
  sizes: string;
  preload?: boolean;
  className?: string;
}

export default function EventVisual({
  image,
  sizes,
  preload = false,
  className = "",
}: Props) {
  if (image) {
    return (
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        preload={preload}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-forest-deep"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[44px] border-gold/80" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[52px] border-ink/35" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-ivory/20" />
      <div className="absolute bottom-8 right-8 font-display text-5xl text-ivory/20 sm:text-6xl">
        BNN
      </div>
    </div>
  );
}
