import Image from "next/image";
import TwitterIcon from "~/public/twitter.png";
import TelegramIcon from "~/public/telegram.png";
import VectorIcon from "~/public/Vector-55.svg";
import McapIcon from "~/public/MCap.svg";
import InfoIcon from "~/public/info.svg";
import ShareIcon from "~/public/share.svg";
import JesseIcon from "~/public/Jesse.svg";

export default function WishlistLandingPage() {
  return (
    <div className="bg-[url('/winter.png')] bg-cover bg-repeat w-full min-h-screen flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 ml-40 mt-10 space-y-8">
          <div className="flex space-x-4">
            <div className="bg-white rounded-full p-7 flex items-center justify-center">
              <Image
                src={TwitterIcon}
                alt="Twitter logo"
                width={87}
                height={87}
              />
            </div>
            <div className="bg-white rounded-full p-7 flex items-center justify-center">
              <Image
                src={TelegramIcon}
                alt="Telegram logo"
                width={94}
                height={94}
              />
            </div>
          </div>
          <div className="space-y-0">
            <h1 className="text-[128px] font-normal leading-none tracking-tighter">
              Whislist
            </h1>
            <h1 className="text-[128px] font-normal leading-none tracking-tighter">
              on Base
            </h1>
            <VectorIcon className="w-full" />
            <div className="flex items-center text-[128px]">
              <span>$</span>
              <span className="uppercase">whislist</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-16 mr-96 relative">
          <div className="absolute top-0 left-0 z-10 ml-8">
            <h1 className="text-[128px]">Mcap:</h1>
          </div>
          <McapIcon className="" />
          <div className="absolute top-0 left-0 z-10 ml-8 mt-48">
            <h1 className="text-[64px]">
              Info: Leave your wishes onchain and wait for them to come true.
            </h1>
          </div>
          <InfoIcon className="" />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 mt-10">
        <h2 className="w-3/4 bg-white text-black text-[48px] px-4 py-2 mb-8">
          CA:8Trg8yE6Eqga4Z3BdS4HpE2Q633PCCiMZTArMBNasda9
        </h2>
        <h2 className="w-3/4 bg-white text-black text-[48px] px-4 py-2 ">
          Share your BASE SANTA wish! 🎅✨
        </h2>
        <input
          className="w-3/4 bg-white text-black text-[48px] px-4 py-2 placeholder-gray-500"
          placeholder="|...yellow lambo"
        />
        <div className="relative w-3/4 flex justify-end">
          <button>
            {" "}
            <h1 className="absolute text-[48px] text-black uppercase mr-16 mt-9">
              share wish
            </h1>
            <ShareIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <JesseIcon />
      </div>
    </div>
  );
}
