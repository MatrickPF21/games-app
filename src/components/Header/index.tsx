import Link from "next/link";

export default function Header() {
  return (
    <header className='fixed top-0 flex h-16 w-screen items-center bg-[#2c2d31] p-2 font-semibold'>
      <nav>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  );
}
