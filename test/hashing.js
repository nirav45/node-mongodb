const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hasedPassword = '$2a$10$XVEFEjDfYiteOaHR7MZlz.g9KUnmiimV5Fd3Bt.wbx2gqaURD96RK';
bcrypt.compare(password, hasedPassword, (err, res) => {
  console.log(res);
});
// var data = {
//   id:18
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded',decoded);
// var message = "Hello Nirav Patel";
// var hash = SHA256(message).toString();
//
// console.log('Message :',message);
// console.log('Hash :',hash);
//
// var data = {
//   id:4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "secret").toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data) + "secret").toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + "secret").toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed.');
// } else {
//   console.log('Data was changed.');
// }
