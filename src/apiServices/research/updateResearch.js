import { getCookie } from "../../utils/libCookie";
import { put } from "../../utils/request";

/**
 *
 * @param {*} idReseach (id bài báo)
 * @param {*} data
 * @returns
 * data ở đây thì nên tạo 1 object để truyền vào trong data gồm các trường
 * name, description, scored
 */

const updateResearch = async (idReseach, data) => {
  try {
    const idToken = getCookie("idToken");
    const res = await put(`research/update/${idReseach}`, data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateResearch;
