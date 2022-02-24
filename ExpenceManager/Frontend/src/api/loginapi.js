
const loginApi = async (userDetails) => {

    try {
        const resp = await fetch("http://localhost:3000/api/v0/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        if (resp.status === 200) {
            const data = await resp.json();
            localStorage.setItem("user", JSON.stringify(data.msg));
            return true;
        }
        return false
    } catch (error) {
        console.log(error);

    }
}

export default loginApi;