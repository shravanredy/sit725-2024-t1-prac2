const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/multiplyTwoNumbers', function (req, res) {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    
   
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ message: 'Invalid input. Please provide valid numbers' });
    }

    let result = num1 * num2;
    let response = { data: result, message: 'success', statusCode: 200 };
    res.json(response);
});


app.listen(port, () => {
    console.log('Express server started on http://localhost:' + port);
});