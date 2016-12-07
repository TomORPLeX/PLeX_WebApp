var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

// close db connection
    con.end(function(err) {
        // The connection is terminated gracefully
        // Ensures all previously enqueued queries are still
        // before sending a COM_QUIT packet to the MySQL server.
        console.log('Connection Closed');
    });

});

module.exports = router;