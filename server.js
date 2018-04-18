const app = require('express')();

const port = process.env.PORT || 3000;

app.get('**', (req, res) => {
    res.redirect('https://anghamify.cf');
});

app.listen(port, console.log('Server is running'));