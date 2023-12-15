const {createPool} = require('mysql');
const pool = createPool({
    host:'localhost',
    user:'root',
    password:"root",
    database:'sys',
    connectionLimit:10
});

pool.query(`select * from sys_config`,(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
