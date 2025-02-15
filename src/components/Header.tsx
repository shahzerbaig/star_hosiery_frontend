"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {

  const router = useRouter();
    return (
      <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <Link href='/dashboard'><h1 className="text-xl font-bold">Star Hosiery</h1></Link>
        <button onClick={()=> router.push('/')} className="bg-white text-blue-600 px-4 py-2 rounded">Logout</button>
      </header>
    );
  };
  
  export default Header;
  