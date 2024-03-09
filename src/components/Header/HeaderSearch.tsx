import {
  cartIcon,
  chevronDownIcon,
  locationIcon,
  searchIcon,
} from "../../assets/icons";
import { tokopediaImage } from "../../assets/images";

const categoriesPopular: string[] = [
  "Sofa Bed",
  "Keyboard Mechanical",
  "Kurma Sukari",
  "Google Pixel",
  "Sony A6400",
  "Dr Qyu Lembar",
  "Traction Device",
];

export default function HeaderSearch() {
  return (
    <>
      {/* Header Search Section */}
      <div className="px-9 py-2 flex items-center gap-x-3">
        {/* Logo Section */}
        <a href="#" className="cursor-pointer w-[200px]">
          <img src={tokopediaImage} alt="tokopedia-logo" className="w-full" />
        </a>

        {/* Search Section */}
        <div className="flex items-center gap-x-4 w-full px-4">
          <div className="inline-block px-2 py-2 hover:bg-[#F0F3F7] rounded-lg transition duration-200">
            <a href="#" className="text-sm text-[#212121]">
              Kategori
            </a>
          </div>
          <div className="relative w-full">
            <img
              src={searchIcon}
              alt="Search"
              className="w-5 absolute top-2 left-3"
            />
            <input
              type="text"
              placeholder="Cari di Tokopedia"
              className="border border-[#8d96aa] rounded-lg p-2 pl-10 focus:outline-none focus:ring-0 focus:border-[#00aa5b] transition duration-300 text-sm w-full"
            />
          </div>
        </div>

        {/* Auth Button */}
        <div className="flex items-center gap-x-3">
          <div className="inline-block px-2 py-2 hover:bg-[#F0F3F7] rounded-lg transition duration-200 w-10">
            <img src={cartIcon} alt="Cart" className="w-full" />
          </div>
          <div className="w-[2px] h-5 bg-[#E4EBF5] rounded-md"></div>
          <a
            href="#"
            className="px-3 py-1.5 border border-[#00aa5b] rounded-lg font-bold text-[#00aa5b] text-sm"
          >
            Masuk
          </a>
          <a
            href="#"
            className="px-3 py-1.5 bg-[#00aa5b] rounded-lg font-bold text-white text-sm"
          >
            Daftar
          </a>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="pr-9 pb-9 relative flex items-center justify-between">
        <div className="fixed left-[300px] top-[95px] w-2/3">
          <div className="flex items-center">
            {categoriesPopular.map((link, index) => (
              <a
                href="#"
                key={index}
                className="font-medium text-[12px] text-[#6D7588] hover:text-[#00aa5b] transition-all duration-200 mr-4 text-ellipsis whitespace-nowrap overflow-hidden"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="fixed right-6 top-[95px] flex items-center gap-x-2">
          <div className="w-5">
            <img src={locationIcon} className="w-full" />
          </div>
          <h1 className="text-[#6D7588] text-xs">Dikirim ke</h1>
          <h1 className="text-[#212121] text-xs font-bold">
            Kemiling, Kota Bandar Lampung
          </h1>
          <div className="w-5">
            <img src={chevronDownIcon} className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
