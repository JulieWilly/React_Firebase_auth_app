import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/countSlice";


const Navigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.count.user);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">
              Auth 2 Login
            </span>
          </div>
        </div>
        {auth == null ? (
''
        ):(
          <button
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Log out
        </button>
        )
        }
      </div>
    </nav>
  );
}

export default Navigation;