import { useSelector } from "react-redux"

const Sidebar = () => {
  const menuState = useSelector((state) => state.app.isMenuOpen);
  if(!menuState) return null;

  return (
    <div className="shadow-lg mr-2 w-1/5">
      <ul>
        <li>Home</li>
        <li>Short</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold mt-2 border-t-2">You</h1>
      <ul>
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold mt-2 border-t-2">Subscriptions</h1>
      <ul>
        <li>History</li>
        <li>Tech</li>
        <li>Music</li>
        <li>Games</li>
      </ul>
    </div>
  )
}

export default Sidebar