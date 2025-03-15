import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const validateEmail = () => {
    const isEmail = /\S+@\S+\.\S+/.test(email) // Checks for "@ and ."
    const isMobile = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(email) // Checks if only numbers (mobile)

    if (!isEmail && !isMobile) {
      setEmailError("Please enter a valid email or phone number.")
    } else {
      setEmailError("")
    }
  }

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError(
        "Your password must contain between 4 and 60 characters."
      )
    } else {
      setPasswordError("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    validateEmail()
    validatePassword()

    if (!emailError && !passwordError && email && password) {
      alert("Login Successfully!")
    }
  }

  const handleBlur = (e: any) => {
    if (e.relatedTarget?.id === "toggle-password") {
      setIsFocused(false)
    }
  }

  return (
    <div>
      <div className="flex relative h-screen w-screen bg-cover bg-black md:bg-[url('https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg')] ">
        <div className="absolute inset-0 bg-black opacity-70 "></div>
        <div className="flex flex-col w-full min-h-screen  relative z-10 flex py-4 px-3 md:px-15">
          <Link to="/">
            <h1 className="text-red-500  font-bold text-3xl">NETFLIX</h1>
          </Link>
          <div className="flex items-center justify-center mt-6  md:h-full">
            {/* Sign in Container  */}
            <div className="flex-col  justify-center flex px-2 md:px-10 w-full md:w-[60%]  lg:w-[35%] h-[90%] bg-black/75  space-y-4">
              <h2 className="flex text-white items-start  font-bold text-2xl md:text-4xl">
                Sign In
              </h2>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or mobile number"
                className={`w-full text-white focus:outline-none focus:text-white focus:border-white border outline-none border-[#444544] h-13 bg-transparent rounded border placeholder-[#7e7f82] px-2 py-4 ${
                  emailError ? "border-red-500" : ""
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
              <div className="relative w-full">
                <input
                  onBlur={handleBlur}
                  onFocus={() => setIsFocused(true)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full text-white focus:outline-none focus:border-white border border-[#444544] h-13 bg-transparent rounded placeholder-[#7e7f82] px-2 py-4 pr-10 ${
                    passwordError ? "border-red-500" : ""
                  }`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
                {isFocused && (
                  <button
                    id="toogle-password"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer inset-y-0 right-3 flex items-center text-[#7e7f82] hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="flex w-full h-10 px-2 py-4 rounded justify-center  items-center text-white bg-red-500 font-bold cursor-pointer hover:bg-red-600 "
              >
                Sign In
              </button>

              <p className="block text-white  flex items-center  justify-center ">
                OR
              </p>

              <button className="flex w-full h-10 px-2 py-4 justify-center rounded items-center text-white bg-[#424342] opacity-50 hover:bg-[#3b3b3a] cursor-pointer ">
                Use a Sign-In Code
              </button>

              <a
                href="https://www.netflix.com/ng/loginHelp"
                className="underline cursor-pointer text-center text-white "
              >
                Forgot password?
              </a>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer appearance-none border border-gray-500 bg-black w-4 h-4 hover:border-white checked:bg-white checked:before:content-['✔'] checked:before:text-black checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-xs"
                />
                <p className="text-white">Remember me</p>
              </div>
              <p className="text-white">
                <span className="underline mr-2 text-[#afafae]">
                  New to Netflix?
                </span>
                <Link to="/">Sign up now.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section  */}
      <div className="w-screen h-[35vh] bg-[#161616]">
        <div className="flex w-full justify-center flex-col px-4 py-6 md:px-10 xl:px-40 lg:pt-20 pb-5">
          <p className="text-[#afafae]">Questions? Contact us.</p>
          {/* FAQ  */}
          <div className="grid grid-cols-2 gap-4 mt-5 lg:grid-cols-4">
            <p className="text-[#afafae] underline">FAQ</p>
            <p className="text-[#afafae] underline">Help Center</p>
            <p className="text-[#afafae] underline">Terms of Use</p>
            <p className="text-[#afafae] underline">Privacy</p>
            <p className="text-[#afafae] underline">Cookie Preferences</p>
            <p className="text-[#afafae] underline">Corporate Information</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
