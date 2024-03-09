import HeaderSearch from "./HeaderSearch";
import HeaderTopLink from "./HeaderTopLink";

export default function Header() {
  return (
    <div className="border-b border-[#F0F3F7]">
      <HeaderTopLink />
      <HeaderSearch />
    </div>
  );
}
