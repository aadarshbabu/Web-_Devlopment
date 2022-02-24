
import axios from "axios";

async function RegisterApi(userInfo) {

    console.log("user", userInfo);
    const config = {
        "Content-Type": "application/json"
    }
    try {
        const responce = await axios.post("/api/v0/auth/register", userInfo, config);
        if (responce.status === 200) {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;

    }





}

export default RegisterApi