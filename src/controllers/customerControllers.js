const connection = require('../database'),
uuid = require('uuid/v1');

const createFile = (req,res,next )=> {
    connection.query(
        `
        INSERT INTO
          links
        VALUES
    (
         '${uuid()}',
         '${req.body.title}',
         '${req.body.url}',
         '${req.body.description}'
    )
    `, (err, data)=>{
        if(!err){
          if(data.affectedRows > 0 ){
            res.redirect('links/add');
          }else{
            res.redirect('/');
          } 
        }else{
          console.log(err);
          res.redirect('/');
        }
      }
    );
  }

module.exports = {
    createFile
};