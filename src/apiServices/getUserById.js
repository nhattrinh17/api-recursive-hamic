import { get } from "../utils/request";

/**
 * @param {*} id
 * id người dùng
 * @param {*} idToken
 * Lấy idToken đã lưu khi lofin để truyền vào làm đối số
 */
const getUserById = async (id, idToken) => {
  try {
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
