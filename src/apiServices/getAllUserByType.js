import { get } from "../utils/request";

/**
 * @param {*} type
 * @param {*} idToken
 * type là kiểu danh sách muốn lấy như student, , examteacher
 * Lấy idToken đã lưu khi lofin để truyền vào làm đối số
 */
const getAlluserByType = async (type, idToken) => {
  try {
    const res = await get(`/user/?type=${type}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAlluserByType;
