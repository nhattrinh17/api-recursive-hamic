import { post } from "../../utils/request";

/**
 *
 * @param {*} data
 * @param {*} idToken
 * @returns {String}
 * Data ở đây thì nên dùng FormData giống như update Avatar user do có ảnh tải lên
 * nếu không thì backend sẽ không nhận được file
 */

const addResearch = async (data, idToken) => {
  try {
    const res = await post("research/add", data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default addResearch;
