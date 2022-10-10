import { put } from "../../utils/request";

const updateResearch = async (idReseach, data, idToken) => {
  try {
    const res = await put(`research/public/update/${idReseach}`, data, {
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
