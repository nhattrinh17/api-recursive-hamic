import { put } from "../../utils/request";

/**
 *
 * @param {*} idReseach
 * @param {*} data
 * @param {*} idToken
 * @returns
 * Data ở đây cũng cần sử dụng FormData để tạo và tên của trường đó là image
 */

const updateImageResearch = async (idReseach, data, idToken) => {
  try {
    const res = await put(`research/update/image/${idReseach}`, data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateImageResearch;
