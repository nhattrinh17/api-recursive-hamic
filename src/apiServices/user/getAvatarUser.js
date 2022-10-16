import b64toBlob from "../../utils/base64toBolb";
import { getCookie } from "../../utils/libCookie";
import { get } from "../../utils/request";

function base64encode(data) {
  return btoa(data.map((v) => String.fromCharCode(v)).join(""));
}

const getAvatarUser = async (idUser) => {
  try {
    const idToken = getCookie("idToken");
    const res = await get(`/user/avatar/${idUser}`, {
      headers: {
        idtoken: idToken,
      },
    });

    let imageURI = "data:image/jpeg;base64," + base64encode(res.image.data);
    return imageURI;
  } catch (error) {
    console.log(error);
  }
};

export default getAvatarUser;
