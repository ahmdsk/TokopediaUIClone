import HeaderSearch from "./HeaderSearch";
import HeaderTopLink from "./HeaderTopLink";

export default function Header() {
  return (
    <div className="border-b border-[#F0F3F7] h-[120px] fixed top-0 w-full z-[99999] bg-white">
      <HeaderTopLink />
      <HeaderSearch />
    </div>
  );
}
