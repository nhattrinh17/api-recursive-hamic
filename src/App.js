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
import updateFileResearch from "./apiServices/research/updateFileResearch";
import getResearchById from "./apiServices/research/getResearchById";
import addCommentResearch from "./apiServices/research/addComment";
import getCommentResearch from "./apiServices/research/getCommentResearch";
import increaseLikeResearchOrComment from "./apiServices/research/likeResearchOrComment";
import getFileResearchbyId from "./apiServices/research/getFileResearchById";
import getAllResearch from "./apiServices/research/getAllResearch";
import setPublicOrPrivate from "./apiServices/research/setPublicOrPrivate";
import addDepartment from "./apiServices/department/addDepartment";
import deleteDepartment from "./apiServices/department/deleteDepartment";
import addExam from "./apiServices/exam/addExam";

function App() {
  const [result, setResult] = useState();
  const formDataRef = useRef();
  const inputElement = useRef();
  const [file, setFile] = useState();
  const [fileAvatar, setFileAvatar] = useState();

  const submit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(formDataRef.current);

    const idUser = "63497babfd3001fab0dde337";
    const idReseach = "634989f26cfa12352ead0720";

    const newDepartment = {
      name: "test 12:51",
    };

    const like = {
      type: "research",
      idReaechOrComment: "63345fd30a9f82181506cb77",
    };

    // const res = await addResearch(fromData);
    const res = await addDepartment(newDepartment);
    console.log(res);
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
      console.log(res);
    }
    // testApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <object data={file} type="application/pdf"></object>
        <img src={fileAvatar} />
        {fileAvatar}
        <form ref={formDataRef}>
          <p>name</p>
          <input name="name" type={"text"} />
          <p>idDepartment</p>
          <input name="idDepartment" type={"text"} />
          <p>idSubject</p>
          <input name="idExamSubject" type={"text"} />
          <p>file</p>
          <input type={"file"} name="fileExam" />
          <p>user</p>
          <input name="userPost" type={"text"} />
          {/* <input name="comment" type={"text"} /> */}
          {/* <input name="idArticleOrExam" type={"text"} /> */}
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
