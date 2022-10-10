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

function App() {
  const [result, setResult] = useState();
  const formDataRef = useRef();
  const inputElement = useRef();

  const submit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(formDataRef.current);
    // console.log(fromData.get("description"));
    // console.log(fromData.get("name"));
    console.log(fromData.get("image"));
    // console.log(fromData.get("scored"));
    // const idUser = "6332784bae083badbf26ba53";//admin
    const idUser = "63331bba38fdf8add0caa7eb"; //test
    const idToken = "63423df784fa4da9330d4414";
    const idReseach = "634374bc8798518b5f009f1f";
    const res = await updateImageResearch(idReseach, fromData, idToken);
    setResult(res);
  };

  console.log(result);
  useEffect(() => {
    async function testApi() {
      const firstName = "update";
      const lastName = "last name update";
      const email = "Test0910@gmail.com";
      const codeSudentOrLecturers = "09102022";
      const password = "nhat17112002";
      // const fromData = new FormData(formDataRef.current);
      // fromData.append("firstName", firstName);
      // fromData.append("lastName", lastName);
      // fromData.append("email", email);
      // fromData.append("codeSudentOrLecturers", codeSudentOrLecturers);
      // fromData.append("pasword", password);
      const user = {
        email,
        firstName,
        lastName,
        codeSudentOrLecturers,
      };
      const idUser = "634051bac555f5944e6e9f6f";
      const idToken = "63423df784fa4da9330d4414";
      const res = await updateAvatarUser(idUser, user, idToken);
      setResult(res);
    }
    // testApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form ref={formDataRef}>
          {/* <input name="name" type={"text"} /> */}
          {/* <input name="description" type={"text"} /> */}
          {/* <input name="scored" type={"number"} /> */}
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
