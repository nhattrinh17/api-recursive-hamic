import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import RegisterUser from "./apiServices/user/registerUser";
import loginUser from "./apiServices/user/loginUser";
import logoutUser from "./apiServices/user/logoutUser";
import getAlluserByType from "./apiServices/user/getAllUserByType";
import getUserById from "./apiServices/user/getUserById";
import updateUser from "./apiServices/user/updateUser";
import getAvatarUser from "./apiServices/user/getAvatarUser";
import updateAvatarUser from "./apiServices/user/updateAvatarUaer";
import deleteUser from "./apiServices/user/deleteUser";
import addResearch from "./apiServices/research/addResearch";
import updateResearch from "./apiServices/research/updateResearch";
import updateImageResearch from "./apiServices/research/updateImageResearch";
import getResearchById from "./apiServices/research/getResearchById";
import addCommentResearch from "./apiServices/research/addComment";
import getCommentResearch from "./apiServices/research/getCommentResearch";
import increaseLikeResearchOrComment from "./apiServices/research/likeResearchOrComment";
import getImageResearchbyId from "./apiServices/research/getImageResearchById";
import getAllResearch from "./apiServices/research/getAllResearch";

function App() {
  const [result, setResult] = useState();
  const formDataRef = useRef();
  const inputElement = useRef();

  const submit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(formDataRef.current);
    // console.log(fromData.get("description"));
    // console.log(fromData.get("name"));
    // console.log(fromData.get("image"));
    // console.log(fromData.get("scored"));
    // console.log(fromData.get("comment"));

    // const idUser = "6332784bae083badbf26ba53";//admin
    const idUser = "63331bba38fdf8add0caa7eb"; //test
    const idToken = "6344118e335c2eabff36f988";
    const idReseach = "63345fd30a9f82181506cb77";
    // fromData.append("idArticleOrExam", idReseach);
    const newComment = {
      idArticleOrExam: idReseach,
      comment: "comment 11:25",
    };

    const like = {
      type: "research",
      idReaechOrComment: "63345fd30a9f82181506cb77",
    };

    const res = await getAllResearch(2);
    setResult(res);
  };

  console.log(result);
  useEffect(() => {
    async function testApi() {
      const firstName = "update";
      const lastName = "last name update";
      const email = "trinhminhnhatxt123@gmail.com";
      const codeSudentOrLecturers = "09102022";
      const password = "nhat17112002";

      const user = {
        email,
        password,
      };
      const idUser = "634051bac555f5944e6e9f6f";
      const idToken = "6344118e335c2eabff36f988";
      const res = await loginUser(user);
      setResult(res);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form ref={formDataRef}>
          <p>name</p>
          <input name="name" type={"text"} />
          <p>decs</p>
          <input name="description" type={"text"} />
          <p>scored</p>
          <input name="scored" type={"number"} />
          {/* <input name="comment" type={"text"} /> */}
          {/* <input name="idArticleOrExam" type={"text"} /> */}
          <input type={"file"} name="image" multiple={true} />
          <button type="submit" onClick={(e) => submit(e)}>
            Cập nhâtj
          </button>
        </form>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
