import { getCookie } from "../../utils/libCookie";
import { get } from "../../utils/request";

const getAvatarUser = async (idUser) => {
  try {
    const idToken = getCookie("idToken");
    return await get(`/user/avatar/${idUser}`, {
      headers: {
        idtoken: idToken,
      },
    })
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );
  } catch (error) {
    console.log(error);
  }
};

export default getAvatarUser;
