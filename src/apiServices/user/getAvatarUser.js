import { get } from "../../utils/request";

const getAvatarUser = async (idUser, idToken) => {
  try {
    const res = await get(`/user/avatar/${idUser}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getAvatarUser;
