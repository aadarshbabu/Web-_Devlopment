import axios from "axios";
const { token } = JSON.parse(localStorage.getItem("user"));
axios.defaults.headers.common['token'] = token;

const axiosTaskUrl = axios.create({
    baseURL: "http://localhost:3000/api/v0/task"
})

export async function addTask(task) {
    const config = {
        Headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await axiosTaskUrl.post("/addlist", { ...task }, config);
    if (res.status === 200)
        return await res.data;
    return await res.data;

}


