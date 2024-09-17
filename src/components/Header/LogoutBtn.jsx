import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useSession }  from "../../store/session"

function LogoutBtn() {
  const dispatch = useDispatch();
  const {destroySession } = useSession();


  const logoutHandler = () => {
    authService.logout()
                      .then(() => {
                      dispatch(logout())
                      alert("logout successful")
                      })
                       .then(()=> destroySession())
    };

  return (
    <button
      className=" inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
