import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/AppSlice";

const Head = () => {
  const dispatch = useDispatch(); 

  const menuClickHandler = () => {
     dispatch(toggleMenu());
  }

  
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img alt="menu"
        className="h-8 cursor-pointer"
        onClick={menuClickHandler}
        src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
        <img className="h-8 cursor-pointer" alt="youtube-logo" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"/>
      </div>
      <div className="col-span-10 px-10">
        <input type="text" className="w-3/4 border border-gray-400 rounded-l-full p-2"/>
        <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-100"> 🔍 </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>
    </div>
  )
}

export default Head