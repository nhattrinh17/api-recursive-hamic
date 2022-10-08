import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import RegisterUser from "./apiServices/registerUser";
import loginUser from "./apiServices/loginUser";
import logoutUser from "./apiServices/logoutUser";
import getAlluserByType from "./apiServices/getAllUserByType";
import getUserById from "./apiServices/getUserById";
import updateUser from "./apiServices/updateUser";

function App() {
  const [result, setResult] = useState();

  console.log(result);
  useEffect(() => {
    async function testApi() {
      const firstName = "update";
      const lastName = "last name update";
      const email = "testuser@gmail.com";
      const codeSudentOrLecturers = "17112002";
      const newUser = {
        firstName,
        lastName,
        email,
        codeSudentOrLecturers,
      };
      const idUser = "634051bac555f5944e6e9f6f";
      const idToken = "63405b136033c75f32ccaa13";
      const res = await updateUser(idUser, newUser, idToken);
      setResult(res);
    }

    testApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
