var User = require('../models/status');
const express = require('express');
const router = express.Router();

router.get('/showAllMeter', function (req, res) {
    User.find((err, people) => {// .find({}, { _id: false, name: true }).limit(5).sort({ name: -1 })
        if (err) {
            res.json({ success: false, message: 'Err : ' + err });
        } else {
            res.header('Access-Control-Allow-Origin', '*');
            res.json(people);
        }
    })//.limit(2).sort({ date: -1 });
});

router.post('/find', function (req, res) {
    User.findOne({ Maddr: req.body.Maddr }).select('Maddr timeDelay shortCircuit status date').exec(function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Could not find user' });
        } else if (user) {
            res.json({ success: true, message: user });
        }
    })
});

router.delete('/delete/:Maddr', function (req, res) {
    User.deleteMany({ Maddr: req.params.Maddr }, function (err) {
        if (err) {
            res.json({ success: false, message: 'Could not find user' });
        } else {
            res.json({ success: true, message: 'deleted' });
        }
    });
});

router.post('/add', function (req, res) {
    var user = new User();
    user.Maddr = req.body.Maddr;
    if (req.body.Maddr == null || req.body.Maddr == '') {
        res.json({ success: false, message: 'Ensure username, email and password weare provided' });
    } else {
        user.save(function (err) {
            if (err) {
                res.json({ success: false, message: 'Maddr is already' });
                console.log(err);

            } else if (!err) {
                res.json({ success: true, message: 'Maddr created!' });
            }
        });
    }
});

router.post('/meter', function (req, res) {
    const user = new User();
    user.Maddr = req.body.Maddr;
    if (req.body.Maddr == null || req.body.Maddr == '') {
        res.json({ success: false, message: 'Ensure username, email and password weare provided' });
    } else {
        User.findOne({ Maddr: req.body.Maddr }).select('Maddr timeDelay shortCircuit status date').exec(function (err, user1) {
            if (err) throw err;
            if (!user1) { //ถ้าไม่เจอ Maddr
                user.Maddr = req.body.Maddr;
                user.save(function (err) {
                    if (err) {
                        res.json({ success: false, message: 'Maddr is already' });
                        console.log(err);
                    } else if (!err) {
                        res.json({ success: true, message: 'Maddr created!' });
                    }
                });
            } else {
                res.json({ success: true, timeDelay: user.timeDelay, shortCircuit: user.shortCircuit, status: user.status });
            }
        })
    }
});

router.put('/update', function (req, res) {
    if (req.body.Maddr == null || req.body.Maddr == '' ||
        req.body.timeDelay == null || req.body.timeDelay == '' ||
        req.body.shortCircuit == null || req.body.shortCircuit == '' ||
        req.body.status == null || req.body.status == '') {
        res.json({ success: false, message: 'Ensure username, email and password weare provided' });
    } else {
        User.findOne({ Maddr: req.body.userMaddrname }).updateOne({
            $set: {
                timeDelay: req.body.timeDelay,
                shortCircuit: req.body.shortCircuit,
                status: req.body.status
            }
        }, (err, todo) => {
            if (err) {
                res.json({ success: false, message: 'Err : ' + err });
            } else {
                res.send(todo);
            }
        })
    }
});

router.post('/test', function (req, res) {
    res.send(req.body.test);
});
module.exports = router;