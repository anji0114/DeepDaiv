import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full  backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center brightness-100 invert">
              <Image src="/logo.svg" alt="logo" width={140} height={34} />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center px-5 py-2 rounded-lg border border-gray-600 text-white">
              Log in
            </button>
            <button className="flex items-center px-5 py-2 rounded-lg bg-sky-900 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
