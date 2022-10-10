import { get } from "../../utils/request";

/**
 * @param {*} idToken
 * Lấy idToken đã lưu khi lofin để truyền vào làm đối số
 */
const logoutUser = async (idToken) => {
  try {
    const res = await get("/user/logout", {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default logoutUser;
