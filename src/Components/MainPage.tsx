import { useRef } from "react"

const MainPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <main className="flex flex-col items-center justify-center w-full ">
      <div className="flex items-center w-full justify-center flex-col px-5 md:flex mt-15 md:mt-30 space-y-4">
        <h2 className="text-white text-center font-bold text-3xl md:text-6xl">
          Unlimited movies, TV
          <span className="inline ml-2 md:ml-12 md:block">shows, and more</span>
        </h2>

        <h3 className="text-white text-center md:font-bold md:text-xl md:text-2xl">
          Starts at ₦2,200. Cancel anytime.
        </h3>

        <p className="text-white text-center md:font-bold md:text-md">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      <div className="mt-20 md:mt-6 flex items-center md:items-stretch justify-center w-full h-14 flex-col space-y-4 md:flex-row md:space-x-2">
        <input
          ref={inputRef}
          placeholder="Email address"
          className="px-4 py-3 w-[80%] md:w-[30%] h-full bg-transparent placeholder-[#7e7f82] border border-[#3b3b36] rounded focus:outline-none focus:text-white focus:border-[#c7c7c6]"
        />

        <button
          onClick={handleFocus}
          className="px-2 py-2 w-fit md:w-[20%] h-full bg-red-500 text-xl cursor-pointer font-bold  hover:bg-red-600 text-white rounded"
        >
          Get Started <span className="ml-2">&gt;</span>
        </button>
      </div>
    </main>
  )
}

export default MainPage
