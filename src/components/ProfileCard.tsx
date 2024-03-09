import profilePicture from "../assets/profile.svg";
import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websitIcon from "../assets/icon-website.svg";
import buildingIcon from "../assets/icon-company.svg";

export default function ProfileCard() {
  return (
    <div className="mt-6 w-[327px] rounded-2xl bg-almost-white pt-8 shadow-xl md:w-[573px] desktop:w-[730px] dark:bg-dark-blue">
      <div className="mx-[24px] md:mx-[40px]">
        <div className="flex h-[70px] w-[233px] md:h-[117px] md:w-[334px] md:items-center desktop:grid desktop:grid-cols-[117px_480px] desktop:gap-[37px]">
          <img
            src={profilePicture}
            alt="profile_picture"
            className="size-[70px] md:size-[117px]"
          />
          <div className="ml-[19px] flex h-[69px] w-[144px] flex-col justify-center md:h-[91px] md:w-[176px] desktop:ml-0 desktop:grid desktop:w-[480px] desktop:grid-cols-[50%_50%]">
            <div>
              <h1 className="text-[16px] font-bold md:text-[26px] dark:text-white">
                The Octocat
              </h1>
              <p className="mt-[2px] text-[13px] text-blue md:text-[16px]">
                @octocat
              </p>
            </div>
            <p className="mt-[4px] text-[13px] text-gray md:text-[15px] desktop:justify-self-end dark:text-white">
              Joined 25 Jan 2011
            </p>
          </div>
        </div>
        <div className="desktop:ml-[157px]">
          <p className="mt-[33px] text-[13px] leading-[25px] text-muted-blue md:mt-[24px] md:text-[15px] desktop:mt-[-30px] dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            minima aliquid, inventore quaerat laboriosam accusantium blanditiis
            ducimus hic ipsam facere similique vero ad culpa, optio sunt
            distinctio, laborum sapiente sequi!
          </p>
          <div className="mt-[23px] flex justify-between gap-[10px] rounded-lg bg-pale-white px-[15px] py-[18px] md:mt-[32px] dark:bg-black">
            <div className="flex h-[48px] w-[79px] flex-col items-center md:ml-[12px] md:items-start">
              <h1 className="text-[11px] text-muted-blue md:text-[13px] dark:text-white">
                Repos
              </h1>
              <p className="text-[16px] font-bold md:text-[22px] dark:text-white">
                8
              </p>
            </div>
            <div className="flex h-[48px] w-[81px] flex-col items-center md:items-start">
              <h1 className="text-[11px] text-muted-blue md:text-[13px] dark:text-white">
                Followers
              </h1>
              <p className="text-[16px] font-bold md:text-[22px] dark:text-white">
                3938
              </p>
            </div>
            <div className="flex h-[48px] w-[89px] flex-col items-center md:mr-[81px] md:items-start">
              <h1 className="text-[11px] text-muted-blue md:text-[13px] dark:text-white">
                Following
              </h1>
              <p className="text-[16px] font-bold md:text-[22px] dark:text-white">
                9
              </p>
            </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-[16px] pb-[48px] text-[13px] text-muted-blue md:grid md:grid-cols-[215px_215px] md:text-[15px] dark:text-white">
            <div className="flex items-center gap-[19px]">
              <img src={locationIcon} alt="" className="h-[20px] w-[13.75px]" />
              <p>San Franciso</p>
            </div>
            <div className="flex items-center gap-[13px]">
              <img src={websitIcon} alt="" className="size-[20px]" />
              <p>https://github.blog</p>
            </div>
            <div className="flex items-center gap-[13px]">
              <img
                src={twitterIcon}
                alt=""
                className="h-[16.25px] w-[20] opacity-50 "
              />
              <p className="opacity-50">Not Available</p>
            </div>
            <div className="flex items-center gap-[13px]">
              <img src={buildingIcon} alt="" className="size-[20px]" />
              <p>@github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
