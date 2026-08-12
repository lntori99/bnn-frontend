import Image from "next/image";
import Link from "next/link";

export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center" aria-label="Bold New Normal — home">
      <span className={`inline-flex items-center rounded-md px-2 py-1.5 transition-colors ${onDark ? "bg-ivory" : ""}`}>
        <Image
          src="/main-logo/img_logo.png"
          alt="The Bold New Normal"
          width={321}
          height={165}
          priority
          className="h-9 w-auto"
        />
      </span>
    </Link>
  );
}
