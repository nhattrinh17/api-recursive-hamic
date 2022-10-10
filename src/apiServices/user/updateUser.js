import { put } from "../../utils/request";

/**
 * @param {*} idUser
 * @param {*} data (Trong data gồm có fristName, lastName, email, password)
 * @param {*} idToken
 * const newUser = {
        firstName,
        lastName,
        email,
        codeSudentOrLecturers
    }
* Data gửi lên cần có cấu trúc như này
 */
const updateUser = async (idUser, data, idToken) => {
  try {
    const res = await put(`/user/update/${idUser}`, data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateUser;
