import { get } from "../../utils/request";
import b64toBlob from "../../utils/base64toBolb";

function base64encode(data) {
  return btoa(data.map((v) => String.fromCharCode(v)).join(""));
}

const getImgSchool = async (idSubject) => {
  try {
    const res = await get(`/subject/img/${idSubject}`);
    let imageURI = "data:image/jpeg;base64," + base64encode(res.imgSchool.data);
    return imageURI;
  } catch (error) {
    console.log(error);
  }
};

export default getImgSchool;
