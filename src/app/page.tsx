import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        jihan.pro
        <br />
        CI 파이프라인 테스트 중
      </p>
      <div className="w-screen h-[80vh] flex items-center justify-center">
        <div className="flex w-max h-max align-middle justify-center ">
          <Image
            alt="logo_image"
            width={512}
            height={512}
            src="/images/jh_black.png"
          />
        </div>
      </div>
    </main>
  );
}
