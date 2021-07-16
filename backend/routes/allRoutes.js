const express = require('express');
const userData = require('../Data/UserDB.Json');
const fs = require('fs');
const multer = require('multer');
const { response } = require('express');
const strg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadedContent/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/Jpg') {
        cb(null, true);
    }
    else cb(null, false);
}
const uploadedContent = multer({
    storage: strg,
    limits: {
       fileSize :1024*1024*10
    },
    fileFilter: fileFilter
});

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

router.post("/uploadPost", uploadedContent.single('Image'), async (req, res, next) => {
    var obj = {
        text: req.body.text,
        path: req.file.path,
        filename: req.file.originalname
    }
    await fs.readFile('./Data/UserDB.json', 'utf8', function readFileCallback(err, data) {
        var userDataObj = JSON.parse(data);
        userDataObj.Posts.push(obj);
        json = JSON.stringify(userDataObj); //convert it back to json
        fs.writeFile("./Data/UserDB.json", json, 'utf8', () => {
            return res.status(200).json({
                status: 200,
                message: 'succesfully uploaded'
            });
        });
    });
    
});

router.get('/uploads', (req, res, next) => {
    var totalPosts = userData.Posts;
    res.send({
        data: totalPosts,
    });
})

module.exports = router;