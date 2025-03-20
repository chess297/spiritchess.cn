import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full items-center justify-items-center p-2  flex flex-col">
      <header className="h-12 w-full flex px-4 shadow-2xl justify-between items-center">
        <div>
          <Image
            src="/spiritchess.png"
            width={150}
            height={40}
            alt="Spirit Chess Logo"
          />
        </div>
        <div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="h-20 w-full flex items-center justify-center"></div>
        {/* <h1 className="text-2xl font-bold">Spirit Chess</h1> */}
      </main>
      <footer className="h-20 flex items-center justify-center">
        <a href="https://beian.miit.gov.cn">粤ICP备2024351902号</a>
      </footer>
    </div>
  );
}
