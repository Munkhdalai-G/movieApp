import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";
import { Film } from "lucide-react";
export default function Header() {
  return (
    <div className="flex justify-between h-6 py-5 items-center px-3 lg:h-15">
      <div className="flex text-indigo-700 h-6 items-center font-bold lg:gap-1 pl-15">
        <Film className="stroke-1" />
        Movie Z
      </div>
      <div className=" flex gap-4 m:hidden">
        <button className="flex items-center border rounded-lg w-25 justify-center gap-4 font-medium">
          <ChevronDown size={16} />
          Genre
        </button>
        <input
          className="border rounded-lg p-1.5 w-80"
          type="text"
          name=""
          id=""
          placeholder="🔎   type to search"
        />
      </div>
      <div className="flex gap-3 items-center ">
        <button className="border rounded-md lg:hidden">
          <Search className="stroke-1 p-0.5" />
        </button>
        <button className="border rounded-md lg:mr-15 p-1.5">
          <Moon className="stroke-1 p-0.5 " />
        </button>
      </div>
    </div>
  );
}
