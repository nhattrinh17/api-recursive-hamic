import { put } from "../../utils/request";

/**
 *
 * @param {*} data
 * @param {*} idToken
 * @returns
 * Data ở đây cũng dùng kiểu object trong object có 2 trường
 * 1 là type đây là trường dùng để xác định là like bài báo hay like 1 comment
 * 2 là idReaechOrComment là id của bài báo hoặc comment cần like
 */

const increaseLikeResearchOrComment = async (data, idToken) => {
  try {
    const res = await put("research/like", data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default increaseLikeResearchOrComment;
