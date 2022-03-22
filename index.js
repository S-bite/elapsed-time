function changeTextToElapsedTime() {
    const ms_to_hour = 60 * 60 * 1000;
    const ms_to_min = 60 * 1000;
    const ms_to_sec = 1000;

    let start_ms = new Date(Date.parse("2018-04-01T00:00:00.000+09:00") + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)).getTime();
    let now_ms = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)).getTime();
    let elapsed_ms = now_ms - start_ms;
    let elapsed_hour = Math.floor(elapsed_ms / ms_to_hour);
    elapsed_ms %= ms_to_hour;
    let elapsed_min = Math.floor(elapsed_ms / ms_to_min);
    elapsed_ms %= ms_to_min;
    let elapsed_sec = Math.floor(elapsed_ms / ms_to_sec)
    let text = "" + elapsed_hour + ":" + elapsed_min.toString().padStart(2, '0') + ":" + elapsed_sec.toString().padStart(2, '0');
    var elm = document.getElementById("elapsed_time");
    elm.innerText = text;
}
changeTextToElapsedTime();
setInterval(changeTextToElapsedTime, 1000);
