import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";
import { Film } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between h-6 py-5 items-center px-3 lg:py-7 ">
      <Link href={"/"}>
        <div className="flex  text-indigo-700 h-7 items-center font-bold lg:pl-15 ">
          <Film className="stroke-1 p-0.5 lg:p-0" />
          Movie Z
        </div>
      </Link>
      <div className=" flex gap-4 ">
        <button className="flex items-center border rounded-lg w-25 justify-center gap-1 font-medium max-lg:hidden">
          <ChevronDown size={16} />
          Genre
        </button>
        <input
          className="border rounded-lg p-1.5 w-80 hidden lg:block"
          type="text"
          name=""
          id=""
          placeholder="🔎   type to search"
        />
      </div>
      <div className="flex gap-3 items-center lg:pr-15 ">
        <button className="border rounded-md lg:p-1.5 ">
          <Search className="stroke-1 p-1 lg:p-0.5" />
        </button>
        <button className="border rounded-md lg:p-1.5   ">
          <Moon className="stroke-1 p-1 lg:p-0.5" />
        </button>
      </div>
    </div>
  );
}
