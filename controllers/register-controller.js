const Cryptr = require('cryptr');
const express=require("express");
const connection = require('../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
  console.log('register')
   const today = new Date();
 const encryptedString =(req.body.password);
    console.log('sedang buat password',encryptedString)
   const users={
        "name":req.body.username,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        console.error(error)
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        console.log("sukses")
        res.redirect("/")
      //     res.json({
      //       status:true,
      //       data:results,
      //       message:'user registered sucessfully'
      //   })
      // }
      }
    })
}
