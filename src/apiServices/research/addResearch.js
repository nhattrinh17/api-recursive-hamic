import { post } from "../../utils/request";

const addResearch = async (data, idToken) => {
  try {
    const res = await post("research/public/add", data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default addResearch;
