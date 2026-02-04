import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Film } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-indigo-700 text-white h-77 flex flex-col gap-10 py-9 px-5 ">
      {/*lg:flex flex-row justify-between pr-70*/}
      <div className="">
        {/*lg: flex flex-col gap-3 pl-20*/}
        <div className="flex ">
          <Film className="stroke-1" />
          Movie Z
        </div>
        <div>© 2024 Movie Z. All Rights Reserved.</div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-1">
          <div className="pb-3">Contact Information</div>
          <div className="flex items-center gap-3">
            <Mail />
            <div>
              <div>Email:</div>
              <div>support@movieZ.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone />
            <div>
              <div>Phone:</div>
              <div>+976{"(11)"}123-4567</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="pb-3">Follow us</div>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
}
