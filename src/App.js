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
import getAllDepartment from "./apiServices/department/getAllDepartment";
import getDepartmentByNam from "./apiServices/department/getDepartmentByName";

import addSuBject from "./apiServices/subject/addSubject";
import deleteSubject from "./apiServices/subject/deleteSubject";
import getAllSubject from "./apiServices/subject/getAllSubject";
import getSubjectByName from "./apiServices/subject/getSubjectByName";
import updateSubject from "./apiServices/subject/updateSubject";
import updateImgSubject from "./apiServices/subject/updateImgSubject";
import getImgSchool from "./apiServices/subject/getImgSchool";

import addExam from "./apiServices/exam/addExam";
import countExamDownload from "./apiServices/exam/countExamDownload";
import getAllExam from "./apiServices/exam/getAllExam";
import getExamByIdDepartment from "./apiServices/exam/getExamByIdDepartment";
import getExamByIdSubject from "./apiServices/exam/getExamByIdSubject";
import getExamBy2Id from "./apiServices/exam/getExamBy2Id";
import setExamPublicOrPrivate from "./apiServices/exam/setExamPublicOrPrivate";
import updateExam from "./apiServices/exam/updateExam";
import updateFileExam from "./apiServices/exam/updateFileExam";
import deleteExam from "./apiServices/exam/deleteExam";
import getFileExam from "./apiServices/exam/getFileExam";
import getAllResearchPrivate from "./apiServices/research/getAllResearchPrivate";
import getResearchByName from "./apiServices/research/getResearchByName";

function App() {
  const [result, setResult] = useState();
  const formDataRef = useRef();
  const inputElement = useRef();
  const [file, setFile] = useState();
  const [fileAvatar, setFileAvatar] = useState();

  const submit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(formDataRef.current);

    const newDepartment = {
      name: "Địa phủ",
    };

    const idResearch = "635416c4787282496eeec7b5";
    const idDepartment = "6347e4793bb5671a63e9f20f";
    const idSubject = "634933cc9c531a5bad57a89a";
    const idExam = "634995bb2ca8b5121d2afd93";
    const status = {
      isPublic: false,
    };
    const subject = {
      school: "Đại học xây dựng",
    };

    const like = {
      type: "research",
      idReaechOrComment: "63345fd30a9f82181506cb77",
    };

    const exam = {
      name: "Đề thi 1",
    };

    // const res = await addResearch(fromData);
    // const res = await setPublicOrPrivate(idResearch, { isPublic: true });
    const res = await getResearchByName("demo");
    console.log(res);
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
      const idUser = "63497babfd3001fab0dde337";
      const idToken = "634b3e88f1d9f941c93e5ef7";
      const res = await loginUser(user);
      console.log(res);
    }
    // testApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <object data={file} type="application/pdf"></object> */}
        <iframe src={file}></iframe>
        <img src={fileAvatar} />
        <form ref={formDataRef}>
          {/* <p>name</p>
          <input name="name" type={"text"} />
          <p>idDepartment</p>
          <input name="idDepartment" type={"text"} />
          <p>idSubject</p>
          <input name="idExamSubject" type={"text"} />
          <p>file</p>
          <input type={"file"} name="fileExam" />
          <p>userPost</p>
          <input name="userPost" type={"text"} /> */}
          {/* <input name="comment" type={"text"} /> */}
          {/* <input name="idArticleOrExam" type={"text"} /> */}
          <p>fileExam</p>
          <input type={"file"} name="fileExam" />
          <label for="cars">Choose a car:</label>

          <select name="cars" id="cars" multiple>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
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
