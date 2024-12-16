import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[url('/winter.png')] bg-no-repeat bg-cover h-dvh w-full">
      <div className="flex">
        <div className="flex flex-col gap-4 basis-1/2">
          <div className="flex items-center grow-0 justify-center rounded-full bg-white p-7 ">
            <Image
              src="/twitter.png"
              alt="Twitter logo"
              width={87}
              height={87}
            />
          </div>
          <div className="flex items-center grow-0 justify-center rounded-full bg-white p-7">
            <Image
              src="/telegram.png"
              alt="Telegram logo"
              width={94}
              height={94}
            />
          </div>
          <h1 className="text-[128px] font-normal leading-[128px] tracking-[-0.019em] text-left ">
            Whislist on Base
          </h1>
        </div>
        <div className="basis-1/2">Mcap</div>
      </div>
    </div>
  );
}
