const express = require('express');
const cors = require('cors');
const routes = require('./routes/allRoutes');
// const psl = reuire('psl');
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploadedContent'));
app.use(cors());
app.use("/", routes);

app.listen(6999, () => {
    console.log(`server is running at 6999`);
});