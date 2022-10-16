import b64toBlob from "../../utils/base64toBolb";
import base64encode from "../../utils/buffToBase64";
import { get } from "../../utils/request";

/**
 *
 * @param {*} id (id bài báo cần lấy ảnh)
 * @returns
 */

const getImageResearchbyId = async (id) => {
  try {
    const res = await get(`research/file/${id}`);
    const uri = `data:${res.type};base64,` + res.data;
    return uri;
  } catch (error) {
    console.log(error.message);
  }
};

export default getImageResearchbyId;
