const express = require('express');
const userData = require('../Data/UserDB.json');
const fs = require('fs');

const router = express.Router();

router.get('/login', (req, res) => {
    var un = req.query.username;
    var ud = null;
    userData.users.forEach(element => {
        if (element.Email == un) {
            ud = element;
        }
    });
    if (ud) {
        res.send({
            data: ud
        })
    }
    else res.send({ data: null });
});

router.post('/adduser', async (req, res) => {
    await fs.readFile('./Data/UserDB.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
            responseStr = "error";
        } else {
            var obj = JSON.parse(data); //now it an object
            var bool = false
            obj.users.forEach((e) => {
                if (e.Email === req.body.Email) {
                    bool = true;
                }
            });
            if (bool) {
                return res.status(200).json({
                    status: 404,
                    message: 'user already exists'
                });
            }
            else {
                obj.users.push(req.body); //add some data
                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile("./Data/UserDB.json", json, 'utf8', () => {
                    return res.status(200).json({
                        status: 200,
                        message: 'user succesfully signed up'
                    });
                }); // write it back
            }
            
        }
    });
});

module.exports = router;