"use strict";$(document).ready(function(){function t(t){console.log("Called formatData"),$.each(t,function(t,n){a.push({k:t,v:n})}),o(),setInterval(function(){o()},1e4)}function n(){for(var t="789ABCD",n="#",o=0;o<6;o++)n+=t[Math.round(6*Math.random())];return n}function o(){console.log("Called displayItem");var t=a[Math.floor(Math.random()*a.length)],o=t.k,e=t.v;$("#term").text(o),$("#definition").text(e),$("body").css("background-color",n())}var a=[];$.getJSON("/data/websters-dictionary.json",function(n){t(n)})});