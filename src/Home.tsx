import MainPage from "./Components/MainPage"
import MoreContent from "./Components/MoreContent"
import Navigations from "./Components/Navigations"

const Home = () => {
  return (
    <div>
      <div className="relative h-[90vh] w-screen bg-cover bg-[url('https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg')] border-b-[6px] border-b-[#e30916] clip-bottom ">
        <div className="absolute inset-0 bg-black opacity-70 "></div>
        <div className="relative z-10">
          <Navigations />
          <MainPage />
        </div>
      </div>
      <MoreContent />
    </div>
  )
}

export default Home
