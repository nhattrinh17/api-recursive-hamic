import { getCookie } from "../utils/libCookie";
import { post } from "../utils/request";

/**
 * @param {*} data (Trong data gồm có name, idDepartment, idSubject, flieExam, idUserPost, userPost)
 * @returns {String}
 * const exam = {
 * name,
 * idDepartment,
 * idSubject,
 * flieExam,
 * idUserPost,
 * userPost
 * }
 * Data gửi lên cần có cấu trúc như này và dùng FormData
 * */

const addDepartment = async (data) => {
  try {
    const idToken = getCookie("idToken");
    const res = await post("department/add", data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default addDepartment;
