import { useContext } from "react";
import BlogForm from "../components/BlogForm";
import { AuthCont } from "../contexts/AuthContext";

const NewBlog = () => {
  const { currentUser } = useContext(AuthCont);
  const user = currentUser.email;
 console.log(user);
  return (
    <div>
      <BlogForm />
    </div>
  );
};

export default NewBlog;
