const base_url = "http://192.168.4.1/";

export function get_status(addr: string, parseResponse) {
    fetch(base_url + addr)
        .then(function (response) {
            let contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                // return response.json().then(parseResponse(json));
                return response.json().then(function (json) {
                    console.log(json);
                });
            } else {
                console.log("Oops, we haven't got JSON!");
            }
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        });
}

// export function setupWS() {
//     socket = new WebSocket("ws://192.168.4.1:7777/");

//     socket.onopen = function (e) {
//         console.log("[open] Connection established");
//         console.log("Sending to server");
//     };

//     socket.onmessage = function (event) {
//         try {
//             const msg = JSON.parse(event.data);
//             pump_state = msg["pump"][0]["state"];
//             pumping = msg["pump"][0]["pump"];
//             upperLevel = 100 * (1 - (msg["pump"][0]["upperUltra"] - 10) / (110 - 10));
//             lowerLevel = 100 * (1 - (msg["pump"][0]["lowerUltra"] - 11) / (40 - 11));

//             console.log(lowerLevel, upperLevel);
//         } catch (error) {
//             console.log(`[error] ${error.message}`);
//             // console.log(`[msg] ${msg}`);
//             console.log(`[message] Data received from server: ${event.data}`);
//         }
//     };

//     socket.onclose = function (event) {
//         if (event.wasClean) {
//             console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//         } else {
//             // e.g. server process killed or network down
//             // event.code is usually 1006 in this case
//             console.log('[close] Connection died');
//         }
//     };

//     socket.onerror = function (error) {
//         console.log(`[error] ${error.message}`);
//     };

//     const start = setInterval(() => {
//         try {
//             socket.send("get_data");
//         } catch (error) {
//             console.log(`[error] ${error.message}`);
//         }
//     }, 3000);
// }