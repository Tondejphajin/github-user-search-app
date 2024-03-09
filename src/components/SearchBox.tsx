import searchIcon from "../assets/icon-search.svg";

export default function SearchBox() {
  return (
    <form className="mt-[36px] flex h-[60px] w-[327px] items-center justify-center rounded-xl bg-almost-white shadow-lg md:w-[573px] md:justify-between desktop:h-[69px] desktop:w-[730px] dark:bg-dark-blue">
      <img
        src={searchIcon}
        alt="search_icon"
        className="size-[20px] md:ml-[32px] desktop:size-[24px]"
      />
      <input
        type="text"
        placeholder="Search GitHub username..."
        className="ml-[9px] h-[25px] w-[184px] text-[13px] text-muted-blue md:ml-[24px] md:h-[25px] md:w-[280px] md:text-[18px] desktop:ml-[-245px] dark:bg-dark-blue dark:text-white"
      />
      <button
        type="submit"
        className="ml-[7px] h-[46px] w-[84px] rounded-xl bg-blue text-[14px] font-bold text-white md:mr-[10px] md:h-[50px] md:w-[106px] desktop:text-[16px]"
      >
        Search
      </button>
    </form>
  );
}
