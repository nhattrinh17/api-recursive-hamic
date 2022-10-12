import { setCookie } from "../../utils/libCookie";
import { post } from "../../utils/request";

/**
 * @param {*} data (Trong data gồm có email, password)
 * const loginUser = {
        email,
        password,
      }
* Data gửi lên cần có cấu trúc như này
*idToken được trả về cho người dùng khi đăng nhập thành công và cân được lưu lại để sử dụng
 */
const loginUser = async (data) => {
  try {
    const res = await post("/user/login", data);
    const idToken = res.idToken;
    setCookie("idToken", idToken, 1);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default loginUser;
