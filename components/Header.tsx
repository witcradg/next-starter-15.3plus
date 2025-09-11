
import Link from "next/link";
import Image from "next/image";

const Header = ({ siteTitle = "Starter Project" }) => {
  return (
    <header className="w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logoipsum-404.png"
            alt="Site Logo"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <Link href="/" className="text-xl font-bold text-foreground hover:underline">
            {siteTitle}
          </Link>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Docs</a>
          <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">shadcn/ui</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
