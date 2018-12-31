// ==UserScript==
// @name         Einsatzsortierung
// @namespace    https://forum.leitstellenspiel.de
// @version      0.4
// @author       FeuerwehrHannover
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/missions/*
// ==/UserScript==
$(document).ready(function(){if("/"==window.location.pathname){var f={},g={},h={},e={0:{Credits:110},1:{Credits:170},2:{Credits:370},3:{Credits:340},4:{Credits:200},5:{Credits:1400},6:{Credits:600},7:{Credits:210},8:{Credits:220},9:{Credits:250},10:{Credits:600},11:{Credits:240},12:{Credits:310},13:{Credits:980},14:{Credits:1E3},15:{Credits:1010},16:{Credits:1100},17:{Credits:340},18:{Credits:700},19:{Credits:650},20:{Credits:2500},21:{Credits:2400},22:{Credits:2700},23:{Credits:1200},24:{Credits:900},
25:{Credits:1E3},26:{Credits:3510},27:{Credits:700},28:{Credits:1400},29:{Credits:2470},30:{Credits:1900},31:{Credits:400},32:{Credits:1310},33:{Credits:1200},34:{Credits:3710},35:{Credits:3810},36:{Credits:3310},37:{Credits:110},38:{Credits:110},39:{Credits:110},40:{Credits:110},41:{Credits:10010},42:{Credits:3720},43:{Credits:10010},44:{Credits:0},45:{Credits:0},46:{Credits:0},47:{Credits:0},48:{Credits:0},49:{Credits:0},50:{Credits:0},51:{Credits:3620},52:{Credits:310},53:{Credits:1410},54:{Credits:0},
55:{Credits:870},56:{Credits:0},57:{Credits:0},58:{Credits:0},59:{Credits:14010},60:{Credits:100},61:{Credits:100},62:{Credits:120},63:{Credits:120},64:{Credits:150},65:{Credits:150},66:{Credits:150},67:{Credits:120},68:{Credits:120},69:{Credits:120},70:{Credits:120},71:{Credits:120},72:{Credits:2E3},73:{Credits:700},74:{Credits:500},75:{Credits:10020},76:{Credits:800},77:{Credits:500},78:{Credits:130},79:{Credits:1800},80:{Credits:2E3},81:{Credits:400},82:{Credits:400},83:{Credits:2500},84:{Credits:0},
85:{Credits:200},86:{Credits:3E3},87:{Credits:0},88:{Credits:500},89:{Credits:2500},90:{Credits:250},91:{Credits:370},92:{Credits:0},93:{Credits:3E3},94:{Credits:400},95:{Credits:4E3},96:{Credits:2900},97:{Credits:2500},98:{Credits:300},99:{Credits:0},100:{Credits:900},101:{Credits:1500},102:{Credits:2E3},103:{Credits:2200},104:{Credits:2E3},105:{Credits:2200},106:{Credits:1800},107:{Credits:1800},108:{Credits:0},109:{Credits:0},110:{Credits:0},111:{Credits:350},112:{Credits:850},113:{Credits:1500},
114:{Credits:900},115:{Credits:0},116:{Credits:1600},117:{Credits:100},118:{Credits:550},119:{Credits:100},120:{Credits:2200},121:{Credits:2500},122:{Credits:600},123:{Credits:1100},124:{Credits:1600},125:{Credits:1700},126:{Credits:2E3},127:{Credits:2200},128:{Credits:700},129:{Credits:800},130:{Credits:600},131:{Credits:2E3},132:{Credits:5E3},133:{Credits:5100},134:{Credits:4E3},135:{Credits:4100},136:{Credits:8E3},137:{Credits:8100},138:{Credits:1500},139:{Credits:3500},140:{Credits:1600},141:{Credits:3600},
142:{Credits:1500},143:{Credits:400},144:{Credits:400},145:{Credits:150},146:{Credits:4200},147:{Credits:0},148:{Credits:100},149:{Credits:100},150:{Credits:150},151:{Credits:1200},152:{Credits:750},153:{Credits:100},154:{Credits:100},155:{Credits:0},156:{Credits:0},157:{Credits:0},158:{Credits:370},159:{Credits:120},160:{Credits:150},161:{Credits:900},162:{Credits:1400},163:{Credits:1400},164:{Credits:0},165:{Credits:0},166:{Credits:1200},167:{Credits:1400},168:{Credits:600},169:{Credits:600},170:{Credits:600},
171:{Credits:4E3},172:{Credits:600},173:{Credits:700},174:{Credits:1020},175:{Credits:900},176:{Credits:2100},177:{Credits:4600},178:{Credits:2900},179:{Credits:0},180:{Credits:0},181:{Credits:0},182:{Credits:0},183:{Credits:0},184:{Credits:0},185:{Credits:0},186:{Credits:5630},187:{Credits:2230},188:{Credits:100},189:{Credits:80},190:{Credits:150},191:{Credits:310},192:{Credits:1900},193:{Credits:2E3},194:{Credits:1E3},195:{Credits:1E3},196:{Credits:1E3},197:{Credits:2E3},198:{Credits:2500},199:{Credits:750},
200:{Credits:5500},201:{Credits:9E3},202:{Credits:300},203:{Credits:610},204:{Credits:3E3},205:{Credits:5100},206:{Credits:10200},207:{Credits:16010},208:{Credits:4E3},209:{Credits:150},210:{Credits:0},211:{Credits:0},212:{Credits:0},213:{Credits:11200},214:{Credits:3E3},215:{Credits:4E3},216:{Credits:500},217:{Credits:500},218:{Credits:500},219:{Credits:500},220:{Credits:500},221:{Credits:17E3},222:{Credits:14E3},223:{Credits:4400},224:{Credits:4E3},225:{Credits:7E3},226:{Credits:5E3},227:{Credits:5E3},
228:{Credits:2E3},229:{Credits:4E3},230:{Credits:1E3},231:{Credits:4E3},232:{Credits:3500},233:{Credits:4500},234:{Credits:4E3},235:{Credits:1500},236:{Credits:2E3},237:{Credits:1700},238:{Credits:2E3},239:{Credits:3E3},240:{Credits:2500},241:{Credits:200},242:{Credits:2100},243:{Credits:1200},244:{Credits:1E3},245:{Credits:1200},246:{Credits:1400},247:{Credits:1400},248:{Credits:2E3},249:{Credits:3E3},250:{Credits:1E3},251:{Credits:1200},252:{Credits:1400},253:{Credits:1400},254:{Credits:2E3},255:{Credits:3E3},
256:{Credits:10010},257:{Credits:2500},258:{Credits:2800},259:{Credits:370},260:{Credits:220},261:{Credits:1E3},262:{Credits:2500},263:{Credits:900},264:{Credits:1500},265:{Credits:400},266:{Credits:400},267:{Credits:150},268:{Credits:4200},269:{Credits:200},270:{Credits:200},271:{Credits:6050},272:{Credits:1600},273:{Credits:1600},274:{Credits:0},275:{Credits:7E3},276:{Credits:2E3},277:{Credits:350},278:{Credits:2500},279:{Credits:2800},280:{Credits:1500},281:{Credits:0},282:{Credits:0},283:{Credits:4E3},
284:{Credits:100},285:{Credits:150},286:{Credits:1020},287:{Credits:300},288:{Credits:110},289:{Credits:400},290:{Credits:800},291:{Credits:7E3},292:{Credits:300},293:{Credits:0},294:{Credits:12E3},295:{Credits:1100},296:{Credits:2020},297:{Credits:0},298:{Credits:1500},299:{Credits:2500},300:{Credits:1500},301:{Credits:500},302:{Credits:6E3},303:{Credits:700},304:{Credits:6500},305:{Credits:13E3},306:{Credits:8E3},307:{Credits:6E3},308:{Credits:1E3},309:{Credits:1E3},310:{Credits:1E3},311:{Credits:1100},
312:{Credits:0},313:{Credits:900},314:{Credits:1900},315:{Credits:4400},316:{Credits:5400},317:{Credits:1500},318:{Credits:200},319:{Credits:1E3},320:{Credits:11500},321:{Credits:1800},322:{Credits:2500},323:{Credits:1500},324:{Credits:1E4},325:{Credits:7E3},326:{Credits:0},327:{Credits:3500},328:{Credits:1200},329:{Credits:700},330:{Credits:2E3},331:{Credits:3E3},332:{Credits:1E4},333:{Credits:1E4},334:{Credits:6E3},335:{Credits:6E3},336:{Credits:500},337:{Credits:370},338:{Credits:340},339:{Credits:0},
340:{Credits:0},341:{Credits:0},342:{Credits:2500},343:{Credits:2500},344:{Credits:1010},345:{Credits:1200},346:{Credits:6500},347:{Credits:6E3},348:{Credits:1E4},349:{Credits:100},350:{Credits:17E3},351:{Credits:4E3},352:{Credits:7500},353:{Credits:4500},354:{Credits:0},355:{Credits:0},356:{Credits:1700},357:{Credits:500},358:{Credits:4E3},359:{Credits:9E3},360:{Credits:500},361:{Credits:500},362:{Credits:500},363:{Credits:500},364:{Credits:500},365:{Credits:500},366:{Credits:550},367:{Credits:2800},
368:{Credits:7500},369:{Credits:1800},370:{Credits:1E3},371:{Credits:300},372:{Credits:300},373:{Credits:0},374:{Credits:0},375:{Credits:300},376:{Credits:600},377:{Credits:0},378:{Credits:4400},379:{Credits:900},380:{Credits:900},381:{Credits:900},382:{Credits:900},383:{Credits:600},384:{Credits:1100},385:{Credits:5100},386:{Credits:5500},387:{Credits:6500},388:{Credits:2500},389:{Credits:8500},390:{Credits:1E3},391:{Credits:0},392:{Credits:1900},393:{Credits:3E3},394:{Credits:3E3},395:{Credits:3E3},
396:{Credits:3E3},397:{Credits:0},398:{Credits:3200},399:{Credits:2700},400:{Credits:5050},401:{Credits:1600},402:{Credits:400},403:{Credits:110},404:{Credits:110},405:{Credits:980},406:{Credits:980},407:{Credits:3700},408:{Credits:400},409:{Credits:980},410:{Credits:110},411:{Credits:5900},412:{Credits:3E3},413:{Credits:2500},414:{Credits:3E3},415:{Credits:200},416:{Credits:0},417:{Credits:0},418:{Credits:400},419:{Credits:4500},420:{Credits:0},421:{Credits:800},422:{Credits:400},423:{Credits:3100},
424:{Credits:8600}};$("#btn-group-mission-select").append('<button id="sortdebug" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button> <button id="sortdate" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon-time" aria-hidden="true"></span></button> <button id="sortcredits" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span></button>');
localStorage.removeItem("sort-credits");localStorage.removeItem("sort-date");localStorage.removeItem("sort-credits-alliance");localStorage.removeItem("sort-mode");$("#sortcredits").click(function(){localStorage.removeItem("sort-credits");localStorage.removeItem("sort-date");localStorage.removeItem("sort-credits-alliance");$("#mission_list .missionSideBarEntry").each(function(){var a=$(this).attr("mission_type_id");if(void 0==e[a])console.log("Neuer Einsatz ID: "+a);else{var b=$(this).index(),c=$(this).attr("mission_id");
$(this).attr("data-credits",e[a].Credits);f[b]=c;localStorage.setItem("sort-credits",JSON.stringify(f));localStorage.setItem("sort-mode","credits")}});$("#mission_list_alliance .missionSideBarEntry").each(function(){var a=$(this).attr("mission_type_id");if(void 0==e[a])console.log("Neuer Einsatz ID: "+a);else{var b=$(this).index(),c=$(this).attr("mission_id");$(this).attr("data-credits",e[a].Credits);g[b]=c;localStorage.setItem("sort-credits-alliance",JSON.stringify(g));localStorage.setItem("sort-mode",
"credits")}});var a=$("#mission_list div.missionSideBarEntry"),b=$("#mission_list_alliance div.missionSideBarEntry");a.sort(function(a,b){return+$(b).attr("data-credits")-+$(a).attr("data-credits")});a.appendTo("div#mission_list");b.sort(function(a,b){return+$(b).attr("data-credits")-+$(a).attr("data-credits")});b.appendTo("div#mission_list_alliance")});$("#sortdate").click(function(){localStorage.setItem("sort-mode","date");localStorage.removeItem("sort-date");localStorage.removeItem("sort-credits");
var a=$("#mission_list_alliance .missionSideBarEntry");a.sort(function(a,b){console.log(+$(a).attr("mission_id")+" "+ +$(b).attr("mission_id"));return+$(a).attr("mission_id")-+$(b).attr("mission_id")});a.appendTo("#mission_list_alliance");$("#mission_list_alliance .missionSideBarEntry").each(function(){var a=$(this).index(),b=$(this).attr("mission_id");h[a]=b});localStorage.setItem("sort-date",JSON.stringify(h))});$("#sortdebug").click(function(){localStorage.removeItem("sort-date");localStorage.removeItem("sort-credits");
localStorage.removeItem("sort-mode")});faye.subscribe("/private-alliance140de",function(a){a.search("missionMarkerAdd()")})}if(-1<window.location.pathname.indexOf("missions/")){var b=function(){return $("#mission_finish_now_btn").length?"sort-credits":"sort-credits-alliance"},a=function(a){$(".mission_header_info div:eq(0)").append('<div class="sorterror"><p style="margin: 0;"><strong>Fehler!</strong>'+a+"</p></div>");$(".sorterror").css({"background-color":"#ffdddd","border-left":"6px solid #f44336",
"margin-bottom":"15px",padding:"4px 12px",display:"flex","align-items":"center"})},d=function(a,b){return parseInt(Object.keys(a).find(function(c){return a[c]===b}))};if(null!=localStorage.getItem("sort-mode"))if("credits"==localStorage.getItem("sort-mode"))if(null!=localStorage.getItem(b())){var c=location.href.replace("https://www.leitstellenspiel.de/missions/","");b=JSON.parse(localStorage.getItem(b()));null!==d(b,c)?(a='<div class="btn-group"><a href="/missions/',d=d(b,c),c=parseInt(b[d-1]),a=
isNaN(c)?a+'" class="disabled ':a+(c+'" class="'),a+='btn btn-fadeout btn-sm btn-warning navbar-btn" id="sort_previous" title="Vorheriger sortierter Einsatz"> <span class="glyphicon glyphicon-arrow-left"></span> <span class="glyphicon glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span></a><a href="/missions/',b=parseInt(b[d+1]),a=isNaN(b)?a+'" class="disabled ':a+(b+'" class="'),a+='btn  btn-fadeout btn-sm  btn-warning navbar-btn" id="sort_next" title="N\u00e4chster sortierter Einsatz"><span class="glyphicon glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span> <span class="glyphicon glyphicon-arrow-right"></span> </a></div>',
$(".navbar-header").append(a)):a(" Zu diesem Einsatz konnte keine Sortierung gefunden werden. Sortiere die Eins\u00e4tze erneut.")}else throw a(" Es konnte keine Sortierung gefunden werden | ID: #1 (no storage item)"),Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #1");else if("date"==localStorage.getItem("sort-mode"))if(null!=localStorage.getItem("sort-date"))c=location.href.replace("https://www.leitstellenspiel.de/missions/",""),b=JSON.parse(localStorage.getItem("sort-date")),
isNaN(d(b,c))?a(" Zu diesem Einsatz konnte keine Sortierung gefunden werden. Sortiere die Eins\u00e4tze erneut."):(console.log(d(b,c)),a='<div class="btn-group"><a href="/missions/',d=d(b,c),c=parseInt(b[d-1]),a=isNaN(c)?a+'" class="disabled ':a+(c+'" class="'),a+='btn btn-fadeout btn-sm btn-warning navbar-btn" id="sort_previous" title="Vorheriger sortierter Einsatz"> <span class="glyphicon glyphicon-arrow-left"></span> <span class="glyphicon glyphicon-time" aria-hidden="true"></span></a><a href="/missions/',
b=parseInt(b[d+1]),a=isNaN(b)?a+'" class="disabled ':a+(b+'" class="'),a+='btn  btn-fadeout btn-sm  btn-warning navbar-btn" id="sort_next" title="N\u00e4chster sortierter Einsatz"><span class="glyphicon glyphicon-time" aria-hidden="true"></span> <span class="glyphicon glyphicon-arrow-right"></span> </a></div>',$(".navbar-header").append(a));else throw a(" Es konnte keine Sortierung gefunden werden | ID: #2 (no storage item)"),Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #2");
else throw a(" Es konnte keine Sortierung gefunden werden | ID: #1 (sort-mode undefined)"),Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #3");else throw a(" Es konnte keine Sortierung gefunden werden | ID: #4 (no sort-mode)"),Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #4");}});
