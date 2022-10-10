import { put } from "../../utils/request";

const updateImageResearch = async (idReseach, data, idToken) => {
  try {
    const res = await put(`research/public/update/image/${idReseach}`, data, {
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
