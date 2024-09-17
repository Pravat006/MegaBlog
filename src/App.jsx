import AddPost from "../pages/AddPost"
import AllPost from "../pages/AllPost"
import EditPost from "../pages/EditPost"
import Home from "../pages/Home"
import Post from "../pages/Post"
import { Login, Signup } from "./components"
import LayOut from "./store/LayOut"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<LayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit-post/:slug" element={<EditPost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/all-posts" element={<AllPost />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
