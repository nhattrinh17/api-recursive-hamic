import { getCookie } from "../../utils/libCookie";
import { get } from "../../utils/request.js";

/**
 * @param {*} id
 * id người dùng
 */
const getUserById = async (id) => {
  try {
    const idToken = getCookie("idToken");
    const res = await get(`/user/${id}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getUserById;
