import { useNavigate } from "react-router-dom";

const Topbar = ({ setQuery }: { setQuery: React.Dispatch<React.SetStateAction<string>> }) => {
    const navigate = useNavigate();
  return (
    <div className="bg-black py-5 flex justify-between items-center px-16 max-sm:px-5">
        <div className="w-[60%]">
            <input 
             className="rounded-md px-5 py-1 w-full"
             type="text" 
             placeholder="Search Post" 
             onChange={(e) => { setQuery(e.target.value); }}
            />
        </div>
        <div>
            <button 
             className="bg-blue-700 text-white px-6 py-1 rounded-full hover:bg-blue-600 max-sm:px-2 max-sm:text-sm"
             onClick={() => { navigate(`/createPost`); }}
             >Create Post
            </button>
        </div>
    </div>
  )
}

export default Topbar