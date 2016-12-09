var express = require('express');
var router = express.Router();

/* GET SQL data. */
var obj = {};
var quer1 = "SELECT * FROM test1 LIMIT 10";


router.get('/', function(req, res, next) {

    pool.getConnection(function(err, connection)
    {
        connection.query(quer1, function(err,rows)
        {
            if(err)
            {
                throw err;
            } else
            {
                obj = {db: rows};
                res.render('demand', obj);
                console.log(JSON.stringify(rows));
            }
        });
        connection.release();
        console.log('Connection Released');
    });
});
module.exports = router;



