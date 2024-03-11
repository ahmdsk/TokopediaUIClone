import { phoneIcon } from "../../assets/icons";

const headerLinks: string[] = [
  "Tentang Tokopedia",
  "Mitra Tokopedia",
  "Mulai Berjualan",
  "Promo",
  "Tokopedia Care",
];

export default function HeaderTopLink() {
  return (
    <div className="flex justify-between bg-[#f0f3f7] text-[#6D7588] items-center px-9 py-1 fixed top-0 w-full">
      <div className="flex gap-x-2 items-center">
        <img src={phoneIcon} alt="phone" className="w-4" />
        <h1 className="font-medium text-[12px] hover:text-[#00aa5b] transition-all duration-200 cursor-pointer">Download Tokopedia App</h1>
      </div>
      <ul className="flex gap-x-8 items-center">
        {headerLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="font-medium text-[12px] hover:text-[#00aa5b] transition-all duration-200">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
