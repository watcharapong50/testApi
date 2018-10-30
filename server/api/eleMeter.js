var User = require('../models/eleMeter');
const express = require('express');
const router = express.Router();

router.get('/showAllData', function (req, res) {
    User.find((err, user) => {// .find({}, { _id: false, name: true }).limit(5).sort({ name: -1 })
        if (err) {
            res.json({ success: false, message: 'Err : ' + err });
        } else {
            res.header('Access-Control-Allow-Origin', '*');
            res.json( user );
        }
    }).limit(6).sort({ date: -1 });
});

// router.post('/findOne', function (req, res) {
//     User.findOne({ username: req.body.username }).select('email username password firstname lastname room permission Maddr date').exec(function (err, user) {
//         if (err) throw err;
//         if (!user) {
//             res.json({ success: false, message: 'Could not find user' });
//         } else if (user) {
//             res.json({ success: true, message: 'Authenticated!!', user });
//         }
//     })
// });

// router.delete('/delete/:username', function (req, res) {
//     User.deleteMany({ username: req.params.username }, function (err) {
//         if (err) {
//             res.json({ success: false, message: 'Could not find user' });
//         } else {
//             res.json({ success: true, message: 'deleted' });
//         }
//     });
// });

router.post('/add', function (req, res) {
    var user = new User();
    user.Maddr = req.body.Maddr;
    user.LineVoltage = req.body.LineVoltage;
    user.Frequency = req.body.Frequency;
    user.LineCurrent = req.body.LineCurrent;
    user.ActiveEnergy = req.body.ActiveEnergy;
    if (req.body.Maddr == null || req.body.Maddr == '' ||
        req.body.LineVoltage == null || req.body.LineVoltage == '' ||
        req.body.LineCurrent == null || req.body.LineCurrent == '' ||
        req.body.ActiveEnergy == null || req.body.ActiveEnergy == '') {
        res.json({ success: false, message: 'Ensure username, email and password weare provided' });
    } else {
        user.save(function (err) {
            if (err) {
                res.json({ success: false, message: 'Username or Email is already' });
                console.log(err);
            } else if (!err) {
                res.json({ success: true, message: 'DATA created!' });
            }
        });
    }
});

// router.put('/update', function (req, res) {
//     if (req.body.firstname == null || req.body.firstname == '' ||
//         req.body.lastname == null || req.body.lastname == '' ||
//         req.body.username == null || req.body.username == '' ||
//         req.body.password == null || req.body.password == '' ||
//         req.body.room == null || req.body.room == '' ||
//         req.body.email == null || req.body.email == '') {
//         res.json({ success: false, message: 'Ensure username, email and password weare provided' });
//     } else {
//         User.findOne({ username: req.body.username }).updateOne({
//             $set: {
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 password: req.body.password,
//                 email: req.body.email,
//                 room: req.body.room
//             }
//         }, (err, todo) => {
//             if (err) {
//                 res.json({ success: false, message: 'Err : ' + err });
//             } else {
//                 res.send(todo);
//             }
//         })
//     }
// });

// router.post('/authenticate', function (req, res) {
//     User.findOne({ username: req.body.username }).select('email username password').exec(function (err, user) {
//         if (err) throw err;
//         if (!user) {
//             res.json({ success: false, message: 'Could not authenticate user' });
//         } else if (user) {
//             if (req.body.password) {
//                 var validPassword = user.comparePassword(req.body.password);
//             } else if (req.body.password = null) {
//                 res.json({ success: false, message: 'No password' });
//             }
//             if (!validPassword) {
//                 res.json({ success: false, message: 'Could not authenticate password' });
//             } else {
//                 var token = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' });
//                 res.json({ success: true, message: 'Authenticated!!', token: token });
//             }
//         }
//     })
// });

   // router.use(function(req, res, next) {
    //     var token = req.body.token || req.body.query || req.headers['x-access-token'];
    //     if (token) {
    //         jwt.verify(token, secret, function(err, decoded) {
    //             if(err) {
    //                 res.json({ success: false, message: 'Token invalid'})
    //             } else {
    //                 req.decoded = decoded;
    //                 next();
    //             }
    //         });
    //     } else {
    //         res.json({ success: false, message: 'No token provider'})
    //     }
    // })

    // router.post('/me', function (req, res) {
    //     res.send(req.decoded);
    // });
    
router.post('/test', function (req, res) {
    res.send("test");
});


module.exports = router;