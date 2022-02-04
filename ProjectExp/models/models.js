const con = require("../db/conn");


let alldata = async (cb) => {
    con.query("select * from todolist", (err, data, fields) => {
        if (err)
            throw err

        cb(data);
    });

}

let setTask = async (task, iscomplited, cb) => {

    con.query(`insert into todolist values("${task}", ${iscomplited})`, (err, res, fields) => {
        if (err)
            throw err;
        cb(res);
    })
}


let setuser = async () => {



}


module.exports = {
    alldata,
    setuser,
    setTask,
}




