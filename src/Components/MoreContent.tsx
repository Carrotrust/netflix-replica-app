import { IoDesktopOutline, IoTelescope } from "react-icons/io5"
import Carousel from "./Carousel"
import { BsArrowDownCircle } from "react-icons/bs"
import { PiSmileyBold } from "react-icons/pi"
import Accordion from "./Accordion"
import { useRef } from "react"
import { MdOutlineTranslate } from "react-icons/md"
import { FaChevronDown } from "react-icons/fa6"

const MoreContent = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <main className="flex min-h-screen w-screen px-6 md:px-20 py-10 h-full bg-[#000000]">
      <div className="flex md:ml-10  w-[90%] flex-col">
        <h1 className="text-xl md:text-2xl flex text-left font-bold text-white ">
          Trending now
        </h1>
        <div className="mt-5">
          <Carousel />
        </div>
        <div className="flex  mt-20 flex w-full  flex-col">
          <h1 className="text-white text-left text-lg md:text-2xl font-bold">
            More Reasons to Join
          </h1>

          <div className="mt-5 grid grid-cols-1  lg:grid-cols-4 gap-4">
            {/* Cards */}
            {[
              {
                title: "Enjoy on your TV",
                text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
                icon: <IoDesktopOutline size={50} />,
              },
              {
                title: "Download your shows to watch offline",
                text: "Save your favorites easily and always have something to watch.",
                icon: <BsArrowDownCircle size={50} />,
              },
              {
                title: "Watch everywhere",
                text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
                icon: <IoTelescope size={50} />,
              },
              {
                title: "Create profiles for kids",
                text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
                icon: <PiSmileyBold size={50} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1b1b37] via-[#1c162d] to-[#1e1223] p-6 flex flex-col rounded-lg"
              >
                <h1 className="text-white font-bold text-xl text-left ">
                  {item.title}
                </h1>
                <p className="text-[#8f8e9b] mt-4 max-w-xs md:max-w-sm text-left ">
                  {item.text}
                </p>
                <div className="mt-auto flex justify-end  text-[#331024]">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQ  */}
        <div className="min-h-screen mt-15 flex flex-col">
          <h1 className="text-white text-center md:text-left text-xl font-bold text-lg md:text-2xl text-left ">
            Frequently Asked Questions
          </h1>

          <Accordion />

          <div className="min-h-screen w-full mt-15 px-2 md:px-4  flex flex-col">
            <p className="text-white text-left md:text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            {/* Input and get started button  */}
            <div className="mt-10 md:mt-4 flex text-left md:text-center items-start md:items-stretch justify-center w-full h-14 flex-col space-y-4 md:flex-row md:space-x-2">
              <input
                ref={inputRef}
                placeholder="Email address"
                className="px-4 py-3 w-full md:w-[50%]  h-full bg-transparent placeholder-[#7e7f82] border border-[#3b3b36] rounded focus:outline-none focus:text-white focus:border-[#c7c7c6]"
              />

              <button
                onClick={handleFocus}
                className="px-2 flex items-center justify-center md:flex py-2 w-fit md:w-[20%]  bg-red-500 text-xl cursor-pointer font-bold  hover:bg-red-600 text-white rounded"
              >
                Get Started <span className="ml-2">&gt;</span>
              </button>
            </div>

            <div className="flex mt-12 w-full  flex-col">
              <a className="underline text-[#afafae]">Questions? Contact us.</a>

              <div className="flex flex-col gap-2 md:flex-row mt-10 md:space-x-20 lg:space-x-30">
                <div className="flex flex-col space-y-4">
                  <a className="underline text-sm text-[#afafae]">FAQ</a>
                  <a className="underline text-sm text-[#afafae]">
                    Investor Relations
                  </a>
                  <a className="underline text-sm text-[#afafae]">Privacy</a>
                  <a className="underline text-sm text-[#afafae]">Speed Test</a>
                </div>

                <div className="flex flex-col space-y-4">
                  <a className="underline text-sm text-[#afafae]">
                    Help Center
                  </a>
                  <a className="underline text-sm text-[#afafae]">Jobs</a>
                  <a className="underline text-sm text-[#afafae]">
                    Cookie Preferences
                  </a>
                  <a className="underline text-sm text-[#afafae]">
                    Legal Notice
                  </a>
                </div>

                <div className="flex flex-col space-y-4">
                  <a className="underline text-sm text-[#afafae]">Account</a>
                  <a className="underline text-sm text-[#afafae]">
                    Ways to Watch
                  </a>
                  <a className="underline text-sm text-[#afafae]">
                    Corporate Information
                  </a>
                  <a className="underline text-sm text-[#afafae]">
                    Only on Netflix
                  </a>
                </div>

                <div className="flex flex-col space-y-4">
                  <a className="underline text-sm text-[#afafae]">
                    Media Center
                  </a>
                  <a className="underline text-sm text-[#afafae]">
                    Terms of Use
                  </a>
                  <a className="underline text-sm text-[#afafae]">Contact Us</a>
                </div>
              </div>
              <button className="mt-15 text-white bg-transparent rounded border border-[#afafae] gap-1 flex items-center py-2 px-4 w-fit">
                <MdOutlineTranslate />
                English
                <FaChevronDown />
              </button>

              <p className="mt-15 text-[#afafae]">Netflix Nigeria </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MoreContent
