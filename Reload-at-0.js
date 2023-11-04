// ==UserScript==
// @name         每日零点刷新
// @namespace    https://github.com/wangzishu-CN
// @version      0.1
// @description  每日零点刷新
// @author       wangzishu-CN
// @match        https://www.example.com
// @grant        none
// ==/UserScript==
(function () {
    function reload() {
        setTimeout(location.replace(location.href), 60000)
        console.log("刷新成功")
    }
    var Time = new Date();
    var UTCHours = Time.getUTCHours()
    var UTCMinutes = Time.getUTCMinutes()
    var UTCSeconds = Time.getUTCSeconds()
    var CountDown = (23 - UTCHours) * 3600000 + (59 - UTCMinutes) * 60000 + (59 - UTCSeconds) * 1000 + 60000

    var req = function () { reload() }
    setInterval(req, CountDown)
})();
