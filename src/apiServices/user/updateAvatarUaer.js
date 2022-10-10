import { put } from "../../utils/request";

/**
 * 
 * @param {*} idUser 
 * @param {*} data 
 * @param {*} idToken 
 * @returns 
 * Data ở đây nên tạo ra 1 form data và có name = "avatar"
 * vd:const fromData = new FormData(form Elemnt);
 * Thẻ input trong elemt form <input
            type={"file"}
            name="avatar"
            multiple={true}
          />
 */
const updateAvatarUser = async (idUser, data, idToken) => {
  try {
    const res = await put(`/user/update/avatar/${idUser}`, data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateAvatarUser;
