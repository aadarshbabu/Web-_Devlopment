
function setdomdata(res) {
    let data = document.getElementsByClassName("data");
    data[0].innerHTML = JSON.stringify(res);
    console.log(res)
}

function getdata() {

    axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/",
        params: {
            _limit: 10
        }

    })
        .then(res => { setdomdata(res.data) })
        .catch(error => console.error(error));



}
getdata();