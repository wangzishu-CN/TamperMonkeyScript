// ==UserScript==
// @name         SkeyeySnowPointPlus
// @namespace    https://github.com/wangzishu-CN/SkeyeySnow/blob/main/SkeyeySnowPointPlus.js
// @supportURL   https://github.com/wangzishu-CN/SkeyeySnow/issues
// @version      0.1
// @description  让天雪数值更加易懂
// @author       wangzishu-CN
// @match        https://skyeysnow.com/home.php?mod=spacecp&ac=credit&showcredit=1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skyeysnow.com
// @grant        none
// ==/UserScript==

(function () {
    var i, j, tmp
    var dp = 2 //小数点
    var size = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
    var type = ['P', 'B', 'P', 'B', 'hh', 'hh', 'P']
    for (i = 3; i <= 9; i++) {
        tmp = document.querySelectorAll("li>em")[i].nextSibling.data
        for (j = 0; tmp >= 1024; j++) {
            tmp /= 1024
        }
        document.querySelectorAll("li>em")[i].nextSibling.data = tmp.toFixed(dp) + ' ' + size[j] + type[i - 3]
    }
})();
