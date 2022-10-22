import { getCookie } from "../../utils/libCookie.js";
import { get } from "../../utils/request.js";

/**
 *
 *
 */

const getAllResearchPrivate = async () => {
  try {
    const idToken = getCookie("idToken");
    const res = await get(`research/private`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllResearchPrivate;
