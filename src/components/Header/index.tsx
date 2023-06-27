import Link from "next/link";

export default function Header() {
  return (
    <header className='fixed top-0 flex h-16 w-screen items-center border-b border-gray-600 bg-[#09090b] p-2 font-semibold text-white'>
      <nav>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  );
}
