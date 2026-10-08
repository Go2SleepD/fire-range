(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const t0={duck:{name:"Резиновая утка",hp:30,reward:3,speed:1.5,tags:["weak","small"]},teddy:{name:"Плюшевый мишка",hp:110,reward:10,speed:1.1,tags:["big","weak"]},duckling:{name:"Утёнок",hp:12,reward:1.2,speed:2.1,group:4,tags:["flock","small","fast"]},box:{name:"Коробка со щитом",hp:70,reward:8,speed:1.35,filling:"duckling",fill:2,tags:["shield","weak"]},candy:{name:"Конфета",hp:6,reward:.6,speed:2.4,tags:["small"]},blocker:{name:"Бетонный блокер",hp:45,reward:0,speed:1.25,tags:["blocker"]},supply:{name:"Ящик патронов",hp:18,reward:4,speed:1.4,tags:["helper"]},icebox:{name:"Криокапсула",hp:18,reward:4,speed:1.4,tags:["helper"]},popper:{name:"Хлопушка",hp:20,reward:6,speed:1.4,tags:["boom"]},toaster:{name:"Тостер",hp:90,reward:8,speed:1.2,filling:"toast",fill:2,tags:["split","small"]},toast:{name:"Тост",hp:14,reward:1.5,speed:2,tags:["small","burn"]},soda:{name:"Газировка",hp:40,reward:5,speed:1.5,blast:.8,tags:["boom","flock"]},popcorn:{name:"Попкорн",hp:9,reward:.9,speed:2.2,group:5,tags:["burn","flock","small"]},kettle:{name:"Чайник",hp:200,reward:20,speed:1,tags:["armor","metal","big"]},plane:{name:"Бумажный самолётик",hp:10,reward:1,speed:2.7,group:3,tags:["flock","fast","small","burn"]},printer:{name:"Принтер",hp:125,reward:11,speed:1.1,filling:"paper",fill:3,tags:["big","weak","burn"]},paper:{name:"Лист бумаги",hp:8,reward:.8,speed:2.3,tags:["small","burn"]},shredder:{name:"Шредер",hp:90,reward:8,speed:1.2,tags:["armor","queue"]},chair:{name:"Офисное кресло",hp:50,reward:5,speed:1.9,group:3,train:!0,tags:["queue","fast"]},bigteddy:{name:"Мишка-великан",hp:110*22,reward:0,speed:.5,tags:["big","weak"]},pinata:{name:"Пиньята-гигант",hp:1,reward:0,speed:0,tags:["big","weak"]},microwave:{name:"Микроволновка-обжора",hp:90*22,reward:0,speed:.45,tags:["big","metal"]},fridge:{name:"Холодильник-гигант",hp:1,reward:0,speed:0,stand:!0,tags:["big","armor"]},cooler:{name:"Кулер-водомёт",hp:125*22,reward:0,speed:.45,tags:["big","armor"]},xerox:{name:"Мега-ксерокс",hp:1,reward:0,speed:0,stand:!0,tags:["big","armor"]}},If=.35,Rb={first:2.5},Cb={radius:2.6,damage:1.2},Pb={step:.05,max:1,perStar:.25,show:3},Lb={need:60,seconds:10,bloom:.4},Ib={rare:{reward:3,label:"редкий"},golden:{reward:10,label:"золотой"}},zs={step:.04,starEvery:5,starMul:1.2,cost:12,costLine:1.7,growth:1.17,catalogMul:1.3},Df={hp:1.85,reward:1.9},e0={partsEvery:5},Db={every:480,burst:25,flow:3,crate:1,parts:5},Ub={minutes:.35,step:.015,cap:.45,minCoins:25,parts:2},Nb={every:120,jitter:15,time:12,hp:10,minutes:1.5,parts:3},Qh={rare:.02,golden:.003,refFlow:8,set1:{rare:3},set2:{rare:8,golden:1},parts:10},tu={share:.5,step:.12,reach:5.5,shield:.25},n0=[8,20,50,120],i0=4,s0={every:20},eu={every:12,share:.2},r0={kills:30},a0={id:1,name:"Склад игрушек",scale:1,theme:{decor:"toys"},lines:[{name:"Резиновые утки",short:"Утки",junk:"duck",flow:24,weapon:"glock19"},{name:"Плюшевые мишки",short:"Мишки",junk:"teddy",flow:14,weapon:"revolver"},{name:"Стая утят",short:"Утята",junk:"duckling",flow:40,weapon:"uzi"},{name:"Коробки со щитом",short:"Коробки",junk:"box",flow:12,weapon:"m870",rule:"ricochet"}],gates:[{at:3,kind:"line",line:1},{at:6,kind:"machine",id:"sorter"},{at:7,kind:"line",line:2},{at:11,kind:"mini"},{at:13,kind:"line",line:3},{at:16,kind:"machine",id:"magnet"},{at:18,kind:"rush"},{at:20,kind:"boss"}],machines:{sorter:{name:"Сортировщик",text:`пресс даёт деталь за каждые ${e0.partsEvery} штук хлама — во всех цехах`,icon:"⚙️",keep:"sorter"},magnet:{name:"Монетный магнит",text:"+12% ко всем наградам",icon:"🧲",income:1.12}},mini:{junk:"bigteddy",line:1,crate:1,icon:"🧸"},rush:{name:"Распродажа",flow:1.6},boss:{name:"Пиньята-гигант",junk:"pinata",line:0,seconds:35,text:"Висит над линией 1. Тапай по ней — в золотую дверцу крит.<br>Победа откроет лифт в следующий цех"},story:{golden:210}},o0={id:2,name:"Бешеная кухня",scale:10,theme:{background:"#0f2a2c",wall:"#174a4f",panel:"#8fc7bd",panelFrame:"#e8dcc4",wainscot:"#c94f3d",pillar:"#d9cbb0",plinth:"#c94f3d",floor:"#d8d0c4",slab:"#2a5f63",slabLow:"#1e4c50",stand:"#5f7f86",standTop:"#6a8a90",walls:"tiles",floorTex:"checker",decor:"kitchen",conveyor:{frame:"#9aa8b4",steel:"#7a8794",ram:"#c94f3d",post:"#5f6e7a",bin:"#3d6f73",binLid:"#2f5c60",belt:"#f0e2cc"},lamp:"#fff7e0"},lines:[{name:"Тостеры",short:"Тостеры",junk:"toaster",flow:12,weapon:"bow"},{name:"Газировка",short:"Газировка",junk:"soda",flow:16,weapon:"grenade",rule:"blast"},{name:"Попкорн",short:"Попкорн",junk:"popcorn",flow:50,weapon:"flamer",rule:"burn"},{name:"Чайники",short:"Чайники",junk:"kettle",flow:9,weapon:"tesla"}],gates:[{at:8,kind:"line",line:1},{at:16,kind:"machine",id:"night"},{at:17,kind:"line",line:2},{at:24,kind:"mini"},{at:26,kind:"line",line:3},{at:32,kind:"machine",id:"freezer"},{at:35,kind:"rush"},{at:36,kind:"boss"}],machines:{night:{name:"Ночная смена",text:`пройденные цеха работают сами: +1 деталь каждые ${s0.every} с за цех`,icon:"🌙",keep:"night"},freezer:{name:"Морозильный склад",text:"+12% ко всем наградам кухни",icon:"🧊",income:1.12}},mini:{junk:"microwave",line:1,crate:1,icon:"♨️"},rush:{name:"Час пик",flow:1.6},boss:{name:"Холодильник-гигант",junk:"fridge",line:0,seconds:40,text:"Стоит на линии 1. Бей в магнит на дверце — крит.<br>Победа откроет лифт в следующий цех"},story:{}},l0={id:3,name:"Офисный бунт",scale:100,theme:{background:"#141a26",wall:"#4a5468",panel:"#ffffff",panelFrame:"#e6e0d0",wainscot:"#2f5fa8",pillar:"#d6d0c0",plinth:"#2f5fa8",floor:"#9aa2b2",slab:"#3b465e",slabLow:"#2e374c",stand:"#646e84",standTop:"#727c92",walls:"windows",floorTex:"carpet",decor:"office",conveyor:{frame:"#3a4052",steel:"#555d70",ram:"#2f5fa8",post:"#2c3242",bin:"#7d8796",binLid:"#666f80",belt:"#b8c2d6"},lamp:"#eef6ff"},lines:[{name:"Бумажные самолётики",short:"Самолётики",junk:"plane",flow:45,weapon:"stapler"},{name:"Принтеры",short:"Принтеры",junk:"printer",flow:9,weapon:"laser"},{name:"Шредеры",short:"Шредеры",junk:"shredder",flow:12,weapon:"saw",rule:"pierce"},{name:"Кресла-паровоз",short:"Кресла",junk:"chair",flow:24,weapon:"crossbow",rule:"pin"}],gates:[{at:12,kind:"line",line:1},{at:22,kind:"machine",id:"autobuy"},{at:23,kind:"line",line:2},{at:33,kind:"mini"},{at:34,kind:"line",line:3},{at:46,kind:"machine",id:"partshred"},{at:47,kind:"rush"},{at:48,kind:"boss"}],machines:{autobuy:{name:"Автозакупка урона",text:`каждые ${eu.every} с сама покупает самый дешёвый уровень урона, если он не дороже ${Math.round(eu.share*100)}% монет`,icon:"🤖"},partshred:{name:"Шредер деталей",text:`+1 деталь за каждые ${r0.kills} разбитых в цехе`,icon:"🗂️"}},mini:{junk:"cooler",line:1,crate:1,icon:"🚰"},rush:{name:"Дедлайн",flow:1.6},boss:{name:"Мега-ксерокс",junk:"xerox",line:0,seconds:45,text:"Стоит на линии 1. Бей в зелёную кнопку «Копия» — крит.<br>Победа завершит последний доступный цех"},story:{}},Fb=[a0,o0,l0],nu={share:.4,step:.1,radius:1.5},iu={chance:.2,step:.08,dps:.35,time:2.5,spread:1.1,spreadChance:.6},Ob={time:2.5,shatter:2},su={base:.55,step:.1},ll={chance:.12,step:.05,time:1.6},kb={ricochet:{name:"Рикошет",icon:"↩️",from:"Коробки со щитом",text:i=>`${Math.round(h0(i)*100)}% урона отскакивает в соседа; щиток отражает весь`},blast:{name:"Взрыв",icon:"💥",from:"Газировка",text:i=>`крит по слабому месту бьёт всё вокруг на ${Math.round((nu.share+nu.step*i)*100)}% урона`},burn:{name:"Поджог",icon:"🔥",from:"Попкорн",text:i=>`${Math.round((iu.chance+iu.step*i)*100)}% шанс поджечь: хлам горит и поджигает соседей`},pierce:{name:"Пробитие",icon:"🔩",from:"Шредеры",text:i=>`сквозь броню проходит ${Math.round(c0(i)*100)}% урона, без модуля ${Math.round(If*100)}%`},pin:{name:"Пригвоздить",icon:"📌",from:"Кресла-паровоз",text:i=>`${Math.round((ll.chance+ll.step*i)*100)}% шанс прибить хлам кнопкой к ленте на ${ll.time} с`}},c0=i=>i<0?If:Math.min(1,su.base+su.step*i),h0=i=>tu.share+tu.step*i,u0=i=>Math.floor((i||0)/zs.starEvery);function zb(i=0,t=0,e=i){return(1+zs.step*i)*Math.pow(zs.starMul,u0(e))*Math.pow(zs.catalogMul,t)}function Bb(i,t=0,e=1){return Math.round(zs.cost*e*Math.pow(zs.costLine,i)*Math.pow(zs.growth,t))}const Vb=i=>Math.pow(Df.hp,i),Gb=i=>Math.pow(Df.reward,i);function Hb(i,t){return Qh[t]*Math.min(1,Qh.refFlow/i)}const Wb=i=>i>=i0?null:n0[i],Xb={blocker:{icon:"▰",title:"Блокер",text:"Занимает линию и перехватывает пули. За уничтожение нет монет, деталей или прогресса. Полезные предметы помогают расчистить путь."},supply:{icon:"▣",title:"Ящик патронов",text:"Разбей — магазин этой пушки мгновенно заполнится. Удобно в середине длинной очереди."},icebox:{icon:"❄",title:"Криокапсула",text:"Замораживает хлам на линии на 4 секунды: больше времени, чтобы разбить очередь до пресса."},box:{icon:"📦",title:"Коробка со щитом",text:"Стальной щиток спереди держит пули — бей по коробке над ним. С модулем «Рикошет» щиток отражает пулю в соседей. Внутри — утята."},popper:{icon:"🎉",title:"Хлопушка",text:"Взрывается и бьёт всё вокруг. Разбей её, когда рядом толпа хлама, — заденет всех."},teddy:{icon:"🧸",title:"Плюшевый мишка",text:"Крупный и живучий. Слабое место — голова: туда урон ×2."},duckling:{icon:"🐥",title:"Стая утят",text:"Мелкие и быстрые, едут стаей. Быстрая пушка с частым огнём — лучшее против них."},toaster:{icon:"🍞",title:"Тостер",text:"Разбитый тостер выстреливает два тоста — они тоже едут к прессу."},soda:{icon:"🥤",title:"Газировка",text:"Разбитая банка взрывается и ранит соседей: цепочка банок лопается разом."},popcorn:{icon:"🍿",title:"Попкорн",text:"Летит стаями по пять и отлично горит — огнемёт поджигает всю стаю."},kettle:{icon:"🫖",title:"Чайник",text:"Стальной корпус гасит 65% урона. Целься в носик — это слабое место."},plane:{icon:"✈️",title:"Бумажные самолётики",text:"Летят стаей и очень быстро. Скобы степлера прибивают их — они ползут медленнее. Бумага горит."},printer:{icon:"🖨️",title:"Принтер",text:"Слабое место — лоток спереди. Разбитый выплёвывает три листа бумаги."},shredder:{icon:"🗂️",title:"Шредер",text:"Стальной корпус гасит 65% урона — бей в щель с зубьями сверху. Пиломёт и рельсотрон режут броню."},chair:{icon:"🪑",title:"Кресла-паровоз",text:"Едут по трое, нос к хвосту. Болт арбалета насаживает всю тройку на шампур."},golden:{icon:"✨",title:"Золотой хлам",text:"Редкая золотая версия: награда ×10 и запись в каталог линии."},rare:{icon:"★",title:"Редкий хлам",text:"Цветная версия: награда ×3. Три редких на линии — набор каталога и +30% к её награде."},bonus:{icon:"🐷",title:"Летучая копилка",text:"Тапай по ней как можно быстрее: каждый тап — выстрел из всех пушек сразу, патроны не тратятся. Успей до таймера — куча монет."},"act:shoot":{icon:"👆",title:"Стреляй пальцем",text:"Тапай или держи палец на линии — пушка бьёт на полном темпе по первому хламу на ленте. После первой эволюции радиоприёмник добавит автострельбу. Хлам, доехавший до пресса, не даст ни монеты."},"act:upgrade":{icon:"⬆️",title:"Прокачка",text:"Монет хватает — жми ⬆ у пушки. Урон ломает хлам быстрее, автострельба стреляет сама, пока ты занят другими линиями. Увеличивай частоту подачи на линии по мере усиления пушки."},"act:value":{icon:"⭐",title:"Ценность партии",text:"Каждый уровень — +4% к награде линии, каждые 5 покупок ценности и частоты вместе — звезда: +20%, шире комбо и шаг к новым линиям, станкам и боссу цеха."},"act:reload":{icon:"🔄",title:"Перезарядка",text:"Магазин почти пуст — перезарядись этой кнопкой сейчас, пока хлам не подъехал, а не посреди волны."},"act:evolve":{icon:"🧬",title:"Эволюция готова",text:"Шкала полна — жми на неё. Сбей дронов за отведённое время: пушка получит обвес, следующий тир и прибавку к урону."},"unlock:duel":{icon:"⚔️",title:"Дуэли открыты!",text:"Выбери свою пушку и сразись с соперником. Тапай по цели, следи за магазином: победа приносит монеты, детали и трофеи. Кнопка «Дуэль» — справа сверху."},"unlock:frenzy":{icon:"🔥",title:"Открыта ярость!",text:"Четвёртая дорожка открыла ярость. Разбивай предметы, чтобы заполнить шкалу внизу. Нажми на заполненную шкалу: 10 секунд все пушки горят и стреляют на полном темпе почти без разброса."},"act:frenzy":{icon:"🔥",title:"Ярость",text:"Шкала ярости полна — жми кнопку! 10 секунд все пушки сами бьют на полном темпе почти без разброса."},"act:quest":{icon:"📋",title:"Квест выполнен",text:"Забери награду — «Забрать» в списке квестов. Монеты и детали, а на месте квеста появится следующий."},"act:floors":{icon:"🛗",title:"Цеха",text:"Теперь цехов несколько: «Цеха» наверху — превью всех цехов, лифт в новый и переход в пройденные."}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="170",d0=0,ru=1,f0=2,Uf=1,p0=2,Wi=3,Ji=0,mn=1,Oe=2,ji=0,Bs=1,Qe=2,au=3,ou=4,m0=5,Us=100,g0=101,v0=102,_0=103,x0=104,M0=200,y0=201,b0=202,S0=203,fc=204,pc=205,w0=206,E0=207,T0=208,A0=209,R0=210,C0=211,P0=212,L0=213,I0=214,mc=0,gc=1,vc=2,Pr=3,_c=4,xc=5,Mc=6,yc=7,mh=0,D0=1,U0=2,gs=0,Nf=1,Ff=2,Of=3,kf=4,N0=5,zf=6,Bf=7,lu="attached",F0="detached",Vf=300,Lr=301,Ir=302,bc=303,Sc=304,jo=306,Gs=1e3,Fs=1001,wc=1002,Nn=1003,O0=1004,za=1005,Li=1006,cl=1007,Os=1008,Qi=1009,Gf=1010,Hf=1011,Aa=1012,gh=1013,Hs=1014,Mi=1015,Zi=1016,vh=1017,_h=1018,Dr=1020,Wf=35902,Xf=1021,qf=1022,Kn=1023,$f=1024,Yf=1025,Rr=1026,Ur=1027,xh=1028,Mh=1029,jf=1030,yh=1031,bh=1033,To=33776,Ao=33777,Ro=33778,Co=33779,Ec=35840,Tc=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Lc=37496,Ic=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,kc=37814,zc=37815,Bc=37816,Vc=37817,Gc=37818,Hc=37819,Wc=37820,Xc=37821,Po=36492,qc=36494,$c=36495,Zf=36283,Yc=36284,jc=36285,Zc=36286,k0=3200,z0=3201,Sh=0,B0=1,ps="",In="srgb",zr="srgb-linear",Zo="linear",me="srgb",Zs=7680,cu=519,V0=512,G0=513,H0=514,Kf=515,W0=516,X0=517,q0=518,$0=519,Kc=35044,wh=35048,hu="300 es",$i=2e3,zo=2001;class Br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uu=1234567;const ya=Math.PI/180,Ra=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Eh(i,t){return(i%t+t)%t}function Y0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function j0(i,t,e){return i!==t?(e-i)/(t-i):0}function ba(i,t,e){return(1-e)*i+e*t}function Z0(i,t,e,n){return ba(i,t,1-Math.exp(-e*n))}function K0(i,t=1){return t-Math.abs(Eh(i,t*2)-t)}function J0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Q0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function em(i,t){return i+Math.random()*(t-i)}function nm(i){return i*(.5-Math.random())}function im(i){i!==void 0&&(uu=i);let t=uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sm(i){return i*ya}function rm(i){return i*Ra}function am(i){return(i&i-1)===0&&i!==0}function om(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cm(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:ya,RAD2DEG:Ra,generateUUID:bi,clamp:Je,euclideanModulo:Eh,mapLinear:Y0,inverseLerp:j0,lerp:ba,damp:Z0,pingpong:K0,smoothstep:J0,smootherstep:Q0,randInt:tm,randFloat:em,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:am,ceilPowerOfTwo:om,floorPowerOfTwo:lm,setQuaternionFromProperEuler:cm,normalize:ge,denormalize:xi};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],R=s[2],T=s[5],C=s[8];return r[0]=a*_+o*M+l*R,r[3]=a*m+o*x+l*T,r[6]=a*p+o*v+l*C,r[1]=c*_+h*M+u*R,r[4]=c*m+h*x+u*T,r[7]=c*p+h*v+u*C,r[2]=d*_+f*M+g*R,r[5]=d*m+f*x+g*T,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(hl.makeScale(t,e)),this}rotate(t){return this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Qt;function Jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hm(){const i=Bo("canvas");return i.style.display="block",i}const du={};function fa(i){i in du||(du[i]=!0,console.warn(i))}function um(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function dm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ps?Zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fu=[.64,.33,.3,.6,.15,.06],pu=[.2126,.7152,.0722],mu=[.3127,.329],gu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[zr]:{primaries:fu,whitePoint:mu,transfer:Zo,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:pu,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:fu,whitePoint:mu,transfer:me,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:pu,outputColorSpaceConfig:{drawingBufferColorSpace:In}}});let Ks;class pm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ks===void 0&&(Ks=Bo("canvas")),Ks.width=t.width,Ks.height=t.height;const n=Ks.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mm=0;class Qf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ul(s[a].image)):r.push(ul(s[a]))}else r=ul(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gm=0;class hn extends Br{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,n=Fs,s=Fs,r=Li,a=Os,o=Kn,l=Qi,c=hn.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=bi(),this.name="",this.source=new Qf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Fs:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Fs:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Vf;hn.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,C=(u+_)/4,I=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vm extends Br{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends vm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tp extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _m extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,p*M);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const v=o*M;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(t=0,e=0,n=0){y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new y,_u=new ts;class ii{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(t.matrixWorld),this.union(Ba)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Va.subVectors(this.max,qr),Js.subVectors(t.a,qr),Qs.subVectors(t.b,qr),tr.subVectors(t.c,qr),ss.subVectors(Qs,Js),rs.subVectors(tr,Qs),xs.subVectors(Js,tr);let e=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-xs.z,xs.y,ss.z,0,-ss.x,rs.z,0,-rs.x,xs.z,0,-xs.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-xs.y,xs.x,0];return!fl(e,Js,Qs,tr,Va)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Js,Qs,tr,Va))?!1:(Ga.crossVectors(ss,rs),e=[Ga.x,Ga.y,Ga.z],fl(e,Js,Qs,tr,Va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ni=[new y,new y,new y,new y,new y,new y,new y,new y],oi=new y,Ba=new ii,Js=new y,Qs=new y,tr=new y,ss=new y,rs=new y,xs=new y,qr=new y,Va=new y,Ga=new y,Ms=new y;function fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ms.fromArray(i,r);const o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=t.dot(Ms),c=e.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xm=new ii,$r=new y,pl=new y;class qs{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(pl)),this.expandByPoint($r.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new y,ml=new y,Ha=new y,as=new y,gl=new y,Wa=new y,vl=new y;class Th{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ml.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),as.copy(this.origin).sub(ml);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ha),o=as.dot(this.direction),l=-as.dot(Ha),c=as.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(Ha,d),f}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);const n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){gl.subVectors(e,t),Wa.subVectors(n,t),vl.crossVectors(gl,Wa);let a=this.direction.dot(vl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;as.subVectors(this.origin,t);const l=o*this.direction.dot(Wa.crossVectors(as,Wa));if(l<0)return null;const c=o*this.direction.dot(gl.cross(as));if(c<0||l+c>a)return null;const h=-o*as.dot(vl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),a=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mm,t,ym)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),os.crossVectors(n,Sn),os.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),os.crossVectors(n,Sn)),os.normalize(),Xa.crossVectors(Sn,os),s[0]=os.x,s[4]=Xa.x,s[8]=Sn.x,s[1]=os.y,s[5]=Xa.y,s[9]=Sn.y,s[2]=os.z,s[6]=Xa.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],R=n[15],T=s[0],C=s[4],I=s[8],E=s[12],b=s[1],L=s[5],W=s[9],G=s[13],$=s[2],at=s[6],Z=s[10],ht=s[14],Q=s[3],pt=s[7],Mt=s[11],U=s[15];return r[0]=a*T+o*b+l*$+c*Q,r[4]=a*C+o*L+l*at+c*pt,r[8]=a*I+o*W+l*Z+c*Mt,r[12]=a*E+o*G+l*ht+c*U,r[1]=h*T+u*b+d*$+f*Q,r[5]=h*C+u*L+d*at+f*pt,r[9]=h*I+u*W+d*Z+f*Mt,r[13]=h*E+u*G+d*ht+f*U,r[2]=g*T+_*b+m*$+p*Q,r[6]=g*C+_*L+m*at+p*pt,r[10]=g*I+_*W+m*Z+p*Mt,r[14]=g*E+_*G+m*ht+p*U,r[3]=M*T+x*b+v*$+R*Q,r[7]=M*C+x*L+v*at+R*pt,r[11]=M*I+x*W+v*Z+R*Mt,r[15]=M*E+x*G+v*ht+R*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*M+n*x+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=M*C,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,t[4]=x*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=R*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=l*c,x=l*h,v=l*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+x)*C,s[9]=(m-M)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=er.set(s[0],s[1],s[2]).length();const a=er.set(s[4],s[5],s[6]).length(),o=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],li.copy(this);const c=1/r,h=1/a,u=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,e.setFromRotationMatrix(li),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$i){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===$i)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===zo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$i){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(o===$i)g=(a+r)*u,_=-2*u;else if(o===zo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const er=new y,li=new Zt,Mm=new y(0,0,0),ym=new y(1,1,1),os=new y,Xa=new y,Sn=new y,xu=new Zt,Mu=new ts;class ei{constructor(t=0,e=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bm=0;const yu=new y,nr=new ts,Oi=new Zt,qa=new y,Yr=new y,Sm=new y,wm=new ts,bu=new y(1,0,0),Su=new y(0,1,0),wu=new y(0,0,1),Eu={type:"added"},Em={type:"removed"},ir={type:"childadded",child:null},_l={type:"childremoved",child:null};class Ue extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new y,e=new ei,n=new ts,s=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Qt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(bu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(wu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qa.copy(t):qa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Yr,qa,this.up):Oi.lookAt(qa,Yr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Oi),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new y(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new y,ki=new y,xl=new y,zi=new y,sr=new y,rr=new y,Tu=new y,Ml=new y,yl=new y,bl=new y,Sl=new ue,wl=new ue,El=new ue;class Zn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ci.subVectors(s,e),ki.subVectors(n,e),xl.subVectors(t,e);const a=ci.dot(ci),o=ci.dot(ki),l=ci.dot(xl),c=ki.dot(ki),h=ki.dot(xl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Sl.setScalar(0),wl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),ki.subVectors(t,e),ci.cross(ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;sr.subVectors(s,n),rr.subVectors(r,n),Ml.subVectors(t,n);const l=sr.dot(Ml),c=rr.dot(Ml);if(l<=0&&c<=0)return e.copy(n);yl.subVectors(t,s);const h=sr.dot(yl),u=rr.dot(yl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(sr,a);bl.subVectors(t,r);const f=sr.dot(bl),g=rr.dot(bl);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(rr,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Tu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Tu,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(sr,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Eh(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Tl(a,r,t+1/3),this.g=Tl(a,r,t),this.b=Tl(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=In){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){const n=ep[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return oe.fromWorkingColorSpace(ln.copy(this),t),Math.round(Je(ln.r*255,0,255))*65536+Math.round(Je(ln.g*255,0,255))*256+Math.round(Je(ln.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=In){oe.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,s=ln.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL($a);const n=ba(ls.h,$a.h,e),s=ba(ls.s,$a.s,e),r=ba(ls.l,$a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new _t;_t.NAMES=ep;let Tm=0;class $s extends Br{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=bi(),this.name="",this.blending=Bs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends $s{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new y,Ya=new J;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ya.fromBufferAttribute(this,e),Ya.applyMatrix3(t),this.setXY(e,Ya.x,Ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}}class np extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ip extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Am=0;const Gn=new Zt,Al=new Ue,ar=new y,wn=new ii,jr=new ii,je=new y;class We extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?ip:np)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(wn.min,jr.min),wn.expandByPoint(je),je.addVectors(wn.max,jr.max),wn.expandByPoint(je)):(wn.expandByPoint(jr.min),wn.expandByPoint(jr.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)je.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(t,c),je.add(ar)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new y,l[I]=new y;const c=new y,h=new y,u=new y,d=new J,f=new J,g=new J,_=new y,m=new y;function p(I,E,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[I].add(_),o[E].add(_),o[b].add(_),l[I].add(m),l[E].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,E=M.length;I<E;++I){const b=M[I],L=b.start,W=b.count;for(let G=L,$=L+W;G<$;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const x=new y,v=new y,R=new y,T=new y;function C(I){R.fromBufferAttribute(s,I),T.copy(R);const E=o[I];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(T,E);const L=v.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,L)}for(let I=0,E=M.length;I<E;++I){const b=M[I],L=b.start,W=b.count;for(let G=L,$=L+W;G<$;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new y,r=new y,a=new y,o=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new Zt,ys=new Th,ja=new qs,Ru=new y,Za=new y,Ka=new y,Ja=new y,Rl=new y,Qa=new y,Cu=new y,to=new y;class Y extends Ue{constructor(t=new We,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Rl.fromBufferAttribute(u,t),a?Qa.addScaledVector(Rl,h):Qa.addScaledVector(Rl.sub(e),h))}e.add(Qa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ys.copy(t.ray).recast(t.near),!(ja.containsPoint(ys.origin)===!1&&(ys.intersectSphere(ja,Ru)===null||ys.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(r).invert(),ys.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,R=x;v<R;v+=3){const T=o.getX(v),C=o.getX(v+1),I=o.getX(v+2);s=eo(this,p,t,n,c,h,u,T,C,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=eo(this,a,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,R=x;v<R;v+=3){const T=v,C=v+1,I=v+2;s=eo(this,p,t,n,c,h,u,T,C,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=eo(this,a,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Rm(i,t,e,n,s,r,a,o){let l;if(t.side===mn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ji,o),l===null)return null;to.copy(o),to.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Za),i.getVertexPosition(l,Ka),i.getVertexPosition(c,Ja);const h=Rm(i,t,e,n,Za,Ka,Ja,Cu);if(h){const u=new y;Zn.getBarycoord(Cu,Za,Ka,Ja,u),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,l,c,u,new J)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,u,new J)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new y,materialIndex:0};Zn.getNormal(Za,Ka,Ja,d.normal),h.face=d,h.barycoord=u}return h}class ni extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,p,M,x,v,R,T,C,I,E){const b=v/C,L=R/I,W=v/2,G=R/2,$=T/2,at=C+1,Z=I+1;let ht=0,Q=0;const pt=new y;for(let Mt=0;Mt<Z;Mt++){const U=Mt*L-G;for(let N=0;N<at;N++){const F=N*b-W;pt[_]=F*M,pt[m]=U*x,pt[p]=$,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[p]=T>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(N/C),u.push(1-Mt/I),ht+=1}}for(let Mt=0;Mt<I;Mt++)for(let U=0;U<C;U++){const N=d+U+at*Mt,F=d+U+at*(Mt+1),D=d+(U+1)+at*(Mt+1),H=d+(U+1)+at*Mt;l.push(N,F,H),l.push(F,D,H),Q+=6}o.addGroup(f,Q,E),f+=Q,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=Nr(i[e]);for(const s in n)t[s]=n[s]}return t}function Cm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Ca={clone:Nr,merge:dn};var Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends $s{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=Cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rp extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new y,Pu=new J,Lu=new J;class jn extends rp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Lu),e.subVectors(Lu,Pu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const or=-90,lr=1;class Im extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jn(or,lr,t,e);s.layers=this.layers,this.add(s);const r=new jn(or,lr,t,e);r.layers=this.layers,this.add(r);const a=new jn(or,lr,t,e);a.layers=this.layers,this.add(a);const o=new jn(or,lr,t,e);o.layers=this.layers,this.add(o);const l=new jn(or,lr,t,e);l.layers=this.layers,this.add(l);const c=new jn(or,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ap extends hn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Lr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dm extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ap(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ni(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ji});r.uniforms.tEquirect.value=e;const a=new Y(s,r),o=e.minFilter;return e.minFilter===Os&&(e.minFilter=Li),new Im(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Cl=new y,Um=new y,Nm=new Qt;class Ps{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Cl.subVectors(n,e).cross(Um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nm.getNormalMatrix(t),s=this.coplanarPoint(Cl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new qs,no=new y;class Rh{constructor(t=new Ps,e=new Ps,n=new Ps,s=new Ps,r=new Ps,a=new Ps){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+M).normalize(),n[3].setComponents(l-a,d-h,m-g,v-M).normalize(),n[4].setComponents(l-o,d-u,m-_,v-x).normalize(),e===$i)n[5].setComponents(l+o,d+u,m+_,v+x).normalize();else if(e===zo)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(no.x=s.normal.x>0?t.max.x:t.min.x,no.y=s.normal.y>0?t.max.y:t.min.y,no.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fm(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Qn extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,v=M+c*(p+1),R=M+1+c*(p+1),T=M+1+c*p;f.push(x,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ng=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Om,alphahash_pars_fragment:km,alphamap_fragment:zm,alphamap_pars_fragment:Bm,alphatest_fragment:Vm,alphatest_pars_fragment:Gm,aomap_fragment:Hm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:$m,beginnormal_vertex:Ym,bsdfs:jm,iridescence_fragment:Zm,bumpmap_pars_fragment:Km,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:ag,cube_uv_reflection_fragment:og,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:vg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Cg,envmap_vertex:xg,fog_vertex:Mg,fog_pars_vertex:yg,fog_fragment:bg,fog_pars_fragment:Sg,gradientmap_pars_fragment:wg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Rg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Lg,lights_phong_fragment:Ig,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ug,lights_physical_pars_fragment:Ng,lights_fragment_begin:Fg,lights_fragment_maps:Og,lights_fragment_end:kg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Gg,map_fragment:Hg,map_pars_fragment:Wg,map_particle_fragment:Xg,map_particle_pars_fragment:qg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Yg,morphinstance_vertex:jg,morphcolor_vertex:Zg,morphnormal_vertex:Kg,morphtarget_pars_vertex:Jg,morphtarget_vertex:Qg,normal_fragment_begin:t1,normal_fragment_maps:e1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:s1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:h1,packing:u1,premultiplied_alpha_fragment:d1,project_vertex:f1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:x1,shadowmap_vertex:M1,shadowmask_pars_fragment:y1,skinbase_vertex:b1,skinning_pars_vertex:S1,skinning_vertex:w1,skinnormal_vertex:E1,specularmap_fragment:T1,specularmap_pars_fragment:A1,tonemapping_fragment:R1,tonemapping_pars_fragment:C1,transmission_fragment:P1,transmission_pars_fragment:L1,uv_pars_fragment:I1,uv_pars_vertex:D1,uv_vertex:U1,worldpos_vertex:N1,background_vert:F1,background_frag:O1,backgroundCube_vert:k1,backgroundCube_frag:z1,cube_vert:B1,cube_frag:V1,depth_vert:G1,depth_frag:H1,distanceRGBA_vert:W1,distanceRGBA_frag:X1,equirect_vert:q1,equirect_frag:$1,linedashed_vert:Y1,linedashed_frag:j1,meshbasic_vert:Z1,meshbasic_frag:K1,meshlambert_vert:J1,meshlambert_frag:Q1,meshmatcap_vert:t2,meshmatcap_frag:e2,meshnormal_vert:n2,meshnormal_frag:i2,meshphong_vert:s2,meshphong_frag:r2,meshphysical_vert:a2,meshphysical_frag:o2,meshtoon_vert:l2,meshtoon_frag:c2,points_vert:h2,points_frag:u2,shadow_vert:d2,shadow_frag:f2,sprite_vert:p2,sprite_frag:m2},yt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ai={basic:{uniforms:dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new _t(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:dn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:dn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:dn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new _t(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:dn([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:dn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:dn([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:dn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:dn([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:dn([yt.common,yt.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:dn([yt.lights,yt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ai.physical={uniforms:dn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const io={r:0,b:0,g:0},Ss=new ei,g2=new Zt;function v2(i,t,e,n,s,r,a){const o=new _t(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===jo)?(h===void 0&&(h=new Y(new ni(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Nr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ss.copy(x.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g2.makeRotationFromEuler(Ss)),h.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Y(new Qn(2,2),new De({name:"BackgroundMaterial",uniforms:Nr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(io,sp(i)),n.buffers.color.setClear(io.r,io.g,io.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m}}function _2(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,L,W,G,$){let at=!1;const Z=u(G,W,L);r!==Z&&(r=Z,c(r.object)),at=f(b,G,W,$),at&&g(b,G,W,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(at||a)&&(a=!1,v(b,L,W,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,W){const G=W.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let at=$[L.id];at===void 0&&(at={},$[L.id]=at);let Z=at[G];return Z===void 0&&(Z=d(l()),at[G]=Z),Z}function d(b){const L=[],W=[],G=[];for(let $=0;$<e;$++)L[$]=0,W[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:G,object:b,attributes:{},index:null}}function f(b,L,W,G){const $=r.attributes,at=L.attributes;let Z=0;const ht=W.getAttributes();for(const Q in ht)if(ht[Q].location>=0){const Mt=$[Q];let U=at[Q];if(U===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),Mt===void 0||Mt.attribute!==U||U&&Mt.data!==U.data)return!0;Z++}return r.attributesNum!==Z||r.index!==G}function g(b,L,W,G){const $={},at=L.attributes;let Z=0;const ht=W.getAttributes();for(const Q in ht)if(ht[Q].location>=0){let Mt=at[Q];Mt===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor));const U={};U.attribute=Mt,Mt&&Mt.data&&(U.data=Mt.data),$[Q]=U,Z++}r.attributes=$,r.attributesNum=Z,r.index=G}function _(){const b=r.newAttributes;for(let L=0,W=b.length;L<W;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){const W=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;W[b]=1,G[b]===0&&(i.enableVertexAttribArray(b),G[b]=1),$[b]!==L&&(i.vertexAttribDivisor(b,L),$[b]=L)}function M(){const b=r.newAttributes,L=r.enabledAttributes;for(let W=0,G=L.length;W<G;W++)L[W]!==b[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function x(b,L,W,G,$,at,Z){Z===!0?i.vertexAttribIPointer(b,L,W,$,at):i.vertexAttribPointer(b,L,W,G,$,at)}function v(b,L,W,G){_();const $=G.attributes,at=W.getAttributes(),Z=L.defaultAttributeValues;for(const ht in at){const Q=at[ht];if(Q.location>=0){let pt=$[ht];if(pt===void 0&&(ht==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),ht==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),pt!==void 0){const Mt=pt.normalized,U=pt.itemSize,N=t.get(pt);if(N===void 0)continue;const F=N.buffer,D=N.type,H=N.bytesPerElement,j=D===i.INT||D===i.UNSIGNED_INT||pt.gpuType===gh;if(pt.isInterleavedBufferAttribute){const tt=pt.data,Pt=tt.stride,Vt=pt.offset;if(tt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Q.locationSize;Xt++)p(Q.location+Xt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Xt=0;Xt<Q.locationSize;Xt++)m(Q.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Xt=0;Xt<Q.locationSize;Xt++)x(Q.location+Xt,U/Q.locationSize,D,Mt,Pt*H,(Vt+U/Q.locationSize*Xt)*H,j)}else{if(pt.isInstancedBufferAttribute){for(let tt=0;tt<Q.locationSize;tt++)p(Q.location+tt,pt.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let tt=0;tt<Q.locationSize;tt++)m(Q.location+tt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let tt=0;tt<Q.locationSize;tt++)x(Q.location+tt,U/Q.locationSize,D,Mt,U*H,U/Q.locationSize*tt*H,j)}}else if(Z!==void 0){const Mt=Z[ht];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(Q.location,Mt);break;case 3:i.vertexAttrib3fv(Q.location,Mt);break;case 4:i.vertexAttrib4fv(Q.location,Mt);break;default:i.vertexAttrib1fv(Q.location,Mt)}}}}M()}function R(){I();for(const b in n){const L=n[b];for(const W in L){const G=L[W];for(const $ in G)h(G[$].object),delete G[$];delete L[W]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const W in L){const G=L[W];for(const $ in G)h(G[$].object),delete G[$];delete L[W]}delete n[b.id]}function C(b){for(const L in n){const W=n[L];if(W[b.id]===void 0)continue;const G=W[b.id];for(const $ in G)h(G[$].object),delete G[$];delete W[b.id]}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function x2(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function M2(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function y2(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ps,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=h(g,d,x,f);for(let R=0;R!==x;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function b2(i){let t=new WeakMap;function e(a,o){return o===bc?a.mapping=Lr:o===Sc&&(a.mapping=Ir),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===Sc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dm(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ko extends rp{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Sr=4,Iu=[.125,.215,.35,.446,.526,.582],Ns=20,Pl=new Ko,Du=new _t;let Ll=null,Il=0,Dl=0,Ul=!1;const Ls=(1+Math.sqrt(5))/2,cr=1/Ls,Uu=[new y(-Ls,cr,0),new y(Ls,cr,0),new y(-cr,0,Ls),new y(cr,0,Ls),new y(0,Ls,-cr),new y(0,Ls,cr),new y(-1,1,-1),new y(1,1,-1),new y(-1,1,1),new y(1,1,1)];class Nu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ll,Il,Dl),this._renderer.xr.enabled=Ul,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Lr||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Zi,format:Kn,colorSpace:zr,depthBuffer:!1},s=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S2(r)),this._blurMaterial=w2(r,t,e)}return s}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Pl)}_sceneToCubeUV(t,e,n,s){const o=new jn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Du),h.toneMapping=gs,h.autoClear=!1;const f=new Ge({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Y(new ni,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Du),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;so(s,M*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Lr||t.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uu[(s-r-1)%Uu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Y(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ns;m>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const p=[];let M=0;for(let C=0;C<Ns;++C){const I=C/_,E=Math.exp(-I*I/2);p.push(E),C===0?M+=E:C<m&&(M+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],R=3*v*(s>x-Sr?s-x+Sr:0),T=4*(this._cubeSize-v);so(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Pl)}}function S2(i){const t=[],e=[],n=[];let s=i;const r=i-Sr+1+Iu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Sr?l=Iu[a-i+Sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,I=T>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(E,_*g*T),x.set(d,m*g*T);const b=[T,T,T,T,T,T];v.set(b,p*g*T)}const R=new We;R.setAttribute("position",new tn(M,_)),R.setAttribute("uv",new tn(x,m)),R.setAttribute("faceIndex",new tn(v,p)),t.push(R),s>Sr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fu(i,t,e){const n=new Jn(i,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function w2(i,t,e){const n=new Float32Array(Ns),s=new y(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ou(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ku(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E2(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bc||l===Sc,h=l===Lr||l===Ir;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Nu(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Nu(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function T2(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A2(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,v=M.length;x<v;x+=3){const R=M[x+0],T=M[x+1],C=M[x+2];d.push(R,T,T,C,C,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const R=x+0,T=x+1,C=x+2;d.push(R,T,T,C,C,R)}}else return;const m=new(Jf(d)?ip:np)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function R2(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C2(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function P2(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*R*4*u),C=new tp(T,v,R,u);C.type=Mi,C.needsUpdate=!0;const I=x*4;for(let b=0;b<u;b++){const L=m[b],W=p[b],G=M[b],$=v*R*4*b;for(let at=0;at<L.count;at++){const Z=at*I;f===!0&&(s.fromBufferAttribute(L,at),T[$+Z+0]=s.x,T[$+Z+1]=s.y,T[$+Z+2]=s.z,T[$+Z+3]=0),g===!0&&(s.fromBufferAttribute(W,at),T[$+Z+4]=s.x,T[$+Z+5]=s.y,T[$+Z+6]=s.z,T[$+Z+7]=0),_===!0&&(s.fromBufferAttribute(G,at),T[$+Z+8]=s.x,T[$+Z+9]=s.y,T[$+Z+10]=s.z,T[$+Z+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new J(v,R)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function L2(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class lp extends hn{constructor(t,e,n,s,r,a,o,l,c,h=Rr){if(h!==Rr&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rr&&(n=Hs),n===void 0&&h===Ur&&(n=Dr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cp=new hn,zu=new lp(1,1),hp=new tp,up=new _m,dp=new ap,Bu=[],Vu=[],Gu=new Float32Array(16),Hu=new Float32Array(9),Wu=new Float32Array(4);function Vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jo(i,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function I2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function D2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function U2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function N2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function F2(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Wu.set(n),i.uniformMatrix2fv(this.addr,!1,Wu),$e(e,n)}}function O2(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),$e(e,n)}}function k2(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),$e(e,n)}}function z2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function B2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function V2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function G2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function H2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function W2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function X2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function q2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function $2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=Kf,r=zu):r=cp,e.setTexture2D(t||r,s)}function Y2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||up,s)}function j2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dp,s)}function Z2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hp,s)}function K2(i){switch(i){case 5126:return I2;case 35664:return D2;case 35665:return U2;case 35666:return N2;case 35674:return F2;case 35675:return O2;case 35676:return k2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return V2;case 35669:case 35673:return G2;case 5125:return H2;case 36294:return W2;case 36295:return X2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return Z2}}function J2(i,t){i.uniform1fv(this.addr,t)}function Q2(i,t){const e=Vr(t,this.size,2);i.uniform2fv(this.addr,e)}function tv(i,t){const e=Vr(t,this.size,3);i.uniform3fv(this.addr,e)}function ev(i,t){const e=Vr(t,this.size,4);i.uniform4fv(this.addr,e)}function nv(i,t){const e=Vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iv(i,t){const e=Vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sv(i,t){const e=Vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rv(i,t){i.uniform1iv(this.addr,t)}function av(i,t){i.uniform2iv(this.addr,t)}function ov(i,t){i.uniform3iv(this.addr,t)}function lv(i,t){i.uniform4iv(this.addr,t)}function cv(i,t){i.uniform1uiv(this.addr,t)}function hv(i,t){i.uniform2uiv(this.addr,t)}function uv(i,t){i.uniform3uiv(this.addr,t)}function dv(i,t){i.uniform4uiv(this.addr,t)}function fv(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||cp,r[a])}function pv(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||up,r[a])}function mv(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||dp,r[a])}function gv(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||hp,r[a])}function vv(i){switch(i){case 5126:return J2;case 35664:return Q2;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}class _v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K2(e.type)}}class xv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vv(e.type)}}class Mv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Xu(i,t){i.seq.push(t),i.map[t.id]=t}function yv(i,t,e){const n=i.name,s=n.length;for(Nl.lastIndex=0;;){const r=Nl.exec(n),a=Nl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xu(e,c===void 0?new _v(o,i,t):new xv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Mv(o),Xu(e,u)),e=u}}}class Lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);yv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function qu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bv=37297;let Sv=0;function wv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $u=new Qt;function Ev(i){oe._getMatrix($u,oe.workingColorSpace,i);const t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wv(i.getShaderSource(t),a)}else return s}function Tv(i,t){const e=Ev(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Av(i,t){let e;switch(t){case Nf:e="Linear";break;case Ff:e="Reinhard";break;case Of:e="Cineon";break;case kf:e="ACESFilmic";break;case zf:e="AgX";break;case Bf:e="Neutral";break;case N0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new y;function Rv(){oe.getLuminanceCoefficients(ro);const i=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Pv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pa(i){return i!==""}function ju(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(Iv,Uv)}const Dv=new Map;function Uv(i,t){let e=ee[t];if(e===void 0){const n=Dv.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(Nv,Fv)}function Fv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ov(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===p0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function kv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Ir:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ir:t="ENVMAP_MODE_REFRACTION";break}return t}function Bv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mh:t="ENVMAP_BLENDING_MULTIPLY";break;case D0:t="ENVMAP_BLENDING_MIX";break;case U0:t="ENVMAP_BLENDING_ADD";break}return t}function Vv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ov(e),c=kv(e),h=zv(e),u=Bv(e),d=Vv(e),f=Cv(e),g=Pv(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gs?"#define TONE_MAPPING":"",e.toneMapping!==gs?ee.tonemapping_pars_fragment:"",e.toneMapping!==gs?Av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),Rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pa).join(`
`)),a=Jc(a),a=ju(a,e),a=Zu(a,e),o=Jc(o),o=ju(o,e),o=Zu(o,e),a=Ku(a),o=Ku(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,v=M+p+o,R=qu(s,s.VERTEX_SHADER,x),T=qu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(R).trim(),$=s.getShaderInfoLog(T).trim();let at=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const ht=Yu(s,R,"vertex"),Q=Yu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ht+`
`+Q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||$==="")&&(Z=!1);Z&&(L.diagnostics={runnable:at,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(R),s.deleteShader(T),I=new Lo(s,_),E=Lv(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,bv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Hv=0;class Wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xv(t),e.set(t,n)),n}}class Xv{constructor(t){this.id=Hv++,this.code=t,this.usedTimes=0}}function qv(i,t,e,n,s,r,a){const o=new Ah,l=new Wv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,L,W,G){const $=W.fog,at=G.geometry,Z=E.isMeshStandardMaterial?W.environment:null,ht=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),Q=ht&&ht.mapping===jo?ht.image.height:null,pt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Mt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,U=Mt!==void 0?Mt.length:0;let N=0;at.morphAttributes.position!==void 0&&(N=1),at.morphAttributes.normal!==void 0&&(N=2),at.morphAttributes.color!==void 0&&(N=3);let F,D,H,j;if(pt){const pe=Ai[pt];F=pe.vertexShader,D=pe.fragmentShader}else F=E.vertexShader,D=E.fragmentShader,l.update(E),H=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const tt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Vt=G.isInstancedMesh===!0,Xt=G.isBatchedMesh===!0,le=!!E.map,lt=!!E.matcap,ft=!!ht,P=!!E.aoMap,zt=!!E.lightMap,ut=!!E.bumpMap,Lt=!!E.normalMap,vt=!!E.displacementMap,qt=!!E.emissiveMap,Rt=!!E.metalnessMap,A=!!E.roughnessMap,S=E.anisotropy>0,V=E.clearcoat>0,st=E.dispersion>0,ct=E.iridescence>0,rt=E.sheen>0,Nt=E.transmission>0,bt=S&&!!E.anisotropyMap,Ct=V&&!!E.clearcoatMap,se=V&&!!E.clearcoatNormalMap,dt=V&&!!E.clearcoatRoughnessMap,Dt=ct&&!!E.iridescenceMap,$t=ct&&!!E.iridescenceThicknessMap,Yt=rt&&!!E.sheenColorMap,Ut=rt&&!!E.sheenRoughnessMap,ae=!!E.specularMap,te=!!E.specularColorMap,ve=!!E.specularIntensityMap,O=Nt&&!!E.transmissionMap,St=Nt&&!!E.thicknessMap,it=!!E.gradientMap,ot=!!E.alphaMap,At=E.alphaTest>0,wt=!!E.alphaHash,Kt=!!E.extensions;let Ae=gs;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const an={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:D,defines:E.defines,customVertexShaderID:H,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&G._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&G.instanceColor!==null,instancingMorph:Vt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:zr,alphaToCoverage:!!E.alphaToCoverage,map:le,matcap:lt,envMap:ft,envMapMode:ft&&ht.mapping,envMapCubeUVHeight:Q,aoMap:P,lightMap:zt,bumpMap:ut,normalMap:Lt,displacementMap:d&&vt,emissiveMap:qt,normalMapObjectSpace:Lt&&E.normalMapType===B0,normalMapTangentSpace:Lt&&E.normalMapType===Sh,metalnessMap:Rt,roughnessMap:A,anisotropy:S,anisotropyMap:bt,clearcoat:V,clearcoatMap:Ct,clearcoatNormalMap:se,clearcoatRoughnessMap:dt,dispersion:st,iridescence:ct,iridescenceMap:Dt,iridescenceThicknessMap:$t,sheen:rt,sheenColorMap:Yt,sheenRoughnessMap:Ut,specularMap:ae,specularColorMap:te,specularIntensityMap:ve,transmission:Nt,transmissionMap:O,thicknessMap:St,gradientMap:it,opaque:E.transparent===!1&&E.blending===Bs&&E.alphaToCoverage===!1,alphaMap:ot,alphaTest:At,alphaHash:wt,combine:E.combine,mapUv:le&&_(E.map.channel),aoMapUv:P&&_(E.aoMap.channel),lightMapUv:zt&&_(E.lightMap.channel),bumpMapUv:ut&&_(E.bumpMap.channel),normalMapUv:Lt&&_(E.normalMap.channel),displacementMapUv:vt&&_(E.displacementMap.channel),emissiveMapUv:qt&&_(E.emissiveMap.channel),metalnessMapUv:Rt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:bt&&_(E.anisotropyMap.channel),clearcoatMapUv:Ct&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(E.sheenRoughnessMap.channel),specularMapUv:ae&&_(E.specularMap.channel),specularColorMapUv:te&&_(E.specularColorMap.channel),specularIntensityMapUv:ve&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:St&&_(E.thicknessMap.channel),alphaMapUv:ot&&_(E.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Lt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!at.attributes.uv&&(le||ot),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:G.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:N,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:le&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:qt&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Oe,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&E.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return an.vertexUv1s=c.has(1),an.vertexUv2s=c.has(2),an.vertexUv3s=c.has(3),c.clear(),an}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)b.push(L),b.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(M(b,E),x(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function M(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const b=g[E.type];let L;if(b){const W=Ai[b];L=Ca.clone(W.uniforms)}else L=E.uniforms;return L}function R(E,b){let L;for(let W=0,G=h.length;W<G;W++){const $=h[W];if($.cacheKey===b){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Gv(i,b,E,r),h.push(L)),L}function T(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:I}}function $v(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function td(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Yv),n.length>1&&n.sort(d||Qu),s.length>1&&s.sort(d||Qu)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new td,i.set(n,[a])):s>=r.length?(a=new td,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new y,color:new _t};break;case"SpotLight":e={position:new y,direction:new y,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new y,halfWidth:new y,halfHeight:new y};break}return i[t.id]=e,e}}}function Kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jv=0;function Qv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t_(i){const t=new Zv,e=Kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const s=new y,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,R=0,T=0,C=0;c.sort(Qv);for(let E=0,b=c.length;E<b;E++){const L=c[E],W=L.color,G=L.intensity,$=L.distance,at=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*G,u+=W.g*G,d+=W.b*G;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],G);C++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ht=L.shadow,Q=e.get(L);Q.shadowIntensity=ht.intensity,Q.shadowBias=ht.bias,Q.shadowNormalBias=ht.normalBias,Q.shadowRadius=ht.radius,Q.shadowMapSize=ht.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=at,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=Z,f++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(W).multiplyScalar(G),Z.distance=$,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[_]=Z;const ht=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,ht.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=ht.matrix,L.castShadow){const Q=e.get(L);Q.shadowIntensity=ht.intensity,Q.shadowBias=ht.bias,Q.shadowNormalBias=ht.normalBias,Q.shadowRadius=ht.radius,Q.shadowMapSize=ht.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=at,v++}_++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(W).multiplyScalar(G),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const ht=L.shadow,Q=e.get(L);Q.shadowIntensity=ht.intensity,Q.shadowBias=ht.bias,Q.shadowNormalBias=ht.normalBias,Q.shadowRadius=ht.radius,Q.shadowMapSize=ht.mapSize,Q.shadowCameraNear=ht.camera.near,Q.shadowCameraFar=ht.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(G),Z.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[p]=Z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=C,n.version=Jv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ed(i){const t=new t_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function e_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ed(i),t.set(s,[o])):r>=a.length?(o=new ed(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class n_ extends $s{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i_ extends $s{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a_(i,t,e){let n=new Rh;const s=new J,r=new J,a=new ue,o=new n_({depthPacking:z0}),l=new i_,c={},h=e.maxTextureSize,u={[Ji]:mn,[mn]:Ji,[Oe]:Oe},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Y(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ji),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=p!==Wi&&this.type===Wi,$=p===Wi&&this.type!==Wi;for(let at=0,Z=T.length;at<Z;at++){const ht=T[at],Q=ht.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const pt=Q.getFrameExtents();if(s.multiply(pt),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,Q.mapSize.y=r.y)),Q.map===null||G===!0||$===!0){const U=this.type!==Wi?{minFilter:Nn,magFilter:Nn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Jn(s.x,s.y,U),Q.map.texture.name=ht.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const Mt=Q.getViewportCount();for(let U=0;U<Mt;U++){const N=Q.getViewport(U);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),W.viewport(a),Q.updateMatrices(ht,U),n=Q.getFrustum(),v(C,I,Q.camera,ht,this.type)}Q.isPointLightShadow!==!0&&this.type===Wi&&M(Q,I),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,L)};function M(T,C){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,I,f,_,null)}function x(T,C,I,E){let b=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=b.uuid,G=C.uuid;let $=c[W];$===void 0&&($={},c[W]=$);let at=$[G];at===void 0&&(at=b.clone(),$[G]=at,C.addEventListener("dispose",R)),b=at}if(b.visible=C.visible,b.wireframe=C.wireframe,E===Wi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=i.properties.get(b);W.light=I}return b}function v(T,C,I,E,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Wi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const G=t.update(T),$=T.material;if(Array.isArray($)){const at=G.groups;for(let Z=0,ht=at.length;Z<ht;Z++){const Q=at[Z],pt=$[Q.materialIndex];if(pt&&pt.visible){const Mt=x(T,pt,E,b);T.onBeforeShadow(i,T,C,I,G,Mt,Q),i.renderBufferDirect(I,null,G,Mt,T,Q),T.onAfterShadow(i,T,C,I,G,Mt,Q)}}}else if($.visible){const at=x(T,$,E,b);T.onBeforeShadow(i,T,C,I,G,at,null),i.renderBufferDirect(I,null,G,at,T,null),T.onAfterShadow(i,T,C,I,G,at,null)}}const W=T.children;for(let G=0,$=W.length;G<$;G++)v(W[G],C,I,E,b)}function R(T){T.target.removeEventListener("dispose",R);for(const I in c){const E=c[I],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const o_={[mc]:gc,[vc]:Mc,[_c]:yc,[Pr]:xc,[gc]:mc,[Mc]:vc,[yc]:_c,[xc]:Pr};function l_(i,t){function e(){let O=!1;const St=new ue;let it=null;const ot=new ue(0,0,0,0);return{setMask:function(At){it!==At&&!O&&(i.colorMask(At,At,At,At),it=At)},setLocked:function(At){O=At},setClear:function(At,wt,Kt,Ae,an){an===!0&&(At*=Ae,wt*=Ae,Kt*=Ae),St.set(At,wt,Kt,Ae),ot.equals(St)===!1&&(i.clearColor(At,wt,Kt,Ae),ot.copy(St))},reset:function(){O=!1,it=null,ot.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,it=null,ot=null,At=null;return{setReversed:function(wt){if(St!==wt){const Kt=t.get("EXT_clip_control");St?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const Ae=At;At=null,this.setClear(Ae)}St=wt},getReversed:function(){return St},setTest:function(wt){wt?tt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(wt){it!==wt&&!O&&(i.depthMask(wt),it=wt)},setFunc:function(wt){if(St&&(wt=o_[wt]),ot!==wt){switch(wt){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case vc:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case _c:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=wt}},setLocked:function(wt){O=wt},setClear:function(wt){At!==wt&&(St&&(wt=1-wt),i.clearDepth(wt),At=wt)},reset:function(){O=!1,it=null,ot=null,At=null,St=!1}}}function s(){let O=!1,St=null,it=null,ot=null,At=null,wt=null,Kt=null,Ae=null,an=null;return{setTest:function(pe){O||(pe?tt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(pe){St!==pe&&!O&&(i.stencilMask(pe),St=pe)},setFunc:function(pe,ri,Di){(it!==pe||ot!==ri||At!==Di)&&(i.stencilFunc(pe,ri,Di),it=pe,ot=ri,At=Di)},setOp:function(pe,ri,Di){(wt!==pe||Kt!==ri||Ae!==Di)&&(i.stencilOp(pe,ri,Di),wt=pe,Kt=ri,Ae=Di)},setLocked:function(pe){O=pe},setClear:function(pe){an!==pe&&(i.clearStencil(pe),an=pe)},reset:function(){O=!1,St=null,it=null,ot=null,At=null,wt=null,Kt=null,Ae=null,an=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,R=null,T=null,C=new _t(0,0,0),I=0,E=!1,b=null,L=null,W=null,G=null,$=null;const at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ht=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=ht>=1):Q.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=ht>=2);let pt=null,Mt={};const U=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),F=new ue().fromArray(U),D=new ue().fromArray(N);function H(O,St,it,ot){const At=new Uint8Array(4),wt=i.createTexture();i.bindTexture(O,wt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<it;Kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(St+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return wt}const j={};j[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Pr),ut(!1),Lt(ru),tt(i.CULL_FACE),P(ji);function tt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Pt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Vt(O,St){return u[O]!==St?(i.bindFramebuffer(O,St),u[O]=St,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Xt(O,St){let it=f,ot=!1;if(O){it=d.get(St),it===void 0&&(it=[],d.set(St,it));const At=O.textures;if(it.length!==At.length||it[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Kt=At.length;wt<Kt;wt++)it[wt]=i.COLOR_ATTACHMENT0+wt;it.length=At.length,ot=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ot=!0);ot&&i.drawBuffers(it)}function le(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const lt={[Us]:i.FUNC_ADD,[g0]:i.FUNC_SUBTRACT,[v0]:i.FUNC_REVERSE_SUBTRACT};lt[_0]=i.MIN,lt[x0]=i.MAX;const ft={[M0]:i.ZERO,[y0]:i.ONE,[b0]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[R0]:i.SRC_ALPHA_SATURATE,[T0]:i.DST_COLOR,[w0]:i.DST_ALPHA,[S0]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[A0]:i.ONE_MINUS_DST_COLOR,[E0]:i.ONE_MINUS_DST_ALPHA,[C0]:i.CONSTANT_COLOR,[P0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[I0]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,St,it,ot,At,wt,Kt,Ae,an,pe){if(O===ji){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),O!==m0){if(O!==m||pe!==E){if((p!==Us||v!==Us)&&(i.blendEquation(i.FUNC_ADD),p=Us,v=Us),pe)switch(O){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qe:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,x=null,R=null,T=null,C.set(0,0,0),I=0,m=O,E=pe}return}At=At||St,wt=wt||it,Kt=Kt||ot,(St!==p||At!==v)&&(i.blendEquationSeparate(lt[St],lt[At]),p=St,v=At),(it!==M||ot!==x||wt!==R||Kt!==T)&&(i.blendFuncSeparate(ft[it],ft[ot],ft[wt],ft[Kt]),M=it,x=ot,R=wt,T=Kt),(Ae.equals(C)===!1||an!==I)&&(i.blendColor(Ae.r,Ae.g,Ae.b,an),C.copy(Ae),I=an),m=O,E=!1}function zt(O,St){O.side===Oe?Pt(i.CULL_FACE):tt(i.CULL_FACE);let it=O.side===mn;St&&(it=!it),ut(it),O.blending===Bs&&O.transparent===!1?P(ji):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const ot=O.stencilWrite;o.setTest(ot),ot&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),qt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function Lt(O){O!==d0?(tt(i.CULL_FACE),O!==L&&(O===ru?i.cullFace(i.BACK):O===f0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=O}function vt(O){O!==W&&(Z&&i.lineWidth(O),W=O)}function qt(O,St,it){O?(tt(i.POLYGON_OFFSET_FILL),(G!==St||$!==it)&&(i.polygonOffset(St,it),G=St,$=it)):Pt(i.POLYGON_OFFSET_FILL)}function Rt(O){O?tt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+at-1),pt!==O&&(i.activeTexture(O),pt=O)}function S(O,St,it){it===void 0&&(pt===null?it=i.TEXTURE0+at-1:it=pt);let ot=Mt[it];ot===void 0&&(ot={type:void 0,texture:void 0},Mt[it]=ot),(ot.type!==O||ot.texture!==St)&&(pt!==it&&(i.activeTexture(it),pt=it),i.bindTexture(O,St||j[O]),ot.type=O,ot.texture=St)}function V(){const O=Mt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(O){F.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),F.copy(O))}function Ut(O){D.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),D.copy(O))}function ae(O,St){let it=c.get(St);it===void 0&&(it=new WeakMap,c.set(St,it));let ot=it.get(O);ot===void 0&&(ot=i.getUniformBlockIndex(St,O.name),it.set(O,ot))}function te(O,St){const ot=c.get(St).get(O);l.get(St)!==ot&&(i.uniformBlockBinding(St,ot,O.__bindingPointIndex),l.set(St,ot))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,Mt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,R=null,T=null,C=new _t(0,0,0),I=0,E=!1,b=null,L=null,W=null,G=null,$=null,F.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:Pt,bindFramebuffer:Vt,drawBuffers:Xt,useProgram:le,setBlending:P,setMaterial:zt,setFlipSided:ut,setCullFace:Lt,setLineWidth:vt,setPolygonOffset:qt,setScissorTest:Rt,activeTexture:A,bindTexture:S,unbindTexture:V,compressedTexImage2D:st,compressedTexImage3D:ct,texImage2D:Dt,texImage3D:$t,updateUBOMapping:ae,uniformBlockBinding:te,texStorage2D:se,texStorage3D:dt,texSubImage2D:rt,texSubImage3D:Nt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ct,scissor:Yt,viewport:Ut,reset:ve}}function nd(i,t,e,n){const s=c_(n);switch(e){case Xf:return i*t;case $f:return i*t;case Yf:return i*t*2;case xh:return i*t/s.components*s.byteLength;case Mh:return i*t/s.components*s.byteLength;case jf:return i*t*2/s.components*s.byteLength;case yh:return i*t*2/s.components*s.byteLength;case qf:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Rc:return Math.max(i,16)*Math.max(t,8)/4;case Ec:case Ac:return Math.max(i,8)*Math.max(t,8)/2;case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Po:case qc:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zf:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jc:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c_(i){switch(i){case Qi:case Gf:return{byteLength:1,components:1};case Aa:case Hf:case Zi:return{byteLength:2,components:1};case vh:case _h:return{byteLength:2,components:4};case Hs:case gh:case Mi:return{byteLength:4,components:1};case Wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function h_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):Bo("canvas")}function _(A,S,V){let st=1;const ct=Rt(A);if((ct.width>V||ct.height>V)&&(st=V/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(st*ct.width),Nt=Math.floor(st*ct.height);u===void 0&&(u=g(rt,Nt));const bt=S?g(rt,Nt):u;return bt.width=rt,bt.height=Nt,bt.getContext("2d").drawImage(A,0,0,rt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+rt+"x"+Nt+")."),bt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,S,V,st,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=S;if(S===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),S===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RG8UI),V===i.UNSIGNED_SHORT&&(rt=i.RG16UI),V===i.UNSIGNED_INT&&(rt=i.RG32UI),V===i.BYTE&&(rt=i.RG8I),V===i.SHORT&&(rt=i.RG16I),V===i.INT&&(rt=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),V===i.UNSIGNED_INT&&(rt=i.RGB32UI),V===i.BYTE&&(rt=i.RGB8I),V===i.SHORT&&(rt=i.RGB16I),V===i.INT&&(rt=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),V===i.UNSIGNED_INT&&(rt=i.RGBA32UI),V===i.BYTE&&(rt=i.RGBA8I),V===i.SHORT&&(rt=i.RGBA16I),V===i.INT&&(rt=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),S===i.RGBA){const Nt=ct?Zo:oe.getTransfer(st);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=Nt===me?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(A,S){let V;return A?S===null||S===Hs||S===Dr?V=i.DEPTH24_STENCIL8:S===Mi?V=i.DEPTH32F_STENCIL8:S===Aa&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hs||S===Dr?V=i.DEPTH_COMPONENT24:S===Mi?V=i.DEPTH_COMPONENT32F:S===Aa&&(V=i.DEPTH_COMPONENT16),V}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nn&&A.minFilter!==Li?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),I(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S)}function I(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,st=d.get(V);if(st){const ct=st[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(A),Object.keys(st).length===0&&d.delete(V)}n.remove(A)}function E(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const V=A.source,st=d.get(V);delete st[S.__cacheKey],a.memory.textures--}function b(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let ct=0;ct<S.__webglFramebuffer[st].length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[st][ct]);else i.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)i.deleteFramebuffer(S.__webglFramebuffer[st]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=A.textures;for(let st=0,ct=V.length;st<ct;st++){const rt=n.get(V[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(V[st])}n.remove(A)}let L=0;function W(){L=0}function G(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function at(A,S){const V=n.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(V,A,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function Z(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){D(V,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function ht(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){D(V,A,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function Q(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){H(V,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const pt={[Gs]:i.REPEAT,[Fs]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},Mt={[Nn]:i.NEAREST,[O0]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[Os]:i.LINEAR_MIPMAP_LINEAR},U={[V0]:i.NEVER,[$0]:i.ALWAYS,[G0]:i.LESS,[Kf]:i.LEQUAL,[H0]:i.EQUAL,[q0]:i.GEQUAL,[W0]:i.GREATER,[X0]:i.NOTEQUAL};function N(A,S){if(S.type===Mi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Li||S.magFilter===cl||S.magFilter===za||S.magFilter===Os||S.minFilter===Li||S.minFilter===cl||S.minFilter===za||S.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,pt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,pt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,pt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,U[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nn||S.minFilter!==za&&S.minFilter!==Os||S.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function F(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const st=S.source;let ct=d.get(st);ct===void 0&&(ct={},d.set(st,ct));const rt=$(S);if(rt!==A.__cacheKey){ct[rt]===void 0&&(ct[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ct[rt].usedTimes++;const Nt=ct[A.__cacheKey];Nt!==void 0&&(ct[A.__cacheKey].usedTimes--,Nt.usedTimes===0&&E(S)),A.__cacheKey=rt,A.__webglTexture=ct[rt].texture}return V}function D(A,S,V){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);const ct=F(A,S),rt=S.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+V);const Nt=n.get(rt);if(rt.version!==Nt.__version||ct===!0){e.activeTexture(i.TEXTURE0+V);const bt=oe.getPrimaries(oe.workingColorSpace),Ct=S.colorSpace===ps?null:oe.getPrimaries(S.colorSpace),se=S.colorSpace===ps||bt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let dt=_(S.image,!1,s.maxTextureSize);dt=qt(S,dt);const Dt=r.convert(S.format,S.colorSpace),$t=r.convert(S.type);let Yt=x(S.internalFormat,Dt,$t,S.colorSpace,S.isVideoTexture);N(st,S);let Ut;const ae=S.mipmaps,te=S.isVideoTexture!==!0,ve=Nt.__version===void 0||ct===!0,O=rt.dataReady,St=R(S,dt);if(S.isDepthTexture)Yt=v(S.format===Ur,S.type),ve&&(te?e.texStorage2D(i.TEXTURE_2D,1,Yt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,dt.width,dt.height,0,Dt,$t,null));else if(S.isDataTexture)if(ae.length>0){te&&ve&&e.texStorage2D(i.TEXTURE_2D,St,Yt,ae[0].width,ae[0].height);for(let it=0,ot=ae.length;it<ot;it++)Ut=ae[it],te?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Ut.width,Ut.height,Dt,$t,Ut.data):e.texImage2D(i.TEXTURE_2D,it,Yt,Ut.width,Ut.height,0,Dt,$t,Ut.data);S.generateMipmaps=!1}else te?(ve&&e.texStorage2D(i.TEXTURE_2D,St,Yt,dt.width,dt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Dt,$t,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,dt.width,dt.height,0,Dt,$t,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Yt,ae[0].width,ae[0].height,dt.depth);for(let it=0,ot=ae.length;it<ot;it++)if(Ut=ae[it],S.format!==Kn)if(Dt!==null)if(te){if(O)if(S.layerUpdates.size>0){const At=nd(Ut.width,Ut.height,S.format,S.type);for(const wt of S.layerUpdates){const Kt=Ut.data.subarray(wt*At/Ut.data.BYTES_PER_ELEMENT,(wt+1)*At/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,wt,Ut.width,Ut.height,1,Dt,Kt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Ut.width,Ut.height,dt.depth,Dt,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Yt,Ut.width,Ut.height,dt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Ut.width,Ut.height,dt.depth,Dt,$t,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Yt,Ut.width,Ut.height,dt.depth,0,Dt,$t,Ut.data)}else{te&&ve&&e.texStorage2D(i.TEXTURE_2D,St,Yt,ae[0].width,ae[0].height);for(let it=0,ot=ae.length;it<ot;it++)Ut=ae[it],S.format!==Kn?Dt!==null?te?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Ut.width,Ut.height,Dt,$t,Ut.data):e.texImage2D(i.TEXTURE_2D,it,Yt,Ut.width,Ut.height,0,Dt,$t,Ut.data)}else if(S.isDataArrayTexture)if(te){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Yt,dt.width,dt.height,dt.depth),O)if(S.layerUpdates.size>0){const it=nd(dt.width,dt.height,S.format,S.type);for(const ot of S.layerUpdates){const At=dt.data.subarray(ot*it/dt.data.BYTES_PER_ELEMENT,(ot+1)*it/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,dt.width,dt.height,1,Dt,$t,At)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Dt,$t,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,dt.width,dt.height,dt.depth,0,Dt,$t,dt.data);else if(S.isData3DTexture)te?(ve&&e.texStorage3D(i.TEXTURE_3D,St,Yt,dt.width,dt.height,dt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Dt,$t,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,dt.width,dt.height,dt.depth,0,Dt,$t,dt.data);else if(S.isFramebufferTexture){if(ve)if(te)e.texStorage2D(i.TEXTURE_2D,St,Yt,dt.width,dt.height);else{let it=dt.width,ot=dt.height;for(let At=0;At<St;At++)e.texImage2D(i.TEXTURE_2D,At,Yt,it,ot,0,Dt,$t,null),it>>=1,ot>>=1}}else if(ae.length>0){if(te&&ve){const it=Rt(ae[0]);e.texStorage2D(i.TEXTURE_2D,St,Yt,it.width,it.height)}for(let it=0,ot=ae.length;it<ot;it++)Ut=ae[it],te?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Dt,$t,Ut):e.texImage2D(i.TEXTURE_2D,it,Yt,Dt,$t,Ut);S.generateMipmaps=!1}else if(te){if(ve){const it=Rt(dt);e.texStorage2D(i.TEXTURE_2D,St,Yt,it.width,it.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,$t,dt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Dt,$t,dt);m(S)&&p(st),Nt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function H(A,S,V){if(S.image.length!==6)return;const st=F(A,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const rt=n.get(ct);if(ct.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const Nt=oe.getPrimaries(oe.workingColorSpace),bt=S.colorSpace===ps?null:oe.getPrimaries(S.colorSpace),Ct=S.colorSpace===ps||Nt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const se=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,Dt=[];for(let ot=0;ot<6;ot++)!se&&!dt?Dt[ot]=_(S.image[ot],!0,s.maxCubemapSize):Dt[ot]=dt?S.image[ot].image:S.image[ot],Dt[ot]=qt(S,Dt[ot]);const $t=Dt[0],Yt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),ae=x(S.internalFormat,Yt,Ut,S.colorSpace),te=S.isVideoTexture!==!0,ve=rt.__version===void 0||st===!0,O=ct.dataReady;let St=R(S,$t);N(i.TEXTURE_CUBE_MAP,S);let it;if(se){te&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ae,$t.width,$t.height);for(let ot=0;ot<6;ot++){it=Dt[ot].mipmaps;for(let At=0;At<it.length;At++){const wt=it[At];S.format!==Kn?Yt!==null?te?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,wt.width,wt.height,Yt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,ae,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,wt.width,wt.height,Yt,Ut,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,ae,wt.width,wt.height,0,Yt,Ut,wt.data)}}}else{if(it=S.mipmaps,te&&ve){it.length>0&&St++;const ot=Rt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ae,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(dt){te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Dt[ot].width,Dt[ot].height,Yt,Ut,Dt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ae,Dt[ot].width,Dt[ot].height,0,Yt,Ut,Dt[ot].data);for(let At=0;At<it.length;At++){const Kt=it[At].image[ot].image;te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,Kt.width,Kt.height,Yt,Ut,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,ae,Kt.width,Kt.height,0,Yt,Ut,Kt.data)}}else{te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Yt,Ut,Dt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ae,Yt,Ut,Dt[ot]);for(let At=0;At<it.length;At++){const wt=it[At];te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,Yt,Ut,wt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,ae,Yt,Ut,wt.image[ot])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function j(A,S,V,st,ct,rt){const Nt=r.convert(V.format,V.colorSpace),bt=r.convert(V.type),Ct=x(V.internalFormat,Nt,bt,V.colorSpace),se=n.get(S),dt=n.get(V);if(dt.__renderTarget=S,!se.__hasExternalTextures){const Dt=Math.max(1,S.width>>rt),$t=Math.max(1,S.height>>rt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,rt,Ct,Dt,$t,S.depth,0,Nt,bt,null):e.texImage2D(ct,rt,Ct,Dt,$t,0,Nt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ct,dt.__webglTexture,0,ut(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ct,dt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const st=S.depthTexture,ct=st&&st.isDepthTexture?st.type:null,rt=v(S.stencilBuffer,ct),Nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=ut(S);Lt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,rt,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,A)}else{const st=S.textures;for(let ct=0;ct<st.length;ct++){const rt=st[ct],Nt=r.convert(rt.format,rt.colorSpace),bt=r.convert(rt.type),Ct=x(rt.internalFormat,Nt,bt,rt.colorSpace),se=ut(S);V&&Lt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Ct,S.width,S.height):Lt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(S.depthTexture);st.__renderTarget=S,(!st.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),at(S.depthTexture,0);const ct=st.__webglTexture,rt=ut(S);if(S.depthTexture.format===Rr)Lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Ur)Lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Vt(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const st=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=st}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=i.createRenderbuffer(),tt(S.__webglDepthbuffer[st],A,!1);else{const ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),tt(S.__webglDepthbuffer,A,!1);else{const st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(A,S,V){const st=n.get(A);S!==void 0&&j(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Vt(A)}function le(A){const S=A.texture,V=n.get(A),st=n.get(S);A.addEventListener("dispose",C);const ct=A.textures,rt=A.isWebGLCubeRenderTarget===!0,Nt=ct.length>1;if(Nt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,a.memory.textures++),rt){V.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[bt]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)V.__webglFramebuffer[bt][Ct]=i.createFramebuffer()}else V.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)V.__webglFramebuffer[bt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let bt=0,Ct=ct.length;bt<Ct;bt++){const se=n.get(ct[bt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Lt(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let bt=0;bt<ct.length;bt++){const Ct=ct[bt];V.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[bt]);const se=r.convert(Ct.format,Ct.colorSpace),dt=r.convert(Ct.type),Dt=x(Ct.internalFormat,se,dt,Ct.colorSpace,A.isXRRenderTarget===!0),$t=ut(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,V.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),N(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)j(V.__webglFramebuffer[bt][Ct],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ct);else j(V.__webglFramebuffer[bt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let bt=0,Ct=ct.length;bt<Ct;bt++){const se=ct[bt],dt=n.get(se);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),N(i.TEXTURE_2D,se),j(V.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(bt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,st.__webglTexture),N(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)j(V.__webglFramebuffer[Ct],A,S,i.COLOR_ATTACHMENT0,bt,Ct);else j(V.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,bt,0);m(S)&&p(bt),e.unbindTexture()}A.depthBuffer&&Vt(A)}function lt(A){const S=A.textures;for(let V=0,st=S.length;V<st;V++){const ct=S[V];if(m(ct)){const rt=M(A),Nt=n.get(ct).__webglTexture;e.bindTexture(rt,Nt),p(rt),e.unbindTexture()}}}const ft=[],P=[];function zt(A){if(A.samples>0){if(Lt(A)===!1){const S=A.textures,V=A.width,st=A.height;let ct=i.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(A),bt=S.length>1;if(bt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ct]);const se=n.get(S[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,st,0,0,V,st,ct,i.NEAREST),l===!0&&(ft.length=0,P.length=0,ft.push(i.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ft.push(rt),P.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ct]);const se=n.get(S[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(A){return Math.min(s.maxSamples,A.samples)}function Lt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function vt(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function qt(A,S){const V=A.colorSpace,st=A.format,ct=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==zr&&V!==ps&&(oe.getTransfer(V)===me?(st!==Kn||ct!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=Z,this.setTexture3D=ht,this.setTextureCube=Q,this.rebindTextures=Xt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Lt}function u_(i,t){function e(n,s=ps){let r;const a=oe.getTransfer(s);if(n===Qi)return i.UNSIGNED_BYTE;if(n===vh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_h)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gf)return i.BYTE;if(n===Hf)return i.SHORT;if(n===Aa)return i.UNSIGNED_SHORT;if(n===gh)return i.INT;if(n===Hs)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===Xf)return i.ALPHA;if(n===qf)return i.RGB;if(n===Kn)return i.RGBA;if(n===$f)return i.LUMINANCE;if(n===Yf)return i.LUMINANCE_ALPHA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Ur)return i.DEPTH_STENCIL;if(n===xh)return i.RED;if(n===Mh)return i.RED_INTEGER;if(n===jf)return i.RG;if(n===yh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===To||n===Ao||n===Ro||n===Co)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Tc||n===Ac||n===Rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Pc)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===kc||n===zc||n===Bc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===qc||n===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zf||n===Yc||n===jc||n===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class d_ extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nt extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new De({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends Br{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new g_,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],R=new J;let T=null;const C=new jn;C.viewport=new ue;const I=new jn;I.viewport=new ue;const E=[C,I],b=new d_;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let H=x[D];return H===void 0&&(H=new Fl,x[D]=H),H.getTargetRaySpace()},this.getControllerGrip=function(D){let H=x[D];return H===void 0&&(H=new Fl,x[D]=H),H.getGripSpace()},this.getHand=function(D){let H=x[D];return H===void 0&&(H=new Fl,x[D]=H),H.getHandSpace()};function G(D){const H=v.indexOf(D.inputSource);if(H===-1)return;const j=x[H];j!==void 0&&(j.update(D.inputSource,D.frame,c||a),j.dispatchEvent({type:D.type,data:D.inputSource}))}function $(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",at);for(let D=0;D<x.length;D++){const H=v[D];H!==null&&(v[D]=null,x[D].disconnect(H))}L=null,W=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,F.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",$),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let H=null,j=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=m.stencil?Ur:Rr,j=m.stencil?Dr:Hs);const Pt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Jn(d.textureWidth,d.textureHeight,{format:Kn,type:Qi,depthTexture:new lp(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),F.setContext(s),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(D){for(let H=0;H<D.removed.length;H++){const j=D.removed[H],tt=v.indexOf(j);tt>=0&&(v[tt]=null,x[tt].disconnect(j))}for(let H=0;H<D.added.length;H++){const j=D.added[H];let tt=v.indexOf(j);if(tt===-1){for(let Vt=0;Vt<x.length;Vt++)if(Vt>=v.length){v.push(j),tt=Vt;break}else if(v[Vt]===null){v[Vt]=j,tt=Vt;break}if(tt===-1)break}const Pt=x[tt];Pt&&Pt.connect(j)}}const Z=new y,ht=new y;function Q(D,H,j){Z.setFromMatrixPosition(H.matrixWorld),ht.setFromMatrixPosition(j.matrixWorld);const tt=Z.distanceTo(ht),Pt=H.projectionMatrix.elements,Vt=j.projectionMatrix.elements,Xt=Pt[14]/(Pt[10]-1),le=Pt[14]/(Pt[10]+1),lt=(Pt[9]+1)/Pt[5],ft=(Pt[9]-1)/Pt[5],P=(Pt[8]-1)/Pt[0],zt=(Vt[8]+1)/Vt[0],ut=Xt*P,Lt=Xt*zt,vt=tt/(-P+zt),qt=vt*-P;if(H.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(qt),D.translateZ(vt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Pt[10]===-1)D.projectionMatrix.copy(H.projectionMatrix),D.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const Rt=Xt+vt,A=le+vt,S=ut-qt,V=Lt+(tt-qt),st=lt*le/A*Rt,ct=ft*le/A*Rt;D.projectionMatrix.makePerspective(S,V,st,ct,Rt,A),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function pt(D,H){H===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(H.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let H=D.near,j=D.far;_.texture!==null&&(_.depthNear>0&&(H=_.depthNear),_.depthFar>0&&(j=_.depthFar)),b.near=I.near=C.near=H,b.far=I.far=C.far=j,(L!==b.near||W!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,W=b.far),C.layers.mask=D.layers.mask|2,I.layers.mask=D.layers.mask|4,b.layers.mask=C.layers.mask|I.layers.mask;const tt=D.parent,Pt=b.cameras;pt(b,tt);for(let Vt=0;Vt<Pt.length;Vt++)pt(Pt[Vt],tt);Pt.length===2?Q(b,C,I):b.projectionMatrix.copy(C.projectionMatrix),Mt(D,b,tt)};function Mt(D,H,j){j===null?D.matrix.copy(H.matrixWorld):(D.matrix.copy(j.matrixWorld),D.matrix.invert(),D.matrix.multiply(H.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(H.projectionMatrix),D.projectionMatrixInverse.copy(H.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ra*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let U=null;function N(D,H){if(h=H.getViewerPose(c||a),g=H,h!==null){const j=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let tt=!1;j.length!==b.cameras.length&&(b.cameras.length=0,tt=!0);for(let Vt=0;Vt<j.length;Vt++){const Xt=j[Vt];let le=null;if(f!==null)le=f.getViewport(Xt);else{const ft=u.getViewSubImage(d,Xt);le=ft.viewport,Vt===0&&(t.setRenderTargetTextures(M,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(M))}let lt=E[Vt];lt===void 0&&(lt=new jn,lt.layers.enable(Vt),lt.viewport=new ue,E[Vt]=lt),lt.matrix.fromArray(Xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(le.x,le.y,le.width,le.height),Vt===0&&(b.matrix.copy(lt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),tt===!0&&b.cameras.push(lt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Vt=u.getDepthInformation(j[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let j=0;j<x.length;j++){const tt=v[j],Pt=x[j];tt!==null&&Pt!==void 0&&Pt.update(tt,H,c||a)}U&&U(D,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const F=new op;F.setAnimationLoop(N),this.setAnimationLoop=function(D){U=D},this.dispose=function(){}}}const ws=new ei,__=new Zt;function x_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,ws.copy(v),ws.x*=-1,ws.y*=-1,ws.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),m.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(ws)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(M,R);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=v.length;T<C;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,b=I.length;E<b;E++){const L=I[E];if(f(L,T,E,R)===!0){const W=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let at=0;at<G.length;at++){const Z=G[at],ht=_(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+$,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,$),$+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,v,R){const T=M.value,C=x+"_"+v;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const I=R[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(M){const x=M.uniforms;let v=0;const R=16;for(let C=0,I=x.length;C<I;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,L=E.length;b<L;b++){const W=E[b],G=Array.isArray(W.value)?W.value:[W.value];for(let $=0,at=G.length;$<at;$++){const Z=G[$],ht=_(Z),Q=v%R,pt=Q%ht.boundary,Mt=Q+pt;v+=pt,Mt!==0&&R-Mt<ht.storage&&(v+=R-Mt),W.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=ht.storage}}}const T=v%R;return T>0&&(v+=R-T),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class qb{constructor(t={}){const{canvas:e=hm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=gs,this.toneMappingExposure=1;const v=this;let R=!1,T=0,C=0,I=null,E=-1,b=null;const L=new ue,W=new ue;let G=null;const $=new _t(0);let at=0,Z=e.width,ht=e.height,Q=1,pt=null,Mt=null;const U=new ue(0,0,Z,ht),N=new ue(0,0,Z,ht);let F=!1;const D=new Rh;let H=!1,j=!1;const tt=new Zt,Pt=new Zt,Vt=new y,Xt=new ue,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ft(){return I===null?Q:1}let P=n;function zt(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ph}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",wt,!1),P===null){const k="webgl2";if(P=zt(k,w),P===null)throw zt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,Lt,vt,qt,Rt,A,S,V,st,ct,rt,Nt,bt,Ct,se,dt,Dt,$t,Yt,Ut,ae,te,ve,O;function St(){ut=new T2(P),ut.init(),te=new u_(P,ut),Lt=new M2(P,ut,t,te),vt=new l_(P,ut),Lt.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),qt=new C2(P),Rt=new $v,A=new h_(P,ut,vt,Rt,Lt,te,qt),S=new b2(v),V=new E2(v),st=new Fm(P),ve=new _2(P,st),ct=new A2(P,st,qt,ve),rt=new L2(P,ct,st,qt),Yt=new P2(P,Lt,A),dt=new y2(Rt),Nt=new qv(v,S,V,ut,Lt,ve,dt),bt=new x_(v,Rt),Ct=new jv,se=new e_(ut),$t=new v2(v,S,V,vt,rt,f,l),Dt=new a_(v,rt,Lt),O=new M_(P,qt,Lt,vt),Ut=new x2(P,ut,qt),ae=new R2(P,ut,qt),qt.programs=Nt.programs,v.capabilities=Lt,v.extensions=ut,v.properties=Rt,v.renderLists=Ct,v.shadowMap=Dt,v.state=vt,v.info=qt}St();const it=new v_(v,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(Z,ht,!1))},this.getSize=function(w){return w.set(Z,ht)},this.setSize=function(w,k,X=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,ht=k,e.width=Math.floor(w*Q),e.height=Math.floor(k*Q),X===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Z*Q,ht*Q).floor()},this.setDrawingBufferSize=function(w,k,X){Z=w,ht=k,Q=X,e.width=Math.floor(w*X),e.height=Math.floor(k*X),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,k,X,q){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,k,X,q),vt.viewport(L.copy(U).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,k,X,q){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,k,X,q),vt.scissor(W.copy(N).multiplyScalar(Q).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){vt.setScissorTest(F=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(w=!0,k=!0,X=!0){let q=0;if(w){let z=!1;if(I!==null){const mt=I.texture.format;z=mt===bh||mt===yh||mt===Mh}if(z){const mt=I.texture.type,Et=mt===Qi||mt===Hs||mt===Aa||mt===Dr||mt===vh||mt===_h,Ft=$t.getClearColor(),Ot=$t.getClearAlpha(),jt=Ft.r,Jt=Ft.g,kt=Ft.b;Et?(g[0]=jt,g[1]=Jt,g[2]=kt,g[3]=Ot,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=jt,_[1]=Jt,_[2]=kt,_[3]=Ot,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}k&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ct.dispose(),se.dispose(),Rt.dispose(),S.dispose(),V.dispose(),rt.dispose(),ve.dispose(),O.dispose(),Nt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Xh),it.removeEventListener("sessionend",qh),_s.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=qt.autoReset,k=Dt.enabled,X=Dt.autoUpdate,q=Dt.needsUpdate,z=Dt.type;St(),qt.autoReset=w,Dt.enabled=k,Dt.autoUpdate=X,Dt.needsUpdate=q,Dt.type=z}function wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kt(w){const k=w.target;k.removeEventListener("dispose",Kt),Ae(k)}function Ae(w){an(w),Rt.remove(w)}function an(w){const k=Rt.get(w).programs;k!==void 0&&(k.forEach(function(X){Nt.releaseProgram(X)}),w.isShaderMaterial&&Nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,X,q,z,mt){k===null&&(k=le);const Et=z.isMesh&&z.matrixWorld.determinant()<0,Ft=Kp(w,k,X,q,z);vt.setMaterial(q,Et);let Ot=X.index,jt=1;if(q.wireframe===!0){if(Ot=ct.getWireframeAttribute(X),Ot===void 0)return;jt=2}const Jt=X.drawRange,kt=X.attributes.position;let ce=Jt.start*jt,_e=(Jt.start+Jt.count)*jt;mt!==null&&(ce=Math.max(ce,mt.start*jt),_e=Math.min(_e,(mt.start+mt.count)*jt)),Ot!==null?(ce=Math.max(ce,0),_e=Math.min(_e,Ot.count)):kt!=null&&(ce=Math.max(ce,0),_e=Math.min(_e,kt.count));const xe=_e-ce;if(xe<0||xe===1/0)return;ve.setup(z,q,Ft,X,Ot);let gn,de=Ut;if(Ot!==null&&(gn=st.get(Ot),de=ae,de.setIndex(gn)),z.isMesh)q.wireframe===!0?(vt.setLineWidth(q.wireframeLinewidth*ft()),de.setMode(P.LINES)):de.setMode(P.TRIANGLES);else if(z.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),vt.setLineWidth(Bt*ft()),z.isLineSegments?de.setMode(P.LINES):z.isLineLoop?de.setMode(P.LINE_LOOP):de.setMode(P.LINE_STRIP)}else z.isPoints?de.setMode(P.POINTS):z.isSprite&&de.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)de.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Bt=z._multiDrawStarts,Ui=z._multiDrawCounts,fe=z._multiDrawCount,ai=Ot?st.get(Ot).bytesPerElement:1,js=Rt.get(q).currentProgram.getUniforms();for(let bn=0;bn<fe;bn++)js.setValue(P,"_gl_DrawID",bn),de.render(Bt[bn]/ai,Ui[bn])}else if(z.isInstancedMesh)de.renderInstances(ce,xe,z.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ui=Math.min(X.instanceCount,Bt);de.renderInstances(ce,xe,Ui)}else de.render(ce,xe)};function pe(w,k,X){w.transparent===!0&&w.side===Oe&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,ka(w,k,X),w.side=Ji,w.needsUpdate=!0,ka(w,k,X),w.side=Oe):ka(w,k,X)}this.compile=function(w,k,X=null){X===null&&(X=w),p=se.get(X),p.init(k),x.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==X&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const mt=z.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Ft=mt[Et];pe(Ft,X,z),q.add(Ft)}else pe(mt,X,z),q.add(mt)}),x.pop(),p=null,q},this.compileAsync=function(w,k,X=null){const q=this.compile(w,k,X);return new Promise(z=>{function mt(){if(q.forEach(function(Et){Rt.get(Et).currentProgram.isReady()&&q.delete(Et)}),q.size===0){z(w);return}setTimeout(mt,10)}ut.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ri=null;function Di(w){ri&&ri(w)}function Xh(){_s.stop()}function qh(){_s.start()}const _s=new op;_s.setAnimationLoop(Di),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(w){ri=w,it.setAnimationLoop(w),w===null?_s.stop():_s.start()},it.addEventListener("sessionstart",Xh),it.addEventListener("sessionend",qh),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(k),k=it.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,I),p=se.get(w,x.length),p.init(k),x.push(p),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),D.setFromProjectionMatrix(Pt),j=this.localClippingEnabled,H=dt.init(this.clippingPlanes,j),m=Ct.get(w,M.length),m.init(),M.push(m),it.enabled===!0&&it.isPresenting===!0){const mt=v.xr.getDepthSensingMesh();mt!==null&&ol(mt,k,-1/0,v.sortObjects)}ol(w,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pt,Mt),lt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,lt&&$t.addToRenderList(m,w),this.info.render.frame++,H===!0&&dt.beginShadows();const X=p.state.shadowsArray;Dt.render(X,w,k),H===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const mt=k.cameras;if(z.length>0)for(let Et=0,Ft=mt.length;Et<Ft;Et++){const Ot=mt[Et];Yh(q,z,w,Ot)}lt&&$t.render(w);for(let Et=0,Ft=mt.length;Et<Ft;Et++){const Ot=mt[Et];$h(m,w,Ot,Ot.viewport)}}else z.length>0&&Yh(q,z,w,k),lt&&$t.render(w),$h(m,w,k);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,k),ve.resetDefaultState(),E=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],H===!0&&dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ol(w,k,X,q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||D.intersectsSprite(w)){q&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const Et=rt.update(w),Ft=w.material;Ft.visible&&m.push(w,Et,Ft,X,Xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||D.intersectsObject(w))){const Et=rt.update(w),Ft=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Xt.copy(Et.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ft)){const Ot=Et.groups;for(let jt=0,Jt=Ot.length;jt<Jt;jt++){const kt=Ot[jt],ce=Ft[kt.materialIndex];ce&&ce.visible&&m.push(w,Et,ce,X,Xt.z,kt)}}else Ft.visible&&m.push(w,Et,Ft,X,Xt.z,null)}}const mt=w.children;for(let Et=0,Ft=mt.length;Et<Ft;Et++)ol(mt[Et],k,X,q)}function $h(w,k,X,q){const z=w.opaque,mt=w.transmissive,Et=w.transparent;p.setupLightsView(X),H===!0&&dt.setGlobalState(v.clippingPlanes,X),q&&vt.viewport(L.copy(q)),z.length>0&&Oa(z,k,X),mt.length>0&&Oa(mt,k,X),Et.length>0&&Oa(Et,k,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Yh(w,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Jn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Zi:Qi,minFilter:Os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const mt=p.state.transmissionRenderTarget[q.id],Et=q.viewport||L;mt.setSize(Et.z,Et.w);const Ft=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor($),at=v.getClearAlpha(),at<1&&v.setClearColor(16777215,.5),v.clear(),lt&&$t.render(X);const Ot=v.toneMapping;v.toneMapping=gs;const jt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),H===!0&&dt.setGlobalState(v.clippingPlanes,q),Oa(w,X,q),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let kt=0,ce=k.length;kt<ce;kt++){const _e=k[kt],xe=_e.object,gn=_e.geometry,de=_e.material,Bt=_e.group;if(de.side===Oe&&xe.layers.test(q.layers)){const Ui=de.side;de.side=mn,de.needsUpdate=!0,jh(xe,X,q,gn,de,Bt),de.side=Ui,de.needsUpdate=!0,Jt=!0}}Jt===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}v.setRenderTarget(Ft),v.setClearColor($,at),jt!==void 0&&(q.viewport=jt),v.toneMapping=Ot}function Oa(w,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,mt=w.length;z<mt;z++){const Et=w[z],Ft=Et.object,Ot=Et.geometry,jt=q===null?Et.material:q,Jt=Et.group;Ft.layers.test(X.layers)&&jh(Ft,k,X,Ot,jt,Jt)}}function jh(w,k,X,q,z,mt){w.onBeforeRender(v,k,X,q,z,mt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,k,X,q,w,mt),z.transparent===!0&&z.side===Oe&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,v.renderBufferDirect(X,k,q,z,w,mt),z.side=Ji,z.needsUpdate=!0,v.renderBufferDirect(X,k,q,z,w,mt),z.side=Oe):v.renderBufferDirect(X,k,q,z,w,mt),w.onAfterRender(v,k,X,q,z,mt)}function ka(w,k,X){k.isScene!==!0&&(k=le);const q=Rt.get(w),z=p.state.lights,mt=p.state.shadowsArray,Et=z.state.version,Ft=Nt.getParameters(w,z.state,mt,k,X),Ot=Nt.getProgramCacheKey(Ft);let jt=q.programs;q.environment=w.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(w.isMeshStandardMaterial?V:S).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,jt===void 0&&(w.addEventListener("dispose",Kt),jt=new Map,q.programs=jt);let Jt=jt.get(Ot);if(Jt!==void 0){if(q.currentProgram===Jt&&q.lightsStateVersion===Et)return Kh(w,Ft),Jt}else Ft.uniforms=Nt.getUniforms(w),w.onBeforeCompile(Ft,v),Jt=Nt.acquireProgram(Ft,Ot),jt.set(Ot,Jt),q.uniforms=Ft.uniforms;const kt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=dt.uniform),Kh(w,Ft),q.needsLights=Qp(w),q.lightsStateVersion=Et,q.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMap.value=z.state.directionalShadowMap,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotShadowMap.value=z.state.spotShadowMap,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMap.value=z.state.pointShadowMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Jt,q.uniformsList=null,Jt}function Zh(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Lo.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Kh(w,k){const X=Rt.get(w);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Kp(w,k,X,q,z){k.isScene!==!0&&(k=le),A.resetTextureUnits();const mt=k.fog,Et=q.isMeshStandardMaterial?k.environment:null,Ft=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:zr,Ot=(q.isMeshStandardMaterial?V:S).get(q.envMap||Et),jt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Jt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,_e=!!X.morphAttributes.color;let xe=gs;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=v.toneMapping);const gn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=gn!==void 0?gn.length:0,Bt=Rt.get(q),Ui=p.state.lights;if(H===!0&&(j===!0||w!==b)){const Vn=w===b&&q.id===E;dt.setState(q,w,Vn)}let fe=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Ui.state.version||Bt.outputColorSpace!==Ft||z.isBatchedMesh&&Bt.batching===!1||!z.isBatchedMesh&&Bt.batching===!0||z.isBatchedMesh&&Bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Bt.instancing===!1||!z.isInstancedMesh&&Bt.instancing===!0||z.isSkinnedMesh&&Bt.skinning===!1||!z.isSkinnedMesh&&Bt.skinning===!0||z.isInstancedMesh&&Bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Bt.instancingMorph===!1&&z.morphTexture!==null||Bt.envMap!==Ot||q.fog===!0&&Bt.fog!==mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==dt.numPlanes||Bt.numIntersection!==dt.numIntersection)||Bt.vertexAlphas!==jt||Bt.vertexTangents!==Jt||Bt.morphTargets!==kt||Bt.morphNormals!==ce||Bt.morphColors!==_e||Bt.toneMapping!==xe||Bt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Bt.__version=q.version);let ai=Bt.currentProgram;fe===!0&&(ai=ka(q,k,z));let js=!1,bn=!1,Wr=!1;const Me=ai.getUniforms(),Si=Bt.uniforms;if(vt.useProgram(ai.program)&&(js=!0,bn=!0,Wr=!0),q.id!==E&&(E=q.id,bn=!0),js||b!==w){vt.buffers.depth.getReversed()?(tt.copy(w.projectionMatrix),dm(tt),fm(tt),Me.setValue(P,"projectionMatrix",tt)):Me.setValue(P,"projectionMatrix",w.projectionMatrix),Me.setValue(P,"viewMatrix",w.matrixWorldInverse);const ns=Me.map.cameraPosition;ns!==void 0&&ns.setValue(P,Vt.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&Me.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Me.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,bn=!0,Wr=!0)}if(z.isSkinnedMesh){Me.setOptional(P,z,"bindMatrix"),Me.setOptional(P,z,"bindMatrixInverse");const Vn=z.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Me.setValue(P,"boneTexture",Vn.boneTexture,A))}z.isBatchedMesh&&(Me.setOptional(P,z,"batchingTexture"),Me.setValue(P,"batchingTexture",z._matricesTexture,A),Me.setOptional(P,z,"batchingIdTexture"),Me.setValue(P,"batchingIdTexture",z._indirectTexture,A),Me.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(P,"batchingColorTexture",z._colorsTexture,A));const Xr=X.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&Yt.update(z,X,ai),(bn||Bt.receiveShadow!==z.receiveShadow)&&(Bt.receiveShadow=z.receiveShadow,Me.setValue(P,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Si.envMap.value=Ot,Si.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Si.envMapIntensity.value=k.environmentIntensity),bn&&(Me.setValue(P,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Jp(Si,Wr),mt&&q.fog===!0&&bt.refreshFogUniforms(Si,mt),bt.refreshMaterialUniforms(Si,q,Q,ht,p.state.transmissionRenderTarget[w.id]),Lo.upload(P,Zh(Bt),Si,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Lo.upload(P,Zh(Bt),Si,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Me.setValue(P,"center",z.center),Me.setValue(P,"modelViewMatrix",z.modelViewMatrix),Me.setValue(P,"normalMatrix",z.normalMatrix),Me.setValue(P,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Vn=q.uniformsGroups;for(let ns=0,is=Vn.length;ns<is;ns++){const Jh=Vn[ns];O.update(Jh,ai),O.bind(Jh,ai)}}return ai}function Jp(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Qp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,k,X){Rt.get(w.texture).__webglTexture=k,Rt.get(w.depthTexture).__webglTexture=X;const q=Rt.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const X=Rt.get(w);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,X=0){I=w,T=k,C=X;let q=!0,z=null,mt=!1,Et=!1;if(w){const Ot=Rt.get(w);if(Ot.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Ot.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ot.__hasExternalTextures)A.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const kt=w.depthTexture;if(Ot.__boundDepthTexture!==kt){if(kt!==null&&Rt.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Et=!0);const Jt=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?z=Jt[k][X]:z=Jt[k],mt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?z=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?z=Jt[X]:z=Jt,L.copy(w.viewport),W.copy(w.scissor),G=w.scissorTest}else L.copy(U).multiplyScalar(Q).floor(),W.copy(N).multiplyScalar(Q).floor(),G=F;if(vt.bindFramebuffer(P.FRAMEBUFFER,z)&&q&&vt.drawBuffers(w,z),vt.viewport(L),vt.scissor(W),vt.setScissorTest(G),mt){const Ot=Rt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,X)}else if(Et){const Ot=Rt.get(w.texture),jt=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,X||0,jt)}E=-1},this.readRenderTargetPixels=function(w,k,X,q,z,mt,Et){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ft=Ft[Et]),Ft){vt.bindFramebuffer(P.FRAMEBUFFER,Ft);try{const Ot=w.texture,jt=Ot.format,Jt=Ot.type;if(!Lt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-q&&X>=0&&X<=w.height-z&&P.readPixels(k,X,q,z,te.convert(jt),te.convert(Jt),mt)}finally{const Ot=I!==null?Rt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,k,X,q,z,mt,Et){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ft=Ft[Et]),Ft){const Ot=w.texture,jt=Ot.format,Jt=Ot.type;if(!Lt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-q&&X>=0&&X<=w.height-z){vt.bindFramebuffer(P.FRAMEBUFFER,Ft);const kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.bufferData(P.PIXEL_PACK_BUFFER,mt.byteLength,P.STREAM_READ),P.readPixels(k,X,q,z,te.convert(jt),te.convert(Jt),0);const ce=I!==null?Rt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,ce);const _e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await um(P,_e,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,mt),P.deleteBuffer(kt),P.deleteSync(_e),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,X=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(w.image.width*q),mt=Math.floor(w.image.height*q),Et=k!==null?k.x:0,Ft=k!==null?k.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Et,Ft,z,mt),vt.unbindTexture()},this.copyTextureToTexture=function(w,k,X=null,q=null,z=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],k=arguments[2],z=arguments[3]||0,X=null);let mt,Et,Ft,Ot,jt,Jt,kt,ce,_e;const xe=w.isCompressedTexture?w.mipmaps[z]:w.image;X!==null?(mt=X.max.x-X.min.x,Et=X.max.y-X.min.y,Ft=X.isBox3?X.max.z-X.min.z:1,Ot=X.min.x,jt=X.min.y,Jt=X.isBox3?X.min.z:0):(mt=xe.width,Et=xe.height,Ft=xe.depth||1,Ot=0,jt=0,Jt=0),q!==null?(kt=q.x,ce=q.y,_e=q.z):(kt=0,ce=0,_e=0);const gn=te.convert(k.format),de=te.convert(k.type);let Bt;k.isData3DTexture?(A.setTexture3D(k,0),Bt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Bt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Ui=P.getParameter(P.UNPACK_ROW_LENGTH),fe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ai=P.getParameter(P.UNPACK_SKIP_PIXELS),js=P.getParameter(P.UNPACK_SKIP_ROWS),bn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt);const Wr=w.isDataArrayTexture||w.isData3DTexture,Me=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Si=Rt.get(w),Xr=Rt.get(k),Vn=Rt.get(Si.__renderTarget),ns=Rt.get(Xr.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,Vn.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let is=0;is<Ft;is++)Wr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,z,Jt+is),w.isDepthTexture?(Me&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.get(k).__webglTexture,z,_e+is),P.blitFramebuffer(Ot,jt,mt,Et,kt,ce,mt,Et,P.DEPTH_BUFFER_BIT,P.NEAREST)):Me?P.copyTexSubImage3D(Bt,z,kt,ce,_e+is,Ot,jt,mt,Et):P.copyTexSubImage2D(Bt,z,kt,ce,_e+is,Ot,jt,mt,Et);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Me?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Bt,z,kt,ce,_e,mt,Et,Ft,gn,de,xe.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,z,kt,ce,_e,mt,Et,Ft,gn,xe.data):P.texSubImage3D(Bt,z,kt,ce,_e,mt,Et,Ft,gn,de,xe):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,kt,ce,mt,Et,gn,de,xe.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,kt,ce,xe.width,xe.height,gn,xe.data):P.texSubImage2D(P.TEXTURE_2D,z,kt,ce,mt,Et,gn,de,xe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ui),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ai),P.pixelStorei(P.UNPACK_SKIP_ROWS,js),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bn),z===0&&k.generateMipmaps&&P.generateMipmap(Bt),vt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,X=null,q=null,z=0){return w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],k=arguments[3],z=arguments[4]||0),fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,X,q,z)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,vt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class y_ extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class b_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new y;class Vo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ks extends $s{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hr;const Zr=new y,ur=new y,dr=new y,fr=new J,Kr=new J,fp=new Zt,ao=new y,Jr=new y,oo=new y,id=new J,Ol=new J,sd=new J;class wr extends Ue{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new b_(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Vo(n,3,0,!1)),hr.setAttribute("uv",new Vo(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;lo(ao.set(-.5,-.5,0),dr,a,ur,s,r),lo(Jr.set(.5,-.5,0),dr,a,ur,s,r),lo(oo.set(.5,.5,0),dr,a,ur,s,r),id.set(0,0),Ol.set(1,0),sd.set(1,1);let o=t.ray.intersectTriangle(ao,Jr,oo,!1,Zr);if(o===null&&(lo(Jr.set(-.5,.5,0),dr,a,ur,s,r),Ol.set(0,1),o=t.ray.intersectTriangle(ao,oo,Jr,!1,Zr),o===null))return;const l=t.ray.origin.distanceTo(Zr);l<t.near||l>t.far||e.push({distance:l,point:Zr.clone(),uv:Zn.getInterpolation(Zr,ao,Jr,oo,id,Ol,sd,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lo(i,t,e,n,s,r){fr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Kr.x=r*fr.x-s*fr.y,Kr.y=s*fr.x+r*fr.y):Kr.copy(fr),i.copy(t),i.x+=Kr.x,i.y+=Kr.y,i.applyMatrix4(fp)}const rd=new y,ad=new ue,od=new ue,S_=new y,ld=new Zt,co=new y,kl=new qs,cd=new Zt,zl=new Th;class $b extends Y{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(s),t.ray.intersectsSphere(kl)!==!1&&(cd.copy(s).invert(),zl.copy(t.ray).applyMatrix4(cd),!(this.boundingBox!==null&&zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,zl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ue,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ad.fromBufferAttribute(s.attributes.skinIndex,t),od.fromBufferAttribute(s.attributes.skinWeight,t),rd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=od.getComponent(r);if(a!==0){const o=ad.getComponent(r);ld.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(S_.copy(rd).applyMatrix4(ld),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class w_ extends Ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pp extends hn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Nn,h=Nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new Zt,E_=new Zt;class mp{constructor(t=[],e=[]){this.uuid=bi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:E_;hd.multiplyMatrices(o,e[r]),hd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new mp(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new pp(e,t,t,Kn,Mi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new w_),this.bones.push(a),this.boneInverses.push(new Zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class ud extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new Zt,dd=new Zt,ho=[],fd=new ii,T_=new Zt,Qr=new Y,ta=new qs;class Ph extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ud(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,T_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),fd.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(fd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),ta.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),t.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),dd.multiplyMatrices(n,pr),Qr.matrixWorld=dd,Qr.raycast(t,ho);for(let a=0,o=ho.length;a<o;a++){const l=ho[a];l.instanceId=r,l.object=this,e.push(l)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ud(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pp(new Float32Array(s*this.count),s,this.count,xh,Mi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class A_ extends hn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new J:new y);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new y,s=[],r=[],a=[],o=new y,l=new Zt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new y)}r[0]=new y,a[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lh extends Ii{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new J){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class R_ extends Lh{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const uo=new y,Bl=new Ih,Vl=new Ih,Gl=new Ih;class gp extends Ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new y){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),c=uo);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Bl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Vl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Gl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Bl.calc(l),Vl.calc(l),Gl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pd(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function C_(i,t){const e=1-i;return e*e*t}function P_(i,t){return 2*(1-i)*i*t}function L_(i,t){return i*i*t}function Sa(i,t,e,n){return C_(i,t)+P_(i,e)+L_(i,n)}function I_(i,t){const e=1-i;return e*e*e*t}function D_(i,t){const e=1-i;return 3*e*e*i*t}function U_(i,t){return 3*(1-i)*i*i*t}function N_(i,t){return i*i*i*t}function wa(i,t,e,n,s){return I_(i,t)+D_(i,e)+U_(i,n)+N_(i,s)}class vp extends Ii{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wa(t,s.x,r.x,a.x,o.x),wa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class F_ extends Ii{constructor(t=new y,e=new y,n=new y,s=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new y){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wa(t,s.x,r.x,a.x,o.x),wa(t,s.y,r.y,a.y,o.y),wa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _p extends Ii{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class O_ extends Ii{constructor(t=new y,e=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends Ii{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Sa(t,s.x,r.x,a.x),Sa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends Ii{constructor(t=new y,e=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new y){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Sa(t,s.x,r.x,a.x),Sa(t,s.y,r.y,a.y),Sa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(pd(o,l.x,c.x,h.x,u.x),pd(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var Go=Object.freeze({__proto__:null,ArcCurve:R_,CatmullRomCurve3:gp,CubicBezierCurve:vp,CubicBezierCurve3:F_,EllipseCurve:Lh,LineCurve:_p,LineCurve3:O_,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:xp,SplineCurve:Uh});class k_ extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Go[s.type]().fromJSON(s))}return this}}class Pa extends k_{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _p(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Dh(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new vp(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Lh(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mn extends We{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Je(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new y,d=new J,f=new y,g=new y,_=new y;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,v=Math.sin(x),R=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);const C=l[3*T+0]*v,I=l[3*T+1],E=l[3*T+0]*R;c.push(C,I,E)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,R=v,T=v+t.length,C=v+t.length+1,I=v+1;r.push(R,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.points,t.segments,t.phiStart,t.phiLength)}}class Nh extends Mn{constructor(t=1,e=1,n=4,s=8){const r=new Pa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Nh(t.radius,t.length,t.capSegments,t.radialSegments)}}class Qo extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new y,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function M(){const v=new y,R=new y;let T=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const E=[],b=I/r,L=b*(e-t)+t;for(let W=0;W<=s;W++){const G=W/s,$=G*l+o,at=Math.sin($),Z=Math.cos($);R.x=L*at,R.y=-b*n+m,R.z=L*Z,u.push(R.x,R.y,R.z),v.set(at,C,Z).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-b),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const b=_[E][I],L=_[E+1][I],W=_[E+1][I+1],G=_[E][I+1];(t>0||E!==0)&&(h.push(b,L,G),T+=3),(e>0||E!==r-1)&&(h.push(L,W,G),T+=3)}c.addGroup(p,T,0),p+=T}function x(v){const R=g,T=new J,C=new y;let I=0;const E=v===!0?t:e,b=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const L=g;for(let W=0;W<=s;W++){const $=W/s*l+o,at=Math.cos($),Z=Math.sin($);C.x=E*Z,C.y=m*b,C.z=E*at,u.push(C.x,C.y,C.z),d.push(0,b,0),T.x=at*.5+.5,T.y=Z*.5*b+.5,f.push(T.x,T.y),g++}for(let W=0;W<s;W++){const G=R+W,$=L+W;v===!0?h.push($,$+1,G):h.push($+1,$,G),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yi extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new yi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tl extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new y,v=new y,R=new y;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],v),f(e[T+2],R),l(x,v,R,M)}function l(M,x,v,R){const T=R+1,C=[];for(let I=0;I<=T;I++){C[I]=[];const E=M.clone().lerp(v,I/T),b=x.clone().lerp(v,I/T),L=T-I;for(let W=0;W<=L;W++)W===0&&I===T?C[I][W]=E:C[I][W]=E.clone().lerp(b,W/L)}for(let I=0;I<T;I++)for(let E=0;E<2*(T-I)-1;E++){const b=Math.floor(E/2);E%2===0?(d(C[I][b+1]),d(C[I+1][b]),d(C[I][b])):(d(C[I][b+1]),d(C[I+1][b+1]),d(C[I+1][b]))}}function c(M){const x=new y;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new y;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;a.push(v,1-R)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],v=a[M+2],R=a[M+4],T=Math.max(x,v,R),C=Math.min(x,v,R);T>.9&&C<.1&&(x<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new y,x=new y,v=new y,R=new y,T=new J,C=new J,I=new J;for(let E=0,b=0;E<r.length;E+=9,b+=6){M.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),T.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),R.copy(M).add(x).add(v).divideScalar(3);const L=m(R);_(T,b+0,M,L),_(C,b+2,x,L),_(I,b+4,v,L)}}function _(M,x,v,R){R<0&&M.x===1&&(a[x]=M.x-1),v.x===0&&v.z===0&&(a[x]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.vertices,t.indices,t.radius,t.details)}}class es extends Pa{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Pa().fromJSON(s))}return this}}const z_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Mp(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=W_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return La(r,a,e,o,l,f,0),a}};function Mp(i,t,e,n,s){let r,a;if(s===ex(i,t,e,n)>0)for(r=t;r<e;r+=n)a=md(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=md(r,i[r],i[r+1],a);return a&&el(a,a.next)&&(Da(a),a=a.next),a}function Ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(el(e,e.next)||Te(e.prev,e,e.next)===0)){if(Da(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function La(i,t,e,n,s,r,a){if(!i)return;!a&&r&&j_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?V_(i,n,s,r):B_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Da(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=G_(Ws(i),t,e),La(i,t,e,n,s,r,2)):a===2&&H_(i,t,e,n,s,r):La(Ws(i),t,e,n,s,r,1);break}}}function B_(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Er(s,o,r,l,a,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Qc(f,g,t,e,n),M=Qc(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Er(o,h,l,u,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Er(o,h,l,u,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Er(o,h,l,u,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Er(o,h,l,u,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function G_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!el(s,r)&&yp(s,n,n.next,r)&&Ia(s,r)&&Ia(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Da(n),Da(n.next),n=i=r),n=n.next}while(n!==i);return Ws(n)}function H_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J_(a,o)){let l=bp(a,o);a=Ws(a,a.next),l=Ws(l,l.next),La(a,t,e,n,s,r,0),La(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function W_(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Mp(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(K_(c));for(s.sort(X_),r=0;r<s.length;r++)e=q_(s[r],e);return e}function X_(i,t){return i.x-t.x}function q_(i,t){const e=$_(i,t);if(!e)return t;const n=bp(e,i);return Ws(n,n.next),Ws(e,e.next)}function $_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Er(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ia(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Y_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Y_(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function j_(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Z_(s)}function Z_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function K_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Er(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function J_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Q_(i,t)&&(Ia(i,t)&&Ia(t,i)&&tx(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||el(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function el(i,t){return i.x===t.x&&i.y===t.y}function yp(i,t,e,n){const s=po(Te(i,t,e)),r=po(Te(i,t,n)),a=po(Te(e,n,i)),o=po(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||a===0&&fo(e,i,n)||o===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function Q_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ia(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function tx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bp(i,t){const e=new th(i.i,i.x,i.y),n=new th(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function md(i,t,e,n){const s=new th(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function th(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ex(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ea{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ea.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];gd(t),vd(n,t);let a=t.length;e.forEach(gd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,vd(n,e[l]);const o=z_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function gd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fh extends We{constructor(t=new es([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:nx;let x,v=!1,R,T,C,I;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new y,C=new y,I=new y),d||(m=0,f=0,g=0,_=0);const E=o.extractPoints(c);let b=E.shape;const L=E.holes;if(!Ea.isClockWise(b)){b=b.reverse();for(let lt=0,ft=L.length;lt<ft;lt++){const P=L[lt];Ea.isClockWise(P)&&(L[lt]=P.reverse())}}const G=Ea.triangulateShape(b,L),$=b;for(let lt=0,ft=L.length;lt<ft;lt++){const P=L[lt];b=b.concat(P)}function at(lt,ft,P){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(ft,P)}const Z=b.length,ht=G.length;function Q(lt,ft,P){let zt,ut,Lt;const vt=lt.x-ft.x,qt=lt.y-ft.y,Rt=P.x-lt.x,A=P.y-lt.y,S=vt*vt+qt*qt,V=vt*A-qt*Rt;if(Math.abs(V)>Number.EPSILON){const st=Math.sqrt(S),ct=Math.sqrt(Rt*Rt+A*A),rt=ft.x-qt/st,Nt=ft.y+vt/st,bt=P.x-A/ct,Ct=P.y+Rt/ct,se=((bt-rt)*A-(Ct-Nt)*Rt)/(vt*A-qt*Rt);zt=rt+vt*se-lt.x,ut=Nt+qt*se-lt.y;const dt=zt*zt+ut*ut;if(dt<=2)return new J(zt,ut);Lt=Math.sqrt(dt/2)}else{let st=!1;vt>Number.EPSILON?Rt>Number.EPSILON&&(st=!0):vt<-Number.EPSILON?Rt<-Number.EPSILON&&(st=!0):Math.sign(qt)===Math.sign(A)&&(st=!0),st?(zt=-qt,ut=vt,Lt=Math.sqrt(S)):(zt=vt,ut=qt,Lt=Math.sqrt(S/2))}return new J(zt/Lt,ut/Lt)}const pt=[];for(let lt=0,ft=$.length,P=ft-1,zt=lt+1;lt<ft;lt++,P++,zt++)P===ft&&(P=0),zt===ft&&(zt=0),pt[lt]=Q($[lt],$[P],$[zt]);const Mt=[];let U,N=pt.concat();for(let lt=0,ft=L.length;lt<ft;lt++){const P=L[lt];U=[];for(let zt=0,ut=P.length,Lt=ut-1,vt=zt+1;zt<ut;zt++,Lt++,vt++)Lt===ut&&(Lt=0),vt===ut&&(vt=0),U[zt]=Q(P[zt],P[Lt],P[vt]);Mt.push(U),N=N.concat(U)}for(let lt=0;lt<m;lt++){const ft=lt/m,P=f*Math.cos(ft*Math.PI/2),zt=g*Math.sin(ft*Math.PI/2)+_;for(let ut=0,Lt=$.length;ut<Lt;ut++){const vt=at($[ut],pt[ut],zt);tt(vt.x,vt.y,-P)}for(let ut=0,Lt=L.length;ut<Lt;ut++){const vt=L[ut];U=Mt[ut];for(let qt=0,Rt=vt.length;qt<Rt;qt++){const A=at(vt[qt],U[qt],zt);tt(A.x,A.y,-P)}}}const F=g+_;for(let lt=0;lt<Z;lt++){const ft=d?at(b[lt],N[lt],F):b[lt];v?(C.copy(R.normals[0]).multiplyScalar(ft.x),T.copy(R.binormals[0]).multiplyScalar(ft.y),I.copy(x[0]).add(C).add(T),tt(I.x,I.y,I.z)):tt(ft.x,ft.y,0)}for(let lt=1;lt<=h;lt++)for(let ft=0;ft<Z;ft++){const P=d?at(b[ft],N[ft],F):b[ft];v?(C.copy(R.normals[lt]).multiplyScalar(P.x),T.copy(R.binormals[lt]).multiplyScalar(P.y),I.copy(x[lt]).add(C).add(T),tt(I.x,I.y,I.z)):tt(P.x,P.y,u/h*lt)}for(let lt=m-1;lt>=0;lt--){const ft=lt/m,P=f*Math.cos(ft*Math.PI/2),zt=g*Math.sin(ft*Math.PI/2)+_;for(let ut=0,Lt=$.length;ut<Lt;ut++){const vt=at($[ut],pt[ut],zt);tt(vt.x,vt.y,u+P)}for(let ut=0,Lt=L.length;ut<Lt;ut++){const vt=L[ut];U=Mt[ut];for(let qt=0,Rt=vt.length;qt<Rt;qt++){const A=at(vt[qt],U[qt],zt);v?tt(A.x,A.y+x[h-1].y,x[h-1].x+P):tt(A.x,A.y,u+P)}}}D(),H();function D(){const lt=s.length/3;if(d){let ft=0,P=Z*ft;for(let zt=0;zt<ht;zt++){const ut=G[zt];Pt(ut[2]+P,ut[1]+P,ut[0]+P)}ft=h+m*2,P=Z*ft;for(let zt=0;zt<ht;zt++){const ut=G[zt];Pt(ut[0]+P,ut[1]+P,ut[2]+P)}}else{for(let ft=0;ft<ht;ft++){const P=G[ft];Pt(P[2],P[1],P[0])}for(let ft=0;ft<ht;ft++){const P=G[ft];Pt(P[0]+Z*h,P[1]+Z*h,P[2]+Z*h)}}n.addGroup(lt,s.length/3-lt,0)}function H(){const lt=s.length/3;let ft=0;j($,ft),ft+=$.length;for(let P=0,zt=L.length;P<zt;P++){const ut=L[P];j(ut,ft),ft+=ut.length}n.addGroup(lt,s.length/3-lt,1)}function j(lt,ft){let P=lt.length;for(;--P>=0;){const zt=P;let ut=P-1;ut<0&&(ut=lt.length-1);for(let Lt=0,vt=h+m*2;Lt<vt;Lt++){const qt=Z*Lt,Rt=Z*(Lt+1),A=ft+zt+qt,S=ft+ut+qt,V=ft+ut+Rt,st=ft+zt+Rt;Vt(A,S,V,st)}}}function tt(lt,ft,P){l.push(lt),l.push(ft),l.push(P)}function Pt(lt,ft,P){Xt(lt),Xt(ft),Xt(P);const zt=s.length/3,ut=M.generateTopUV(n,s,zt-3,zt-2,zt-1);le(ut[0]),le(ut[1]),le(ut[2])}function Vt(lt,ft,P,zt){Xt(lt),Xt(ft),Xt(zt),Xt(ft),Xt(P),Xt(zt);const ut=s.length/3,Lt=M.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);le(Lt[0]),le(Lt[1]),le(Lt[3]),le(Lt[1]),le(Lt[2]),le(Lt[3])}function Xt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function le(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ix(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Go[s.type]().fromJSON(s)),new Fh(n,t.options)}}const nx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-u),new J(d,1-g),new J(_,1-p)]:[new J(o,1-l),new J(h,1-u),new J(f,1-g),new J(m,1-p)]}};function ix(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xs extends tl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xs(t.radius,t.detail)}}class Yi extends tl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yi(t.radius,t.detail)}}class Oh extends We{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new y,g=new J;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,v=M+n+1,R=M+n+2,T=M+1;o.push(x,v,T),o.push(v,R,T)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ye extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],R=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(x,v,T),(p!==n-1||l<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fn extends We{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new y,u=new y,d=new y;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kh extends We{constructor(t=new xp(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new y,l=new y,c=new J;let h=new y;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),M(),p()}function m(x){h=t.getPointAt(x/e,h);const v=a.normals[x],R=a.binormals[x];for(let T=0;T<=s;T++){const C=T/s*Math.PI*2,I=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+I*R.x,l.y=E*v.y+I*R.y,l.z=E*v.z+I*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const R=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),C=(s+1)*x+v,I=(s+1)*(x-1)+v;g.push(R,T,I),g.push(T,C,I)}}function M(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new kh(new Go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class sx extends De{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Sp extends $s{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rx extends $s{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zh extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wp extends zh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hl=new Zt,_d=new y,xd=new y;class Ep{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Md=new Zt,ea=new y,Wl=new y;class ax extends Ep{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new y(1,0,0),new y(-1,0,0),new y(0,0,1),new y(0,0,-1),new y(0,1,0),new y(0,-1,0)],this._cubeUps=[new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,0,1),new y(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ea.setFromMatrixPosition(t.matrixWorld),n.position.copy(ea),Wl.copy(n.position),Wl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-ea.x,-ea.y,-ea.z),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md)}}class ox extends zh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ax}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lx extends Ep{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tp extends zh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new lx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yd(){return performance.now()}const bd=new Zt;class Yb{constructor(t,e,n=0,s=1/0){this.ray=new Th(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(t,e=!0,n=[]){return eh(t,this,n,e),n.sort(Sd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)eh(t[s],this,n,e);return n.sort(Sd),n}}function Sd(i,t){return i.distance-t.distance}function eh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)eh(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const Ap={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hx=new Ko(-1,1,1,-1,0,1);class ux extends We{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const dx=new ux;class Bh{constructor(t){this._mesh=new Y(dx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,hx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class fx extends Gr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ca.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wd extends Gr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class px extends Gr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class jb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fx(Ap),this.copyPass.material.blending=ji,this.clock=new cx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wd!==void 0&&(a instanceof wd?n=!0:a instanceof px&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zb extends Gr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const mx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ua extends Gr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(r,a,{type:Zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jn(r,a,{type:Zi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jn(r,a,{type:Zi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=mx;this.highPassUniforms=Ca.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ap;this.copyUniforms=Ca.clone(h.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new Ge,this.fsQuad=new Bh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ua.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ua.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ua.BlurDirectionX=new J(1,0);Ua.BlurDirectionY=new J(0,1);const gx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Kb extends Gr{constructor(){super();const t=gx;this.uniforms=Ca.clone(t.uniforms),this.material=new sx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Bh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Of?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const na=new y;function Hn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;na.copy(t),na[n]=0,na.normalize();const c=.5*a/(a+o),h=1-na.angleTo(i)/l;return Math.sign(na[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Ln extends ni{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new y,l=new y,c=new y(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new y,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Hn(g,l,"z","y",r,n),d[p+1]=1-Hn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Hn(g,l,"z","y",r,n),d[p+1]=1-Hn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Hn(g,l,"x","z",r,t),d[p+1]=Hn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Hn(g,l,"x","z",r,t),d[p+1]=1-Hn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Hn(g,l,"x","y",r,t),d[p+1]=1-Hn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Hn(g,l,"x","y",r,t),d[p+1]=1-Hn(g,l,"y","x",r,e);break}}}const Xl={sheenSky:{value:new _t().setRGB(.16,.36,.82)},sheenGround:{value:new _t().setRGB(.02,.04,.09)},rimColor:{value:new _t().setRGB(.55,.7,1)}},Ci={sky:new _t().setRGB(.8,.86,1),ground:new _t().setRGB(.3,.34,.46),key:new _t().setRGB(1,.89,.6),keyIntensity:.55,keyDir:new y(-.36,.72,.6).normalize()},vx=`
varying vec3 vViewPosition;
uniform float toySpec;
uniform float toyGloss;
uniform float toySheen;
uniform float toyRim;
uniform float toyWrap;
uniform vec3 toySheenSky;
uniform vec3 toySheenGround;
uniform vec3 toyRimColor;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Toy( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float ndl = dot( geometryNormal, directLight.direction );
	float w = saturate( ( ndl + toyWrap ) / ( 1.0 + toyWrap ) );
	w = w * w * ( 3.0 - 2.0 * w );
	reflectedLight.directDiffuse += directLight.color * ( w * material.diffuseColor );
	vec3 h = normalize( directLight.direction + geometryViewDir );
	float s = pow( saturate( dot( geometryNormal, h ) ), toyGloss );
	s = smoothstep( 0.25, 0.75, s ) * step( 0.0, ndl );
	reflectedLight.directDiffuse += directLight.color * ( s * toySpec * material.specularStrength );
}
void RE_IndirectDiffuse_Toy( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * material.diffuseColor;
	float fres = 1.0 - saturate( dot( geometryNormal, geometryViewDir ) );
	fres *= fres;
	vec3 up = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
	float k = saturate( dot( geometryNormal, up ) * 0.5 + 0.5 );
	vec3 env = mix( toySheenGround, toySheenSky, k * k );
	reflectedLight.indirectDiffuse += env * ( toySheen * ( 0.4 + 0.6 * fres ) ) + toyRimColor * ( toyRim * fres * fres );
}
#define RE_Direct RE_Direct_Toy
#define RE_IndirectDiffuse RE_IndirectDiffuse_Toy
`;function B(i,t={}){const e=new rx({color:i,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,map:t.map??null,vertexColors:t.vertexColors??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Ji,flatShading:t.flat??!1,depthWrite:t.depthWrite??!0}),n={toySpec:{value:t.spec??.06},toyGloss:{value:t.gloss??16},toySheen:{value:t.sheen??0},toyRim:{value:t.rim??.08},toyWrap:{value:t.wrap??.5},toySheenSky:Xl.sheenSky,toySheenGround:Xl.sheenGround,toyRimColor:Xl.rimColor};return e.userData.toy=n,e.userData.toyOpts={...t},e.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",vx)},e.customProgramCacheKey=()=>"toy1",e}function Ke(i,t={}){return B(i,{spec:.22,gloss:22,sheen:.14,rim:.12,...t})}function we(i,t={}){return B(i,{spec:.16,gloss:12,sheen:.04,rim:.08,...t})}function Ed(i="#e3a93a",t={}){return B(i,{spec:.45,gloss:18,sheen:.05,rim:.2,...t})}function kn(i,t=i){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function zn(i,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const s=new A_(i);return t&&(s.colorSpace=In),e&&(s.wrapS=s.wrapT=Gs),s.anisotropy=n,s}const Td={},Bn=(i,t)=>Td[i]??(Td[i]=t());function _x(){return Bn("flash",()=>{const[i,t]=kn(256,128),e=(n,s,r,a)=>{const o=t.createLinearGradient(20,64,s,n);o.addColorStop(0,`rgba(255,255,242,${a})`),o.addColorStop(.3,`rgba(255,228,174,${a*.75})`),o.addColorStop(1,"rgba(255,170,80,0)"),t.fillStyle=o,t.beginPath(),t.moveTo(18,64),t.bezierCurveTo(60,64-r,s*.7,n-r*.2,s,n),t.bezierCurveTo(s*.7,n+r*.3,50,64+r,18,64),t.fill()};return t.filter="blur(3px)",e(61,249,20,.5),e(43,177,18,.3),e(82,153,15,.28),t.filter="blur(1px)",e(64,151,8,.95),zn(i)})}function xx(){return Bn("burst",()=>{const[i,t]=kn(128);t.lineCap="round";for(const[n,s]of[[.3,31],[1.7,24],[2.9,37],[4.5,20],[5.5,27]]){const r=64+Math.cos(n)*s,a=64+Math.sin(n)*s,o=t.createLinearGradient(64,64,r,a);o.addColorStop(0,"#fff4d8"),o.addColorStop(1,"rgba(255,223,180,0)"),t.strokeStyle=o,t.lineWidth=2,t.beginPath(),t.moveTo(64,64),t.lineTo(r,a),t.stroke()}const e=t.createRadialGradient(64,64,0,64,64,12);return e.addColorStop(0,"#fff8e5"),e.addColorStop(1,"rgba(255,230,185,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),zn(i)})}function Ho(){return Bn("glow",()=>{const[t,e]=kn(128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),zn(t)})}function Mx(){return Bn("fade",()=>{const[i,t]=kn(4,256),e=t.createLinearGradient(0,256,0,0);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,4,256),zn(i)})}function yx(){return Bn("shadow",()=>{const[e,n]=kn(256,128);n.fillStyle="rgba(255,255,255,0.075)";for(let s=0;s<16;s++){const r=4+s*3.2,a=r,o=r,l=256-r*2,c=128-r*2,h=Math.max(4,40-s*2);n.beginPath(),n.moveTo(a+h,o),n.arcTo(a+l,o,a+l,o+c,h),n.arcTo(a+l,o+c,a,o+c,h),n.arcTo(a,o+c,a,o,h),n.arcTo(a,o,a+l,o,h),n.closePath(),n.fill()}return zn(e)})}function bx(){return Bn("pool",()=>{const[t,e]=kn(256);e.save(),e.scale(1,1.25);const n=e.createRadialGradient(256/2,0,0,256/2,0,256*.62);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.5)"),n.addColorStop(.65,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),e.restore(),zn(t)})}function Ad(){return Bn("floor",()=>{const[e,n]=kn(256,512),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"rgb(150,166,206)"),s.addColorStop(.45,"rgb(205,212,232)"),s.addColorStop(1,"rgb(255,255,255)"),n.fillStyle=s,n.fillRect(0,0,256,512);const r=[190,360];n.fillStyle="rgba(60,72,110,0.22)";for(const l of[0,128,256])n.fillRect(l-1.5,0,3,512);for(const l of r)n.fillRect(0,l-1.5,256,3);n.fillStyle="rgba(255,255,255,0.18)";for(const l of[0,128,256])n.fillRect(l+1.5,0,1.5,512);for(const l of r)n.fillRect(0,l+1.5,256,1.5);const a=n.createLinearGradient(0,0,0,512*.14);a.addColorStop(0,"rgba(10,18,44,0.75)"),a.addColorStop(1,"rgba(10,18,44,0)"),n.fillStyle=a,n.fillRect(0,0,256,512*.14);const o=zn(e,{aniso:8});return o.wrapS=Gs,o})}function Rp(i,t,e){const n=i.createLinearGradient(0,0,0,e*.16);n.addColorStop(0,"rgba(10,18,44,0.75)"),n.addColorStop(1,"rgba(10,18,44,0)"),i.fillStyle=n,i.fillRect(0,0,t,e*.16);const s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(20,30,60,0.35)"),s.addColorStop(.5,"rgba(20,30,60,0.08)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,t,e)}function Sx(){return Bn("checker",()=>{const[n,s]=kn(256,512),r=256/4;for(let o=0;o<512/r;o++)for(let l=0;l<4;l++)s.fillStyle=(l+o)%2?"rgb(70,74,86)":"rgb(255,255,255)",s.fillRect(l*r,o*r,r,r);s.fillStyle="rgba(255,255,255,0.18)";for(let o=0;o<=4;o++)s.fillRect(o*r-1,0,2,512);Rp(s,256,512);const a=zn(n,{aniso:8});return a.wrapS=Gs,a})}function wx(){return Bn("carpet",()=>{const[e,n]=kn(256,512);n.fillStyle="rgb(225,228,236)",n.fillRect(0,0,256,512);for(let r=0;r<2600;r++){const a=170+Math.floor(Math.random()*85);n.fillStyle=`rgba(${a},${a},${a+8},0.55)`,n.fillRect(Math.random()*256,Math.random()*512,2,2)}n.strokeStyle="rgba(80,92,130,0.18)",n.lineWidth=3;for(let r=0;r<=256;r+=64)for(let a=0;a<=512;a+=64)n.strokeRect(r+6,a+6,52,52);Rp(n,256,512);const s=zn(e,{aniso:8});return s.wrapS=Gs,s})}function Ex(){return Bn("tiles",()=>{const[s,r]=kn(256,168);r.fillStyle="rgb(150,160,160)",r.fillRect(0,0,256,168);const a=256/8,o=168/5;for(let l=0;l<5;l++)for(let c=0;c<8;c++)r.fillStyle="rgb(255,255,255)",r.fillRect(c*a+2,l*o+2,a-4,o-4),r.fillStyle="rgba(255,255,255,0.9)",r.fillRect(c*a+5,l*o+5,a*.35,3),r.fillStyle="rgba(0,30,40,0.08)",r.fillRect(c*a+2,l*o+o-6,a-4,4);return zn(s)})}function Tx(){return Bn("windows",()=>{const[e,n]=kn(256,168),s=n.createLinearGradient(0,0,0,168);s.addColorStop(0,"#0b1430"),s.addColorStop(1,"#2a3f78"),n.fillStyle=s,n.fillRect(0,0,256,168),n.fillStyle="rgba(255,255,255,0.8)";for(let o=0;o<18;o++)n.fillRect(Math.random()*256,Math.random()*168*.4,1.5,1.5);let r=0;for(;r<256;){const o=18+Math.random()*30,l=40+Math.random()*90;n.fillStyle=`rgb(${20+Math.random()*15},${28+Math.random()*15},${55+Math.random()*20})`,n.fillRect(r,168-l,o,l);for(let c=168-l+6;c<164;c+=9)for(let h=r+4;h<r+o-4;h+=7)Math.random()<.45&&(n.fillStyle=Math.random()<.7?"rgba(255,214,120,0.9)":"rgba(170,220,255,0.8)",n.fillRect(h,c,3,4));r+=o+2}n.fillStyle="#d9d4c6",n.fillRect(0,0,256,6),n.fillRect(0,162,256,6),n.fillRect(0,0,6,168),n.fillRect(250,0,6,168),n.fillRect(256/2-4,0,8,168),n.fillRect(0,168*.42,256,6);const a=n.createLinearGradient(0,0,256,168);return a.addColorStop(.2,"rgba(255,255,255,0)"),a.addColorStop(.35,"rgba(255,255,255,0.12)"),a.addColorStop(.5,"rgba(255,255,255,0)"),n.fillStyle=a,n.fillRect(0,0,256,168),zn(e)})}function Ax(){return Bn("mat",()=>{const[t,e]=kn(64);e.fillStyle="rgb(215,215,215)",e.fillRect(0,0,64,64),e.lineWidth=3;for(const[n,s]of[[1,"rgba(255,255,255,0.55)"],[-1,"rgba(120,120,120,0.45)"]]){e.strokeStyle=s;for(let r=-64;r<=64*2;r+=16)e.beginPath(),e.moveTo(r,0),e.lineTo(r+n*64,64),e.stroke()}return zn(t,{repeat:!0,aniso:8})})}function Jb(){return Bn("hazard",()=>{const[i,t]=kn(128,64);t.fillStyle="#ffc533",t.fillRect(0,0,128,64),t.fillStyle="#2b2f3a";for(let e=-64;e<128;e+=64)t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,64),t.lineTo(e+96,0),t.lineTo(e+64,0),t.closePath(),t.fill();return zn(i,{repeat:!0})})}const nh=new Sp({color:"#243954",roughness:.4,metalness:.35}),ih=new Sp({color:"#eec264",roughness:.3,metalness:.65}),Rx=new _t("#8cff64"),Io=(i,t,e,n)=>new Y(new Ln(i,t,e,2,.045),n);function Cx(){const i=new nt;i.userData.noBounds=!0;const t=Io(.28,.17,.24,nh);i.add(t);const e=new Y(new He(.025,.035,.33,10),ih);e.position.set(-.025,.22,0),e.rotation.z=.24,i.add(e);const n=new Ge({color:"#59a7ef"}),s=new Y(new Ye(.067,12,8),n);s.position.set(-.064,.385,0),i.add(s);const r=new Y(new He(.045,.045,.04,12),ih);return r.rotation.x=Math.PI/2,r.position.set(.065,0,.13),i.add(r),i.userData.flash=0,i.userData.light=n,i.userData.shot=()=>{i.userData.flash=1,n.color.set("#8cff64")},i.userData.update=a=>{i.userData.flash=Math.max(0,i.userData.flash-a*4),n.color.set("#59a7ef").lerp(Rx,i.userData.flash),s.scale.setScalar(1+i.userData.flash*.35)},i}class Qb{constructor(t){this.root=new nt,this.root.visible=!1,t.add(this.root);const e=Io(.55,.36,.34,nh);e.position.y=.18,this.root.add(e);const n=Io(.41,.2,.035,ih);n.position.set(0,.21,.18),this.root.add(n),this.light=new Ge({color:"#235a47"});const s=Io(.26,.085,.025,this.light);s.position.set(0,.23,.206),this.root.add(s);const r=new Y(new He(.055,.055,.045,12),nh);r.rotation.x=Math.PI/2,r.position.set(0,.1,.205),this.root.add(r),this.flash=0}shot(){this.flash=1}update(t,e){this.root.visible=e,this.flash=Math.max(0,this.flash-t*5),this.light.color.setRGB(.08+this.flash*.35,.25+this.flash*.75,.17+this.flash*.4)}dispose(){this.root.removeFromParent(),this.root.traverse(t=>{var e;return(e=t.geometry)==null?void 0:e.dispose()}),this.light.dispose()}}const Se=5.2/350,Px=J,et={slide:Ke("#393c47"),frame:Ke("#3e414c",{spec:.18}),mag:Ke("#2d303b"),barrel:Ke("#5d6270",{spec:.4,gloss:26}),uzi:Ke("#5c6584",{spec:.32,sheen:.1}),uziDark:Ke("#444c66"),uziGrip:Ke("#37425a"),gunmetal:Ke("#4a4f5e",{spec:.34,gloss:26}),gunDark:Ke("#2e384e"),wood:we("#b35a20"),woodDark:we("#8f4416"),dark:B("#1b1d23",{spec:.02,rim:0}),groove:B("#25272e",{spec:.03,rim:0}),orange:we("#f08a20"),yellow:we("#ffc533"),olive:we("#56703a"),oliveDark:we("#46602f"),rubber:B("#262a35",{spec:.03}),brass:Ed(),copper:Ed("#d08a3c"),shell:we("#d9412e",{spec:.22}),white:B("#f4f0e4")};function ie(i){return i.castShadow=!0,i.receiveShadow=!0,i}function K(i,t,e,n,s,r,a,o,l=3){const c=t-i,h=n-e,u=r-s,d=Math.max(.05,Math.min(a,c/2-.01,h/2-.01,u/2-.01)),f=new Y(new Ln(c,h,u,l,d),o);return f.position.set((i+t)/2,(e+n)/2,(s+r)/2),ie(f)}function Tt(i,t,e,n){const s=Math.max(.05,t-e*2),r=new Fh(i,{depth:s,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:4,curveSegments:10});return r.translate(0,0,-s/2),ie(new Y(r,n))}function Cp(i,t,e){const n=t.length;for(let s=0;s<n;s++){const[r,a,o=e]=t[s],[l,c]=t[(s+n-1)%n],[h,u]=t[(s+1)%n],d=Math.hypot(l-r,c-a)||1,f=Math.hypot(h-r,u-a)||1,g=Math.min(o,d/2,f/2),_=r+(l-r)/d*g,m=a+(c-a)/d*g,p=r+(h-r)/f*g,M=a+(u-a)/f*g;s===0?i.moveTo(_,m):i.lineTo(_,m),i.quadraticCurveTo(r,a,p,M)}return i.closePath(),i}function It(i,t=0){return Cp(new es,i,t)}function _n(i,t=0){return Cp(new Pa,i,t)}function gt(i,t,e,n,s=0,r=0,a=24){const o=new He(e,e,t-i,a);o.rotateZ(-Math.PI/2);const l=new Y(o,n);return l.position.set((i+t)/2,s,r),ie(l)}function Xe(i,t,e,n,s,r=0,a=20){const o=new He(e,e,n,a);o.rotateX(Math.PI/2);const l=new Y(o,s);return l.position.set(i,t,r),ie(l)}function Rd(i,t,e,n,s,r=.45){const a=new Y(new Ye(e,20,12),s);return a.scale.z=r,a.position.set(i,t,n),ie(a)}const ql={};function Ys(i,t,e=20){if(ql[i])return ql[i];const n=new Mn(t.map(([s,r])=>new Px(s,r)),e);return n.rotateZ(-Math.PI/2),ql[i]=n}function Vh(){return Ys("casing",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.6,26],[6.6,26],[6.6,4],[0,4]])}function Pp(){return Ys("rifle",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.4,28],[6,33],[5.6,40],[4,40],[4,33],[0,32]])}function Lp(){return Ys("rifle-long",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.4,39],[6,45],[5.6,51],[4,51],[4,45],[0,44]])}function Lx(){return Ys("rifle-bullet",[[0,0],[5.3,0],[5.3,6],[4.7,11],[3.1,17],[1.2,21],[0,22]])}function Ix(){return Ys("bullet",[[0,0],[8.2,0],[8.2,4],[7.4,9],[5,13.5],[0,15.5]])}function Ip(){return Ys("hull",[[0,9],[11,9],[11,42],[9.5,44],[4,44.5],[0,44.5]])}function Gh(){return Ys("shellHead",[[0,0],[12,0],[12.5,1],[12.5,3],[11.4,3.6],[11.4,11],[11,11.5],[0,11.5]])}const wi={fuel:we("#e8384d",{spec:.25}),glass:B("#bfe9ff",{transparent:!0,opacity:.45,spec:.8,gloss:30,rim:.4}),glow:B("#9ff0ff",{emissive:"#4fd8ff",emissiveIntensity:1.8,rim:0}),steel:Ke("#8a93a3",{spec:.5,gloss:30})};function vs(i="pistol"){const t=new nt;if(i==="arrow"){t.add(ie(gt(0,84,2.8,et.wood,0,0,10)));const s=new Y(new yi(6.5,20,12),wi.steel);s.rotation.z=-Math.PI/2,s.position.x=92,t.add(ie(s)),t.add(ie(gt(-3,3,3.6,et.orange,0,0,10)));for(let r=0;r<3;r++){const a=new nt;a.add(ie(K(4,28,2,10,-.9,.9,.8,et.orange))),a.rotation.x=r/3*Math.PI*2+Math.PI/2,t.add(a)}return t}if(i==="grenade"){t.add(ie(gt(0,20,15,et.brass))),t.add(ie(gt(19,24,15.8,et.copper)));const s=new Y(new Ye(15,20,14),et.olive);s.scale.x=1.35,s.position.x=26,t.add(ie(s));const r=new Y(new Ye(6,14,10),et.orange);return r.position.x=44,t.add(ie(r)),t}if(i==="fuel")return t.add(ie(gt(0,6,10,et.gunDark))),t.add(ie(gt(5,45,13,wi.fuel))),t.add(ie(gt(20,28,13.6,et.white))),t.add(ie(gt(44,52,7,et.gunDark))),t;if(i==="ice")return t.add(gt(8,50,7,wi.glow)),t.add(gt(6,52,11,wi.glass)),t.add(ie(gt(0,8,12.5,et.gunmetal))),t.add(ie(gt(50,58,12.5,et.gunmetal))),t;if(i==="bolt"){t.add(ie(gt(0,56,3.4,et.woodDark,0,0,10)));const s=new Y(new yi(7,18,4),wi.steel);s.rotation.z=-Math.PI/2,s.position.x=64,t.add(ie(s));for(let r=0;r<2;r++){const a=new nt;a.add(ie(K(2,20,2.5,10,-.9,.9,.8,et.gunDark))),a.rotation.x=r*Math.PI+Math.PI/2,t.add(a)}return t}if(i==="staple"){t.add(ie(K(0,40,-2,8,-7,7,1.5,wi.steel)));for(let s=4;s<40;s+=6)t.add(K(s-.5,s+.5,-2.2,8.2,-7.2,7.2,.3,et.gunmetal));return t}if(i==="saw"){const s=new Y(new He(20,20,3,28),wi.steel);s.rotation.x=Math.PI/2,s.position.x=22,t.add(ie(s));for(let r=0;r<14;r++){const a=r/14*Math.PI*2,o=new Y(new yi(2.6,6,3),wi.steel);o.position.set(22+Math.cos(a)*21.5,Math.sin(a)*21.5,0),o.rotation.z=a-Math.PI/2+.5,t.add(o)}return t.add(ie(Xe(22,0,6,4.4,et.orange))),t}if(i==="slug"){t.add(ie(gt(0,54,7,wi.steel)));for(const r of[8,26,44])t.add(ie(gt(r,r+5,7.6,et.copper)));const s=new Y(new yi(7,12,16),wi.steel);return s.rotation.z=-Math.PI/2,s.position.x=60,t.add(ie(s)),t}if(i==="cell")return t.add(ie(gt(0,46,11,et.gunDark))),t.add(ie(gt(16,28,11.6,et.yellow))),t.add(ie(gt(46,52,5,et.copper))),t;if(i==="shell")return t.add(ie(new Y(Ip(),et.shell))),t.add(ie(new Y(Gh(),et.brass))),t;const e=i==="rifle"||i==="rifle-long";t.add(ie(new Y(i==="rifle-long"?Lp():e?Pp():Vh(),et.brass)));const n=ie(new Y(e?Lx():Ix(),et.copper));return n.position.x=i==="rifle-long"?49:e?38:25,t.add(n),t}class nn{constructor(){this.root=new nt,this.pivot=new nt,this.root.add(this.pivot),this.model=new nt,this.model.scale.setScalar(Se),this.pivot.add(this.model),this.muzzleAnchor=new Ue,this.portAnchor=new Ue,this.model.add(this.muzzleAnchor,this.portAnchor),this.magSlot=new nt,this.model.add(this.magSlot),this.mags=[],this.mag=null,this.magAxis=new y(0,-1,0),this.magCenter=new y,this.magTilt=0,this.inset=0,this.rest=new ii,this.kit=new Set,this.evoParts=[],this.evoHidden=[],this.baseMuzzle=new y,this.blast=null}finish(t){this.model.position.copy(t).multiplyScalar(-Se),this.baseMuzzle.copy(this.muzzleAnchor.position),this.blast=this.spec.blast,this.seatNewMag(),this.shadows(),this.measure()}seatNewMag(){var e;for(const n of this.mags)(e=n.parent)==null||e.remove(n);const t=this.buildMag();this.mags=t?[t]:[],this.mag=t,t&&(this.magSlot.add(t),this.setMagOut(t,0))}shadows(){this.root.traverse(t=>{t.isMesh&&!t.material.transparent&&t.material!==et.dark&&(t.castShadow=!0)})}measure(){const t=this.pivot,e=[t.position.clone(),t.quaternion.clone(),t.scale.clone()];t.position.set(0,0,0),t.quaternion.identity(),t.scale.set(1,1,1),this.root.updateMatrixWorld(!0),Cd.copy(this.root.matrixWorld).invert(),Pd(this.model,this.rest,Cd),t.position.copy(e[0]),t.quaternion.copy(e[1]),t.scale.copy(e[2]),this.root.updateMatrixWorld(!0)}setEvo(t,e){var r;for(const a of this.evoParts)(r=a.parent)==null||r.remove(a);for(const a of this.evoHidden)a.visible=!0;this.evoParts=[],this.evoHidden=[];const n=e.slice(0,t);this.kit=new Set(n),this.root.updateMatrixWorld(!0),this.muzzleAnchor.position.copy(this.baseMuzzle),this.blast=this.spec.blast;let s=null;return n.forEach((a,o)=>{const l=this.kitPart(a);if(l){if(l.add){const c=new nt;c.userData.kind=a,(l.parent??this.model).add(c),c.add(l.add),c.updateMatrixWorld(!0),Pd(l.add,Dx).getCenter(mo),c.worldToLocal(mo),c.position.copy(mo),l.add.position.sub(mo),this.evoParts.push(c),o===n.length-1&&(s=c)}for(const c of l.hide??[])c.visible=!1,this.evoHidden.push(c);l.muzzle&&(this.muzzleAnchor.position.x=l.muzzle),l.blast&&(this.blast={...this.blast,...l.blast})}}),this.seatNewMag(),this.shadows(),this.measure(),s}setReceiver(t){t&&!this.receiver&&(this.receiver=Cx(),this.pivot.add(this.receiver)),this.receiver&&(this.receiver.visible=t,this.receiver.position.copy(this.muzzleAnchor.position).multiply(this.model.scale).add(this.model.position),this.receiver.position.add(new y(-.25,.16,.13)))}kitPart(){return null}buildMag(){return null}setAction(){}setTrigger(){}setHold(){}setCatch(){}setLoading(){}spin(){}setMagOut(t,e,n=0){t.position.copy(this.magAxis).multiplyScalar(e).add(this.magCenter),t.position.z+=n*40,t.rotation.z=this.magTilt*e+n*.5}wrapMag(t,e=()=>{}){const n=new nt;return t.position.copy(this.magCenter).negate(),n.add(t),n.userData.setLoaded=e,n}silhouette(t){this.root.traverse(e=>{e.isMesh&&(e.material.transparent&&(e.visible=!1),e.material=t,e.castShadow=!1,e.receiveShadow=!1)})}muzzleWorld(t){return this.muzzleAnchor.getWorldPosition(t)}portWorld(t){return this.portAnchor.getWorldPosition(t)}boreDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(1,0,0).transformDirection(this.model.matrixWorld)}sideDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(0,0,1).transformDirection(this.model.matrixWorld)}upDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(0,1,0).transformDirection(this.model.matrixWorld)}}const Cd=new Zt,$l=new Zt,Dx=new ii,Ux=new ii,mo=new y;function Pd(i,t,e=null){return t.makeEmpty(),i.traverseVisible(n=>{!n.isMesh||n.userData.noBounds||(n.geometry.boundingBox||n.geometry.computeBoundingBox(),$l.copy(n.matrixWorld),e&&$l.premultiply(e),t.union(Ux.copy(n.geometry.boundingBox).applyMatrix4($l)))}),t}function Nx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new We;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ld(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=Ld(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ld(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new tn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Id={toys:{wall:"#142b49",inset:"#1a3658",frame:"#385d7c",accent:"#e29946",top:"#738499",cabinet:"#344e69",trim:"#91afba",carton:"#b8966d",tape:"#debc88",lamp:"#f5d895"},kitchen:{wall:"#173d40",inset:"#1e4b4b",frame:"#53887e",accent:"#c7654f",top:"#adc1b5",cabinet:"#608d7e",trim:"#c1d4c8",carton:"#9c8763",tape:"#d5be88",lamp:"#ffdfaa"},office:{wall:"#253146",inset:"#303e54",frame:"#64718a",accent:"#cf9d59",top:"#8993a4",cabinet:"#50617a",trim:"#b2bdc8",carton:"#9d9788",tape:"#d4c9a5",lamp:"#d7eaff"}};function Fx({kind:i="toys",topFloor:t,bottomCeiling:e,height:n,width:s,wallZ:r,frontZ:a,slab:o}){const l=Id[i]??Id.toys,c=new nt;c.name=`workshop-surroundings-${i}`;const h=new Map,u=new Map,d=new Map,f=new Zt,g=new ts,_=new y,m=new y,p=new ei,M=(U,N=!1)=>{const F=`${U}|${N}`;return h.has(F)||h.set(F,B(U,{spec:.06,rim:.025,...N?{emissive:U,emissiveIntensity:.7}:{}})),h.get(F)},x=(U,N)=>(u.has(U)||u.set(U,N()),u.get(U));function v(U,N,F,D,H,{scale:j=[1,1,1],rotate:tt=[0,0,0],lit:Pt=!1}={}){const Vt=M(N,Pt);d.has(Vt)||d.set(Vt,[]),g.setFromEuler(p.set(...tt)),f.compose(_.set(F,D,H),g,m.set(...j));const Xt=U.index?U.toNonIndexed():U.clone();d.get(Vt).push(Xt.applyMatrix4(f))}function R(U,N,F,D,H,j,tt,Pt){const Vt=x(`b|${U}|${N}|${F}`,()=>new Ln(U,N,F,1,Math.min(.07,U*.12,N*.12,F*.12)));v(Vt,D,H,j,tt,Pt)}function T(U,N,F,D,H,j,tt){const Pt=x(`c|${U}|${N}`,()=>new He(U,U,N,12));v(Pt,F,D,H,j,tt)}function C(U,N,F,D,H,j){const tt=x(`s|${U}`,()=>new Ye(U,12,8));v(tt,N,F,D,H,j)}const I={rotate:[0,0,Math.PI/2]},E={rotate:[Math.PI/2,0,0]},b="#192735";function L(U,N,F,D=1.4,H=1.05,j=l.accent){R(D,H,1.15,l.carton,U,N+H/2,F),R(.2,H+.025,1.17,l.tape,U+D*.15,N+H/2,F),R(D*.38,.25,.024,j,U-D*.15,N+H*.57,F+.588),R(.23,.04,.035,l.tape,U-D*.15,N+H*.58,F+.604)}function W(U,N,F,D=5.3){for(const H of[-1,1])R(.17,4.4,.25,l.frame,U+H*(D/2-.12),N+2.2,F),R(.5,.15,1.5,l.frame,U+H*(D/2-.12),N+.1,F);for(const H of[.32,2.15,4.18])R(D,.16,1.55,l.frame,U,N+H,F),R(D-.2,.07,1.42,l.top,U,N+H+.11,F),R(D-.3,.1,.04,l.accent,U,N+H,F+.79)}function G(U,N,F,D=1){T(.4,.65,l.trim,U,N+.325*D,F,{scale:[D,D,D]}),T(.35,.04,b,U,N+.66*D,F,{scale:[D,1,D]}),T(.045,1.6*D,"#51755a",U,N+1.25*D,F);for(const[H,j,tt]of[[-.35,1.15,-.55],[.3,1.55,.65],[-.22,1.95,-.45],[.06,2.2,.1]])C(.36,j>1.6?"#6b9f77":"#4b7d66",U+H*D,N+j*D,F,{scale:[D*.8,D*1.65,D*.5],rotate:[0,0,tt]})}function $(U,N,F,D,H=l.frame){T(.15,D,H,U,N,F,I);for(let j=-1;j<=1;j++)T(.2,.13,l.trim,U+j*D*.4,N,F,I);T(.15,.65,H,U+D/2,N-.3,F)}function at(U,N,F){R(.83,.78,.55,"#9c6264",U,N+.85,F),R(.94,.63,.59,"#b9806f",U,N+1.55,F),R(.71,.3,.05,b,U,N+1.57,F+.32);for(const D of[-1,1])C(.072,"#d5dcd0",U+D*.19,N+1.6,F+.36),R(.25,.48,.38,"#547c90",U+D*.27,N+.25,F),T(.15,.62,"#547c90",U+D*.59,N+.86,F);T(.035,.25,l.trim,U,N+1.98,F),C(.095,"#e3b757",U,N+2.1,F),T(.16,.05,"#e3b757",U,N+.87,F+.31,E)}function Z(U,N,F,D,H){if((D+(H?0:1))%3===0){R(5.3,.24,2.3,l.frame,U,N+.5,F+.45);for(const j of[-2,2])T(.32,.2,b,U+j,N+.32,F+1.25,E);for(const j of[-1.55,0,1.55])L(U+j,N+.65,F+.25,1.32,1.15);L(U-.75,N+1.8,F+.25,1.35,1.1,"#6089a4"),L(U+.72,N+1.8,F+.25,1.35,.85,"#83956c"),R(.12,2.7,.14,l.trim,U-2.48,N+1.6,F-.4),T(.065,1.3,l.trim,U-2.48,N+2.92,F+.2,{rotate:[Math.PI/2,0,0]}),$(U,N+5.4,F-.9,5.5)}else W(U,N,F),L(U-1.5,N+.48,F,1.55,1.05,"#6089a4"),L(U+.25,N+.48,F,1.6,1.05,"#83956c"),L(U-1.35,N+2.31,F,1.75,1.15),at(U+1.1,N+2.31,F),D%2===0&&L(U+.75,N+4.34,F,1.9,.85,"#6089a4")}function ht(U,N,F,D,H){if(H&&D%2===0){W(U,N,F);for(let j=0;j<3;j++){const tt=U-1.65+j*1.6;T(.47,.9,j===1?"#b89a65":"#8aa18e",tt,N+.94,F),T(.5,.08,l.trim,tt,N+1.43,F),T(.44,.7,"#8b9b9c",tt,N+2.75,F),T(.47,.08,"#b3c0b5",tt,N+3.14,F),C(.095,b,tt,N+3.24,F)}L(U+.6,N+4.34,F,2.2,.9)}else{R(5.3,2.05,1.7,l.cabinet,U,N+1.025,F),R(5.55,.18,1.95,l.top,U,N+2.13,F);for(const j of[-1.75,0,1.75])R(1.55,1.7,.06,l.frame,U+j,N+1.03,F+.88),R(.6,.07,.1,l.trim,U+j,N+1.59,F+.95);R(2.05,.1,.98,l.carton,U-1.2,N+2.28,F+.2);for(let j=0;j<3;j++)C(.18,j===1?"#d6b45d":"#be7660",U-1.7+j*.45,N+2.49,F+.2);T(.6,.65,"#8b9b9c",U+1.25,N+2.55,F),T(.64,.08,"#b3c0b5",U+1.25,N+2.91,F),C(.1,b,U+1.25,N+3.03,F);for(const j of[-.74,.74])R(.24,.12,.25,b,U+1.25+j,N+2.63,F);R(3.5,.7,1.1,l.top,U,N+4.77,F-.15),R(1.35,H?1.95:.88,.8,"#768d8c",U,N+(H?6.08:5.54),F-.3);for(const j of[-.9,-.6,-.3,0,.3,.6,.9])R(.12,.28,.03,l.frame,U+j,N+4.75,F+.42)}}function Q(U,N,F,D,H){if(H||D%2===0){W(U,N,F);for(let j=0;j<2;j++)for(let tt=0;tt<6;tt++){const Pt=U-2.03+tt*.67,Vt=["#67809c","#a68b73","#617f7e"][(D+tt+j)%3];R(.5,1.18,.82,Vt,Pt,N+1.07+j*1.83,F),R(.24,.35,.025,"#d6d3be",Pt,N+1.21+j*1.83,F+.425),T(.052,.03,b,Pt,N+.74+j*1.83,F+.44,E)}L(U-1.4,N+4.34,F,1.6,.8,l.frame),G(U+1.5,N+4.34,F,.56)}else{R(4.8,.2,1.9,l.top,U,N+2.05,F);for(const j of[-1.75,1.75])R(1.15,1.95,1.5,l.cabinet,U+j,N+.975,F);for(const j of[-1.75,1.75])for(const tt of[.48,1.12,1.65])R(.86,.07,.06,l.trim,U+j,N+tt,F+.8);R(1.9,1.35,.18,b,U-.8,N+3.04,F),R(1.7,1.13,.025,"#527785",U-.8,N+3.04,F+.11),R(.17,.38,.3,l.trim,U-.8,N+2.33,F),R(.85,.08,.7,l.trim,U-.8,N+2.19,F);for(let j=0;j<3;j++)R(1.16-.23*j,.055,.035,"#9bb7b0",U-1+.1*j,N+3.36-.24*j,F+.14);R(1.05,.47,.8,l.trim,U+1.1,N+2.39,F+.1),R(.82,.045,.5,"#e1dbcb",U+1.1,N+2.66,F+.1),G(U+3.4,N,F+.3,1.1),$(U,N+5.5,F-.95,5.3)}}const pt={toys:Z,kitchen:ht,office:Q}[i]??Z;function Mt(U,N){const F=a-r,D=N?0:1.8;R(s,n,.24,l.wall,0,U+n/2,r-.17),R(s,o,F+.8,l.frame,0,(N?U+n:U)-o/2,(a+r-.8)/2),R(s,.1,.26,l.top,0,U-.02,a-.1),N||R(s,.08,F,l.top,0,U-.04,(a+r)/2),D&&(R(s,D,F+.6,l.wall,0,U+D/2,(a+r-.6)/2),R(s,.16,F+.5,l.top,0,U+D,(a+r-.5)/2),R(s,.22,.08,l.frame,0,U+D-.28,a+.025)),R(s,.22,.18,l.frame,0,U+.18,r+.2),R(s,.28,.5,l.frame,0,U+n-.6,r+.2);const H=8.8;for(let j=-5;j<=5;j++){const tt=j*H;R(H-.28,n-1.18,.08,l.inset,tt,U+n/2,r+.025),R(.27,n-.52,.55,l.frame,tt-H/2,U+(n-.52)/2,r+.27),!(Math.abs(tt)>30)&&(R(2.5,.22,.5,b,tt,U+n-.73,r+.8),R(2.1,.09,.26,l.lamp,tt,U+n-.88,r+.86,{lit:!0}),pt(tt,U+D+.08,r+1.7,j+5,N))}}Mt(t,!0),Mt(e-n,!1);for(const[U,N]of d){const F=Nx(N,!1);if(N.forEach(H=>H.dispose()),!F)throw new Error("Could not merge level dressing geometry");F.computeBoundingSphere();const D=new Y(F,U);D.name="merged-workshop-props",D.receiveShadow=!0,D.castShadow=!1,c.add(D)}return u.forEach(U=>U.dispose()),c.userData.bounds={top:t+n,bottom:e-n-o},c.userData.dispose=()=>{c.traverse(U=>{U.isMesh&&U.geometry.dispose()}),h.forEach(U=>U.dispose())},c}const Fr=5.2,Xi=.45,Yl=Fr*1.5,vn=.5,sh=.06,Ox=vn+sh,ds=[-1.25,2.35],tS=.55,mr=3.3,Le=-4,Es=Fr-Xi,Xn=92,_i=5.96,Dp=-1,fn=i=>-i*Fr-Fr/2,kx=i=>Math.max(0,Math.ceil((-i-Fr/2)/Fr-1e-6)),fs={halfW:15,gunX:-11,benchX0:-15.5,benchX1:-5.5,targetX:11};function Up(i,t,e){const n=fn(kx(t)),s=n+Ox;return i>fs.benchX0&&i<fs.benchX1&&e>ds[0]&&e<ds[1]&&t>=s-.25?s:n}function $n(i,t,e,n,s,r,a,o,l=!0){const c=new Y(new Ln(i,t,e,3,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),s);return c.position.set(r,a,o),c.castShadow=l,c.receiveShadow=!0,c}function Do(i,t,e,n,s,{additive:r=!1,flat:a=!1}={}){const o=new Y(new Qn(t,e),new Ge({color:n,map:i,transparent:!0,opacity:s,depthWrite:!1,blending:r?Qe:Bs,polygonOffset:!0,polygonOffsetFactor:-2}));return a&&(o.rotation.x=-Math.PI/2),o.renderOrder=1,o}function Dd(i,t,e=.55){return Do(yx(),i,t,"#060b1c",e,{flat:!0})}function ia(i,t,e,n,s){const r=new Ph(t,e,n);r.receiveShadow=!0;const a=new Zt;for(let o=0;o<n;o++){const[l,c,h]=s(o);r.setMatrixAt(o,a.makeTranslation(l,c,h))}return i.add(r),r}function zx(i,t,e,n,s){const r=new nt,a=e-t,o=ds[1]-ds[0],l=(ds[0]+ds[1])/2,c=(t+e)/2,h=Dd(a+1,o+1,.55);h.position.set(c,.006,l),r.add(h),r.add($n(a,vn-.06,o,.16,i.stand,c,(vn-.06)/2,l)),r.add($n(a+.06,.12,o+.06,.06,i.standTop,c,vn-.06,l)),r.add($n(.72,vn+.1,1,.16,i.orange,t+.3,(vn+.1)/2,ds[1]-.42)),r.add($n(.62,vn+.2,.95,.16,i.orange,e-.22,(vn+.2)/2,ds[1]-.4));const u=n+.35,d=e-.4,f=$n(d-u,sh,2.5,.03,i.mat,(u+d)/2,vn+sh/2,.35,!1);r.add(f);const g=new nt,_=Dd(2.1,1.4,.5);_.position.y=.004,g.add(_),g.add($n(1.6,.5,1,.1,i.olive,0,.25,0)),g.add($n(1.66,.2,1.06,.08,i.oliveLid,0,.56,0)),g.add($n(1.18,.07,.68,.035,i.oliveLid,0,.68,0)),g.position.set(n-.48,vn,.25),r.add(g);const m=["shell","grenade","fuel","ice","cell","saw","slug","staple"].includes(s),p=M=>{const x=vs(s);return m?x.scale.set(Se*.82,Se*.95,Se*.95):x.scale.set(Se*.82,Se*1.45,Se*1.45),M&&(x.rotation.z=Math.PI/2),x};if(s==="arrow"||s==="bolt")for(const[M,x,v]of[[-.15,1.85,.06],[.05,2.12,-.1]]){const R=p(!1);R.position.set(n+M,vn+10*Se*1.45,x),R.rotation.y=v,r.add(R)}else if(m)for(const[M,x]of[[.2,1.8],[.52,2]]){const v=p(!0);v.position.set(n+M,vn,x),r.add(v)}else{const M=p(!0);M.position.set(n+.19,vn,.62),r.add(M);const x=p(!1);x.position.set(n+.36,vn+9*Se*1.45,.78),x.rotation.y=-.15,r.add(x)}return r}const jl=new Map;function Hh(i,t="toy"){const e=`${t}|${i}`;return jl.has(e)||jl.set(e,t==="steel"?B(i,{spec:.4,gloss:24,rim:.12}):t==="lacquer"?we(i):B(i,{spec:.08,rim:.06})),jl.get(e)}function Dn(i,t,e,n,s,r,a,o,l){const c=$n(t,e,n,Math.min(.05,t/3,e/3,n/3),Hh(s,l),r,a,o,!1);return i.add(c),c}function ms(i,t,e,n,s,r,a,o,l=18){const c=new Y(new He(t,t,e,l),Hh(n,o));return c.position.set(s,r,a),i.add(c),c}function Na(i,t,e,n,s,r,a){const o=new Y(new Ye(t,14,10),Hh(e,a));return o.position.set(n,s,r),i.add(o),o}const gr=["#ffd23f","#ff6fae","#44c4ff","#7be36b","#ff8a1f","#c783ff"];function Bx(i,t,e,n){const s=Le+.18;if(n%2===0){const r=gr[n%gr.length];Dn(i,1.7,2.1,.06,"#fff4dc",t,e+2.2,s),Dn(i,1.5,1.9,.08,r,t,e+2.2,s+.02,"lacquer"),Na(i,.42,gr[(n+2)%gr.length],t,e+2.45,s+.12,"lacquer").scale.z=.3,Dn(i,1,.16,.06,"#fff4dc",t,e+1.65,s+.08)}else{Dn(i,2.8,.12,.5,"#c98f52",t,e+2.75,s+.2,"lacquer");for(let r=0;r<3;r++)Dn(i,.42,.42,.42,gr[(n+r)%gr.length],t-.8+r*.75,e+3.02,s+.2,"lacquer").rotation.y=.3*r;Na(i,.24,"#ff4f5e",t+1.15,e+3.05,s+.2,"lacquer")}}function Vx(i,t,e,n){const s=Le+.18;if(n%2===0){Dn(i,3,.12,.55,"#e8dcc4",t,e+2.9,s+.22,"lacquer");for(const[a,o,l]of[[-.85,.36,.5],[.05,.3,.38]])ms(i,o,l,"#9aa8b4",t+a,e+2.96+l/2,s+.24,"steel"),ms(i,o*1.05,.05,"#7a8794",t+a,e+2.98+l,s+.24,"steel"),Na(i,.06,"#3a3f4d",t+a,e+3.04+l,s+.24,"steel");const r=new Y(new He(.2,.2,.46,16),B("#dff1ec",{transparent:!0,opacity:.55,spec:.8,rim:.4}));r.position.set(t+.9,e+3.19,s+.24),i.add(r),ms(i,.16,.3,"#ff8a1f",t+.9,e+3.1,s+.24)}else{ms(i,.04,2.6,"#7a8794",t,e+3.5,s+.15,"steel").rotation.z=Math.PI/2;for(let r=0;r<4;r++){const a=t-.9+r*.6;ms(i,.03,.75,"#9aa8b4",a,e+3.1,s+.15,"steel"),r%2===0?Na(i,.16,"#9aa8b4",a,e+2.68,s+.15,"steel").scale.y=.5:Dn(i,.24,.32,.03,"#c94f3d",a,e+2.6,s+.15,"lacquer")}}}function Gx(i,t,e,n){const s=Le+.2;if(n%3===0){Dn(i,2.7,1.7,.08,"#c9d2e0",t,e+2.25,s,"steel"),Dn(i,2.5,1.5,.08,"#fbfbf6",t,e+2.25,s+.03);for(let o=0;o<3;o++)Dn(i,1.2-o*.25,.05,.02,["#2f5fa8","#e8384d","#3fbf6a"][o],t-.4+o*.1,e+2.65-o*.28,s+.08);for(let o=0;o<4;o++)Dn(i,.14,.2+o*.12,.02,"#2f5fa8",t+.55+o*.2,e+1.85+(.2+o*.12)/2,s+.08)}if(n%2===1){const o=t-_i/2,l=e+3.6,c=Le+.6;ms(i,.42,.08,"#2c3242",o,l,c,"steel").rotation.x=Math.PI/2,ms(i,.36,.09,"#fbfbf6",o,l,c+.01).rotation.x=Math.PI/2,Dn(i,.04,.26,.02,"#1b1d23",o,l+.11,c+.07).rotation.z=.4,Dn(i,.03,.32,.02,"#1b1d23",o+.07,l-.08,c+.08).rotation.z=2.2}const r=t+_i/2,a=Le+.45;ms(i,.26,.42,"#f4f0e4",r,e+.97,a,"lacquer");for(const[o,l,c]of[[0,1.45,.3],[-.2,1.3,.22],[.2,1.32,.24],[.05,1.7,.2]])Na(i,c,"#3fae5a",r+o,e+l,a,"lacquer")}const Hx={toys:Bx,kitchen:Vx,office:Gx};function Wx(i,t){const e=Hx[i];if(!e)return null;const n=new nt,s=Math.ceil(Xn/_i),r=-Math.floor(s/2);for(let a=0;a<t;a++)for(let o=r;o<r+s;o++){const l=Dp+o*_i+_i/2;Math.abs(l)>26||e(n,l,fn(a),o-r+a)}return n.traverse(a=>{a.isMesh&&(a.castShadow=!1)}),n}function eS(i,t,e,{shadowSize:n=2048}={}){i.background=new _t("#0c1730"),i.add(new wp(Ci.sky,Ci.ground,1));const s=new Tp(Ci.key,Ci.keyIntensity);s.castShadow=!0,s.shadow.mapSize.set(n,n),s.shadow.intensity=.7,s.shadow.radius=3;const r=s.shadow.camera;r.left=-19,r.right=19,r.top=12,r.bottom=-12,r.near=1,r.far=50,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,i.add(s,s.target);const a={floor:B("#9a979e",{map:Ad(),spec:.03,gloss:8,rim:0}),floorLip:B("#8794ad",{spec:.1}),slab:B("#2b4b73",{spec:.04}),slabLow:B("#203a5f",{spec:.02}),wall:B("#1b3961",{spec:0,rim:0}),panel:B("#1f3e68",{spec:.03,rim:0}),panelFrame:B("#22446d",{spec:.08,gloss:10,rim:0}),wainscot:B("#1d406b",{spec:.06,rim:0}),pillar:B("#355b83",{spec:.06,gloss:10,rim:.05}),plinth:B("#33587f",{spec:.1,gloss:10}),stand:B("#4a6186",{spec:.08,gloss:10}),standTop:B("#4d5f80",{spec:.08,gloss:10}),orange:we("#e88724"),mat:B("#3a4560",{map:Ax(),spec:.03,rim:0}),olive:we("#56703a"),oliveLid:we("#5c7742"),lampHousing:B("#16264a",{spec:.1}),lamp:B("#fff2c0",{emissive:"#ffe7a6",emissiveIntensity:1.5,rim:0})};a.mat.map.repeat.set(10,5);const o=mr-Le,l=new Ln(Xn,Xi,o+.8,2,.08),c=new Ln(Xn,Xi*.42,.1,2,.04),h=new Ln(Xn,.1,.3,3,.045),u=new Qn(Xn,o);a.floor.map.repeat.set(Xn/5.2,1);for(let N=-1;N<e;N++){const F=fn(N),D=new Y(l,a.slab);D.position.set(0,F-Xi/2,(mr+Le-.8)/2),D.receiveShadow=!0,i.add(D);const H=new Y(c,a.slabLow);H.position.set(0,F-Xi+Xi*.21,mr+.03),i.add(H);const j=new Y(u,a.floor);j.rotation.x=-Math.PI/2,j.position.set(0,F+.004,(mr+Le)/2),j.receiveShadow=!0,i.add(j);const tt=new Y(h,a.floorLip);tt.position.set(0,F-.02,mr-.1),tt.receiveShadow=!0,i.add(tt)}const d=fn(-1),f=fn(e-1),g=new Y(new Qn(Xn,d-f+2),a.wall);g.position.set(0,(d+f)/2,Le-.05),g.receiveShadow=!0,i.add(g);const _=Math.ceil(Xn/_i),m=-Math.floor(_/2),p=e*_,M=N=>[Math.floor(N/_)%e,N%_+m],x=N=>Dp+N*_i,v=4.3,R=2.86,T=2.11,C=.17;ia(i,new Ln(v-C,R-C,.1,2,.04),a.panel,p,N=>{const[F,D]=M(N);return[x(D)+_i/2,fn(F)+T,Le+.05]}),ia(i,new Ln(v,C,.22,3,.07),a.panelFrame,p*2,N=>{const[F,D]=M(N%p),H=N<p?1:-1;return[x(D)+_i/2,fn(F)+T+H*(R-C)/2,Le+.11]}),ia(i,new Ln(C,R-C*1.2,.22,3,.07),a.panelFrame,p*2,N=>{const[F,D]=M(N%p),H=N<p?1:-1;return[x(D)+_i/2+H*(v-C)/2,fn(F)+T,Le+.11]}),ia(i,new Ln(1.15,Es,.55,3,.16),a.pillar,p,N=>{const[F,D]=M(N);return[x(D),fn(F)+Es/2,Le+.27]}),ia(i,new Ln(1.45,.76,.8,3,.14),a.plinth,p,N=>{const[F,D]=M(N);return[x(D),fn(F)+.38,Le+.4]});const I=[],E=Mx(),b=bx(),L=new ks({map:Ho(),color:new _t(1.2,.95,.6),transparent:!0,opacity:.4,blending:Qe,depthWrite:!1}),W=[];for(let N=m;N<m+_;N+=2)W.push(x(N)-_i/2);for(let N=0;N<e;N++){const F=fn(N);i.add($n(Xn,.42,.22,.08,a.wainscot,0,F+.32,Le+.11,!1));const D=Do(E,Xn,.9,"#08112a",.6);D.position.set(0,F+.45,Le+.85),i.add(D);const H=Do(E,Xn,1.5,"#07102a",.85);H.rotation.z=Math.PI,H.position.set(0,F+Es-.75,Le+.6),i.add(H);for(const j of W){i.add($n(1.4,.2,.5,.08,a.lampHousing,j,F+Es-.1,Le+.9,!1)),i.add($n(1.12,.13,.36,.06,a.lamp,j,F+Es-.2,Le+.98,!1));const tt=new wr(L);tt.scale.set(2.6,.85,1),tt.position.set(j,F+Es-.24,Le+1.25),i.add(tt);const Pt=Do(b,5.2,3,"#ffc97a",.13,{additive:!0});Pt.position.set(j,F+Es-.25-1.5,Le+.62),i.add(Pt)}I.push({floor:F,bench:null,benchKey:""})}const G={background:"#0c1730",wall:"#1b3961",panel:"#1f3e68",panelFrame:"#22446d",wainscot:"#1d406b",pillar:"#355b83",plinth:"#33587f",floor:"#9a979e",slab:"#2b4b73",slabLow:"#203a5f",stand:"#4a6186",standTop:"#4d5f80"},$={tiles:Ex,windows:Tx},at={checker:Sx,carpet:wx},Z=a.floor.map.repeat.clone(),ht=a.lamp.color.clone(),Q=a.lamp.emissive.clone();let pt=null,Mt=null;function U(N="toys"){Mt&&(i.remove(Mt),Mt.userData.dispose()),Mt=Fx({kind:N,topFloor:fn(-1),bottomCeiling:fn(e-1)-Xi,height:Yl,width:Xn,wallZ:Le,frontZ:mr,slab:Xi}),i.add(Mt)}return U(),{key:s,lanes:I,bounds:{top:fn(-1)+Yl,bottom:fn(e-1)-Yl-Xi*2},setTheme(N){var j;const F={...G,...N||{}};i.background.set(F.background);for(const tt of Object.keys(G))tt!=="background"&&a[tt]&&a[tt].color.set(F[tt]);const D=((j=$[F.walls])==null?void 0:j.call($))??null;a.panel.map!==D&&(a.panel.map=D,a.panel.needsUpdate=!0);const H=(at[F.floorTex]??Ad)();a.floor.map!==H&&(H.repeat.copy(Z),a.floor.map=H,a.floor.needsUpdate=!0),a.lamp.color.copy(F.lamp?new _t(F.lamp):ht),a.lamp.emissive.copy(F.lamp?new _t(F.lamp):Q),pt&&(i.remove(pt),pt.traverse(tt=>tt.isMesh&&tt.geometry.dispose())),pt=Wx(F.decor,e),pt&&i.add(pt),U(F.decor)},relayout(N){I.forEach((F,D)=>{const H=N(D),j=`${fs.benchX0.toFixed(3)}|${fs.benchX1.toFixed(3)}|${fs.gunX.toFixed(3)}|${H}`;F.benchKey!==j&&(F.bench&&(i.remove(F.bench),F.bench.traverse(tt=>tt.isMesh&&tt.geometry.type!=="LatheGeometry"&&tt.geometry.dispose())),F.bench=zx(a,fs.benchX0,fs.benchX1,fs.gunX,H),F.bench.position.y=F.floor,F.benchKey=j,i.add(F.bench))})},follow(N){s.target.position.set(0,N-.5,0),s.position.copy(Ci.keyDir).multiplyScalar(22).add(s.target.position)}}}const Wh={glock19:{name:"GLOCK 19",magSize:15,damage:10,fireRate:3.5,autoRate:.3,minSpread:1.05,maxSpread:2.2,bloom:.6,convergence:2.6,reload:2.4},uzi:{name:"UZI",magSize:32,damage:6.5,fireRate:9,autoRate:.6,minSpread:1.15,maxSpread:2.4,bloom:.35,convergence:2.2,reload:2.6},m870:{name:"M870",magSize:6,pellets:8,damage:4,fireRate:1.3,autoRate:.22,minSpread:1.2,maxSpread:2.3,bloom:1,convergence:2.4,reload:3.6},ak47:{name:"AK-47",magSize:30,damage:11,fireRate:6.5,autoRate:.45,minSpread:.95,maxSpread:2.3,bloom:.4,convergence:2.4,reload:2.8},minigun:{name:"MINIGUN",magSize:120,damage:5.5,fireRate:18,autoRate:1.2,minSpread:1.2,maxSpread:2.4,bloom:.22,convergence:2,reload:4},revolver:{name:"РЕВОЛЬВЕР",magSize:6,damage:24,fireRate:1.8,autoRate:.2,minSpread:.95,maxSpread:2.3,bloom:.9,convergence:2.4,reload:2.6,crit:3,fan:8},flamer:{name:"ОГНЕМЁТ",magSize:70,damage:3.2,fireRate:14,autoRate:2.2,minSpread:1.2,maxSpread:1.8,bloom:.05,convergence:1.4,reload:3,stream:{range:11,angle:.2}},cryo:{name:"КРИО-ПУШКА",magSize:12,damage:26,fireRate:2.4,autoRate:.3,minSpread:.9,maxSpread:2.1,bloom:.7,convergence:2.2,reload:2.8,freeze:1},bow:{name:"ЛУК",magSize:8,damage:30,fireRate:1.5,autoRate:.3,minSpread:.75,maxSpread:1.9,bloom:.6,convergence:1.8,reload:2.2,pierce:2},grenade:{name:"ГРАНАТОМЁТ",magSize:6,damage:34,fireRate:1.1,autoRate:.25,minSpread:1,maxSpread:2,bloom:.8,convergence:2.2,reload:3.2,lob:{radius:1.9,speed:24}},tesla:{name:"ТЕСЛА-ПУШКА",magSize:20,damage:14,fireRate:3,autoRate:.45,minSpread:1,maxSpread:2,bloom:.4,convergence:2,reload:2.6,chain:{jumps:3,reach:3.2,share:.6}},stapler:{name:"СТЕПЛЕР",magSize:40,damage:6,fireRate:9,autoRate:.7,minSpread:1.1,maxSpread:2.3,bloom:.32,convergence:2,reload:2.4,staple:{slow:.4,time:1.2}},laser:{name:"ЛАЗЕР",magSize:80,damage:2.4,fireRate:12,autoRate:2.4,minSpread:.6,maxSpread:1.4,bloom:.04,convergence:1.2,reload:2.8,beam:{ramp:2,time:1.2}},saw:{name:"ПИЛОМЁТ",magSize:5,damage:26,fireRate:1.3,autoRate:.3,minSpread:.9,maxSpread:2,bloom:.7,convergence:2,reload:2.8,saw:{roll:7,speed:6,share:.6}},crossbow:{name:"АРБАЛЕТ",magSize:5,damage:60,fireRate:.9,autoRate:.22,minSpread:.7,maxSpread:1.8,bloom:.8,convergence:2,reload:3,pierce:6,pierceKeep:1,skewer:.25},rail:{name:"РЕЛЬСОТРОН",magSize:4,damage:110,fireRate:.7,autoRate:.18,minSpread:.5,maxSpread:1.6,bloom:1,convergence:2.2,reload:3.4,rail:!0}},nS=[{weapon:"glock19",scale:1,startTier:0},{weapon:"revolver",scale:1,startTier:0},{weapon:"uzi",scale:1,startTier:0},{weapon:"glock19",scale:1,startTier:0}],Xx=[{id:"damage",icon:"💥",title:"Урон",baseCost:12,growth:1.75,max:60,value:(i,t,e)=>i.damage*e.scale*Math.pow(1.22,t),fmt:(i,t)=>(t.pellets??1)>1?`${t.pellets}×${Ud(i)}`:Ud(i)},{id:"auto",icon:"🤖",title:"Автострельба",baseCost:20,growth:1.65,max:25,value:(i,t)=>t>=25?i.fireRate:i.autoRate*Math.pow(i.fireRate/i.autoRate,Math.max(0,t)/25),fmt:i=>i>=1?`${i.toFixed(1)}/с`:`1 в ${(1/i).toFixed(1)}с`},{id:"accuracy",icon:"🎯",title:"Точность",baseCost:18,growth:1.7,max:20,value:(i,t)=>Math.max(.1,i.minSpread*Math.pow(.88,t)),fmt:i=>`±${(i*10).toFixed(0)} см`},{id:"focus",icon:"🔭",title:"Точность автострельбы",baseCost:16,growth:1.6,max:15,value:(i,t)=>.7*Math.pow(.84,t),fmt:i=>`ждёт ${Math.round((1-i)*100)}% сведения`},{id:"aim",icon:"◎",title:"Сведение",baseCost:16,growth:1.6,max:15,value:(i,t)=>i.convergence*Math.pow(.88,t),fmt:i=>`${i.toFixed(2)}с`},{id:"reload",icon:"🔄",title:"Перезарядка",baseCost:14,growth:1.6,max:15,value:(i,t)=>Math.max(.6,i.reload*Math.pow(.9,t)),fmt:i=>`${i.toFixed(2)}с`}];function iS(i,t,e){return Math.round(i.baseCost*Math.pow(i.growth,t)*e.scale)}function sS(i,t,e=0,n={}){const s=Wh[i.weapon],r=l=>Xx.find(c=>c.id===l).value(s,t[l]||0,i),a={damage:1,minSpread:1,magSize:1,autoRate:1,bloom:1,convergence:1,reload:1};for(const l of Np[i.weapon].slice(0,e))for(const[c,h]of Object.entries(Yx(l,n[l]||0)))a[c]*=h;const o=l=>Math.pow(qx[l],e);return{magSize:Math.round(s.magSize*a.magSize),pellets:s.pellets??1,damage:r("damage")*a.damage*o("damage"),fireRate:s.fireRate,autoRate:n.receiver!=null?Math.min(s.fireRate,r("auto")*a.autoRate*o("autoRate")):0,minSpread:r("accuracy")*a.minSpread,maxSpread:s.maxSpread,bloom:s.bloom*a.bloom,convergence:r("aim")*a.convergence,reload:Math.max(.4,r("reload")*a.reload*o("reload")),autoThr:r("focus"),crit:s.crit??2,fan:s.fan??0,stream:s.stream??null,freeze:s.freeze??0,pierce:s.pierce??1,pierceKeep:s.pierceKeep??.8,skewer:s.skewer??0,lob:s.lob??null,chain:s.chain??null,slow:s.staple??null,beam:s.beam??null,saw:s.saw??null,rail:!!s.rail}}const rS={damage:"damage",auto:"autoRate",accuracy:"minSpread",focus:"autoThr",aim:"convergence",reload:"reload"},aS=[25,90,280,800,2e3],Wo=[{name:"COMMON",color:"#dce5ed",accent:"#a8b9cb",energy:1.25},{name:"UNCOMMON",color:"#77e885",accent:"#32b873",energy:1.4},{name:"RARE",color:"#56baff",accent:"#4b7bff",energy:1.55},{name:"EPIC",color:"#c783ff",accent:"#ee5cff",energy:1.7},{name:"LEGENDARY",color:"#ffd267",accent:"#ff931f",energy:1.85},{name:"ULTRA MEGA LEGENDARY",color:"#ff83d9",accent:"#79f6ff",energy:2.1}],Np={glock19:["optic","mag","laser","suppressor","stock"],uzi:["optic","mag","grip","suppressor","stock"],m870:["optic","saddle","light","stock","brake"],ak47:["optic","mag","rail","suppressor","stock"],minigun:["optic","box","laser","shield","brake"],revolver:["optic","loader","comp","engraved","barrel"],flamer:["nozzle","tank2","igniter","shroud","pump"],cryo:["optic","cryotank","lens","bayonet","compressor"],bow:["optic","quiver","stabilizer","cams","firetips"],grenade:["optic","drum","sticky","shroud","cluster"],tesla:["coil","battery","arrester","rod","generator"],stapler:["optic","clip","spring","brace","motor"],laser:["lens2","powercell","radiator","prism","diode"],saw:["optic","blades","motor","sawguard","diamond"],crossbow:["optic","boltbox","crank","steelprod","stock"],rail:["optic","capacitor","coolant","rails","core"]},Fp={receiver:{name:"Радиоприёмник",label:"автострельба",sign:"+",mul:{autoRate:1.25}},optic:{name:"Коллиматор",icon:"🔴",label:"точность",sign:"+",mul:{minSpread:.85}},mag:{name:"Увеличенный магазин",icon:"🧱",label:"магазин",sign:"+",mul:{magSize:1.6}},saddle:{name:"Боковой патронташ",icon:"🧱",label:"патронов",sign:"+",mul:{magSize:1.5}},box:{name:"Большой короб",icon:"🧱",label:"лента",sign:"+",mul:{magSize:1.5}},laser:{name:"ЛЦУ с фонарём",icon:"🔦",label:"автострельба",sign:"+",mul:{autoRate:1.25}},light:{name:"Фонарь с ЛЦУ",icon:"🔦",label:"автострельба",sign:"+",mul:{autoRate:1.25}},grip:{name:"Рукоятка и ЛЦУ",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},rail:{name:"Цевьё с планками",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},suppressor:{name:"Глушитель",icon:"🔇",label:"урон",sign:"+",mul:{damage:1.15}},stock:{name:"Тактический приклад",icon:"🪵",label:"сведение",sign:"+",mul:{convergence:.8,bloom:.9}},brake:{name:"Дульный тормоз",icon:"💨",label:"урон",sign:"+",mul:{damage:1.12,bloom:.9}},shield:{name:"Бронещиток",icon:"🛡️",label:"урон",sign:"+",mul:{damage:1.1}},loader:{name:"Ускоритель заряжания",icon:"⚡",label:"перезарядка",sign:"−",mul:{reload:.8}},comp:{name:"Компенсатор",icon:"💨",label:"отдача",sign:"−",mul:{bloom:.8}},engraved:{name:"Гравированный барабан",icon:"✨",label:"урон",sign:"+",mul:{damage:1.15}},barrel:{name:"Длинный ствол",icon:"🎯",label:"сведение",sign:"+",mul:{convergence:.8,minSpread:.9}},nozzle:{name:"Широкое сопло",icon:"🔥",label:"урон",sign:"+",mul:{damage:1.15}},tank2:{name:"Второй баллон",icon:"🛢️",label:"топливо",sign:"+",mul:{magSize:1.5}},igniter:{name:"Запальник",icon:"⚡",label:"автострельба",sign:"+",mul:{autoRate:1.25}},shroud:{name:"Термокожух",icon:"🛡️",label:"перезарядка",sign:"−",mul:{reload:.8}},pump:{name:"Турбонасос",icon:"💨",label:"урон",sign:"+",mul:{damage:1.12}},cryotank:{name:"Криобак",icon:"🧊",label:"магазин",sign:"+",mul:{magSize:1.5}},lens:{name:"Фокусирующая линза",icon:"🔍",label:"сведение",sign:"+",mul:{convergence:.8}},bayonet:{name:"Ледяной штык",icon:"🗡️",label:"урон",sign:"+",mul:{damage:1.15}},compressor:{name:"Компрессор",icon:"⚙️",label:"автострельба",sign:"+",mul:{autoRate:1.25}},quiver:{name:"Колчан",icon:"🏹",label:"стрел",sign:"+",mul:{magSize:1.5}},stabilizer:{name:"Стабилизатор",icon:"🎚️",label:"отдача",sign:"−",mul:{bloom:.8}},cams:{name:"Блоки",icon:"⚙️",label:"урон",sign:"+",mul:{damage:1.15}},firetips:{name:"Огненные наконечники",icon:"🔥",label:"урон",sign:"+",mul:{damage:1.12}},drum:{name:"Барабан на 9",icon:"🥁",label:"магазин",sign:"+",mul:{magSize:1.5}},sticky:{name:"Липкие гранаты",icon:"🍯",label:"сведение",sign:"+",mul:{convergence:.8}},cluster:{name:"Кассетный заряд",icon:"💣",label:"урон",sign:"+",mul:{damage:1.15}},coil:{name:"Катушка",icon:"🌀",label:"урон",sign:"+",mul:{damage:1.15}},battery:{name:"Аккумулятор",icon:"🔋",label:"заряд",sign:"+",mul:{magSize:1.5}},arrester:{name:"Разрядник",icon:"⚡",label:"автострельба",sign:"+",mul:{autoRate:1.25}},rod:{name:"Громоотвод",icon:"📡",label:"точность",sign:"+",mul:{minSpread:.85}},generator:{name:"Генератор",icon:"⚙️",label:"перезарядка",sign:"−",mul:{reload:.8}},clip:{name:"Длинная обойма",icon:"📎",label:"скоб",sign:"+",mul:{magSize:1.5}},spring:{name:"Тугая пружина",icon:"🌀",label:"урон",sign:"+",mul:{damage:1.15}},brace:{name:"Скоба-упор",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},motor:{name:"Электромотор",icon:"⚙️",label:"автострельба",sign:"+",mul:{autoRate:1.25}},lens2:{name:"Линза",icon:"🔍",label:"точность",sign:"+",mul:{minSpread:.85}},powercell:{name:"Батарея",icon:"🔋",label:"заряд",sign:"+",mul:{magSize:1.5}},radiator:{name:"Радиатор",icon:"❄️",label:"перезарядка",sign:"−",mul:{reload:.8}},prism:{name:"Призма",icon:"💎",label:"урон",sign:"+",mul:{damage:1.15}},diode:{name:"Синий диод",icon:"🔵",label:"урон",sign:"+",mul:{damage:1.12}},blades:{name:"Кассета дисков",icon:"🧱",label:"дисков",sign:"+",mul:{magSize:1.6}},sawguard:{name:"Кожух",icon:"🛡️",label:"перезарядка",sign:"−",mul:{reload:.8}},diamond:{name:"Алмазный диск",icon:"💎",label:"урон",sign:"+",mul:{damage:1.15}},boltbox:{name:"Магазин болтов",icon:"🧱",label:"болтов",sign:"+",mul:{magSize:1.6}},crank:{name:"Быстрый ворот",icon:"⚙️",label:"перезарядка",sign:"−",mul:{reload:.8}},steelprod:{name:"Стальные плечи",icon:"🏹",label:"урон",sign:"+",mul:{damage:1.15}},capacitor:{name:"Конденсатор",icon:"🔋",label:"заряд",sign:"+",mul:{magSize:1.5}},coolant:{name:"Охлаждение",icon:"❄️",label:"перезарядка",sign:"−",mul:{reload:.8}},rails:{name:"Медные рельсы",icon:"🧲",label:"урон",sign:"+",mul:{damage:1.15}},core:{name:"Плазменное ядро",icon:"🌀",label:"урон",sign:"+",mul:{damage:1.12}}},qx={damage:1.2,autoRate:1.05,reload:.94},Op=4,kp=.6,$x=[10,25,60,150],oS=i=>Math.min(Op,i);function lS(i){return i>=Op?null:$x[i]}function Yx(i,t=0){const e=1+kp*t,n={};for(const[s,r]of Object.entries(Fp[i].mul))n[s]=Math.max(.2,1+(r-1)*e);return n}function cS(i,t=0){const e=Fp[i],n=Object.values(e.mul)[0];return`${e.label} ${e.sign}${Math.round(Math.abs(n-1)*(1+kp*t)*100)}%`}const hS={glock19:8,revolver:14,uzi:12,m870:30,bow:36,grenade:42,flamer:45,tesla:55,cryo:60,stapler:70,laser:78,saw:85,crossbow:95,rail:120,ak47:80,minigun:200},uS={seconds:14,hpDivisor:8,hitRate:.6,time:60,coins:8,trophyWin:25,trophyLoss:15},dS=[{kind:"regular",min:.9,max:1},{kind:"regular",min:.9,max:1},{kind:"regular",min:.9,max:1},{kind:"challenge",min:1.2,max:1.35},{kind:"even",min:.98,max:1.02}],zp=[{count:6,time:30,hp:.6,dmgLv:0,speed:1.5,radius:.5,alive:2},{count:8,time:32,hp:.8,dmgLv:3,speed:2.2,radius:.47,alive:3},{count:10,time:35,hp:1,dmgLv:7,speed:2.9,radius:.44,alive:3},{count:12,time:38,hp:1.2,dmgLv:11,speed:3.6,radius:.41,alive:4},{count:14,time:46,hp:1.4,dmgLv:15,speed:4.4,radius:.38,alive:4}];function jx(i,t){const e=Wh[i.weapon],n=zp[t],s=e.damage*i.scale*(e.pellets??1)*e.fireRate;return Math.max(1,Math.round(s*n.hp*Math.pow(1.22,n.dmgLv)))}const Zx=.3,Kx=1.45;function fS(i,t){const e=Wh[i.weapon],n=zp[t],s=e.damage*i.scale*(e.pellets??1)*Math.pow(1.22,n.dmgLv),r=Math.max(1,Math.ceil(jx(i,t)/(s*.65))),a=n.count*r,o=e.autoRate+Zx*(e.fireRate-e.autoRate);return Math.max(n.time,Math.ceil((a/o+Math.floor(a/e.magSize)*e.reload+n.count*.7)*Kx))}function Ud(i){if(i>=1e15){const e=Math.min(675,Math.floor(Math.log10(i)/3)-5);return`${(i/Math.pow(10,(e+5)*3)).toFixed(2)}${String.fromCharCode(97+Math.floor(e/26),97+e%26)}`}if(i>=1e12)return`${(i/1e12).toFixed(2)}T`;if(i>=1e9)return`${(i/1e9).toFixed(2)}B`;if(i>=1e6)return`${(i/1e6).toFixed(2)}M`;if(i>=1e4)return`${(i/1e3).toFixed(1)}K`;const t=Math.floor(i);return t>=1e3?`${Math.floor(t/1e3)} ${String(t%1e3).padStart(3,"0")}`:`${t}`}const Nd={rare:new _t(Wo[2].color).multiplyScalar(1.6),golden:new _t(Wo[4].color).multiplyScalar(1.8)},Jx=new Ye(1,22,16),Or=new yi(1,1,18),ti=new He(1,1,1,18),Zl=new Map;function Qx(i,t,e,n){const s=`${i}|${t}|${e}|${n}`;return Zl.has(s)||Zl.set(s,new Ln(i,t,e,3,n)),Zl.get(s)}const Kl=new Map;function en(i,t="lacquer"){const e=`${t}|${i}`;if(!Kl.has(e)){let n;t==="gold"?n=B(i,{spec:.75,gloss:22,sheen:.12,rim:.4,emissive:"#5a3a00",emissiveIntensity:.55}):t==="steel"?n=Ke(i,{spec:.32}):t==="toy"?n=B(i,{spec:.08,gloss:10,rim:.06}):n=we(i,{spec:.22,gloss:16,rim:.1}),Kl.set(e,n)}return Kl.get(e)}function Gt(i,t,e,n,s,r,a=r,o=r,l,c=!0){const h=new Y(Jx,en(t,l));return h.position.set(e,n,s),h.scale.set(r,a,o),h.castShadow=c,i.add(h),h}function Ht(i,t,e,n,s,r,a,o,l,c){const h=new Y(Qx(e,n,s,r),en(t,c));return h.position.set(a,o,l),h.castShadow=!0,i.add(h),h}const xn="#ffcf3a",On="#1b1d23";function tM(i,t,e,n,s=.085){for(const r of[1,-1])Gt(i,"#fffaf0",t,e,n*r,s,s,s*.8,"toy",!1),Gt(i,On,t-s*.65,e+s*.1,n*r*1.08,s*.58,s*.58,s*.45,"toy",!1)}function Fd(i,t,e=!1){const n=t==="golden",s=n?xn:t==="rare"?"#7fd6ff":e?"#ffe066":"#ffd23f",r=n?"#f0b51f":t==="rare"?"#5cb8e8":e?"#ffd23f":"#f2b52a",a=n?"gold":"lacquer";Gt(i,s,.05,.45,0,.62,.45,.5,a),Gt(i,s,.55,.64,0,.2,.15,.17,a).rotation.z=-.6,Gt(i,s,-.33,.95,0,.34,.33,.32,a),Gt(i,n?"#ffb020":"#ff8a1f",-.66,.9,0,.21,.08,.16,a),Gt(i,n?"#e89a10":"#f2741a",-.62,.83,0,.16,.06,.13,a),tM(i,-.46,1.05,.2);for(const o of[1,-1])Gt(i,r,.1,.52,.44*o,.32,.2,.09,a);if(t==="rare"&&!e){const o=new Y(ti,en("#f6f0e4","toy"));o.scale.set(.24,.12,.24),o.position.set(-.3,1.27,0),o.castShadow=!0,i.add(o);const l=new Y(ti,en("#2f4569","toy"));l.scale.set(.25,.05,.25),l.position.set(-.3,1.22,0),i.add(l)}return{spheres:e?[{c:new y(-.1,.55,0),r:.62}]:[{c:new y(.05,.45,0),r:.6},{c:new y(-.35,.95,0),r:.36,weak:!0}],colors:[s,r,"#ff8a1f","#fffaf0"],height:1.35}}function Od(i,t,e=!1){const n=t==="golden",s=n?xn:t==="rare"?"#f29bc0":"#b4703a",r=n?"#ffe08a":t==="rare"?"#ffd6e6":"#f0c793",a=n?"gold":"toy";Gt(i,s,0,.72,0,.58,.66,.5,a),Gt(i,r,0,.66,.3,.38,.42,.22,a),Gt(i,s,0,1.52,0,.46,.42,.42,a),Gt(i,r,0,1.44,.34,.2,.15,.13,a),Gt(i,"#3b2416",0,1.5,.46,.08,.06,.05,"lacquer");for(const o of[1,-1])Gt(i,On,.16*o,1.62,.36,.06,.07,.05,"lacquer",!1),Gt(i,s,.34*o,1.86,0,.17,.17,.1,a),Gt(i,r,.34*o,1.86,.06,.1,.1,.06,a,!1),Gt(i,s,.56*o,.86,.1,.18,.3,.18,a).rotation.z=.5*o,Gt(i,s,.28*o,.2,.18,.22,.2,.28,a);if(t==="rare"||e){const o=e?"#e8384d":"#ff4f8b";for(const l of[1,-1])Gt(i,o,.15*l,1.14,.36,.14,.1,.07,"lacquer");Gt(i,o,0,1.14,.4,.07,.07,.06,"lacquer")}if(e){for(const o of[1,-1]){const l=Ht(i,On,.2,.05,.05,.02,.15*o,1.73,.38,"toy");l.rotation.z=-.35*o}Gt(i,"#7fd6ff",-.28,.95,.38,.14,.14,.05,"toy")}return{spheres:[{c:new y(0,.72,0),r:.66},{c:new y(0,1.52,.05),r:.46,weak:!0}],colors:[s,r,"#fffaf0","#fffaf0"],height:2.1}}function eM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#9b6bd6":"#c98f52",s=e?"#ffe08a":t==="rare"?"#b48ae6":"#d9a467",r=t==="rare"?"#ffd23f":"#ead6a8",a=e?"gold":"toy";Ht(i,n,1.05,.9,.95,.08,0,.47,0,a);for(const o of[1,-1]){const l=Ht(i,s,.5,.06,.9,.03,.27*o,.95,0,a);l.rotation.z=-.35*o}Ht(i,r,1.07,.92,.18,.04,0,.47,0,"toy");for(const o of[1,-1])Gt(i,"#ff4f5e",.14*o,1.03,0,.15,.1,.08,"lacquer");Gt(i,"#ff4f5e",0,1,0,.07,.07,.07,"lacquer"),Ht(i,"#58698c",.1,.92,1.05,.04,-.62,.55,0,"steel");for(const o of[.13,.97])Ht(i,"#f08a20",.12,.07,1.07,.03,-.63,o,0,"lacquer");for(const o of[.35,-.35])Gt(i,"#8a9ab8",-.68,.55,o,.05,.05,.03,"steel",!1);return{spheres:[{c:new y(-.62,.55,0),r:.55,shield:!0},{c:new y(0,.47,0),r:.62},{c:new y(0,1.02,0),r:.22,weak:!0}],colors:[n,s,r,"#58698c"],height:1.25}}const kd=["#ff5a8a","#44c4ff","#ffd23f","#7be36b","#c783ff"];function nM(i){const t=kd[Math.floor(Math.random()*kd.length)];Gt(i,t,0,.22,0,.24,.2,.2,"lacquer");for(const e of[1,-1]){const n=new Y(Or,en(t,"lacquer"));n.scale.set(.13,.22,.13),n.position.set(.3*e,.22,0),n.rotation.z=Math.PI/2*e,i.add(n)}return Gt(i,"#ffffff",-.06,.32,.12,.06,.04,.03,"toy",!1),{spheres:[{c:new y(0,.22,0),r:.32}],colors:[t,"#ffffff",t],height:.5}}function iM(i){const t=new Y(ti,en("#ff4f5e","lacquer"));t.scale.set(.3,.72,.3),t.position.y=.4,t.castShadow=!0,i.add(t);for(const n of[.2,.42,.64]){const s=new Y(ti,en("#fff4dc","lacquer"));s.scale.set(.31,.07,.31),s.position.y=n,i.add(s)}const e=new Y(Or,en(xn,"gold"));return e.scale.set(.34,.3,.34),e.position.y=.91,e.castShadow=!0,i.add(e),["#44c4ff","#7be36b","#c783ff","#ffd23f"].forEach((n,s)=>{const r=s/4*Math.PI*2;Ht(i,n,.05,.36,.1,.02,Math.cos(r)*.1,1.15,Math.sin(r)*.1,"lacquer").rotation.set(Math.sin(r)*.6,0,-Math.cos(r)*.6)}),{spheres:[{c:new y(0,.5,0),r:.45}],colors:["#ff4f5e","#fff4dc",xn,"#44c4ff","#7be36b"],height:1.3}}function yn(i,t,e,n,s=.18,r=.09){for(const a of[1,-1])Gt(i,"#fffaf0",t+s*a,e,n,r,r*1.1,r*.6,"toy",!1),Gt(i,On,t+s*a-r*.25,e-r*.1,n+r*.4,r*.55,r*.6,r*.35,"toy",!1)}function sM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#56baff":"#e4554a";Ht(i,n,1.1,.72,.72,.16,0,.42,0,e?"gold":"lacquer"),Ht(i,"#c9d2e0",1.14,.12,.76,.05,0,.8,0,"steel");for(const r of[-.22,.22]){Ht(i,On,.4,.05,.12,.02,r,.86,0,"toy");const a=Ht(i,"#e8b56a",.34,.2,.08,.04,r,.92,0,"toy");a.rotation.z=r*.3}Ht(i,"#3a3f4d",.08,.2,.12,.03,.58,.5,.2,"steel");for(const r of[-.42,.42])Ht(i,"#3a3f4d",.14,.08,.5,.03,r,.04,0,"steel");return yn(i,0,.5,.37),{spheres:[{c:new y(0,.42,0),r:.62},{c:new y(0,.88,0),r:.24,weak:!0}],colors:[n,"#c9d2e0","#e8b56a","#3a3f4d"],height:1}}function rM(i){return Ht(i,"#e8b56a",.52,.56,.12,.1,0,.32,0,"toy"),Ht(i,"#b8742e",.58,.62,.08,.12,0,.32,-.02,"toy"),yn(i,0,.38,.07,.12,.06),{spheres:[{c:new y(0,.32,0),r:.36}],colors:["#e8b56a","#b8742e","#fff4dc"],height:.7}}function aM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#7be36b":"#e8384d",s=e?"gold":"lacquer",r=new Y(ti,en(n,s));r.scale.set(.3,.82,.3),r.position.y=.43,r.castShadow=!0,i.add(r);const a=new Y(ti,en("#fff4dc","lacquer"));a.scale.set(.305,.18,.305),a.position.y=.46,i.add(a);const o=new Y(ti,en("#c9d2e0","steel"));return o.scale.set(.27,.05,.27),o.position.y=.86,i.add(o),Ht(i,"#8a9ab8",.16,.03,.08,.01,.06,.9,0,"steel"),yn(i,0,.62,.28,.11,.07),{spheres:[{c:new y(0,.43,0),r:.42},{c:new y(.04,.9,0),r:.18,weak:!0}],colors:[n,"#fff4dc","#c9d2e0","#ffd23f"],height:1}}function oM(i,t){const e=t==="golden"?xn:t==="rare"?"#ff8fc6":"#fff4dc",n=t==="golden"?"gold":"toy";return Gt(i,e,0,.26,0,.22,.2,.2,n),Gt(i,e,.14,.34,.06,.15,.14,.14,n),Gt(i,e,-.13,.33,-.04,.14,.13,.13,n),Gt(i,e,.02,.44,.02,.13,.12,.12,n),Gt(i,"#ffd23f",.04,.12,.08,.1,.07,.08,"toy"),yn(i,0,.3,.19,.08,.05),{spheres:[{c:new y(0,.3,0),r:.34}],colors:[e,"#ffd23f","#fff4dc"],height:.6}}function lM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#c783ff":"#9aa8c0",s=e?"gold":"steel";Gt(i,n,0,.55,0,.6,.52,.55,s),Ht(i,"#3a3f4d",.5,.1,.5,.04,0,1.04,0,"steel"),Gt(i,"#3a3f4d",0,1.14,0,.09,.07,.09,"steel");const r=new Y(Or,en(n,s));r.scale.set(.12,.5,.12),r.rotation.z=Math.PI/2-.5,r.position.set(-.68,.72,0),r.castShadow=!0,i.add(r);const a=new Y(new Fn(.3,.06,8,18,Math.PI),en("#3a3f4d","steel"));return a.position.set(.5,.7,0),a.rotation.z=-Math.PI/2,i.add(a),yn(i,-.1,.62,.5,.17,.09),{spheres:[{c:new y(-.86,.86,0),r:.22,weak:!0},{c:new y(0,.55,0),r:.64,armor:!0}],colors:[n,"#3a3f4d","#c9d2e0"],height:1.25}}function cM(i){Ht(i,"#f4f0e4",1.5,.95,.95,.12,0,.5,0,"lacquer"),Ht(i,"#1f3e68",.9,.62,.06,.08,-.18,.5,.48,"steel"),Ht(i,"#3a3f4d",.32,.72,.06,.06,.52,.5,.48,"steel"),Gt(i,"#7be36b",.52,.72,.52,.06,.06,.03,"lacquer",!1);for(const t of[.52,.36])Gt(i,"#ffd23f",.52,t,.52,.05,.05,.03,"lacquer",!1);yn(i,-.18,.62,.53,.22,.11);for(const t of[1,-1]){const e=Ht(i,On,.24,.05,.05,.02,-.18+.22*t,.8,.53,"toy");e.rotation.z=-.35*t}return{spheres:[{c:new y(.52,.72,.4),r:.22,weak:!0},{c:new y(0,.5,0),r:.85,armor:!0}],colors:["#f4f0e4","#1f3e68","#7be36b","#3a3f4d"],height:1.05}}function hM(i){Ht(i,"#dff1ec",1.35,2.7,1.05,.16,0,1.38,0,"lacquer"),Ht(i,"#bfe0d8",1.37,.06,1.07,.02,0,1.92,0,"lacquer");for(const t of[2.35,1.4])Ht(i,"#c9d2e0",.08,.5,.1,.04,.5,t,.56,"steel");Gt(i,"#e8384d",-.42,2.3,.55,.13,.13,.06,"lacquer"),Gt(i,"#44c4ff",-.2,1.5,.55,.1,.1,.05,"lacquer"),Gt(i,"#ffd23f",-.45,1.2,.55,.11,.11,.05,"lacquer"),yn(i,-.05,1.05,.55,.26,.14);for(const t of[1,-1]){const e=Ht(i,On,.3,.07,.06,.02,-.05+.26*t,1.3,.56,"toy");e.rotation.z=-.35*t}return Ht(i,On,.5,.1,.06,.04,-.05,.7,.56,"toy"),{spheres:[{c:new y(-.42,2.3,.55),r:.3,weak:!0},{c:new y(0,1.1,0),r:1,armor:!0},{c:new y(0,2.2,0),r:.9,armor:!0}],colors:["#dff1ec","#bfe0d8","#c9d2e0","#e8384d"],height:2.8}}function uM(i,t){const e=t==="golden"?xn:t==="rare"?"#ff8fc6":"#f6f4ee",n=t==="golden"?"gold":"toy";for(const r of[1,-1]){const a=new Y(Or,en(e,n));a.scale.set(.3,.9,.05),a.rotation.set(r*.35,0,Math.PI/2),a.position.set(0,.42,.14*r),a.castShadow=!0,i.add(a)}const s=new Y(Or,en(t?e:"#d9e4f2",n));return s.scale.set(.12,.9,.05),s.rotation.z=Math.PI/2,s.position.set(0,.32,0),i.add(s),Ht(i,"#56baff",.3,.03,.02,.01,.12,.44,.27,"toy"),yn(i,-.12,.47,.25,.08,.05),{spheres:[{c:new y(0,.4,0),r:.32}],colors:[e,"#d9e4f2","#56baff"],height:.6}}function dM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#7be36b":"#e9e6dc";return Ht(i,n,1.15,.62,.85,.12,0,.36,0,e?"gold":"lacquer"),Ht(i,"#3a3f4d",1.1,.12,.8,.05,0,.72,0,"steel"),Ht(i,"#f6f4ee",.5,.04,.6,.02,-.68,.5,0,"toy").rotation.z=.25,Ht(i,"#3a3f4d",.7,.06,.03,.02,0,.3,.44,"steel"),Gt(i,"#7be36b",.42,.56,.44,.05,.05,.03,"lacquer",!1),Gt(i,"#ff4f5e",.3,.56,.44,.05,.05,.03,"lacquer",!1),yn(i,-.1,.5,.43,.17,.09),{spheres:[{c:new y(-.7,.52,0),r:.26,weak:!0},{c:new y(0,.4,0),r:.62}],colors:[n,"#3a3f4d","#f6f4ee"],height:.85}}function fM(i){const t=Ht(i,"#f6f4ee",.5,.62,.03,.02,0,.34,0,"toy");t.rotation.y=.2;for(let e=0;e<4;e++)Ht(i,"#9fb4d6",.34,.025,.035,.01,0,.5-e*.09,.005,"toy");return yn(i,0,.24,.03,.1,.06),{spheres:[{c:new y(0,.34,0),r:.33}],colors:["#f6f4ee","#9fb4d6"],height:.68}}function pM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#56baff":"#5d6477";Ht(i,n,.8,.95,.72,.1,0,.48,0,e?"gold":"steel"),Ht(i,"#2a2e38",.84,.16,.76,.05,0,1,0,"steel"),Ht(i,On,.56,.05,.1,.02,0,1.09,0,"toy");for(let r=0;r<6;r++)Ht(i,"#c9d2e0",.05,.08,.06,.01,-.22+r*.09,1.08,0,"steel");Ht(i,"#ffd23f",.3,.08,.03,.02,0,.18,.37,"lacquer"),yn(i,0,.66,.37,.15,.08);for(const r of[1,-1]){const a=Ht(i,On,.16,.035,.03,.01,.15*r,.78,.37,"toy");a.rotation.z=-.3*r}return{spheres:[{c:new y(0,1.08,0),r:.24,weak:!0},{c:new y(0,.48,0),r:.58,armor:!0}],colors:[n,"#2a2e38","#c9d2e0","#f6f4ee"],height:1.15}}function mM(i,t){const e=t==="golden",n=e?xn:t==="rare"?"#ff8fc6":"#2f5fa8",s=e?"gold":"lacquer";for(let a=0;a<5;a++){const o=a/5*Math.PI*2;Ht(i,"#3a3f4d",.42,.05,.07,.02,Math.cos(o)*.2,.1,Math.sin(o)*.2,"steel").rotation.y=-o,Gt(i,On,Math.cos(o)*.4,.06,Math.sin(o)*.4,.06,.06,.06,"toy",!1)}const r=new Y(ti,en("#c9d2e0","steel"));return r.scale.set(.05,.3,.05),r.position.y=.27,i.add(r),Ht(i,n,.7,.14,.62,.07,0,.47,0,s),Ht(i,n,.14,.72,.58,.07,.3,.86,0,s).rotation.z=-.12,yn(i,.2,.92,.3,.12,.07),{spheres:[{c:new y(.3,1.1,0),r:.22,weak:!0},{c:new y(0,.55,0),r:.5}],colors:[n,"#3a3f4d","#c9d2e0"],height:1.25}}function gM(i){Ht(i,"#e9e6dc",.7,1,.65,.1,0,.5,0,"lacquer");const t=new Y(ti,B("#7fc8ff",{transparent:!0,opacity:.7,spec:.8,gloss:30,rim:.4}));t.scale.set(.3,.62,.3),t.position.y=1.33,i.add(t),Gt(i,"#7fc8ff",0,1.66,0,.3,.14,.3,"lacquer");for(const[e,n]of[[.12,"#44c4ff"],[-.12,"#ff4f5e"]])Ht(i,n,.08,.1,.08,.02,-.36,.7,e,"lacquer");return yn(i,0,.62,.34,.14,.08),{spheres:[{c:new y(0,1.33,0),r:.34,weak:!0},{c:new y(0,.5,0),r:.55,armor:!0}],colors:["#e9e6dc","#7fc8ff","#44c4ff"],height:1.8}}function vM(i){Ht(i,"#e9e6dc",1.9,1.3,1.1,.14,0,.66,0,"lacquer"),Ht(i,"#3a3f4d",1.95,.14,1.14,.05,0,1.38,0,"steel"),Ht(i,"#5d6477",1.9,.5,1,.1,.1,1.72,-.05,"lacquer");for(let t=0;t<3;t++)Ht(i,"#c9d2e0",1.7,.06,.06,.02,0,.9-t*.22,.56,"steel");Ht(i,"#f6f4ee",.7,.05,.8,.02,-1.15,1,0,"toy").rotation.z=.2,Ht(i,"#2a2e38",.6,.3,.06,.04,.55,1.18,.56,"steel"),Gt(i,"#7be36b",.72,1.2,.6,.1,.1,.05,"lacquer"),Gt(i,"#ff4f5e",.42,1.2,.6,.06,.06,.04,"lacquer"),yn(i,-.3,1.12,.57,.26,.13);for(const t of[1,-1]){const e=Ht(i,On,.28,.06,.05,.02,-.3+.26*t,1.34,.57,"toy");e.rotation.z=-.35*t}return{spheres:[{c:new y(.72,1.2,.6),r:.28,weak:!0},{c:new y(0,.7,0),r:1,armor:!0},{c:new y(0,1.6,0),r:.85,armor:!0}],colors:["#e9e6dc","#3a3f4d","#f6f4ee","#7be36b"],height:2}}const Jl=["#ffd23f","#44c4ff","#ff8a1f","#7be36b","#c783ff"];function _M(i){Gt(i,"#ff6fae",0,0,0,.95,.95,.85,"toy"),Jl.forEach((t,e)=>{const n=new Y(new Fn(.9-e*.02,.07,10,40),en(t,"toy"));n.rotation.set(Math.PI/2,0,0),n.position.y=-.52+e*.26,n.scale.setScalar(Math.sqrt(Math.max(.05,1-Math.pow((-.52+e*.26)/.95,2)))),i.add(n)});for(let t=0;t<5;t++){const e=Math.PI/2+t*Math.PI*2/5,n=new Y(Or,en(Jl[t],"toy"));n.scale.set(.34,.85,.3),n.position.set(Math.cos(e)*1.15,Math.sin(e)*1.15,0),n.rotation.z=e-Math.PI/2,n.castShadow=!0,i.add(n),Gt(i,"#ff4f5e",Math.cos(e)*1.62,Math.sin(e)*1.62,0,.1,.1,.1,"lacquer")}for(const t of[1,-1])Gt(i,"#fffaf0",.3*t,.22,.74,.2,.22,.12,"toy",!1),Gt(i,On,.27*t,.18,.84,.1,.11,.06,"toy",!1);return Gt(i,"#e8384d",0,-.2,.8,.16,.08,.06,"lacquer",!1),Gt(i,xn,-.84,0,.36,.24,.24,.12,"gold").rotation.y=-1.1,{spheres:[{c:new y(-.86,0,.36),r:.36,weak:!0},{c:new y(0,0,0),r:1.25}],colors:["#ff6fae",...Jl],height:1.8}}function Ql(i,t){const e=t==="blocker"?"#82909e":t==="icebox"?"#70daff":"#79b969",n=new Y(new ni(.9,.85,.8),B(e));n.position.y=.48,i.add(n);for(const s of[-.28,.28]){const r=new Y(new ni(.11,.88,.84),B(t==="blocker"?"#e4af39":"#e8eff7"));r.position.set(s,.48,0),i.add(r)}return{spheres:[{c:new y(0,.48,0),r:.56}],colors:[e,"#e8eff7"],height:.92}}const xM={blocker:i=>Ql(i,"blocker"),supply:i=>Ql(i,"supply"),icebox:i=>Ql(i,"icebox"),duck:(i,t)=>Fd(i,t),duckling:(i,t)=>Fd(i,t,!0),teddy:(i,t)=>Od(i,t),bigteddy:(i,t)=>Od(i,t,!0),box:(i,t)=>eM(i,t),candy:i=>nM(i),popper:i=>iM(i),pinata:i=>_M(i),toaster:(i,t)=>sM(i,t),toast:i=>rM(i),soda:(i,t)=>aM(i,t),popcorn:(i,t)=>oM(i,t),kettle:(i,t)=>lM(i,t),microwave:i=>cM(i),fridge:i=>hM(i),plane:(i,t)=>uM(i,t),printer:(i,t)=>dM(i,t),paper:i=>fM(i),shredder:(i,t)=>pM(i,t),chair:(i,t)=>mM(i,t),cooler:i=>gM(i),xerox:i=>vM(i)},zd={duck:1,duckling:.5,teddy:1,bigteddy:2.1,box:1,candy:1,popper:1,pinata:1.25,toaster:1,toast:1,soda:1,popcorn:1,kettle:1,microwave:1.6,fridge:1.1,plane:1,printer:1,paper:1,shredder:1,chair:1,cooler:1.7,xerox:1.2},Bd={duck:.35,duckling:.35,teddy:-.55,bigteddy:-.55,box:.15,candy:0,popper:0,pinata:.25,toaster:-.35,toast:-.3,soda:-.3,popcorn:-.2,kettle:-.3,microwave:-.3,fridge:-.35,plane:.25,printer:-.35,paper:-.25,shredder:-.3,chair:-.4,cooler:-.3,xerox:-.3},Vd=B("#e8384d",{spec:.5,gloss:24,rim:.3}),MM=Ke("#c9d2e0",{spec:.5}),yM=B("#bfe9ff",{transparent:!0,opacity:.5,spec:.9,gloss:30,rim:.6,emissive:"#3f8fd0",emissiveIntensity:.25}),bM=new y;class pS{constructor(t,e=null){this.kind=t,this.variant=e,this.def=t0[t],this.root=new nt,this.body=new nt,this.root.add(this.body);const n=zd[t]??1,s=xM[t](this.body,e);if(this.body.scale.setScalar(n),this.body.rotation.y=Bd[t]??0,this.spheres=s.spheres.map(r=>({...r,c:r.c.clone().applyAxisAngle(bM.set(0,1,0),this.body.rotation.y).multiplyScalar(n),r:r.r*n})),this.colors=s.colors,this.height=s.height*n,this.radius=Math.max(...this.spheres.map(r=>Math.hypot(r.c.x,r.c.z)+r.r))*.8,this.hp=this.maxHp=1,this.alive=!1,this.gen=0,this.t=Math.random()*10,this.punch=0,this.punchV=0,this.pop=1,this.x=0,this.z=0,this.speed=this.def.speed,this.state="ride",this.frozenT=0,this.burnT=0,this.burnDps=0,this.pinT=0,this.slowT=0,this.slowK=1,this.skewer=0,this.ice=null,this.pin=null,this.halo=null,Nd[e]){this.halo=new wr(new ks({map:Ho(),color:Nd[e],transparent:!0,opacity:.5,blending:Qe,depthWrite:!1}));const r=Math.max(this.height,this.radius*2)*1.5;this.halo.scale.set(r,r,1),this.halo.position.set(0,this.height*.5,-.45),this.halo.renderOrder=2,this.root.add(this.halo)}}get held(){return this.frozenT>0||this.pinT>0}get pace(){return this.slowT>0?this.speed*this.slowK:this.speed}setPin(t){if(t&&!this.pin){this.pin=new nt;const e=new Y(ti,Vd);e.scale.set(.16,.12,.16),e.position.y=.3;const n=new Y(ti,Vd);n.scale.set(.08,.16,.08),n.position.y=.17;const s=new Y(ti,MM);s.scale.set(.02,.2,.02),s.position.y=0,this.pin.add(e,n,s),this.pin.rotation.z=.25,this.root.add(this.pin)}this.pin&&(this.pin.visible=t,this.pin.position.y=this.height*.9)}setIce(t){if(t&&!this.ice){const e=Math.max(...this.spheres.map(n=>n.r))*1.25;this.ice=new Y(new Xs(1,1),yM),this.ice.scale.set(e*1.1,this.height*.62,e*1.1),this.ice.position.y=this.height*.5,this.ice.renderOrder=3,this.root.add(this.ice)}this.ice&&(this.ice.visible=t)}sphereWorld(t,e){return e.copy(this.spheres[t].c).applyMatrix4(this.root.matrixWorld)}aimPoint(t){const e=this.spheres.findIndex(n=>n.weak);return this.sphereWorld(e>=0?e:this.spheres.length-1,t)}hit(t=1){this.punchV+=5*t}update(t){this.t+=t,this.pop=Math.min(1,this.pop+t/.3),this.halo&&(this.halo.material.opacity=(.4+.18*Math.sin(this.t*3.2))*this.pop),this.punchV+=(-300*this.punch-18*this.punchV)*t,this.punch+=this.punchV*t;const e=pn.clamp(this.punch*.06,-.12,.16),n=this.body,s=this.t,r=(zd[this.kind]??1)*(this.pop<1?1+2.7*Math.pow(this.pop-1,3)+1.7*Math.pow(this.pop-1,2):1);if(n.scale.set(r*(1+e),r*(1-e*1.3),r*(1+e)),this.frozenT>0&&(this.frozenT=Math.max(0,this.frozenT-t)),(this.frozenT>0||this.ice)&&this.setIce(this.frozenT>0),this.slowT>0&&(this.slowT=Math.max(0,this.slowT-t)),this.pinT>0&&(this.pinT=Math.max(0,this.pinT-t)),(this.pinT>0||this.pin)&&this.setPin(this.pinT>0),!this.held)switch(this.kind){case"duck":n.rotation.z=Math.sin(s*3.2)*.08,n.position.y=Math.abs(Math.sin(s*6.4))*.03;break;case"duckling":n.position.y=Math.abs(Math.sin(s*11))*.09;break;case"teddy":case"bigteddy":n.rotation.z=Math.sin(s*(this.kind==="teddy"?5:2.6))*.09;break;case"box":n.rotation.z=Math.sin(s*7)*.02;break;case"candy":n.rotation.x=s*3;break;case"toaster":case"microwave":n.position.y=Math.abs(Math.sin(s*8))*.03;break;case"toast":case"popcorn":n.position.y=Math.abs(Math.sin(s*10))*.08,n.rotation.z=Math.sin(s*6)*.1;break;case"soda":case"kettle":n.rotation.z=Math.sin(s*4.2)*.07;break;case"plane":n.position.y=.1+Math.sin(s*7)*.08,n.rotation.x=Math.sin(s*5)*.25;break;case"paper":n.rotation.x=Math.sin(s*9)*.3,n.position.y=Math.abs(Math.sin(s*9))*.06;break;case"printer":case"shredder":case"cooler":n.position.y=Math.abs(Math.sin(s*9))*.03,n.rotation.z=Math.sin(s*4.5)*.03;break;case"chair":n.rotation.y=Bd.chair+Math.sin(s*2.4)*.35;break;case"xerox":n.position.y=Math.abs(Math.sin(s*14))*.012,n.rotation.z=pn.clamp(this.punch*.02,-.06,.06);break;case"fridge":n.scale.y*=1+Math.sin(s*1.6)*.015,n.rotation.z=pn.clamp(this.punch*.02,-.08,.08);break;case"popper":n.rotation.z=Math.sin(s*23)*.05,n.position.y=Math.abs(Math.sin(s*9))*.04;break;case"pinata":n.rotation.z=Math.sin(s*1.3)*.12+pn.clamp(this.punch*.04,-.3,.3);break}}}const SM={pistol:{length:.64,diameter:.3,points:[[0,-1],[.82,-1],[1,-.9],[1,-.4],[.86,-.22],[.48,-.06],[0,0]]},rifle:{length:.88,diameter:.28,points:[[0,-1],[.75,-1],[1,-.88],[1,-.49],[.77,-.27],[.35,-.08],[0,0]]},shell:{length:.4,diameter:.38,points:[[0,-1],[.65,-.88],[.95,-.66],[1,-.5],[.95,-.34],[.65,-.12],[0,0]]}};let sa;function wM(){if(sa)return sa;sa={};for(const[i,t]of Object.entries(SM)){const e=new Mn(t.points.map(([s,r])=>new J(s*t.diameter*.5,r*t.length)),12);e.rotateZ(-Math.PI/2);const n=new Fn(t.diameter*.47,t.diameter*.055,4,12);n.rotateY(Math.PI/2),n.translate(-t.length*.79,0,0),sa[i]={geometry:e,band:n,length:t.length,diameter:t.diameter}}return sa}function EM(i){return{body:B("#df9e49",{spec:.7,gloss:34,sheen:.12,rim:.2,emissive:i,emissiveIntensity:.045}),band:B("#ffe296",{spec:.85,gloss:26,rim:.1})}}const Gd=B("#d8f4ff",{emissive:"#56c8ff",emissiveIntensity:1.3,spec:.6,gloss:30,rim:.5});function Bp(i){const t=new nt;if(["plasma","electric","laser","rail"].includes(i)){const s={plasma:[.15,.85,1.7],electric:[.55,.2,1.8],laser:[1.8,.08,.2],rail:[.12,1.5,1.2]}[i],r=new Ge({color:new _t().setRGB(2.5,2.9,3),toneMapped:!1}),a=new Ge({color:new _t().setRGB(...s),transparent:!0,opacity:.65,depthWrite:!1,blending:Qe,toneMapped:!1}),o=i==="plasma"?new Xs(1,0):new Yi(1,0),l=i==="rail"?1.05:i==="laser"?.85:.72,c=new Y(o,r);c.position.x=-l*.5,c.scale.set(l*.4,.1,.1),t.add(c);const h=new Y(o,a);if(h.position.x=-l*.5,h.scale.set(l*.52,.22,.22),t.add(h),i==="plasma"||i==="electric")for(let u=0;u<2;u++){const d=new Y(new Fn(.2,.025,3,i==="electric"?5:8),a);d.position.x=-l*(.35+u*.3),d.rotation.set(u*.7,Math.PI/2,u*.8),t.add(d)}if(i==="rail")for(const u of[-1,1]){const d=new Y(new Yi(1,0),a);d.scale.set(.44,.07,.07),d.position.set(-.55,0,u*.16),t.add(d)}return{g:t,len:l}}if(i==="arrow"){const s=vs("arrow"),r=102*Se*.95;return s.scale.set(Se*.95,Se*1.7,Se*1.7),s.position.x=-r,t.add(s),{g:t,len:r}}if(i==="grenade"){const s=new nt;s.add(gt(0,7,15.8,et.copper));const r=new Y(new Xs(15,0),et.olive);r.scale.x=1.35,r.position.x=18;const a=new Y(new Yi(6,0),et.orange);a.position.x=36,s.add(r,a),s.traverse(l=>l.isMesh&&(l.castShadow=!0));const o=42*Se*.85;return s.scale.setScalar(Se*.85),s.position.x=-o,t.add(s),{g:t,len:o}}if(i==="bolt"){const s=vs("bolt"),r=73*Se*.95;return s.scale.set(Se*.95,Se*1.7,Se*1.7),s.position.x=-r,t.add(s),{g:t,len:r}}if(i==="staple"){const s=et.barrel,r=new Y(new ni(.05,.05,.3),s);r.position.x=-.16,t.add(r);for(const a of[.125,-.125]){const o=new Y(new ni(.16,.05,.05),s);o.position.set(-.08,0,a),t.add(o)}return{g:t,len:.18}}if(i==="saw"){const s=vs("saw");return s.scale.setScalar(Se*1.1),s.position.x=-46*Se*1.1,t.add(s),{g:t,len:46*Se*1.1}}const e=new Yi(1,0),n=new Y(e,Gd);n.scale.set(.46,.15,.15),n.position.x=-.46,t.add(n);for(const s of[1,-1]){const r=new Y(e,Gd);r.scale.set(.24,.07,.07),r.position.set(-.66,s*.1,0),r.rotation.z=s*.45,t.add(r)}return{g:t,len:.92}}const tc=new y(1,0,0),TM=new y(0,0,1),Pi=new Ue,Vp=new y,ra=(i,t)=>i+Math.random()*(t-i),Ve=(i,t,e)=>new _t().setRGB(i,t,e),ma={arrow:{color:Ve(.7,.9,1.1),speed:42,width:.032},bolt:{color:Ve(1.1,.85,.35),speed:48,width:.034},staple:{color:Ve(.8,1,1.2),speed:52,width:.045},grenade:{color:Ve(1.5,.48,.05),speed:32,width:.08},saw:{color:Ve(1.1,.62,.14),speed:38,width:.052},ice:{color:Ve(.15,1.1,1.8),speed:42,width:.072},plasma:{color:Ve(.2,.95,1.9),speed:42,width:.085},electric:{color:Ve(.52,.24,1.9),speed:55,width:.068},laser:{color:Ve(1.8,.12,.25),speed:68,width:.05},rail:{color:Ve(.12,1.5,1.25),speed:72,width:.08}},mS=i=>{var e;const t=((e=ma[i])==null?void 0:e.color)??Ve(1,.72,.12);return[Ve(3,3,2.8),t,t.clone().multiplyScalar(.55)]};function AM(){const i=new Mn([[0,-1],[.55,-.65],[1,-.12],[.6,0],[0,0]].map(t=>new J(...t)),6);return i.rotateZ(-Math.PI/2),i}function gS(){return new De({uniforms:{uCore:{value:Ve(3,3,2.8)},uMid:{value:Ve(1,.7,.15)},uEdge:{value:Ve(1,.24,.03)},uCut:{value:0},uHole:{value:0}},transparent:!0,depthWrite:!1,blending:Qe,toneMapped:!1,vertexShader:"varying vec3 vP; void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP; uniform vec3 uCore,uMid,uEdge; uniform float uCut;
      void main(){float tail=clamp(-vP.x,0.,1.);float r=length(vP.yz);
        vec3 hot=mix(uCore,uMid,smoothstep(.12,.6,r)); hot=mix(hot,uEdge,tail*.6+uCut*.3);
        gl_FragColor=vec4(hot,(1.-tail)*.75);}`})}function RM(){return new De({uniforms:{uAge:{value:0},uCore:{value:Ve(3,3,2.8)},uMid:{value:Ve(1,.6,.1)},uEdge:{value:Ve(1,.2,.02)},uHole:{value:.6}},transparent:!0,depthWrite:!1,side:Oe,blending:Qe,toneMapped:!1,vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform float uAge,uHole;uniform vec3 uCore,uMid,uEdge;
      void main(){float radial=length(vP.xy);if(radial<uHole)discard;
        float noise=fract(sin(dot(floor(vP*11.),vec3(12.98,78.23,37.72)))*43758.5);
        if(noise<max(0.,uAge-.35))discard;
        vec3 c=mix(uCore,uMid,smoothstep(.15,.6,uAge));c=mix(c,uEdge,smoothstep(.55,1.,uAge));
        gl_FragColor=vec4(c,(1.-uAge)*.38);}`})}class vS{constructor(t){this.scene=t,this.pool=[],this.serial=0,this.shellGeometry=new Ye(1,12,5,0,Math.PI*2,0,Math.PI/2),this.shellGeometry.rotateX(Math.PI/2),this.ringGeometry=new Fn(.86,.045,4,20,Math.PI*1.78),this.sparkGeometry=new Yi(1,0),this.coreGeometry=new Xs(1,0);for(let e=0;e<18;e++){const n=new nt,s=RM(),r=new Y(this.shellGeometry,s),a=new Y(this.ringGeometry,new Ge({color:Ve(2,1,.1),transparent:!0,depthWrite:!1,toneMapped:!1})),o=new Y(this.coreGeometry,new Ge({color:Ve(3,3,2.8),toneMapped:!1})),l=new Ph(this.sparkGeometry,new Ge({vertexColors:!1,toneMapped:!1}),12);l.instanceMatrix.setUsage(wh),l.frustumCulled=!1,n.add(r,a,o,l),n.visible=!1,t.add(n),this.pool.push({g:n,shell:r,ring:a,core:o,bits:l,mat:s,active:!1,t:0,size:1,pal:null,particles:[]})}}emit(t,e,n,s,{sparks:r=6,bite:a=0,ring:o=!1,soft:l=!1,shell:c=!0}={}){const h=this.pool.find(u=>!u.active)??this.pool.reduce((u,d)=>u.t>d.t?u:d);h.active=!0,h.t=0,h.life=o?.3:.24,h.size=Math.min(1.4,Math.max(.12,a*.95||n*.3)),h.pal=s,h.g.position.copy(t).addScaledVector(e,.04),h.g.quaternion.setFromUnitVectors(TM,Vp.copy(e).normalize()),h.g.visible=!0,h.ringOnly=o||!c,h.soft=l,h.shell.visible=!o&&c,h.core.visible=!o&&c,h.ring.visible=o,h.mat.uniforms.uHole.value=a>0?.78:.55,h.mat.uniforms.uCore.value.copy(s[0]),h.mat.uniforms.uMid.value.copy(s[1]),h.mat.uniforms.uEdge.value.copy(s[2]),h.ring.material.color.copy(s[1]).multiplyScalar(1.5),h.ring.rotation.z=ra(0,Math.PI*2),h.particles=[],h.bits.count=Math.min(12,r),h.bits.visible=r>0;for(let u=0;u<h.bits.count;u++){const d=u/h.bits.count*Math.PI*2+ra(-.2,.2);h.particles.push({dir:new y(Math.cos(d),Math.sin(d),ra(.25,1.1)).normalize(),speed:ra(1.5,3.5),w:ra(.018,.045)})}this.pose(h,0)}pose(t,e){const n=.45+.9*(1-Math.pow(1-e,3)),s=t.size;t.shell.scale.set(s*n,s*n,s*(.16+e*.32)),t.mat.uniforms.uAge.value=e,t.ring.scale.setScalar(s*(.55+e*.7)),t.ring.material.opacity=(1-e)*(t.soft?.55:1),t.core.visible=!t.ringOnly&&e<.17,t.core.scale.setScalar(s*.15*(1-e)),t.core.position.z=s*.08;for(let r=0;r<t.bits.count;r++){const a=t.particles[r],o=s*(.18+e*a.speed);Pi.position.copy(a.dir).multiplyScalar(o),Pi.quaternion.setFromUnitVectors(new y(0,1,0),a.dir),Pi.scale.set(a.w*(1-e),s*.2*(1-e),a.w*(1-e)),Pi.updateMatrix(),t.bits.setMatrixAt(r,Pi.matrix),t.bits.setColorAt(r,CM(t.pal,e))}t.bits.instanceMatrix.needsUpdate=!0,t.bits.instanceColor&&(t.bits.instanceColor.needsUpdate=!0)}update(t){for(const e of this.pool)if(e.active){e.t+=t;const n=e.t/e.life;n>=1?(e.active=!1,e.g.visible=!1):this.pose(e,n)}}clear(){for(const t of this.pool)t.active=!1,t.g.visible=!1}}function CM(i,t){return PM.copy(i[0]).lerp(i[1],Math.min(1,t*3)).lerp(i[2],Math.max(0,t-.35))}const PM=new _t;class LM{constructor(t){this.scene=t,this.pools=new Map,this.trailGeometry=AM()}make(t){const{g:e,len:n}=Bp(t),s=new nt,r=new nt;r.position.x=-n/2,e.position.x=n/2,r.add(e),s.add(r);const a=new Ge({color:ma[t].color,transparent:!0,opacity:.62,depthWrite:!1,blending:Qe,toneMapped:!1}),o=new Ph(this.trailGeometry,a,7);return o.instanceMatrix.setUsage(wh),o.frustumCulled=!1,o.count=0,s.visible=o.visible=!1,this.scene.add(s,o),{kind:t,g:s,spin:r,trail:o,len:n,active:!1,t:0,from:new y,to:new y,dir:new y,history:[],callback:null,getTo:null}}fire(t,e,n,s,r,a,o){var u;ma[o]||(o="plasma");let l=this.pools.get(o);l||(l=[],this.pools.set(o,l));let c=l.find(d=>!d.active);!c&&l.length<8?(c=this.make(o),l.push(c)):c||(c=l.reduce((d,f)=>d.t>f.t?d:f),(u=c.callback)==null||u.call(c,c.to.clone())),c.active=!0,c.t=0,c.from.copy(t),e(c.to),c.getTo=e,c.callback=n;const h=ma[o];c.dur=Math.max(.085,Math.min(.28,t.distanceTo(c.to)/Math.min(s,h.speed))),c.size=Math.max(.65,Math.min(1.3,r))*(["arrow","bolt","saw"].includes(o)?1:1.3),c.g.position.copy(t),c.g.scale.setScalar(c.size),c.dir.subVectors(c.to,t).normalize(),c.g.quaternion.setFromUnitVectors(tc,c.dir),c.history=[t.clone()],c.trail.count=0,c.g.visible=!0}update(t){for(const e of this.pools.values())for(const n of e)if(n.active){n.t+=t;const s=n.t/n.dur;if(n.callback&&(n.getTo(n.to),n.g.position.lerpVectors(n.from,n.to,Math.min(1,s)),n.dir.subVectors(n.to,n.from).normalize(),n.g.quaternion.setFromUnitVectors(tc,n.dir),n.kind==="saw"?n.spin.rotation.z=n.t*32:["ice","plasma","electric","rail"].includes(n.kind)&&(n.spin.rotation.x=n.t*9),n.history.unshift(n.g.position.clone().addScaledVector(n.dir,-n.len*n.size)),n.history.length=Math.min(8,n.history.length)),s>=1&&n.callback){const o=n.callback;n.callback=null,o(n.to.clone()),n.g.visible=!1}const r=s<=1?1:Math.max(0,1-(n.t-n.dur)/.085),a=ma[n.kind];n.trail.visible=r>0,n.trail.count=Math.max(0,n.history.length-1),n.trail.material.opacity=.62*r;for(let o=0;o<n.trail.count;o++){const l=n.history[o],c=n.history[o+1],h=Vp.subVectors(l,c),u=h.length();Pi.position.copy(l),Pi.quaternion.setFromUnitVectors(tc,h.normalize());const d=a.width*n.size*(1-o/8)*r;Pi.scale.set(Math.max(.001,u),d,d),Pi.updateMatrix(),n.trail.setMatrixAt(o,Pi.matrix)}n.trail.instanceMatrix.needsUpdate=!0,r<=0&&(n.active=!1,n.g.visible=n.trail.visible=!1,n.getTo=null)}}clear(){for(const t of this.pools.values())for(const e of t)e.active=!1,e.g.visible=e.trail.visible=!1,e.getTo=e.callback=null}}const IM=`
  attribute vec2 aCorner;
  attribute vec4 aData;   // x: half-size, y: age 0..1, z: seed, w: opacity
  attribute vec3 aTint;
  attribute vec2 aShape; // stretch and initial drift angle
  varying vec2 vUv;
  varying float vAge;
  varying float vSeed;
  varying float vAlpha;
  varying vec3 vTint;
  void main() {
    vUv = aCorner;
    vAge = aData.y;
    vSeed = aData.z;
    vAlpha = aData.w;
    vTint = aTint;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec2 p = aCorner * vec2(aShape.x, 1.0) * aData.x;
    float c = cos(aShape.y), s = sin(aShape.y);
    mv.xy += mat2(c, s, -s, c) * p;
    gl_Position = projectionMatrix * mv;
  }`,DM=`
  uniform float uTime;
  varying vec2 vUv;
  varying float vAge;
  varying float vSeed;
  varying float vAlpha;
  varying vec3 vTint;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  void main() {
    vec2 p = vUv;
    float t = uTime * 0.16 + vSeed * 13.0;
    float n = noise(p * 2.8 + vec2(vSeed * 7.0, -t));
    vec2 drift = vec2(noise(p * 2.0 + t) - 0.5, n - 0.5) * 0.26;
    float r = length((p + drift) * vec2(1.0, 1.08));
    float body = exp(-r * r * 2.6) * (1.0 - smoothstep(0.66, 1.0, r));
    float fade = 1.0 - smoothstep(0.22, 1.0, vAge);
    float a = body * fade * vAlpha * (0.7 + n * 0.3);
    if (a < 0.003) discard;
    // Broad lit upper lobe and a cooler lower edge give each puff readable volume.
    float light = 0.76 + 0.20 * smoothstep(-0.7, 0.65, p.y) + n * 0.12;
    vec3 col = vTint * light;
    gl_FragColor = vec4(col, a);
  }`,UM=i=>1-(1-i)*(1-i);class NM{constructor(t,e=240){this.max=e,this.items=[];for(let o=0;o<e;o++)this.items.push({active:!1,t:0,life:1,size:.1,drag:3,alpha:1,stretch:1,angle:0,seed:Math.random(),pos:new y,vel:new y,tint:new _t});this.next=0,this.time=0;const n=new We,s=new Float32Array(e*8),r=[],a=[-1,-1,1,-1,1,1,-1,1];for(let o=0;o<e;o++){s.set(a,o*8);const l=o*4;r.push(l,l+1,l+2,l,l+2,l+3)}this.pos=new tn(new Float32Array(e*12),3),this.data=new tn(new Float32Array(e*16),4),this.shapes=new tn(new Float32Array(e*8),2),this.tints=new tn(new Float32Array(e*12),3);for(const o of[this.pos,this.data,this.tints,this.shapes])o.setUsage(wh);n.setAttribute("position",this.pos),n.setAttribute("aCorner",new tn(s,2)),n.setAttribute("aData",this.data),n.setAttribute("aTint",this.tints),n.setAttribute("aShape",this.shapes),n.setIndex(r),this.mat=new De({uniforms:{uTime:{value:0}},vertexShader:IM,fragmentShader:DM,transparent:!0,depthWrite:!1}),this.mesh=new Y(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,t.add(this.mesh)}spawn(t,e,n,s,r,a=3,o=1,l=1){let c=null;for(let h=0;h<this.max;h++){const u=this.items[(this.next+h)%this.max];if(!u.active){c=u,this.next=(this.next+h+1)%this.max;break}}c||(c=this.items[this.next],this.next=(this.next+1)%this.max),c.active=!0,c.t=0,c.life=s,c.size=n,c.drag=a,c.alpha=o,c.stretch=l,c.angle=Math.atan2(e.y,e.x),c.seed=Math.random(),c.pos.copy(t),c.vel.copy(e),c.tint.copy(r)}update(t){this.time=(this.time+t)%200,this.mat.uniforms.uTime.value=this.time;const e=this.pos.array,n=this.data.array,s=this.tints.array;for(let r=0;r<this.max;r++){const a=this.items[r];let o=0,l=0,c=0;a.active&&(a.t+=t,l=a.t/a.life,l>=1?(a.active=!1,l=0):(a.vel.multiplyScalar(Math.exp(-a.drag*t)),a.vel.y+=.9*t,a.pos.addScaledVector(a.vel,t),o=a.size*(.8+1.75*UM(l)),c=a.alpha*Math.min(1,a.t/.022)));for(let h=0;h<4;h++){const u=r*4+h;e[u*3]=a.pos.x,e[u*3+1]=a.pos.y,e[u*3+2]=a.pos.z,n[u*4]=o,n[u*4+1]=l,n[u*4+2]=a.seed,n[u*4+3]=c,this.shapes.array[u*2]=1+(a.stretch-1)*(1-l*.6),this.shapes.array[u*2+1]=a.angle,s[u*3]=a.tint.r,s[u*3+1]=a.tint.g,s[u*3+2]=a.tint.b}}this.shapes.needsUpdate=!0,this.pos.needsUpdate=!0,this.data.needsUpdate=!0,this.tints.needsUpdate=!0}}const Xo=Wo.map(i=>({color:new _t(i.color).multiplyScalar(i.energy),accent:new _t(i.accent).multiplyScalar(i.energy),smoke:new _t(i.color).lerp(new _t("#eef1f8"),.85)})),go=i=>Xo[Math.min(i,Xo.length-1)];function Hd(i){return i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        vec4 texel = texture2D(map, vMapUv);
        diffuseColor *= vec4(vec3(max(max(texel.r, texel.g), texel.b)), texel.a);
      #endif
    `)},i.customProgramCacheKey=()=>"rarity-tint",i}const Gp=24,he=new y,En=new y,Wd=new ts,ga=new y(0,1,0),rh=new y(0,0,1),xt=(i,t)=>i+Math.random()*(t-i),Xd=i=>1-(1-i)*(1-i),FM={pistol:{body:Vh,bodyMat:"brass",head:null,off:-13,scale:1,size:.13},rifle:{body:Pp,bodyMat:"brass",head:null,off:-20,scale:1,size:.13},"rifle-long":{body:Lp,bodyMat:"brass",head:null,off:-25.5,scale:1,size:.13},shell:{body:Ip,bodyMat:"shell",head:Gh,headMat:"brass",off:-22,scale:.95,size:.17}},OM={scale:1,smoke:3,rings:1,bubble:!0},qd=3.3,kM=2,zM=.115,BM={side:[1.6,2.8],up:[4.5,6],back:[.3,1.2]},$d=9,VM=.13,vr={arrow:{speed:46,arc:.035,arcMax:.9,spin:4,pool:24,stick:.65},bolt:{speed:52,arc:.02,arcMax:.6,spin:6,pool:16,stick:.8},staple:{speed:62,arc:0,arcMax:0,spin:0,pool:40,stick:.5},grenade:{speed:26,arc:.16,arcMax:2.2,spin:13,pool:12,tumble:!0},saw:{speed:30,arc:.02,arcMax:.5,spin:32,pool:10,tumble:!0},ice:{speed:40,arc:0,arcMax:0,spin:16,pool:20},plasma:{speed:38,arc:0,arcMax:0,spin:10,pool:20}},GM=.45;function Ie(i,t,e){return new _t().setRGB(i,t,e)}const HM=Ie(3.2,2.8,1.9),WM={frost:{star:Ie(.9,1.7,2.6),glow:Ie(.35,.9,1.8),hot:Ie(2.2,2.8,3.2),light:new _t("#7fd4ff")},spark:{star:Ie(1.4,1.5,2.8),glow:Ie(.6,.5,2),hot:Ie(2.6,2.6,3.4),light:new _t("#8fa0ff")},rail:{star:Ie(.8,2,2.8),glow:Ie(.3,1.1,2),hot:Ie(2.4,3,3.4),light:new _t("#6fe8ff")}},Yd=new _t("#ff8a3a"),XM=new _t("#ff3a3a"),qM={laser:Ie(2.8,.3,.25),rail:Ie(.5,1.9,2.8)};function $M(){return new De({transparent:!0,depthWrite:!1,blending:Qe,uniforms:{uColor:{value:new _t},uAlpha:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      uniform float uAlpha;
      void main() {
        vec2 p = clamp(vUv, vec2(0.0), vec2(1.0));
        float across = abs(p.y * 2.0 - 1.0);
        float glow = 1.0 - smoothstep(0.0, 1.0, across);
        float core = 1.0 - smoothstep(0.12, 0.32, across);
        float ends = smoothstep(0.0, 0.015, p.x) * (1.0 - smoothstep(0.985, 1.0, p.x));
        float a = (glow * glow * 0.55 + core) * ends * uAlpha;
        if (a <= 0.001) discard;
        gl_FragColor = vec4(mix(uColor, vec3(2.2), core * 0.7), min(a, 1.0));
      }`})}const YM=new Zt,br=new y,ah=new y,Ri=new y;function Ts(i,t){br.copy(t).normalize(),Ri.copy(rh).addScaledVector(br,-br.dot(rh)),Ri.lengthSq()<1e-6&&Ri.set(0,1,0),Ri.normalize(),ah.crossVectors(Ri,br),i.quaternion.setFromRotationMatrix(YM.makeBasis(br,ah,Ri))}function jM(){return new De({transparent:!0,depthWrite:!1,blending:Qe,uniforms:{uColor:{value:Ie(1.9,1.05,.35)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      void main() {
        // MSAA edge samples can extrapolate UVs beyond the triangle. A fractional
        // pow(negative UV, ...) produces NaN, which contaminates the HDR bloom buffers.
        // Clamp before shaping and use a polynomial with no undefined domain.
        vec2 p = clamp(vUv, vec2(0.0), vec2(1.0));
        float across = abs(p.y * 2.0 - 1.0);
        float taper = mix(0.06, 1.0, p.x);
        float edge = 1.0 - smoothstep(taper * 0.55, taper, across);
        float core = 1.0 - smoothstep(taper * 0.08, taper * 0.26, across);
        float along = p.x * p.x * (2.0 - p.x);
        float a = along * edge * 0.72;
        if (a <= 0.001) discard;
        gl_FragColor = vec4(mix(uColor, vec3(2.0, 1.9, 1.5), core * 0.65), a);
      }`})}class hi{constructor(t,e){this.items=[];for(let n=0;n<e;n++)this.items.push(t(n));this.i=0}get(){for(let e=0;e<this.items.length;e++){const n=this.items[(this.i+e)%this.items.length];if(!n.active)return this.i=(this.i+e+1)%this.items.length,n}const t=this.items[this.i];return this.i=(this.i+1)%this.items.length,t}}class ec{constructor(t,{size:e=.1,restitution:n=.38,life:s=6,onDone:r=null,ground:a=Up}={}){this.obj=t,this.ground=a,this.size=e,this.rest=n,this.onDone=r,this.life=s,this.vel=new y,this.ang=new y,this.settled=!1,this.t=0,this.bounces=0,this.baseScale=t.scale.x,this.active=!0}step(t){var n;const e=this.obj.position;if(this.t+=t,this.settled){this.obj.quaternion.slerp(this.flatQ,Math.min(1,t*14));const s=this.t-this.settleT;if(s>this.life){const r=Math.max(0,1-(s-this.life)/.4);if(this.obj.scale.setScalar(this.baseScale*r),r<=0)return this.active=!1,this.obj.scale.setScalar(this.baseScale),(n=this.onDone)==null||n.call(this,this),!1}}else{const s=this.ground(e.x,e.y-this.size,e.z);this.vel.y-=Gp*t,e.addScaledVector(this.vel,t);const r=this.ang.length();if(r>1e-4&&(Wd.setFromAxisAngle(he.copy(this.ang).divideScalar(r),r*t),this.obj.quaternion.premultiply(Wd)),e.y<s+this.size&&(e.y=s+this.size,this.vel.y<0)){const a=-this.vel.y;if(this.vel.y=a*this.rest,this.vel.x*=.55,this.vel.z*=.55,this.ang.multiplyScalar(.5).add(he.set(xt(-6,6),xt(-6,6),xt(-6,6))),this.bounces++,a<1.4||this.bounces>5){this.settled=!0,this.vel.set(0,0,0),this.settleT=this.t;const o=he.set(0,0,1).applyQuaternion(this.obj.quaternion);o.y<0&&o.negate(),this.flatQ=new ts().setFromUnitVectors(o,ga).multiply(this.obj.quaternion)}}}return!0}}class _S{constructor(t,{ground:e=Up,smoke:n=260,projectileImpacts:s=!0,polygon:r=!1}={}){this.ground=e,this.projectileImpacts=s,this.farScale=1,this.scene=t,this.bodies=[],this.polygon=r?new LM(t):null,this.wisps=[];const a=new Qn(qd,kM);a.translate(qd*(.5-.08),0,0);const o=_x(),l=Ho(),c=new Mn([[0,0],[.13,.04],[.23,.25],[.12,.58],[0,1.1]].map(([v,R])=>new J(v,R)),8);c.rotateZ(-Math.PI/2),this.flashes=new hi(()=>{const v=new Y(a,Hd(new Ge({map:o,color:Ie(1.9,1.6,1.3),transparent:!0,depthWrite:!1,side:Oe})));v.renderOrder=7;const R=new wr(new ks({map:l,color:Ie(1.5,.7,.22),transparent:!0,blending:Qe,depthWrite:!1}));R.renderOrder=6;const T=new Y(c,new Ge({color:Ie(3.2,2.8,1.9),transparent:!0,depthWrite:!1}));return T.renderOrder=8,v.visible=R.visible=T.visible=!1,t.add(v,R,T),{star:v,glow:R,hot:T,active:!1,t:0,k:1,flip:1,dir:new y,get:null}},16),this.light=new ox("#ffa040",0,6,1.6),this.lightT=1,this.lightK=0,t.add(this.light);const h=new Oh(.8,1,48);this.rings=new hi(()=>{const v=new Y(h,new Ge({color:Ie(1.4,1.3,1.15),transparent:!0,blending:Qe,depthWrite:!1,side:Oe}));return v.visible=!1,t.add(v),{m:v,active:!1,t:0,dur:.2,s0:.1,s1:1,a0:1}},12),this.smoke=new NM(t,n),this.smokeTints={white:new _t("#eef1f8"),grey:new _t("#c3c9d8"),dust:new _t("#ecdcbc"),dark:new _t("#7c8296"),frost:new _t("#cdeeff")};const u=new Xs(1,0);this.crumbMats=new Map,this.crumbs=new hi(()=>{const v=new Y(u,et.white);return v.visible=!1,v.castShadow=!0,t.add(v),{m:v,active:!1,body:null}},140),this.casings=new hi(()=>{const v=new nt,R=new Y(Vh(),et.brass),T=new Y(Gh(),et.brass);return R.castShadow=!0,v.add(R,T),v.visible=!1,t.add(v),{g:v,mesh:R,head:T,active:!1,body:null,smoke:0}},80),this.projectileShapes=wM();const d=new Qn(1,1);d.translate(-.5,0,0);const f=jM();this.projectileMats=Xo.map(v=>{const R=f.clone();return R.uniforms.uColor.value.copy(v.accent),{...EM(v.color),trail:R}}),this.bullets=new hi(()=>{const v=new nt,R=this.projectileShapes.pistol,T=new Y(R.geometry,this.projectileMats[0].body),C=new Y(R.band,this.projectileMats[0].band),I=new Y(d,f);return I.renderOrder=7,v.add(I,T,C),v.visible=!1,t.add(v),{g:v,tr:I,slug:T,band:C,active:!1,from:new y,to:new y,t:0,dur:.1,size:1,length:R.length,diameter:R.diameter,getTo:null,onArrive:null}},96),this.trailGeo=d,this.arrowTrail=f.clone(),this.arrowTrail.uniforms.uColor.value.copy(Ie(1,1,1.1)),this.glowTex=l,this.missilePools={};const g=new Qn(1,1);g.translate(.5,0,0),this.beams=new hi(()=>{const v=new Y(g,$M());return v.renderOrder=7,v.visible=!1,t.add(v),{m:v,active:!1,t:0,life:.05,w:.1,grow:0}},32);const _=xx();this.sparks=new hi(()=>{const v=new wr(Hd(new ks({map:_,color:Ie(1.6,1.4,1.2),transparent:!0,depthWrite:!1})));return v.renderOrder=7,v.visible=!1,t.add(v),{s:v,active:!1,t:0,strength:1,scale:1}},10);const m=new yi(1,1,4);this.glintMats=Xo.map(v=>new Ge({color:v.accent})),this.glints=new hi(()=>{const v=new Y(m,this.glintMats[0]);return v.visible=!1,t.add(v),{m:v,active:!1,t:0,life:.2,width:.04,length:.5,vel:new y}},72);const p=Ho();this.flames=new hi(()=>{const v=new wr(new ks({map:p,color:Ie(2.4,1.6,.6),transparent:!0,blending:Qe,depthWrite:!1}));return v.renderOrder=7,v.visible=!1,t.add(v),{s:v,active:!1,t:0,life:.5,size:.5,vel:new y}},110);const M=new He(1,1,1,5,1,!0),x=new Ge({color:Ie(1.5,2.5,3.2),transparent:!0,blending:Qe,depthWrite:!1});this.zaps=new hi(()=>{const v=new nt;for(let R=0;R<$d;R++)v.add(new Y(M,x));return v.visible=!1,v.renderOrder=8,t.add(v),{g:v,active:!1,t:0,a:new y,b:new y,w:.05}},14)}flame(t,e,n=.5,s=.5){const r=this.flames.get();r.active=!0,r.t=0,r.life=s,r.size=n*Math.min(1.6,Math.sqrt(this.farScale)),r.vel.copy(e),r.s.position.copy(t),r.s.material.rotation=Math.random()*6,r.s.visible=!0}shot(t,e,n,s,r,a,o,l){if(!t.chain&&!t.stream&&!t.beam&&!t.rail){this.fireBullet(e,n,s,r,a,o,l);return}const c=n(new y);if(t.chain)this.zap(e,c,.06);else if(t.beam)this.beam(e,c,.09,.09,"laser");else if(t.rail)this.rail(e,c,o);else for(let h=0;h<2;h++)this.flame(e,En.subVectors(c,e).multiplyScalar(3.4*(.9+Math.random()*.2)),.5+Math.random()*.3,.45);s==null||s(c)}zap(t,e,n=.05){const s=this.zaps.get();s.active=!0,s.t=0,s.a.copy(t),s.b.copy(e),s.w=n,s.g.visible=!0,this.layZap(s)}layZap(t){const e=$d;let n=En.copy(t.a);const s=t.a.distanceTo(t.b);for(let r=0;r<e;r++){const a=(r+1)/e,o=br.lerpVectors(t.a,t.b,a);r<e-1&&o.add(ah.set(xt(-1,1),xt(-1,1),xt(-.5,.5)).multiplyScalar(s*.07*Math.sin(Math.PI*a)+.04));const l=t.g.children[r];Ri.subVectors(o,n);const c=Ri.length()||.001;l.position.copy(n).addScaledVector(Ri,.5),l.quaternion.setFromUnitVectors(ga,Ri.divideScalar(c)),l.scale.set(t.w,c,t.w),n=he.copy(o)}}muzzleBlast(t,e,n,s,r=OM,a=0,o=null){if(o!=null&&o.off)return;const l=go(a),c=r.scale*Math.min(1.6,Math.sqrt(this.farScale))*((o==null?void 0:o.scale)??1);if(r.kind==="string")return;if(r.kind==="fire"||r.kind==="laser"){this.light.position.copy(t).addScaledVector(e,.8),this.lightT=0,this.lightK=r.kind==="fire"?.7:.35,this.light.color.copy(r.kind==="fire"?Yd:XM);return}const h=WM[r.kind];o!=null&&o.smokeOnly||this.blastFlash(t,e,n,s,c,l,h,r),!(r.kind==="spark"||o!=null&&o.noSmoke)&&this.blastSmoke(t,e,n,s,o!=null&&o.smokeOnly?c:Math.max(.9,Math.sqrt(c)),h,r)}blastFlash(t,e,n,s,r,a,o,l){const c=this.flashes.get();if(c.active=!0,c.t=0,c.k=r*xt(.92,1.08),c.flip=Math.random()<.5?1:-1,c.dir.copy(e),c.get=s,c.star.position.copy(t),Ts(c.star,e),c.star.visible=c.glow.visible=c.hot.visible=!0,c.hot.position.copy(t),c.hot.quaternion.copy(c.star.quaternion),c.hot.material.opacity=1,c.hot.scale.setScalar(r),c.star.scale.set(r,r*c.flip,1),c.star.material.opacity=1,c.glow.scale.setScalar(r*2.6),c.glow.material.opacity=.5,c.star.material.color.copy(o?o.star:a.color),c.glow.material.color.copy(o?o.glow:a.accent),c.hot.material.color.copy(o?o.hot:HM),c.glow.position.copy(t).addScaledVector(e,.3*r),this.light.position.copy(t).addScaledVector(e,.4),this.lightT=0,this.lightK=r,this.light.color.copy(o?o.light:a.accent),l.kind==="spark")for(let h=0;h<3;h++)En.copy(t).addScaledVector(e,xt(.3,.9)*r).addScaledVector(n,xt(-.5,.5)*r),En.z+=xt(-.4,.4)*r,this.zap(t,En,.022)}blastSmoke(t,e,n,s,r,a,o){const l=Math.min(7,Math.max(4,o.smoke||3));for(let c=0;c<l;c++){const h=c<2,u=(h?xt(8,13):xt(2,5))*r;he.copy(e).multiplyScalar(u).addScaledVector(n,xt(-.6,1.2)),En.copy(t).addScaledVector(e,(.18+c*.13)*r).addScaledVector(n,xt(-.15,.15)),this.puff(En,he,(h?xt(.27,.4):xt(.4,.62))*r,h?xt(.32,.48):xt(.9,1.45),a?"frost":h?"white":"grey",h?5:2.4,h?.7:.5,h?2.6:1.25)}if(s){const c=this.wisps.find(u=>u.get===s),h=r<.9?r:1;c?(c.t=.65,c.k=h):this.wisps.push({get:s,t:.65,k:h})}}ring(t,e,n,s,r,a,o=0){const l=this.rings.get();l.active=!0,l.t=0,l.dur=n,l.s0=s,l.s1=r,l.a0=a,l.m.position.copy(t),l.m.quaternion.setFromUnitVectors(rh,e),l.m.visible=!0,l.m.material.color.copy(go(o).accent)}dustTint(t){this.dustTints??(this.dustTints=new Map);let e=this.dustTints.get(t);return e||this.dustTints.set(t,e=new _t(t).lerp(this.smokeTints.dust,.55)),e}puff(t,e,n,s,r="white",a=3,o=.9,l=1){this.smoke.spawn(t,e,n,s,r.isColor?r:this.smokeTints[r],a,o,l)}ejectCasing(t,e,n,s,r="pistol",a=BM,o=1){const l=this.casings.get();l.body&&(l.body.active=!1);const c=FM[r];l.mesh.geometry=c.body(),l.mesh.material=et[c.bodyMat],l.head.visible=!!c.head,c.head&&(l.head.geometry=c.head(),l.head.material=et[c.headMat]),l.mesh.position.x=l.head.position.x=c.off,l.active=!0,l.g.visible=!0,l.g.position.copy(t),l.g.quaternion.setFromUnitVectors(he.set(1,0,0),e),l.g.scale.setScalar(Se*c.scale*o);const h=new ec(l.g,{ground:this.ground,size:c.size*o,restitution:.42,life:7,onDone:()=>{l.active=!1,l.g.visible=!1}}),u=Math.sqrt(o);h.vel.copy(n).multiplyScalar(xt(a.side[0],a.side[1])*u).addScaledVector(s,xt(a.up[0],a.up[1])*u).addScaledVector(e,-xt(a.back[0],a.back[1])*u),h.ang.set(xt(-4,4),xt(-4,4),0).addScaledVector(n,xt(18,32)*(Math.random()<.5?-1:1)),l.body=h,l.smoke=0,this.bodies.push(h),l.smoke>0&&this.puff(t,he.copy(s).multiplyScalar(1.2).addScaledVector(n,.8),.06,.4,"grey",4)}fireBullet(t,e,n,s=75,r=1,a=0,o="pistol"){var u;if(this.polygon){this.polygon.fire(t,e,n,s,r,a,o);return}if(vr[o]){this.missile(t,e,n,s,r,a,o);return}const l=this.bullets.get();l.active&&((u=l.onArrive)==null||u.call(l,l.to.clone())),l.active=!0,r*=Math.min(1.6,Math.sqrt(this.farScale)),l.size=r;const c=this.projectileMats[Math.min(a,this.projectileMats.length-1)],h=this.projectileShapes[o==="rifle-long"?"rifle":o]||this.projectileShapes.pistol;l.slug.geometry=h.geometry,l.band.geometry=h.band,l.slug.material=c.body,l.band.material=c.band,l.tr.material=c.trail,l.slug.scale.setScalar(r),l.band.scale.setScalar(r),l.length=h.length*r,l.diameter=h.diameter*r,l.tr.position.x=-l.length,l.t=0,l.from.copy(t),l.getTo=e,e(l.to),l.dur=Math.max(.05,l.from.distanceTo(l.to)/s),l.onArrive=n,l.g.position.copy(t),l.g.visible=!0,Ts(l.g,he.subVectors(l.to,t)),l.tr.visible=!1,l.tr.scale.set(1,l.diameter*1.05,1)}beam(t,e,n=.1,s=.05,r="laser",a=0){const o=this.beams.get();o.active=!0,o.t=0,o.life=s,o.w=n,o.grow=a,o.m.material.uniforms.uColor.value.copy(qM[r]),o.m.material.uniforms.uAlpha.value=1,he.subVectors(e,t);const l=he.length();o.m.position.copy(t),Ts(o.m,he.divideScalar(l||1)),o.m.scale.set(l,n,1),o.m.visible=!0}rail(t,e,n=0){this.beam(t,e,.5,.38,"rail",.8),this.beam(t,e,.16,.22,"rail",.3);const s=new y().subVectors(e,t),r=s.length();s.divideScalar(r||1);const a=new y;for(let o=1.2;o<r;o+=1.8)a.copy(t).addScaledVector(s,o),this.ring(a,s,.3+o*.01,.15,.9,.8,2);for(let o=0;o<5;o++)this.puff(a.copy(t).addScaledVector(s,Math.random()*r),En.set(0,.4,.2),.14,.7,"frost",3,.4)}missile(t,e,n,s,r,a,o){var d,f;const l=vr[o],h=((d=this.missilePools)[o]??(d[o]=new hi(()=>this.makeMissile(o),l.pool))).get();h.active&&h.stuck<0&&((f=h.onArrive)==null||f.call(h,h.to.clone())),h.active=!0,h.size=r*Math.min(1.6,Math.sqrt(this.farScale)),h.g.scale.setScalar(h.size),h.tier=a,h.t=0,h.stuck=-1,h.drop=!1,h.spinA=Math.random()*6,h.puffT=0,h.from.copy(t),h.getTo=e,e(h.to);const u=h.from.distanceTo(h.to);h.dur=Math.max(.06,u/Math.min(s,l.speed)),h.arc=Math.min(l.arcMax,u*l.arc),h.onArrive=n,h.g.position.copy(t),h.g.visible=!0,h.dir.subVectors(h.to,t).normalize(),Ts(h.g,h.dir),h.tr&&(h.tr.visible=!1),h.glow&&(h.glow.visible=!0)}makeMissile(t){const{g:e,len:n}=Bp(t),s=new nt,r=new nt;r.position.x=-n/2,e.position.x=n/2,r.add(e),s.add(r);let a=null,o=null;return t==="arrow"||t==="bolt"?(a=new Y(this.trailGeo,this.arrowTrail),a.renderOrder=7,a.position.x=-n,s.add(a)):(t==="ice"||t==="plasma")&&(o=new wr(new ks({map:this.glowTex,color:Ie(.5,1.4,2.6),transparent:!0,blending:Qe,depthWrite:!1})),o.renderOrder=6,o.position.x=-n*.5,o.scale.setScalar(1.4),s.add(o)),s.visible=!1,this.scene.add(s),{g:s,spin:r,tr:a,glow:o,kind:t,len:n,active:!1,from:new y,to:new y,dir:new y,vel:new y,t:0,dur:.1,arc:0,size:1,tier:0,spinA:0,puffT:0,stuck:-1,drop:!1,getTo:null,onArrive:null}}updateMissile(t,e){var a;if(t.stuck>=0){this.stickMissile(t,e);return}t.t+=e,t.getTo(t.to);const n=Math.min(1,t.t/t.dur);t.g.position.lerpVectors(t.from,t.to,n),t.g.position.y+=4*t.arc*n*(1-n),he.subVectors(t.to,t.from);const s=he.length();if(he.y+=4*t.arc*(1-2*n),t.dir.copy(he).normalize(),Ts(t.g,t.dir),t.spinA+=e*vr[t.kind].spin,vr[t.kind].tumble?t.spin.rotation.z=-t.spinA:t.spin.rotation.x=t.spinA,t.tr){const o=Math.min(s*n-t.len*t.size,t.len*t.size*2.2);t.tr.visible=o>.02,t.tr.visible&&t.tr.scale.set(o/t.size,.1,1)}if(t.glow&&(t.glow.material.opacity=.7+Math.sin(t.t*40)*.2),t.puffT-=e,t.puffT<=0&&(t.kind==="grenade"||t.kind==="ice")){const o=t.kind==="ice";t.puffT=o?.018:.025,En.set(xt(-.3,.3),xt(.1,.5),xt(-.3,.3)),this.puff(t.g.position,En,(o?.13:.17)*t.size,o?.4:.6,o?"frost":"grey",3,o?.65:.55)}if(n<1)return;const r=(a=t.onArrive)==null?void 0:a.call(t,t.to.clone());t.onArrive=null,this.projectileImpacts&&(t.kind==="grenade"?this.boom(t.to,t.tier,t.size):t.kind==="ice"&&this.frost(t.to,t.size)),vr[t.kind].stick&&r!=="through"?(t.stuck=0,t.drop=r==="drop",t.vel.copy(t.dir).multiplyScalar(-2.5).setY(2.5),t.tr&&(t.tr.visible=!1),this.puff(t.to,En.set(0,.6,.4),.14,.4,"dust",4,.6)):(t.active=!1,t.g.visible=!1,t.getTo=null)}stickMissile(t,e){var a;t.stuck+=e;const n=t.size,s=vr[t.kind].stick;if(!t.drop&&t.stuck<s){(a=t.getTo)==null||a.call(t,t.to),t.g.position.copy(t.to).addScaledVector(t.dir,t.len*n*.28);const o=Math.sin(t.stuck*62)*.2*Math.exp(-t.stuck*6);he.copy(t.dir),he.y+=o,Ts(t.g,he);return}const r=(t.stuck-(t.drop?0:s))/GM;if(r>=1){t.active=!1,t.g.visible=!1,t.getTo=null;return}t.vel.y-=Gp*e,t.g.position.addScaledVector(t.vel,e),t.spin.rotation.z+=e*9,t.g.scale.setScalar(n*(1-r*r))}boom(t,e=0,n=1){const s=new y(-.4,.5,.8).normalize();this.impact(t,s,["#ff8a3d","#ffd23f","#3a3f4d","#56703a"],3.6,e);const r=new y;for(let a=0;a<8;a++)r.set(xt(-3.5,3.5),xt(.5,4.5),xt(-2.5,2.5)).multiplyScalar(n),this.flame(t,r,xt(.6,1)*n,xt(.32,.5));for(let a=0;a<6;a++)r.set(xt(-1.5,1.5),xt(.6,2.6),xt(-.5,1)),this.puff(t,r,xt(.3,.5)*n,xt(1,1.6),a%2?"dark":"grey",2.5,.8);this.light.position.copy(t).addScaledVector(s,.6),this.lightT=0,this.lightK=1.6,this.light.color.copy(Yd)}frost(t,e=1){const n=new y(-.4,.5,.8).normalize();this.impact(t,n,["#bfe9ff","#ffffff","#56baff"],1.4,2);const s=new y;for(let r=0;r<6;r++)s.set(xt(-1.5,1.5),xt(-.3,1.6),xt(-1,1)),this.puff(t,s,xt(.2,.34)*e,xt(.5,.85),"frost",3,.75);this.ring(t,n,.25,.2,1.6*e,1,2)}hitSpark(t,e,n=0,s=1,r=2){const a=this.sparks.get();a.active=!0,a.t=0,a.s.visible=!0,a.s.position.copy(t).addScaledVector(e,.08*s),a.s.material.rotation=Math.random()*6,a.strength=.6*s,a.scale=s,a.s.material.color.copy(go(n).color);for(let o=0;o<r;o++){const l=this.glints.get();l.active=!0,l.t=0,l.life=xt(.12,.22),l.width=xt(.018,.03)*s,l.length=xt(.25,.5)*s,l.m.material=this.glintMats[Math.min(n,this.glintMats.length-1)],l.m.visible=!0,l.m.position.copy(t).addScaledVector(e,.1*s),l.vel.copy(e).multiplyScalar(xt(4,7)).add(he.set(xt(-3,3),xt(-1,4),xt(-2,2))).multiplyScalar(Math.sqrt(s)),l.m.quaternion.setFromUnitVectors(ga,he.copy(l.vel).normalize()),l.m.scale.set(l.width,l.length,l.width)}}impact(t,e,n,s=1,r=0){const a=this.farScale,o=this.sparks.get();o.active=!0,o.t=0,o.s.visible=!0,o.s.position.copy(t).addScaledVector(e,.08*a),o.s.material.rotation=Math.random()*6,o.strength=s,o.scale=a,o.s.material.color.copy(go(r).color);for(let h=0;h<Math.min(9,3+Math.ceil(s*2));h++){const u=this.glints.get();u.active=!0,u.t=0,u.life=xt(.16,.3),u.width=xt(.018,.035)*a,u.length=xt(.28,.6)*a,u.m.material=this.glintMats[Math.min(r,this.glintMats.length-1)],u.m.visible=!0,u.m.position.copy(t).addScaledVector(e,.12*a),u.vel.copy(e).multiplyScalar(xt(4,8)).add(he.set(xt(-3,3),xt(-1,5),xt(-2,2))).multiplyScalar(Math.sqrt(a)),u.m.quaternion.setFromUnitVectors(ga,he.copy(u.vel).normalize()),u.m.scale.set(u.width,u.length,u.width)}const l=Math.max(2,Math.round(4*Math.min(1.5,s)));for(let h=0;h<l;h++)he.copy(e).multiplyScalar(xt(1.5,3.5)*a).add(En.set(xt(-1.2,1.2),xt(0,1.5),xt(-1.2,1.2)).multiplyScalar(a)),this.puff(t,he,xt(.15,.26)*a,xt(.6,1),this.dustTint(n[h%n.length]),4,.85);const c=Math.max(3,Math.round(6*s));for(let h=0;h<c;h++)this.crumb(t,e,n[h%n.length],a)}crumb(t,e,n,s=1){const r=this.crumbs.get();r.body&&(r.body.active=!1);let a=this.crumbMats.get(n);a||this.crumbMats.set(n,a=B(n,{flat:!0,spec:.1,rim:.1})),r.m.material=a,r.m.visible=!0,r.active=!0;const o=xt(.06,.12)*s;r.m.scale.set(o,o*xt(.6,1.2),o*xt(.6,1)),r.m.position.copy(t).addScaledVector(e,.05);const l=new ec(r.m,{ground:this.ground,size:o*.6,restitution:.3,life:xt(1.5,3),onDone:()=>{r.active=!1,r.m.visible=!1}});l.vel.copy(e).multiplyScalar(xt(2,6)*s).add(he.set(xt(-2.5,2.5),xt(.5,4),xt(-2.5,2.5)).multiplyScalar(Math.sqrt(s))),l.ang.set(xt(-20,20),xt(-20,20),xt(-20,20)),r.body=l,this.bodies.push(l)}drop(t,e,n,s,r,a=1.2){const o=new ec(t,{ground:this.ground,size:s,restitution:.3,life:a,onDone:r});return o.vel.copy(e),o.ang.copy(n),this.bodies.push(o),o}clear(){var t,e,n;(t=this.polygon)==null||t.clear();for(const s of this.bodies)s.active=!1,(e=s.onDone)==null||e.call(s);this.bodies.length=0,this.wisps.length=0;for(const s of[this.flashes,this.rings,this.crumbs,this.casings,this.bullets,this.sparks,this.glints,this.flames,this.zaps,this.beams])for(const r of s.items){r.active=!1,"get"in r&&(r.get=null),"getTo"in r&&(r.getTo=null,r.onArrive=null);for(const a of["star","glow","hot","m","g","s"])(n=r[a])!=null&&n.isObject3D&&(r[a].visible=!1)}for(const s of Object.values(this.missilePools))for(const r of s.items)r.active=!1,r.getTo=r.onArrive=null,r.g.visible=!1;for(const s of this.smoke.items)s.active=!1;this.smoke.update(0),this.lightT=1,this.light.intensity=0}update(t){var n,s;(n=this.polygon)==null||n.update(t);for(const r of this.flashes.items){if(!r.active)continue;r.t+=t;const a=r.t/zM;if(a>=1){r.active=!1,r.star.visible=r.glow.visible=r.hot.visible=!1,r.get=null;continue}const o=1-a;r.get&&(r.get(r.star.position),r.hot.position.copy(r.star.position),r.glow.position.copy(r.star.position).addScaledVector(r.dir,.35*r.k));const l=.78+Math.sin(Math.min(1,a*2)*Math.PI/2)*.22;r.star.scale.set(r.k*l*(1-a*.28),r.k*r.flip*l*(1-a*.48),1),r.star.material.opacity=Math.min(1,o*1.6),r.hot.material.opacity=Math.max(0,1-r.t/.035),r.hot.visible=r.hot.material.opacity>0,r.glow.scale.setScalar(r.k*2.6*(1-a*.3)),r.glow.material.opacity=o*.5}this.lightT+=t;const e=this.lightT/.1;this.light.intensity=e<1?5.5*this.lightK*(1-e)*(1-e):0;for(let r=this.wisps.length-1;r>=0;r--){const a=this.wisps[r];if(a.t-=t,a.t<=0){this.wisps.splice(r,1);continue}if(Math.random()<t*5){const o=a.get(En),l=a.k??1;this.puff(o,he.set(xt(-.15,.15),xt(.8,1.4),xt(-.15,.15)).multiplyScalar(l),xt(.22,.32)*l,xt(.7,1.1),"grey",1.5,.32,1.6)}}for(const r of this.rings.items){if(!r.active)continue;r.t+=t;const a=r.t/r.dur;if(a>=1){r.active=!1,r.m.visible=!1;continue}r.m.scale.setScalar(r.s0+(r.s1-r.s0)*Xd(a)),r.m.material.opacity=r.a0*(1-a)*(1-a)}this.smoke.update(t);for(const r of this.sparks.items){if(!r.active)continue;r.t+=t;const a=r.t/.14;if(a>=1){r.active=!1,r.s.visible=!1;continue}r.s.scale.setScalar((.7+Xd(a)*1)*(.6+r.strength*.3)*r.scale),r.s.material.opacity=1-a*a}for(const r of this.flames.items){if(!r.active)continue;r.t+=t;const a=r.t/r.life;if(a>=1){r.active=!1,r.s.visible=!1;continue}r.vel.multiplyScalar(Math.exp(-t*2.5)),r.vel.y+=t*2.4,r.s.position.addScaledVector(r.vel,t),r.s.scale.setScalar(r.size*(.6+a*1.4)),r.s.material.color.setRGB(2.4-a*1.4,1.6-a*1.3,Math.max(.05,.6-a*.55)),r.s.material.opacity=(1-a)*(1-a)*.9}for(const r of this.zaps.items)if(r.active){if(r.t+=t,r.t>=VM){r.active=!1,r.g.visible=!1;continue}this.layZap(r)}for(const r of this.glints.items){if(!r.active)continue;if(r.t+=t,r.t>=r.life){r.active=r.m.visible=!1;continue}r.vel.y-=12*t,r.m.position.addScaledVector(r.vel,t),r.m.quaternion.setFromUnitVectors(ga,he.copy(r.vel).normalize());const a=1-r.t/r.life;r.m.scale.set(r.width*a,r.length*(.35+.65*a),r.width*a)}for(const r of this.bullets.items){if(!r.active)continue;r.t+=t,r.getTo(r.to);const a=Math.min(1,r.t/r.dur);r.g.position.lerpVectors(r.from,r.to,a),he.subVectors(r.to,r.from);const o=he.length();Ts(r.g,he.divideScalar(o||1));const l=Math.min(o*a-r.length,r.length*5.5);r.tr.visible=l>r.diameter*.1,r.tr.visible&&r.tr.scale.set(l,r.diameter*1.05,1),a>=1&&(r.active=!1,r.g.visible=!1,(s=r.onArrive)==null||s.call(r,r.to.clone()))}for(const r of Object.values(this.missilePools))for(const a of r.items)a.active&&this.updateMissile(a,t);for(const r of this.beams.items){if(!r.active)continue;r.t+=t;const a=r.t/r.life;if(a>=1){r.active=!1,r.m.visible=!1;continue}r.m.material.uniforms.uAlpha.value=(1-a)*(1-a*.5),r.m.scale.y=r.w*(1+r.grow*a)}for(const r of this.casings.items)!r.active||r.smoke<=0||(r.smoke-=t,Math.random()<t*24&&this.puff(r.g.position,he.set(0,.4,0),.025,.6,"white",2,.5));for(let r=this.bodies.length-1;r>=0;r--){const a=this.bodies[r];(!a.active||!a.step(t))&&this.bodies.splice(r,1)}}}function xS(i,t,e=64,n=1){const s=["#7eeaff","#a8ff9b","#ff86c5","#ffda70","#b399ff","#ffffff"];for(let r=0;r<e;r++){const a=document.createElement("i");a.className="upgrade-confetti",a.style.background=s[r%s.length];const o=4+Math.random()*5;a.style.width=`${o}px`,a.style.height=`${o*(1.1+Math.random()*1.5)}px`,document.body.append(a);const l=-Math.PI*(.12+Math.random()*.76),c=(90+Math.random()*200)*n,h=Math.cos(l)*c,u=Math.sin(l)*c,d=Math.random()*360,f=360+Math.random()*720,g=Array.from({length:7},(m,p)=>{const M=p/6;return{transform:`translate(${i+h*M+Math.sin(M*15+r)*12*M}px,${t+u*M+230*n*M*M}px) rotate(${d+M*f}deg) rotateY(${M*1080}deg)`,opacity:M<.72?1:(1-M)/.28}}),_=a.animate(g,{duration:1100+Math.random()*1100,delay:Math.random()*140,easing:"linear"});_.onfinish=()=>a.remove()}}const Hp=[{e:"🦊",bg:"#ff8a3d"},{e:"🐻",bg:"#b0703c"},{e:"🐼",bg:"#6c7a93"},{e:"🐯",bg:"#ffb62e"},{e:"🦁",bg:"#e8a23a"},{e:"🐸",bg:"#58c46a"},{e:"🐵",bg:"#a8693e"},{e:"🐺",bg:"#5c6f99"},{e:"🦉",bg:"#8c6bd6"},{e:"🤖",bg:"#4a9ee8"},{e:"👽",bg:"#3fb9a0"},{e:"💀",bg:"#4b4f63"},{e:"🤠",bg:"#d9773a"},{e:"🥷",bg:"#30364a"},{e:"🐙",bg:"#e35d8f"},{e:"🦈",bg:"#3b7cc4"}],ZM=["Sn1per_Ko","DuckHunter","PewPewPro","Барабашка","ТапТап","xX_Glock_Xx","Гильза","КосойЗаяц","Zero_Recoil","MiniGunMama","Шмель","HeadshotHank","Ракета","Bullseye","КапитанОтдача","Tactical_Tim","Пиу-Пиу","Мушка","Курок","LuckyLoad","Totoro_007","Бабах","RangeRat","Сапсан","NoScopeNika","Дробь","Kalash_Kid","Ёжик"],KM=16;function MS(i=Math.random){return{name:`Стрелок${1e3+Math.floor(i()*9e3)}`,avatar:Math.floor(i()*Hp.length),wins:0,losses:0,trophies:0}}function yS(i){const t=String(i??"").replace(/\s+/g," ").trim().slice(0,KM);return t.length>=2?t:null}function bS(i,t=Math.random){let n=(s=>s[Math.floor(t()*s.length)])(ZM);return n===i.name&&(n+="2"),{name:n,avatar:Math.floor(t()*Hp.length),trophies:Math.max(0,Math.round((i.trophies||0)+(t()-.45)*80))}}const Wt={black:Ke("#262a33",{spec:.28}),rubber:B("#1f222a",{spec:.05}),tan:we("#c2a06c",{spec:.14}),glass:B("#6fd2ff",{spec:.7,gloss:30,sheen:.35,rim:.35}),dot:B("#ff4030",{emissive:"#ff2a10",emissiveIntensity:2.6,rim:0}),lens:B("#fff6dc",{emissive:"#ffefc0",emissiveIntensity:1.8,rim:0})};function JM(){return new De({transparent:!0,depthWrite:!1,blending:Qe,uniforms:{uColor:{value:new _t().setRGB(2.4,.25,.12)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      void main() {
        float across = abs(vUv.y * 2.0 - 1.0);
        float along = 1.0 - clamp(vUv.x, 0.0, 1.0);
        float a = along * along * (1.0 - across * across);
        gl_FragColor = vec4(uColor, a);
      }`})}let jd=null;function Wp(i,t,e,n=8){const s=new nt;s.add(K(i,t,e,e+6,-n,n,2,Wt.black));for(let r=i+4;r<t-4;r+=9)s.add(K(r,r+4,e+5,e+8.5,-n-.5,n+.5,1,et.groove,1));return s}function si(i,t,e=64){const n=e*.62,s=i+(e-n)*.5,r=Wp(s-3,s+n+3,t,7),a=t+8;r.add(K(s,s+n,a,a+5,-10,10,2,Wt.black)),r.add(K(s+3,s+n*.5,a+5,a+9,-8,8,2,et.gunDark));const o=It([[-12,0],[12,0],[12,22],[8,27],[-8,27],[-12,22]],3);o.holes.push(_n([[-8,5],[-8,20],[-5,23],[5,23],[8,20],[8,5]],2));const l=Tt(o,8,1.4,Wt.black);l.rotation.y=Math.PI/2,l.position.set(s+n-7,a+3,0),r.add(l);const c=new Ge({color:"#8ad8eb",transparent:!0,opacity:.22,depthWrite:!1,side:Oe}),h=new Y(new Qn(15,19),c);h.rotation.y=Math.PI/2,h.position.set(s+n-7,a+17,0),r.add(h);const u=new Y(new Qo(.85,12),Wt.dot);return u.rotation.y=-Math.PI/2,u.position.set(s+n-11.1,a+17,0),r.add(u),r.add(Xe(s+10,a+4,2.2,1.5,et.barrel,10.5,12)),r}function nl(i,t,e,n=0){const s=new nt;s.add(gt(i,i+t,e,Wt.black,n));for(const r of[.2,.5,.8])s.add(gt(i+t*r-3,i+t*r+3,e+1.2,Wt.tan,n));return s.add(gt(i+t-5,i+t+1,e-2.5,Wt.black,n)),s.add(gt(i+t+.5,i+t+1.7,e*.35,et.dark,n)),s}function Hr(i,t,e,n){const s=new nt,r=n-e,a=(e+n)/2;s.add(K(i,t,e,n,-12,12,6,Wt.black)),s.add(gt(t-3,t+4,r*.42,Wt.black,a+2)),s.add(gt(t+3.6,t+4.8,r*.3,Wt.lens,a+2));const o=new Y(new Ye(2.4,10,8),Wt.dot);o.position.set(t+2,e+4,10),s.add(o),jd??(jd=JM());const l=new Qn(900,3);l.translate(450,0,0);const c=new Y(l,jd);return c.position.set(t+3,e+4,10),c.renderOrder=5,c.userData.noBounds=!0,s.add(c),s}function Xp(i,t,e,n){const s=new nt;s.add(K(i-4,t+4,e-8,e+2,-11,11,4,Wt.black)),s.add(K(i,t,n,e-4,-11,11,10,Wt.tan));for(let r=n+12;r<e-12;r+=14)s.add(K(i-.8,i+4,r,r+6,-11.5,11.5,2,Wt.rubber,2));return s}function Fa(i,t,e=1){const n=new nt;return n.add(gt(i-135,i+4,9,Wt.black,t-11)),n.add(Tt(It([[i-70,t,6],[i-176,t+4,8],[i-184,t-6,6],[i-184,t-84,8],[i-168,t-90,10],[i-120,t-36,14],[i-74,t-22,8]]),30,7,Wt.tan)),n.add(K(i-197,i-183,t-91,t+6,-15,15,5,Wt.rubber)),n.add(K(i-150,i-100,t+2,t+12,-12,12,5,Wt.black)),e!==1&&(n.position.set(i*(1-e),t*(1-e),0),n.scale.set(e,e,1)),n}function QM(i,t){return Tt(It([[i,t,4],[i+28,t,4],[i+16,t-78,9],[i-14,t-72,9]]),30,6,Wt.tan)}function qp(i,t,e,n=0){const s=new nt;s.add(gt(i,i+t,e,Wt.black,n));for(let r=0;r<3;r++){const a=i+7+r*((t-14)/2);s.add(K(a-3,a+3,n-e*.55,n+e*.55,e-3,e+.8,2,et.dark,2))}return s.add(gt(i+t-.6,i+t+.6,e*.4,et.dark,n)),s}const nc=new Map;function ty(i,t){const e=`${i.uuid}|${t}`;if(!nc.has(e)){const n=new _t(Wo[t].color),s=i===Wt.tan?we(`#${n.getHexString()}`,{spec:.22}):Ke(`#${new _t(i.color).lerp(n,.32).getHexString()}`,{spec:.32,rim:.2});t>=3&&(s.emissive.copy(n),s.emissiveIntensity=i===Wt.tan?.18:.08),nc.set(e,s)}return nc.get(e)}function ey(i,t={}){for(const e of i.evoParts){const n=t[e.userData.kind]||0;e.traverse(s=>{var a;if(!s.isMesh)return;(a=s.userData).stockMat??(a.stockMat=s.material);const r=s.userData.stockMat;s.material=n>0&&(r===Wt.tan||r===Wt.black)?ty(r,n):r})}}const ny=40,iy=new y(-.316,-.949,0),Zd=new y(28,-112,0),sy=new y(22,-128,0),ry={scale:.55,rings:0,bubble:!1,smoke:6};function ay(i,t,e,n,s){const r=[],a=[];for(let o=0;o<=12;o++){const l=o/12,c=1-l,h=c*c*i[0]+2*c*l*t[0]+l*l*e[0],u=c*c*i[1]+2*c*l*t[1]+l*l*e[1],d=2*c*(t[0]-i[0])+2*l*(e[0]-t[0]),f=2*c*(t[1]-i[1])+2*l*(e[1]-t[1]),g=Math.hypot(d,f)||1,_=(n+(s-n)*l)/2;r.push(new J(h+-f/g*_,u+d/g*_)),a.push(new J(h- -f/g*_,u-d/g*_))}return new es([...r,...a.reverse()])}function oy(){const i=new nt;i.add(Tt(It([[-2,-16,3],[227,-16,4],[227,24,10],[-2,24,7]]),30,5,et.slide)),i.add(K(101,143,2,19,11,15.6,3,et.dark));for(const[t,e]of[[20,29],[34,42],[47,55],[60,69]])for(const n of[1,-1])i.add(K(t,e,-12,19,n>0?12:-15.6,n>0?15.6:-12,2.5,et.groove,2));return i.add(K(13,37,21,33,-7,7,3.5,et.slide)),i.add(K(199,214,21,32,-5,5,3,et.slide)),i}function ly(){const i=new nt;i.position.set(225,0,0);const t=new nt;t.position.set(-225,0,0),i.add(t),t.add(gt(110,224,10,et.barrel)),t.add(K(104,150,-6,14,-10,10,4,et.barrel)),t.add(gt(222,238,13,et.barrel));const e=gt(237.4,238.6,6.5,et.dark);return e.castShadow=!1,t.add(e),i}function cy(){const i=It([[-8,-16,2],[226,-16,2],[227,-44,7],[168,-44,6],[168,-92,11],[80,-92,4],[68,-146,8],[-19,-146,8],[23,-48,13],[-8,-33,8]]);return i.holes.push(_n([[100,-50],[156,-50],[156,-82],[100,-82]],9)),i}function hy(i){const t=new nt;t.add(Tt(It([[26,-58],[80,-58],[51,-146],[-3,-146]],4),26,3,et.mag)),i?(t.add(Tt(It([[-3,-146],[51,-146],[38.4,-186],[-15.6,-186]],4),26,3,et.mag)),t.add(K(-15,47,-195,-184,-16.5,16.5,4,et.mag)),t.add(K(-19,53,-207,-192,-18,18,6,et.orange))):(t.add(K(-2,60,-155,-144,-16.5,16.5,4,et.mag)),t.add(K(-6,66,-167,-152,-18,18,6,et.mag)));const e=K(30,74,-62,-55,-10,10,3,et.orange);t.add(e);const n=vs("pistol");n.position.set(32,-48,0),t.add(n);const s=r=>{n.visible=r,e.visible=!r};return s(!0),{g:t,setLoaded:s}}class uy extends nn{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:.012,fwd:.06,ejectAt:.024,lockOnEmpty:!0},recoil:{kick:[6.5,8],push:[2.8,3.4],roll:1.5,squash:1},pose:{tilt:.2,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:36,magIn:42,dropSize:.24,casing:"pistol",eject:{side:[1.6,2.6],up:[5,6.5],back:[.3,1]},blast:{scale:1,smoke:3,rings:1,bubble:!0},pellet:1,impact:1,rack:1,ammo:"pistol"},this.magAxis.copy(iy),this.magCenter.copy(Zd),this.inset=50;const t=this.model;t.add(Tt(cy(),32,4.5,et.frame)),t.add(Tt(It([[26,-60],[76,-64],[60,-136],[-10,-136]],10),34,2.5,et.frame)),this.slideStop=K(117,137,-34,-18,13,17.4,3,et.frame),t.add(this.slideStop),this.trigger=new nt,this.trigger.position.set(112,-50,0),this.trigger.add(Tt(ay([0,2],[-14,-12],[3,-28],9,6),9,2.5,et.frame)),t.add(this.trigger),this.barrel=ly(),this.barrelInner=this.barrel.children[0],t.add(this.barrel),this.slide=oy(),t.add(this.slide),this.muzzleAnchor.position.set(241,0,0),this.portAnchor.position.set(122,12,16),this.finish(new y(38,-78,0)),this.setAction(0)}buildMag(){const t=this.kit.has("mag");this.magCenter.copy(t?sy:Zd);const{g:e,setLoaded:n}=hy(t);return this.wrapMag(e,n)}kitPart(t){switch(t){case"optic":return{add:si(44,24,56),parent:this.slide};case"laser":return{add:Hr(170,224,-68,-46)};case"suppressor":return{add:nl(236,150,17),parent:this.barrelInner,muzzle:390,blast:ry};case"stock":return{add:Fa(-6,-18,.8)}}return null}setAction(t){const e=t*ny;this.slide.position.x=-e;const n=pn.smoothstep(e,4,14);this.barrel.position.x=225-Math.min(e,5),this.barrel.rotation.z=n*.05,this.barrel.position.y=-n*1.2}setTrigger(t){this.trigger.rotation.z=-.35*t}setHold(t){this.slideStop.position.y=-26+t*3}}const Be={slide:B("#4c5568",{spec:.07,rim:.09}),barrel:B("#5d6982",{spec:.16,rim:.08}),frame:B("#262c39",{spec:.03,rim:.07}),panel:B("#1d222d",{spec:.02,rim:.04}),sight:B("#3a4252",{spec:.04,rim:.06}),bore:B("#101923",{spec:0,rim:0,side:Oe})};function SS(i){i&&(Be.slide.color.set(i.id==="base"?"#4c5568":i.slide),Be.frame.color.set(i.id==="base"?"#262c39":i.frame),Be.panel.color.copy(Be.frame.color).multiplyScalar(.77))}const vo=(i,t,e,n)=>Tt(It(i,6),t,e,n),dy=64;function fy(){return It([[-29.5,-21,3],[29.5,-21,3],[29.5,26,9],[-29.5,26,9]])}function py(){const i=It([[-21,-14.5],[21,-14.5],[21,18.5],[-21,18.5]],7),t=new Pa;return t.absarc(0,0,10.5,0,Math.PI*2,!0),i.holes.push(t),i}function Kd(i,t,e,n,s){const r=Tt(i,e-t,n,s);return r.rotation.y=Math.PI/2,r.position.x=(t+e)/2,r}class my extends nn{constructor(){super(),this.root.name="Pistol — orthographic v2",this.handStyle="navy-glove",this.spec={cycle:{delay:0,back:.045,hold:.05,fwd:.085,ejectAt:.03,lockOnEmpty:!1},recoil:{kick:[9,10.5],push:[3.2,3.8],roll:.4,squash:.2},pose:{tilt:.27,yaw:.16,roll:.36,lift:.24},reload:"mag",magOut:55,magIn:80,dropSize:.18,casing:"pistol",eject:{side:[1.6,2.2],up:[3.4,4.4],back:[.1,.5]},blast:{scale:.48,smoke:0,rings:0,bubble:!1},pellet:.55,impact:.7,rack:1,ammo:"pistol"},this.inset=50,this.magAxis.set(-.33,-.944,0),this.magCenter.set(41,-99,0);const t=this.model;t.add(vo([[0,-20],[245,-20],[245,-38,9],[99,-38],[65,-136],[56,-139],[-2,-139],[-10,-134],[-10,-124],[19,-54],[11,-44,8],[-3,-38,6],[-9,-30,5],[-7,-22,4]],48,4.5,Be.frame));for(const r of[-1,1]){const a=vo([[36,-54],[82,-54],[58,-126],[11,-126]],2,.8,Be.panel);a.position.z=r*24,t.add(a)}const e=It([[91,-35,8],[162,-35,10],[150,-80,24],[83,-84,12]]);e.holes.push(_n([[94,-74],[138,-74],[150,-41],[100,-41]],8)),t.add(Tt(e,16,2.2,Be.frame)),this.trigger=new nt,this.trigger.name="Trigger",this.trigger.position.set(107,-38,0),this.trigger.add(vo([[-5,0],[5,0],[4,-11],[14,-22],[9,-29],[-2,-23],[-7,-12]],9,2,Be.panel)),t.add(this.trigger),this.barrel=new nt,this.barrel.name="Barrel",this.barrel.position.set(240,0,0);const n=new nt;n.position.x=-240;const s=(r,a,o,l)=>{const c=new Y(new He(r,r,o-a,24,1,!0),l);return c.rotation.z=-Math.PI/2,c.position.x=(a+o)/2,c};n.add(s(10,112,247,Be.barrel),s(6.8,233,247,Be.bore),gt(233,234,6.8,Be.bore)),this.barrel.add(n),t.add(this.barrel),this.slide=new nt,this.slide.name="Slide",this.slide.add(Kd(fy(),0,245,5.5,Be.slide)),this.slide.add(K(98,148,4,26.6,18,29.9,3,Be.bore)),this.slide.add(K(103,143,8,24,22,30.2,2.5,Be.barrel)),this.slide.add(Kd(py(),244,256,3,Be.sight)),this.slide.add(gt(247.5,248.5,10.6,Be.bore)),this.slide.add(K(14,32,24,36,-19.5,19.5,3.5,Be.sight)),this.slide.add(K(219,237,24,35,-8.5,8.5,3,Be.sight)),t.add(this.slide),this.muzzleAnchor.position.set(257,0,0),this.portAnchor.position.set(123,18,30),this.finish(new y(39,-83,0))}buildMag(){const t=this.kit.has("mag"),e=t?22:0;this.magCenter.set(41-e*.16,-99-e*.5,0);const n=new nt;return n.name="Pistol magazine",n.add(vo([[42,-51],[79,-51],[50-e*.33,-136-e],[14-e*.33,-136-e]],30,3,Be.panel)),n.add(Tt(It([[-9-e*.33,-130-e],[65-e*.33,-130-e],[62-e*.33,-142-e],[-8-e*.33,-142-e]],8),48,4,Be.frame)),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:si(50,27,42),parent:this.slide};case"suppressor":return{add:nl(256,115,15),parent:this.barrel.children[0],muzzle:371};case"laser":return{add:Hr(167,215,-54,-36)};case"stock":return{add:Fa(-8,-25,.7)}}return null}setAction(t){const e=t*dy;this.slide.position.x=-e;const n=pn.smoothstep(e,3,14);this.barrel.position.x=240-Math.min(e,4),this.barrel.rotation.z=n*.045}setTrigger(t){this.trigger.rotation.z=-.42*t}}const qi={fuel:we("#e8384d",{spec:.25}),fuelCap:Ke("#3a3f4d"),pilot:B("#8fe3ff",{emissive:"#3fb6ff",emissiveIntensity:2.4,rim:0}),ice:we("#e4eef8",{spec:.3,gloss:18}),iceBlue:we("#56baff",{spec:.3}),glow:B("#9ff0ff",{emissive:"#4fd8ff",emissiveIntensity:1.8,rim:0}),glass:B("#bfe9ff",{transparent:!0,opacity:.45,spec:.8,gloss:30,rim:.4})};function Un(...i){const t=new nt;return t.add(...i),t}function gy(i,t,e,n){const s=new Y(new Fn(t,e,10,28),n);return s.rotation.y=Math.PI/2,s.position.x=i,s.castShadow=!0,s}function $p(i,t){const e=new nt;return e.position.set(i,t,0),e.add(Tt(It([[-3,2,2],[4,2,2],[6,-14,4],[-2,-24,3],[-6,-20,3],[-2,-10,2]]),8,2,et.gunDark)),e}function Yp(i,t,e,n,s){const r=It([[i,n,6],[t,n,3],[t,e,12],[i+4,e,10]]);return r.holes.push(_n([[i+6,n-6],[t-6,n-6],[t-6,e+8],[i+10,e+8]],8)),Tt(r,14,2,s)}class vy extends nn{constructor(){super(),this.spec={cycle:{delay:0,back:.01,hold:0,fwd:.01,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[.5,.9],push:[.3,.5],roll:.3,squash:.25},pose:{tilt:.2,yaw:.25,roll:.45,lift:.5},reload:"mag",magOut:30,magIn:52,dropSize:.22,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"fire",scale:.45,smoke:2,rings:0,bubble:!1},pellet:1,impact:.4,rack:0,ammo:"fuel"},this.magAxis.set(0,-1,0),this.magCenter.set(100,-50,0),this.inset=36;const t=this.model;t.add(Tt(It([[0,-28,12],[160,-28,8],[168,22,10],[24,26,14],[-6,6,10]]),40,6,et.gunDark)),t.add(K(18,120,12,22,18,21.6,4,et.gunmetal)),t.add(Rd(36,-4,5,21.6,et.gunmetal)),t.add(Rd(104,-4,5,21.6,et.gunmetal)),t.add(Tt(It([[18,-24,6],[56,-24,6],[48,-108,10],[6,-108,10]]),34,6,et.rubber)),t.add(Yp(52,98,-70,-26,et.gunDark)),this.trig=$p(70,-30),t.add(this.trig),t.add(K(52,150,-34,-24,-16,16,4,et.gunmetal)),t.add(gt(160,332,11,et.gunmetal));for(const n of[196,226,256,286])t.add(gy(n,13,3.4,et.orange));this.tip=Un(gt(330,350,16,et.gunmetal),gt(349.4,350.6,9,et.dark)),this.tip.children[1].castShadow=!1,t.add(this.tip),this.pilot=new Y(new Ye(5,14,10),qi.pilot),this.pilot.position.set(342,-20,0),t.add(K(326,346,-24,-12,-6,6,3,et.gunDark),this.pilot);const e=new Y(new Fn(26,5,8,18,Math.PI/2),et.rubber);e.position.set(150,-24,10),e.rotation.z=0,t.add(e),this.muzzleAnchor.position.set(354,0,0),this.portAnchor.position.set(110,0,20),this.finish(new y(34,-66,0))}buildMag(){const t=new nt;return t.add(gt(52,150,24,qi.fuel,-50)),t.add(gt(46,54,20,qi.fuelCap,-50)),t.add(gt(148,156,20,qi.fuelCap,-50)),t.add(gt(92,106,24.6,et.white,-50)),this.wrapMag(t)}kitPart(t){switch(t){case"nozzle":return{add:Un(gt(350,362,19,et.orange),gt(361.4,362.6,11,et.dark)),muzzle:366,blast:{scale:.55}};case"tank2":return{add:Un(gt(40,140,15,qi.fuel,40),gt(36,44,12,qi.fuelCap,40),gt(136,144,12,qi.fuelCap,40))};case"igniter":return{add:Un(K(300,326,-30,-14,-10,10,4,Wt.black),Xe(318,-22,4,2,qi.pilot,10.6))};case"shroud":{const e=Un(K(170,322,-16,16,-16,16,6,Wt.black));for(const n of[190,214,238,262,286,306])e.add(K(n-4,n+4,-6,6,15.6,17,2,et.dark));return{add:e}}case"pump":return{add:Un(K(110,150,22,46,-12,12,5,et.gunmetal),Xe(130,34,9,3,et.white,13),Xe(130,34,2,4,et.shell,14))}}return null}setTrigger(t){this.trig.rotation.z=-.3*t}spin(t,e){this.pilot.scale.setScalar((e?1.6:1)*(.82+Math.random()*.32))}}const Pe={tipX:14,tipY:112,nockDrawn:-34,wood:we("#b35a20"),limb:we("#2f6fd6",{spec:.3}),string:B("#f6f0e4",{spec:.1})};function Jd(i){const t=[58,46*i],e=[84,92*i],n=[Pe.tipX,Pe.tipY*i],s=[],r=[];for(let a=0;a<=12;a++){const o=a/12,l=1-o,c=l*l*t[0]+2*l*o*e[0]+o*o*n[0],h=l*l*t[1]+2*l*o*e[1]+o*o*n[1],u=2*l*(e[0]-t[0])+2*o*(n[0]-e[0]),d=2*l*(e[1]-t[1])+2*o*(n[1]-e[1]),f=Math.hypot(u,d)||1,g=(16-9*o)/2;s.push(new J(c+-d/f*g,h+u/f*g)),r.push(new J(c- -d/f*g,h-u/f*g))}return Tt(new es([...s,...r.reverse()]),12,2.5,Pe.limb)}class _y extends nn{constructor(){super(),this.spec={cycle:{delay:0,back:.05,hold:.22,fwd:.16,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[2,3],push:[1,1.5],roll:.8,squash:.6},pose:{tilt:.15,yaw:.25,roll:.4,lift:.4},reload:"mag",magOut:30,magIn:52,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"string",scale:.25,smoke:1,rings:0,bubble:!1},pellet:1,impact:.9,rack:0,ammo:"arrow"},this.magAxis.set(0,-1,0),this.magCenter.set(92,-70,0),this.inset=60;const t=this.model;t.add(Tt(It([[42,-56,8],[72,-56,8],[76,56,8],[46,56,8],[52,8,4],[52,-8,4]]),22,4,Pe.wood)),t.add(K(44,70,-26,4,-12.5,12.5,5,et.rubber)),t.add(Jd(1),Jd(-1)),this.strings=[1,-1].map(()=>{const e=new Y(new He(1.3,1.3,1,6),Pe.string);return t.add(e),e}),this.arrow=Un(gt(Pe.nockDrawn,200,3,Pe.wood),Tt(It([[198,7,1],[232,0,1],[198,-7,1]]),4,1,et.gunmetal),K(Pe.nockDrawn,Pe.nockDrawn+26,2,12,-1.5,1.5,1,et.orange),K(Pe.nockDrawn,Pe.nockDrawn+26,-12,-2,-1.5,1.5,1,et.orange)),t.add(this.arrow),this.setString(Pe.nockDrawn),this.prevS=0,this.drawing=!0,this.loose=0,this.muzzleAnchor.position.set(234,0,0),this.portAnchor.position.set(60,0,14),this.finish(new y(58,-12,0))}setString(t){this.nockX=t,this.strings.forEach((e,n)=>{const s=n?-1:1,r=new J(Pe.tipX,Pe.tipY*s),a=new J(t,0),o=r.distanceTo(a);e.scale.set(1,o,1),e.position.set((r.x+a.x)/2,(r.y+a.y)/2,0),e.rotation.z=Math.atan2(a.y-r.y,a.x-r.x)-Math.PI/2})}buildMag(){const t=this.kit.has("quiver"),e=new nt,n=t?84:64,s=new Y(new He(12,10,n,16),Pe.wood);s.position.set(92,-70,0),s.castShadow=!0,e.add(s);for(let r=0;r<(t?4:3);r++)e.add(K(84+r*6,90+r*6,-70+n/2,-70+n/2+14,-2,2,1,et.orange));return this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:Un(K(72,92,18,34,-5,5,3,Wt.black),Xe(86,26,2.5,3,Wt.dot,5.5))};case"stabilizer":return{add:Un(gt(74,150,3.5,Wt.black,-34),gt(146,162,8,Wt.black,-34))};case"cams":return{add:Un(Xe(Pe.tipX,Pe.tipY,11,8,et.gunmetal),Xe(Pe.tipX,-112,11,8,et.gunmetal))};case"firetips":return{add:Un(Tt(It([[196,9,1],[236,0,1],[196,-9,1]]),5,1,qi.pilot)),parent:this.arrow,muzzle:238}}return null}setAction(t){t<=0||t<this.prevS?this.drawing=!0:t>this.prevS&&t>.1&&(this.drawing=!1),this.prevS=t;const e=Pe.tipX+2;let n=Pe.nockDrawn+(e-Pe.nockDrawn)*t;if(this.drawing)this.loose=0;else{this.loose||(this.loose=performance.now());const s=(performance.now()-this.loose)/1e3;n+=Math.sin(s*75)*7*Math.exp(-s*9)*t}this.arrow.visible=this.drawing,this.arrow.position.x=n-Pe.nockDrawn,this.setString(n)}}class xy extends nn{constructor(){super(),this.spec={cycle:{delay:0,back:.08,hold:.02,fwd:.1,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[10,12],push:[5,6],roll:2,squash:1.4},pose:{tilt:.3,yaw:.25,roll:.6,lift:.55},reload:"mag",magOut:40,magIn:62,dropSize:.3,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{scale:1.6,smoke:7,rings:2,bubble:!0},pellet:1.2,impact:1.5,rack:1,ammo:"grenade"},this.magAxis.set(0,-1,0),this.magCenter.set(70,-14,0),this.inset=34,this.drumBase=0,this.prevT=0,this.falling=!1;const t=this.model;t.add(Tt(It([[-12,-34,10],[32,-34,6],[32,30,6],[0,30,10],[-12,14,8]]),40,6,et.olive)),t.add(K(108,148,-44,30,-20,20,8,et.olive)),t.add(K(28,112,22,32,-10,10,4,et.oliveDark)),t.add(gt(146,300,22,et.gunmetal)),t.add(gt(296,308,25,et.orange));const e=gt(307.4,308.6,15,et.dark);e.castShadow=!1,t.add(e),t.add(K(156,170,22,44,-4,4,2,et.gunDark)),t.add(Tt(It([[0,-30,6],[34,-30,6],[26,-106,10],[-10,-106,10]]),32,6,et.rubber)),t.add(K(-96,-10,-18,2,-8,8,5,et.gunDark)),t.add(K(-104,-86,-64,6,-10,10,6,et.gunDark)),t.add(Yp(28,76,-76,-32,et.gunDark)),this.trig=$p(48,-36),t.add(this.trig),this.muzzleAnchor.position.set(310,0,0),this.portAnchor.position.set(70,0,26),this.finish(new y(16,-66,0))}buildMag(){const t=this.kit.has("drum"),e=t?9:6,n=t?40:36,s=t?27:24,r=new nt;r.add(gt(32,108,n,et.oliveDark,-14,0,28));for(let a=0;a<e;a++){const o=a/e*Math.PI*2,l=new Y(new Ye(8,12,8),et.orange);l.position.set(108,-14+Math.cos(o)*s,Math.sin(o)*s),l.scale.set(.6,1,1),r.add(l)}return r.add(gt(108,114,9,et.gunmetal,-14)),this.wrapMag(r)}kitPart(t){switch(t){case"optic":return{add:si(150,22,70)};case"sticky":return{add:Un(gt(190,202,23,et.yellow),gt(240,252,23,et.yellow))};case"shroud":{const e=Un(K(160,290,12,30,-16,16,6,Wt.black));for(const n of[176,204,232,260])e.add(K(n-5,n+5,28.6,31,-6,6,2,et.dark));return{add:e}}case"cluster":{const e=new nt;for(let n=0;n<4;n++){const s=new Y(new Ye(9,12,8),et.orange);s.position.set(-90+n*20,-30,12),s.castShadow=!0,e.add(s)}return{add:e}}}return null}setAction(t){const e=Math.PI*2/(this.kit.has("drum")?9:6),n=this.mag;n&&(t>this.prevT?(this.falling=!1,n.rotation.x=this.drumBase+t*e):t<this.prevT&&!this.falling&&(this.falling=!0,this.drumBase+=this.prevT*e,n.rotation.x=this.drumBase),this.prevT=t)}setTrigger(t){this.trig.rotation.z=-.3*t}}we("#c97a3a",{spec:.4,gloss:20});we("#9a5a28",{spec:.3});we("#d8343f",{spec:.3}),Ke("#c9d2e0",{spec:.6,gloss:34}),Ke("#b9c1cf",{spec:.5,gloss:28}),B("#ff7a6a",{emissive:"#ff2a1a",emissiveIntensity:2.4,rim:0}),we("#f2b134",{spec:.25}),B("#a8f6ff",{emissive:"#36d6ff",emissiveIntensity:2.2,rim:0}),B("#cfefff",{transparent:!0,opacity:.4,spec:.8,gloss:30,rim:.4}),Ke("#8a93a3",{spec:.5,gloss:30});const kr=.9,My=197,yy=203,ne=i=>(i-My)*kr,Ce=i=>(yy-i)*kr,oh=i=>i.map(([t,e,n])=>[ne(t),Ce(e),n===void 0?void 0:n*kr]),_r=(i,t,e,n,s=6)=>Tt(It(oh(i),s*kr),t,e,n),Ze={steel:B("#2a3141",{spec:.06,rim:.09}),dark:B("#262c39",{spec:.03,rim:.07}),barrel:B("#272e3c",{spec:.12,rim:.08}),mag:B("#2f3748",{spec:.05,rim:.08}),wood:B("#99572b",{spec:.05,rim:.07}),bore:B("#0f1218",{spec:0,rim:0,side:Oe})},by={scale:.5,smoke:6,rings:0,bubble:!1};function Sy(i,t,e,n,s){const r=Tt(i,e-t,n,s);return r.rotation.y=Math.PI/2,r.position.x=(t+e)/2,r}function wy(i,t,e,n,s){const r=i.geometry.attributes.position;for(let a=0;a<r.count;a++){const o=pn.clamp((r.getX(a)-t)/(n-t),0,1);r.setZ(a,r.getZ(a)*pn.lerp(e,s,o))}return r.needsUpdate=!0,i.geometry.computeVertexNormals(),i}function Ey(i,t,e,n,s,r=40){const a=new es;for(let o=0;o<r;o++){const l=o/r*Math.PI*2;a[o?"lineTo":"moveTo"](Math.cos(l)*e,Math.sin(l)*e)}return a.closePath(),Sy(a,i,t,n,s)}function Ty(...i){const t=new nt;return t.add(...i),t}class Ay extends nn{constructor(){super(),this.root.name="AK-47 — orthographic v2",this.handStyle="work-glove",this.spec={cycle:{delay:0,back:.03,hold:.008,fwd:.05,ejectAt:.022,lockOnEmpty:!1},recoil:{kick:[3.8,4.6],push:[2.6,3.2],roll:1.4,squash:.8},pose:{tilt:.14,yaw:.18,roll:.45,lift:.6},reload:"mag",magOut:30,magIn:40,dropSize:.2,casing:"rifle",eject:{side:[2.2,3.4],up:[4,5.5],back:[.2,1]},blast:{scale:1.2,smoke:3,rings:2,bubble:!0},pellet:1,impact:.85,rack:2.2,ammo:"rifle"},this.magAxis.set(.35,-.94,0).normalize(),this.magTilt=.004;const t=this.model;t.add(_r([[197,243],[420,243],[420,162],[211,162,12],[197,181,10]],70,9,Ze.steel,10)),t.add(K(ne(286),ne(366),Ce(204),Ce(186),29,35.6,3,Ze.bore)),this.carrier=new nt,this.carrier.name="Bolt carrier",this.carrier.add(K(ne(284),ne(368),Ce(206),Ce(184),30,36.2,4,Ze.steel)),this.carrier.add(K(ne(354),ne(368),Ce(202),Ce(188),30,44,5,Ze.steel)),t.add(this.carrier),t.add(K(ne(420),ne(438),Ce(248),Ce(165),-31,31,7,Ze.dark)),this.woodGuards=[_r([[437,244],[553,238],[553,166],[437,162]],64,9,Ze.wood,10)],t.add(...this.woodGuards),t.add(Ey(ne(552),ne(577),26.5,6,Ze.dark)),t.add(gt(ne(570),ne(701),16.5,Ze.barrel,0,0,28)),t.add(gt(ne(701)-.4,ne(701)+.6,10,Ze.bore,0,0,20)),t.add(K(ne(648),ne(701),-16.5,16.5,-18.5,18.5,6,Ze.dark)),t.add(_r([[640,196],[701,196],[701,131,4],[673,133,4]],30,3.2,Ze.dark,4)),t.add(_r([[215,237],[262,237],[236,345,12],[182,328,12]],42,8,Ze.wood,10));const e=It(oh([[256,291,7],[306,291,9],[319,281,11],[323,236,2],[252,236,2]]),6*kr);e.holes.push(_n(oh([[262,239],[306,239],[304,273],[264,273]]),7*kr)),t.add(Tt(e,14,2.5,Ze.dark)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(ne(273),Ce(241),0),this.trig.add(Tt(It([[-5,0],[5,0],[5,-14],[12,-21],[8,-26],[-1,-22],[-6,-12]],2.5),8,2,Ze.dark)),t.add(this.trig),this.catchLever=K(ne(314),ne(326),Ce(256),Ce(243),-9,9,2.5,Ze.dark),t.add(this.catchLever),this.woodStock=[wy(_r([[206,185],[50,205,12],[44,218,10],[50,316,12],[68,327,14],[206,250]],70,9,Ze.wood,10),ne(44),1,ne(206),.8)],t.add(...this.woodStock),this.muzzleAnchor.position.set(ne(702),0,0),this.portAnchor.position.set(ne(330),Ce(195),36),this.finish(new y(38,-68,0))}buildMag(){const t=this.kit.has("mag"),e=t?1.28:1,n=new J(ne(363),Ce(243)),s=(M,x)=>{const v=new J(ne(M),Ce(x)),R=pn.clamp((n.y-v.y)/140,0,1.2);return v.sub(n).multiplyScalar(1+(e-1)*R).add(n)},r=s(323,236),a=s(405,236),o=s(405,250),l=s(476,338),c=s(437,403),h=s(414,297),u=s(352,361),d=s(326,252),f=(M,x,v)=>new Dh(M,x,v).getPoints(12).slice(1,-1).map(T=>[T.x,T.y,3]),g=It([[r.x,r.y,2],[a.x,a.y,2],[o.x,o.y,6],...f(o,h,l),[l.x,l.y,9],[c.x,c.y,10],...f(c,u,d),[d.x,d.y,6]]),_=new nt;_.name="AK magazine",_.add(Tt(g,30,5,Ze.mag));const m=Math.atan2(l.y-c.y,l.x-c.x),p=K(-3,3,-34,34,-16.5,16.5,2.8,t?et.orange:Ze.dark);return p.position.set((l.x+c.x)/2+Math.sin(m)*.5,(l.y+c.y)/2-Math.cos(m)*.5,0),p.rotation.z=m-Math.PI/2,_.add(p),this.magCenter.set((r.x+l.x+c.x)/3,(r.y+l.y+c.y)/3,0),this.wrapMag(_)}kitPart(t){switch(t){case"optic":return{add:si(ne(250),Ce(162),80)};case"rail":{const e=Ty(_r([[437,244],[553,238],[553,166],[437,162]],66,9,Wt.black,10),Wp(ne(445),ne(545),Ce(165),9),Xp(ne(478),ne(508),Ce(240),Ce(240)-70),Hr(ne(515),ne(549),Ce(238)-18,Ce(238)));for(let n=ne(447);n<ne(540);n+=14)e.add(K(n,n+6,-12,12,32.4,34.6,2,et.groove,2));return{add:e,hide:this.woodGuards}}case"suppressor":return{add:nl(ne(701),140,20),muzzle:ne(701)+142,blast:by};case"stock":return{add:Fa(6,Ce(185)),hide:this.woodStock}}return null}setAction(t){this.carrier.position.x=-t*42}setTrigger(t){this.trig.rotation.z=-.3*t}setCatch(t){this.catchLever.position.x=ne(320)-t*4}}const il=.87,Ry=156,Cy=692,ze=i=>(i-Ry)*il,Is=i=>(Cy-i)*il,va=i=>i.map(([t,e,n])=>[ze(t),Is(e),n===void 0?void 0:n*il]),Py=(i,t,e,n,s=6)=>Tt(It(va(i),s*il),t,e,n),ui={body:B("#2c3546",{spec:.06,rim:.09}),grip:B("#272d3b",{spec:.03,rim:.07}),barrel:B("#293142",{spec:.12,rim:.08}),hub:B("#232935",{spec:.03,rim:.05}),olive:B("#565745",{spec:.05,rim:.07}),drum:B("#595a48",{spec:.05,rim:.07}),oliveDark:B("#45463a",{spec:.04,rim:.06}),bore:B("#11141b",{spec:0,rim:0,side:Oe})};function lh(i,t,e,n,s){const r=Tt(i,e-t,n,s);return r.rotation.y=Math.PI/2,r.position.x=(t+e)/2,r}function Qd(i,t,e,n,s,r=48){const a=new es;for(let o=0;o<r;o++){const l=o/r*Math.PI*2;a[o?"lineTo":"moveTo"](Math.cos(l)*e,Math.sin(l)*e)}return a.closePath(),lh(a,i,t,n,s)}function Ly(...i){const t=new nt;return t.add(...i),t}const tf=33,Iy=14.5,Dy=9.5,ef=-.51;class Uy extends nn{constructor(){super(),this.root.name="Minigun — orthographic v2",this.handStyle="work-glove",this.spec={cycle:{delay:0,back:.012,hold:0,fwd:.012,ejectAt:.008,lockOnEmpty:!1},recoil:{kick:[.5,.8],push:[.6,.9],roll:.5,squash:.25},pose:{tilt:.06,yaw:.1,roll:.3,lift:.55},reload:"mag",magOut:30,magIn:40,dropSize:.5,casing:"rifle-long",eject:{side:[1.2,2.2],up:[-.5,1],back:[.5,1.5],smoke:0},blast:{scale:.85,smoke:1,rings:1,bubble:!1},pellet:.9,impact:.35,rack:0,vibrate:.012,ammo:"rifle-long"},this.magAxis.set(0,-1,0),this.spinV=0;const t=this.model;this.rotor=new nt,this.rotor.name="Rotor";const e=ze(392),n=ze(667);for(let a=0;a<6;a++){const o=Math.PI/6+a/6*Math.PI*2,l=Math.sin(o)*tf,c=Math.cos(o)*tf;this.rotor.add(gt(e,n,Iy,ui.barrel,l,c,20)),this.rotor.add(gt(n-.4,n+.6,Dy,ui.bore,l,c,16))}this.rotor.add(gt(e,n-3,15,ui.hub,0,0,24)),this.rotor.add(Qd(ze(410),ze(455),54,7,ui.olive)),this.rotor.add(Qd(ze(587),ze(630),54,7,ui.olive)),t.add(this.rotor),t.add(Py([[134,760],[400,760],[400,632],[134,632]],104,11,ui.body,14));const s=It(va([[215,640,2],[378,640,2],[378,567,18],[215,567,18]]));s.holes.push(_n(va([[247,636,3],[345,636,3],[345,600,9],[247,600,9]]))),t.add(Tt(s,44,8,ui.olive));const r=It(va([[56,660,16],[47,695,20],[43,730,12],[52,757,14],[150,757,2],[150,636,2],[70,626,10]]));r.holes.push(_n(va([[121,662,5],[133,662,3],[133,725,5],[100,725,8],[100,703,12],[110,676,12]]))),t.add(Tt(r,36,5,ui.grip)),this.thumb=new nt,this.thumb.name="Thumb trigger",this.thumb.position.set(-22,42,0),this.thumb.rotation.z=ef,this.thumb.add(K(-58,14,-11,11,-24,24,10,ui.olive)),t.add(this.thumb),this.muzzleAnchor.position.set(n+1,0,0),this.portAnchor.position.set(ze(380),Is(748),54),this.finish(new y(-66,-2,0))}buildMag(){const t=this.kit.has("box")?34:0,e=55,n=46,s=Is(690),r=Is(862)-t;this.magCenter.set((ze(154)+ze(356))/2,(s+r)/2,e);const a=new nt;a.name="Minigun ammo drum";const o=(l,c)=>It([[-e-n-l,r-l],[-e+n+l,r-l],[-e+n+l,s+l],[-e-n-l,s+l]],c);return a.add(lh(o(0,40),ze(154),ze(356),30,ui.drum)),t&&a.add(lh(o(1.5,41.5),ze(230),ze(250),2,et.orange)),this.wrapMag(a)}kitPart(t){switch(t){case"optic":return{add:si(ze(250),Is(567),72)};case"laser":return{add:Hr(ze(358),ze(398),Is(760)-22,Is(760)-2)};case"shield":return{add:Ly(K(266,282,-74,122,-66,66,8,ui.oliveDark),K(264,284,98,110,-66.6,66.6,3,et.orange))};case"brake":return{add:gt(ze(664),ze(664)+34,52,Wt.black,0,0,6),parent:this.rotor,muzzle:ze(664)+36}}return null}setTrigger(t){this.thumb.rotation.z=ef-.22*t}spin(t,e){const n=e?42:0;this.spinV+=(n-this.spinV)*(1-Math.exp(-t*(e?7:1.1))),this.rotor.rotation.x+=this.spinV*t}get spinning(){return this.spinV/42}}const sl=.562,Ny=166,Fy=628,rn=i=>(i-Ny)*sl,us=i=>(Fy-i)*sl,_a=i=>i.map(([t,e,n])=>[rn(t),us(e),n===void 0?void 0:n*sl]),Uo=(i,t,e,n,s=4)=>Tt(It(_a(i),s),t,e,n),Cn={frame:B("#2f3644",{spec:.05,rim:.08}),dark:B("#262c38",{spec:.03,rim:.06}),cyl:B("#414c60",{spec:.08,rim:.08}),barrel:B("#353e4f",{spec:.04,rim:.08}),hammer:B("#615f62",{spec:.1,rim:.06}),wood:B("#8d5830",{spec:.06,rim:.07}),bore:B("#111418",{spec:0,rim:0,side:Oe})},ch=-17,xa=rn(305),No=rn(420),ic=33,nf=17,hh=Math.PI/3,sf=ch-30,rf=1.15,Fo=21.6,Ds=rn(605),af=Ds+54,of=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,lf=(i,t,e)=>Math.min(1,Math.max(0,(i-t)/(e-t)));function Ta(...i){const t=new nt;return t.add(...i),t}function Oy(i,t){const e=i.geometry.attributes.position;for(let n=0;n<e.count;n++)e.setZ(n,e.getZ(n)*t(e.getX(n)));return e.needsUpdate=!0,i.geometry.computeVertexNormals(),i.geometry.computeBoundingBox(),i.geometry.computeBoundingSphere(),i}function Oo(i,t,e,n,s,r,a=0){const o=J,l=[new o(0,i)],c=(u,d,f,g,_)=>{for(let m=0;m<=6;m++){const p=g+(_-g)*(m/6);l.push(new o(u+Math.cos(p)*f,d+Math.sin(p)*f))}};n>0?c(e-n,i+n,n,-Math.PI/2,0):l.push(new o(e,i)),s>0?c(e-s,t-s,s,0,Math.PI/2):l.push(new o(e,t)),a>0?l.push(new o(a,t),new o(a,t-10),new o(0,t-10)):l.push(new o(0,t));const h=new Mn(l,36);return h.rotateZ(-Math.PI/2),ie(new Y(h,r))}function cf(i,t){const e=Ta(Oo(i,t,Fo,0,6,Cn.barrel,12.4),gt(t-10.4,t-9.6,12.6,Cn.bore));return e.children[1].castShadow=!1,e}function hf(i){const t=Uo([[540,593],[541,582,3],[556,578,4],[560,566,3],[590,565,3],[592,593]],18,3,Cn.dark,2);return t.position.x=i-rn(540),t}function ky(i){const t=new nt,e=[],n=No-xa;for(let a=0;a<6;a++){const o=a*hh,l=vs("pistol");l.scale.setScalar(.88),l.position.set(-n/2+1.5,Math.cos(o)*nf,Math.sin(o)*nf),t.add(l),e.push(l.children[1])}const s=Ta(gt(-n/2-11,-n/2-3,25,Wt.black),gt(-n/2-25,-n/2-10,11,Wt.black));t.add(s);const r=a=>{for(const o of e)o.visible=a;t.userData.loaded=a,s.visible=a&&i()};return t.userData.loader=s,r(!0),{g:t,setLoaded:r}}class zy extends nn{constructor(){super(),this.root.name="Revolver — orthographic v2",this.handStyle="work-glove",this.spec={cycle:{delay:0,back:.07,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[9,11.5],push:[3.6,4.6],roll:1.6,squash:1.3},pose:{tilt:.42,yaw:.3,roll:.55,lift:.55},reload:"mag",magOut:64,magIn:80,dropSize:.12,casing:null,eject:{side:[1.4,2.4],up:[4,5.5],back:[.4,1.2]},blast:{scale:1.35,smoke:5,rings:1,bubble:!0},pellet:1.15,impact:1.3,rack:1.4,ammo:"pistol"},this.inset=46;const t=this.model,e=It(_a([[258,610,4],[281,583,10],[446,582,8],[455,592,6],[455,716,14],[437,735,10],[268,739,6],[247,757,4],[222,700,4],[182,671,4],[178,663,4],[192,655,6],[230,647,8],[252,630,6]]),4);e.holes.push(_n(_a([[297,595],[426,595],[426,720],[297,720]]),12*sl)),t.add(Tt(e,36,3,Cn.frame)),t.add(K(rn(300)+2,rn(423)-2,us(717)+2,us(598)-2,-3,3,1,Cn.bore)),t.add(Oo(rn(450),Ds-11,Fo,0,0,Cn.barrel)),this.crown=cf(Ds-12,Ds),t.add(this.crown),this.sight=hf(rn(540)),t.add(this.sight),this.crane=new nt,this.crane.position.set((xa+No)/2,sf,0),t.add(this.crane),this.cyl=new nt,this.cyl.position.set(0,ch-sf,0),this.crane.add(this.cyl);const n=No-xa;this.cyl.add(Oo(-n/2,n/2,ic,7,7,Cn.cyl)),this.crane.add(K(-n/2+6,n/2+8,-4,8,-8,8,3,Cn.dark)),this.cyl.add(this.magSlot),this.magAxis.set(-1,0,0),this.magCenter.set(0,0,0);const s=[255,642];this.hammer=new nt,this.hammer.position.set(rn(s[0]),us(s[1]),0);const r=Uo([[193,611,4],[201,597,6],[228,594,10],[264,606,4],[264,641,4],[242,652,4],[224,645,8],[208,625,10],[196,619,3]],18,3.5,Cn.hammer);r.position.set(-rn(s[0]),-us(s[1]),0),this.hammer.add(r),t.add(this.hammer),t.add(Oy(Uo([[160,668,14],[200,672,12],[232,697,16],[250,733,12],[246,755,6],[231,768,4],[201,872,8],[192,890,6],[66,890,10],[56,872,6],[58,845,30],[78,783,30],[110,726,30],[140,690,16]],54,13,Cn.wood),c=>1-.2*(c-rn(56))/(rn(250)-rn(56))));const a=It(_a([[264,730],[400,730],[398,758,10],[383,800,22],[350,821,22],[300,822,22],[268,806,16],[252,772,10],[246,750,4]]),4);a.holes.push(_n(_a([[283,739],[384,739],[377,786,14],[348,802,14],[300,803,14],[284,786,10]]),3)),t.add(Tt(a,13,2.2,Cn.frame));const o=[310,737];this.trig=new nt,this.trig.position.set(rn(o[0]),us(o[1]),0);const l=Uo([[296,733],[324,733],[322,760,6],[333,782,4],[328,792,3],[316,789,4],[302,772,8]],8,2,Cn.dark,2);l.position.set(-rn(o[0]),-us(o[1]),0),this.trig.add(l),t.add(this.trig),this.muzzleAnchor.position.set(Ds+2,0,0),this.portAnchor.position.set(xa-6,ch,18),this.cylBase=0,this.prevT=0,this.falling=!1,this.finish(new y(0,-74,0))}buildMag(){const{g:t,setLoaded:e}=ky(()=>this.crane.rotation.x>.9*rf);return this.wrapMag(t,e)}kitPart(t){switch(t){case"optic":return{add:si(rn(300),us(582),70)};case"loader":{const e=Ta(K(-46,2,-116,-88,23,30,5,Wt.black));for(let n=0;n<6;n++)e.add(Xe(-36+n%3*13,-96-Math.floor(n/3)*12,4.4,2.4,et.brass,31.2,14));return{add:e}}case"comp":{const e=this.kit.has("barrel")?af:Ds;return{add:qp(e-2,30,Fo+2),muzzle:e+30,blast:{scale:1.55,smoke:6}}}case"engraved":{const e=No-xa;return{add:Ta(gt(-e/2+6,-e/2+13,ic+.8,et.yellow),gt(e/2-13,e/2-6,ic+.8,et.yellow)),parent:this.cyl}}case"barrel":{const e=af;return{add:Ta(Oo(Ds-12,e-11,Fo,0,0,Cn.barrel),cf(e-12,e),hf(e-37)),hide:[this.crown,this.sight],muzzle:this.kit.has("comp")?e+30:e+2}}}return null}setAction(t){this.hammer.rotation.z=t*.6,t>this.prevT?(this.falling=!1,this.cyl.rotation.x=this.cylBase+t*hh):t<this.prevT&&!this.falling&&(this.falling=!0,this.cylBase+=this.prevT*hh,this.cyl.rotation.x=this.cylBase),this.prevT=t}setTrigger(t){this.trig.rotation.z=-.35*t}reloadPhase(t){const e=t<0?0:of(lf(t,.03,.12))*(1-of(lf(t,.62,.72)));this.crane.rotation.x=e*rf;for(const n of this.mags){const s=n.children[0];s!=null&&s.userData.loader&&(s.userData.loader.visible=s.userData.loaded&&e>.9)}}}const rl=.797,By=261.4,Vy=156,Pn=i=>(i-By)*rl,vi=i=>(Vy-i)*rl,qo=i=>i.map(([t,e,n])=>[Pn(t),vi(e),n===void 0?void 0:n*rl]),xr=(i,t,e,n,s=4)=>Tt(It(qo(i),s),t,e,n),uf=(i,t,e,n,s,r,a,o)=>K(Pn(i),Pn(t),vi(n),vi(e),s,r,a,o);function _o(i,t,e,n,s,r,a,o){const l=Tt(It(qo([[i,e],[t,e],[t,n],[i,n]]),a*rl),r-s,Math.min(1.2,(r-s)/3),o);return l.position.z=(s+r)/2,l}const sn={body:B("#283449",{spec:.06,rim:.08}),dark:B("#1d283a",{spec:.03,rim:.06}),bar:B("#36445d",{spec:.12,rim:.1}),olive:B("#56573d",{spec:.05,rim:.06}),barrel:B("#2e3b51",{spec:.05,rim:.08}),mag:B("#293448",{spec:.04,rim:.07}),bore:B("#08090c",{spec:0,rim:0,side:Oe})},Ei=72,Mr=Pn(678);function sc(i,t,e,n,s,r,a=0){const o=J,l=[new o(0,i)],c=(u,d,f,g,_)=>{for(let m=0;m<=6;m++){const p=g+(_-g)*(m/6);l.push(new o(u+Math.cos(p)*f,d+Math.sin(p)*f))}};l.push(new o(e,i)),s>0?c(e-s,t-s,s,0,Math.PI/2):l.push(new o(e,t)),a>0?l.push(new o(a,t),new o(a,t-10),new o(0,t-10)):l.push(new o(0,t));const h=new Mn(l,32);return h.rotateZ(-Math.PI/2),ie(new Y(h,r))}class Gy extends nn{constructor(){super(),this.root.name="Uzi — orthographic v2",this.handStyle="work-glove",this.spec={cycle:{delay:0,back:.025,hold:.005,fwd:.04,ejectAt:.02,lockOnEmpty:!1},recoil:{kick:[3,4],push:[1.6,2.2],roll:1.2,squash:.7},pose:{tilt:.18,yaw:.2,roll:.45,lift:.6},reload:"mag",magOut:36,magIn:42,dropSize:.2,casing:"pistol",eject:{side:[1.8,3],up:[3.5,5],back:[.2,1],smoke:.12},blast:{scale:.8,smoke:2,rings:1,bubble:!0},pellet:1,impact:.6,rack:2.5,ammo:"pistol"},this.magAxis.set(0,-1,0),this.magCenter.set(92.5,-113.5,0),this.inset=8;const t=this.model;t.add(xr([[265,100,10],[584,100,10],[584,207,12],[316,207,4],[312,197,4],[265,197,6]],Ei,6,sn.body)),t.add(xr([[271,104],[271,84,10],[279,76,8],[304,76,8],[312,84,10],[312,104]],36,4,sn.body)),t.add(xr([[539,104],[541,97,4],[553,79,6],[570,76,5],[572,104]],36,4,sn.body)),t.add(_o(381,492,148,164,Ei/2-2,Ei/2+.8,8,sn.dark)),this.knob=new nt,this.knob.add(_o(375,495,142,170,Ei/2-3,Ei/2+3,13,sn.bar)),t.add(this.knob),this.stockParts=[uf(221,268,104,216,-32,32,8,sn.olive),uf(263,288,190,212,-24,24,5,sn.dark),_o(262,375,132,182,Ei/2-3,Ei/2+3.5,10,sn.olive),_o(262,375,132,182,-Ei/2-3.5,-Ei/2+3,10,sn.olive)],t.add(...this.stockParts),t.add(sc(Pn(578),Pn(611),26,0,7,sn.olive)),t.add(sc(Pn(608),Mr,15.2,0,4,sn.barrel,9)),t.add(sc(Mr-10.4,Mr-9.6,9.2,0,0,sn.bore)),t.add(xr([[337,203,4],[418,203,4],[418,296,8],[411,302,6],[334,302,8],[327,289,8],[331,242,20]],40,6,sn.body));for(const r of[-1,1]){const a=xr([[352,210],[405,210],[398,297],[345,297]],4,1.4,sn.olive,6);a.position.z=r*20.5,t.add(a)}const e=It(qo([[414,200],[502,200],[502,250,12],[490,262,10],[418,262,4]]),3);e.holes.push(_n(qo([[425,205],[487,205],[487,238,8],[478,247,6],[425,247,4]]),3)),t.add(Tt(e,14,2.2,sn.body));const n=[440,207];this.trig=new nt,this.trig.position.set(Pn(n[0]),vi(n[1]),0);const s=xr([[430,204],[449,204],[447,222,4],[453,236,4],[448,244,3],[440,241,4],[434,227,6]],8,2,sn.dark,2);s.position.set(-Pn(n[0]),-vi(n[1]),0),this.trig.add(s),t.add(this.trig),this.muzzleAnchor.position.set(Mr+2,0,0),this.portAnchor.position.set(150,4,Ei/2+4),this.finish(new y(95,-75,0))}buildMag(){const t=this.kit.has("mag"),e=t?40:0;this.magCenter.set(92.5,-113.5-e/2,0);const n=new nt;return n.name="Uzi magazine",n.add(K(Pn(350),Pn(405),vi(382)-e,vi(212),-16.5,16.5,7,sn.mag)),t&&n.add(K(Pn(347),Pn(408),vi(382)-e-4,vi(382)-e+9,-18,18,5,et.orange)),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:si(70,vi(100),90)};case"grip":return{add:[Xp(198,228,vi(207),-112),Hr(234,288,-62,-42)].reduce((e,n)=>e.add(n),new nt)};case"suppressor":return{add:nl(Mr-4,150,19),muzzle:Mr+148,blast:{scale:.5,rings:0,bubble:!1,smoke:6}};case"stock":return{add:Fa(3,26),hide:this.stockParts}}return null}setAction(t){this.knob.position.x=-t*24}setTrigger(t){this.trig.rotation.z=-.3*t}}const al=.705,Hy=250,Wy=593,Yn=i=>(i-Hy)*al,Vs=i=>(Wy-i)*al,$o=i=>i.map(([t,e,n])=>[Yn(t),Vs(e),n===void 0?void 0:n*al]),aa=(i,t,e,n,s=4)=>Tt(It($o(i),s),t,e,n),df=(i,t,e,n,s,r,a,o)=>K(Yn(i),Yn(t),Vs(n),Vs(e),s,r,a,o);function ff(i,t,e,n,s,r,a,o){const l=Tt(It($o([[i,e],[t,e],[t,n],[i,n]]),a*al),r-s,Math.min(1.2,(r-s)/3),o);return l.position.z=(s+r)/2,l}const Tn={body:B("#263146",{spec:.06,rim:.08}),dark:B("#1c2537",{spec:.03,rim:.06}),barrel:B("#29344b",{spec:.05,rim:.08}),tube:B("#232d41",{spec:.04,rim:.07}),bolt:B("#3a475f",{spec:.1,rim:.08}),wood:B("#66412d",{spec:.07,rim:.07}),pad:B("#273246",{spec:.03,rim:.06}),bore:B("#07070a",{spec:0,rim:0,side:Oe})},Bi=44,yr=Yn(875),rc=Vs(631.5),Xy=i=>1-Math.pow(1-i,3);function ac(i,t,e,n,s,r,a=0){const o=J,l=[new o(0,i)],c=(u,d,f,g,_)=>{for(let m=0;m<=6;m++){const p=g+(_-g)*(m/6);l.push(new o(u+Math.cos(p)*f,d+Math.sin(p)*f))}};l.push(new o(e,i)),s>0?c(e-s,t-s,s,0,Math.PI/2):l.push(new o(e,t)),a>0?l.push(new o(a,t),new o(a,t-10),new o(0,t-10)):l.push(new o(0,t));const h=new Mn(l,32);return h.rotateZ(-Math.PI/2),ie(new Y(h,r))}function qy(i,t){const e=i.geometry.attributes.position;for(let n=0;n<e.count;n++)e.setZ(n,e.getZ(n)*t(e.getX(n)));return e.needsUpdate=!0,i.geometry.computeVertexNormals(),i.geometry.computeBoundingBox(),i.geometry.computeBoundingSphere(),i}class $y extends nn{constructor(){super(),this.root.name="M870 — orthographic v2",this.handStyle="work-glove",this.spec={cycle:{delay:.1,back:.11,hold:.04,fwd:.11,ejectAt:.06,lockOnEmpty:!1},recoil:{kick:[6,7.2],push:[4.5,5.5],roll:2,squash:1.2},pose:{tilt:.18,yaw:.15,roll:.6,lift:.3},reload:"tube",casing:"shell",eject:{side:[2,3],up:[4,5.5],back:[.2,.8]},blast:{scale:1.45,smoke:6,rings:2,bubble:!0},pellet:.55,impact:.45,rack:1.3,ammo:"shell"},this.inset=30;const t=this.model;t.add(aa([[290,650,4],[290,569,22],[482,569,6],[482,650,4]],Bi,6,Tn.body)),t.add(ff(362,460,585,617,Bi/2-2,Bi/2+.8,15,Tn.dark)),this.bolt=ff(405,452,601,613,Bi/2-2,Bi/2+1.6,6,Tn.bolt),t.add(this.bolt);const e=It($o([[288,640],[378,640],[372,664,10],[356,686,14],[302,688,10],[289,676,8]]),3);e.holes.push(_n($o([[302,650],[351,650],[346,668,8],[334,675,8],[306,676,6]]),3)),t.add(Tt(e,14,2.2,Tn.body));const n=[311,650];this.trig=new nt,this.trig.position.set(Yn(n[0]),Vs(n[1]),0);const s=aa([[303,647],[320,647],[318,660,4],[323,670,4],[317,675,3],[310,670,4],[305,660,6]],7,2,Tn.dark,2);s.position.set(-Yn(n[0]),-Vs(n[1]),0),this.trig.add(s),t.add(this.trig);const r=l=>1-.4*(l-Yn(67))/(Yn(306)-Yn(67));this.woodStock=new nt,this.woodStock.add(qy(aa([[67,617,6],[200,596,24],[214,598,10],[232,607,14],[248,603,12],[292,573,16],[306,569,4],[306,650,4],[283,656,10],[266,675,14],[250,697,10],[238,702,8],[222,700,10],[67,756,6]],38,9,Tn.wood),r)),this.woodStock.add(aa([[43,630,10],[52,619,6],[72,615,3],[72,758,3],[52,758,6],[45,748,10]],38,7,Tn.pad)),t.add(this.woodStock),t.add(ac(Yn(476),yr,14.8,0,4,Tn.barrel,8.8));const a=ac(yr-10.4,yr-9.6,9,0,0,Tn.bore);a.castShadow=!1,t.add(a),t.add(aa([[828,576],[831,566,3],[838,561,4],[857,561,4],[861,576]],12,2.5,Tn.dark,2));const o=ac(Yn(476),Yn(825),12.3,0,5,Tn.tube);o.position.y=rc,t.add(o),this.pump=new nt,this.pump.add(df(538,566,630,662,-15,15,4,Tn.dark)),this.pump.add(df(555,780,610,669,-24.5,24.5,10,Tn.wood)),t.add(this.pump),this.loadShell=vs("shell"),this.loadShell.visible=!1,t.add(this.loadShell),this.muzzleAnchor.position.set(yr+3,0,0),this.portAnchor.position.set(113,-4,Bi/2+2),this.finish(new y(12,-44,0))}kitPart(t){const e=(...n)=>n.reduce((s,r)=>s.add(r),new nt);switch(t){case"optic":return{add:si(60,Vs(569),80)};case"saddle":{const n=e(K(36,152,-40,-19,Bi/2,Bi/2+5,4,Wt.black));for(let s=0;s<4;s++){const r=vs("shell");r.rotation.z=-Math.PI/2,r.scale.setScalar(.55),r.position.set(52+s*28,-16,Bi/2+7),n.add(r)}return{add:n}}case"light":return{add:Hr(380,420,-62,-42)};case"stock":return{add:e(Fa(30,9),QM(4,-8)),hide:[this.woodStock]};case"brake":return{add:qp(yr-4,36,17),muzzle:yr+34,blast:{scale:1.7,smoke:8}}}return null}setAction(t){this.pump.position.x=-t*40,this.bolt.position.x=-t*26}setTrigger(t){this.trig.rotation.z=-.3*t}setLoading(t){const e=this.loadShell;if(e.visible=t>=0&&t<1,!!e.visible)if(t<.55){const n=Xy(t/.55);e.position.set(92,-110+n*(110+rc),0),e.scale.setScalar(.6+Math.min(1,t/.15)*.4)}else{const n=(t-.55)/.45;e.position.set(92+n*44,rc,0),e.scale.setScalar(1)}}}const Re={body:B("#36435b",{spec:.06,rim:.09}),grip:B("#2b313d",{spec:.03,rim:.07}),insert:B("#394760",{spec:.04,rim:.06}),recess:B("#252f40",{spec:.02,rim:.04}),sight:B("#313a4f",{spec:.04,rim:.06}),cap:B("#292d3a",{spec:.04,rim:.06}),trigger:B("#969492",{spec:.08,rim:.06}),bore:B("#101923",{spec:0,rim:0})},Yy=()=>B("#3e9eba",{emissive:"#3e9eba",emissiveIntensity:1,spec:0,rim:0}),di=(i,t,e,n,s=6)=>Tt(It(i,s),t,e,n);function Vi(i,t,e,n,s,r,a=32,o=s){const l=[],c=(d,f,g,_)=>{for(let m=0;m<=4;m++){const p=g+m/4*(Math.PI/2);l.push(new J(d+Math.cos(p)*_,f+Math.sin(p)*_))}};e>0?c(e+s,i+s,Math.PI,s):l.push(new J(0,i)),c(n-s,i+s,-Math.PI/2,s),c(n-o,t-o,0,o),e>0?(c(e+o,t-o,Math.PI/2,o),l.push(l[0].clone())):l.push(new J(0,t));const h=new Mn(l,a);h.rotateZ(-Math.PI/2);const u=new Y(h,r);return u.castShadow=u.receiveShadow=!0,u}function pf(i,t,e,n,s,r){const a=Tt(It(i,r),e,n,s);return a.rotation.x=-Math.PI/2,a.position.y=t,a}class jy extends nn{constructor(){super(),this.root.name="Plasma pistol — orthographic v2",this.handStyle="scifi-glove",this.spec={cycle:{delay:0,back:.03,hold:0,fwd:.07,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[3,4],push:[1.4,2],roll:.4,squash:.5},pose:{tilt:.2,yaw:.25,roll:.45,lift:.5},reload:"mag",magOut:44,magIn:70,dropSize:.22,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"spark",scale:.4,smoke:0,rings:0,bubble:!1},pellet:1,impact:.4,rack:0,ammo:"plasma"},this.glow=Yy(),this.magAxis.set(-.386,-.922,0),this.magCenter.set(10,-120,0),this.inset=36;const t=this.model;t.add(di([[-19.5,24,8],[1.5,46.5,8],[235.5,46.5,6],[235.5,-41],[213,-63.75,8],[69,-63.75],[-6,-43.5,8],[-19.5,-31.5,8]],82,20,Re.body)),t.add(di([[-19.5,24,8],[1.5,46.5,8],[88,46.5,4],[88,-63.75,4],[69,-63.75],[-6,-43.5,8],[-19.5,-31.5,8]],94,25,Re.body));for(const n of[-1,1]){const s=di([[88,26.5],[230,26.5],[230,-31.5],[88,-31.5]],1,.4,Re.recess,12);s.position.z=n*41.15;const r=di([[101,16.5],[208,16.5],[208,-18.75],[101,-18.75]],1,.4,this.glow,17.6);r.position.z=n*41.3,t.add(s,r)}t.add(pf([[100,25],[218,25],[218,-25],[100,-25]],45.6,2,.8,Re.recess,20)),t.add(pf([[106.5,19.5],[211.5,19.5],[211.5,-19.5],[106.5,-19.5]],45.6,2,.9,this.glow,19.5)),t.add(di([[12.75,40],[69,40],[63,69,4],[22.5,69,4]],40,3.5,Re.sight,3)),this.nozzle=new nt,this.nozzle.name="Nozzle",this.nozzle.add(Vi(229,257,0,44,10,Re.body,32,.3),Vi(282.25,311,0,44,.3,Re.body,32,10)),this.nozzle.add(Vi(256.5,282.75,30,44,.6,this.glow)),this.nozzle.add(Vi(306,321,0,30,4,Re.cap)),this.nozzle.add(Vi(319,321.4,0,24.5,1,this.glow)),t.add(this.nozzle),t.add(di([[1.5,-30,6],[86,-54,4],[67.5,-103.5,8],[46.5,-151.5,2],[-45,-132,2]],50,7,Re.grip));for(const n of[-1,1]){const s=di([[13,-52],[54,-52],[26,-134],[-28,-122]],2,.8,Re.insert,9);s.position.z=n*25,t.add(s)}const e=It([[70,-50,4],[165,-50,4],[160,-96,10],[138,-117.75,18],[55,-117.75,6]]);e.holes.push(_n([[82,-60,1],[146,-60,1],[143,-96,10],[131,-106.5,9],[86,-106.5,8],[81,-96,4]])),t.add(Tt(e,20,3,Re.grip)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(85.5,-64.5,0),this.trig.add(di([[-3,1,2],[20,1,2],[12,-8,3],[10,-18,4],[19,-30,3],[6,-33,4],[-4,-20,4]],9,2,Re.trigger,2)),t.add(this.trig),this.muzzleAnchor.position.set(325,0,0),this.portAnchor.position.set(150,20,44),this.finish(new y(18,-112,0))}buildMag(){const t=new nt;t.name="Plasma cell";const e=(r,a,o)=>[r+.386*o,a+.922*o],n=[-37.2,-133.7],s=[38.7,-149.8];return t.add(di([n,s,e(...s,70),e(...n,70)],34,3,Re.insert,4)),t.add(di([e(...n,26),e(...s,26),e(...s,40),e(...n,40)],35,2,this.glow,2)),t.add(di([[-45,-129,2],[47,-148.5,2],[42,-161.25,6],[28.5,-172.5,10],[-42,-154.5,10],[-49.5,-142.5,8]],52,7,Re.grip)),this.wrapMag(t)}kitPart(t){switch(t){case"nozzle":return{add:new nt().add(Vi(320,334,22,30,3,Re.cap),Vi(332,335,0,22,1,this.glow)),parent:this.nozzle,muzzle:338,blast:{scale:.55}};case"tank2":{const e=new nt;return e.add(gt(96,208,11,Re.insert,62),gt(124,180,11.6,this.glow,62)),e.add(Vi(86,98,0,13,3,Re.cap),Vi(206,218,0,13,3,Re.cap)),e.add(K(110,194,44,54,-8,8,3,Re.grip)),{add:e}}case"igniter":{const e=new nt;return e.add(K(250,300,-60,-40,-12,12,5,Wt.black),Xe(286,-50,4.5,2,this.glow,12.6)),{add:e,parent:this.nozzle}}case"shroud":{const e=new nt;e.add(K(236,306,40,56,-30,30,6,Wt.black));for(const n of[246,262,278,294])e.add(K(n-3,n+3,54,57,-22,22,1.5,Re.bore));return{add:e,parent:this.nozzle}}case"pump":{const e=new nt;return e.add(K(4,70,-24,18,44,56,6,Re.grip),Xe(37,-3,11,3,Re.cap,56.5),Xe(37,-3,7,3.4,this.glow,57)),{add:e}}}return null}setAction(t){this.nozzle.position.x=-5*t,this.glow.emissiveIntensity=1+.7*t}setTrigger(t){this.trig.rotation.z=-.3*t}}const Ne={body:B("#3e4b64",{spec:.06,rim:.09}),cap:B("#292d39",{spec:.04,rim:.07}),sight:B("#2f3645",{spec:.04,rim:.06}),tube:B("#313c53",{spec:.06,rim:.08}),copper:B("#cb7c4c",{spec:.16,gloss:14,rim:.1}),collar:B("#2b2f3c",{spec:.04,rim:.07}),hub:B("#343f55",{spec:.05,rim:.08}),fork:B("#353c4d",{spec:.05,rim:.08}),grip:B("#262b37",{spec:.03,rim:.07}),insert:B("#394760",{spec:.04,rim:.06}),neck:B("#2d3342",{spec:.03,rim:.06}),trigger:B("#b6663c",{spec:.1,rim:.06})},Zy=()=>B("#3e9eba",{emissive:"#3e9eba",emissiveIntensity:1,spec:0,rim:0}),An=(i,t,e,n,s=6)=>Tt(It(i,s),t,e,n);function xo(i,t,e,n,s,r,a=32,o=s){const l=[],c=(d,f,g,_)=>{for(let m=0;m<=4;m++){const p=g+m/4*(Math.PI/2);l.push(new J(d+Math.cos(p)*_,f+Math.sin(p)*_))}};e>0?c(e+s,i+s,Math.PI,s):l.push(new J(0,i)),c(n-s,i+s,-Math.PI/2,s),c(n-o,t-o,0,o),e>0?(c(e+o,t-o,Math.PI/2,o),l.push(l[0].clone())):l.push(new J(0,t));const h=new Mn(l,a);h.rotateZ(-Math.PI/2);const u=new Y(h,r);return u.castShadow=u.receiveShadow=!0,u}function Ky(i,t,e,n){const s=new Y(new Fn(t,e,10,32),n);return s.rotation.y=Math.PI/2,s.position.x=i,s}const Tr=new J(.361,.933),As=([i,t],e)=>[i+Tr.x*e,t+Tr.y*e];class Jy extends nn{constructor(){super(),this.root.name="Tesla gun — orthographic v2",this.handStyle="scifi-glove",this.spec={cycle:{delay:0,back:.03,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[3,4],push:[1.5,2],roll:.8,squash:.8},pose:{tilt:.25,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:36,magIn:60,dropSize:.22,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"spark",scale:.7,smoke:2,rings:1,bubble:!1},pellet:.9,impact:.8,rack:1,ammo:"cell"},this.glow=Zy(),this.magAxis.set(-Tr.x,-Tr.y,0),this.magCenter.set(14,-95,0),this.inset=32;const t=this.model;t.add(K(-9,10,-28.8,18,-27,27,6,Ne.cap)),t.add(An([[7.2,33,8],[126,33,8],[126,-39,8],[7.2,-39,8]],81,14,Ne.body)),t.add(An([[22.2,28],[64.2,28],[58.2,46.2,4],[28.2,46.2,4]],33,3,Ne.sight,3)),t.add(xo(118,244,0,28,3,Ne.tube)),this.turns=[xo(149.4,184.2,20,41.5,9,Ne.copper),xo(195,229.2,20,41.5,9,Ne.copper)],t.add(...this.turns),t.add(xo(228.6,242.4,0,30.5,3,Ne.collar)),t.add(An([[240,29,6],[266,19,6],[266,-19,6],[240,-29,6]],66,9,Ne.hub));const e=[[242.4,13.2,3],[244.2,24,4],[260.4,44.4,6],[268.2,48,4],[308.4,48,4],[311.4,43.2,3],[311.4,37.2,3],[308.4,33,3],[272.4,33,4],[260.4,16.2,6],[254.4,7.2,3]];t.add(An(e,22,4,Ne.fork)),t.add(An(e.map(([s,r,a])=>[s,-r,a]).reverse(),22,4,Ne.fork)),this.core=new Y(new Ye(25.5,32,20),this.glow),this.core.position.set(280.2,0,0),t.add(this.core),t.add(An([[8.4,-30,4],[64,-34,4],[58.2,-79.8,6],[37.4,-124.6,2],[-20.7,-98.4,2]],39,7,Ne.grip));for(const s of[-1,1]){const r=An([[16.2,-46.8],[47.4,-46.8],[30,-111],[-4,-96]],2,.8,Ne.insert,8);r.position.z=s*19.5,t.add(r)}const n=It([[56,-26,4],[112,-26,4],[109,-66,8],[96,-81,10],[52,-82,6]]);n.holes.push(_n([[62,-36,1],[94.5,-36,1],[94.5,-58,6],[88,-65.5,5],[62,-65.5,5]])),t.add(Tt(n,14,2.5,Ne.grip)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(76,-37,0),this.trig.add(An([[-9,1,2],[10,1,2],[1,-16,4],[-3,-27,3],[-14,-27,3],[-8,-12,4]],8,2,Ne.trigger,2)),t.add(this.trig),t.add(K(166,217,-50,-26,-21,21,5,Ne.neck)),t.add(An([[168,-44,4],[214.2,-44,4],[212.4,-126,12],[170.4,-126,12]],39,7,Ne.grip));for(const s of[-1,1]){const r=An([[181.2,-58.8],[205.2,-58.8],[205.2,-112.8],[181.2,-112.8]],2,.8,Ne.insert,8);r.position.z=s*19.5,t.add(r)}this.muzzleAnchor.position.set(308,0,0),this.portAnchor.position.set(80,10,42),this.finish(new y(20,-85,0))}buildMag(){const t=this.kit.has("battery")?16:0,e=o=>As(o,-t);this.magCenter.set(14-Tr.x*t/2,-95-Tr.y*t/2,0);const n=new nt;n.name="Tesla cell";const s=e([-15.2,-100.9]),r=e([31.9,-122.1]),a=58+t;return n.add(An([s,r,As(r,a),As(s,a)],28,3,Ne.insert,4)),n.add(An([As(s,22),As(r,22),As(r,34),As(s,34)],29,2,this.glow,2)),n.add(An([e([-20,-96.5]),e([38.1,-122.7]),e([35.4,-129]),e([28.2,-132.6]),e([-16.8,-112.8]),e([-21.6,-100.8])].map((o,l)=>[...o,[2,2,6,8,8,6][l]]),41,7,Ne.grip)),this.wrapMag(n)}kitPart(t){switch(t){case"coil":{const e=new nt;for(const n of[136,189.6])e.add(Ky(n,29.5,3,this.glow));return{add:e}}case"arrester":{const e=new nt;return e.add(K(76,116,28,44,-11,11,4,et.gunmetal),Xe(96,36,4,2,this.glow,11.6)),{add:e}}case"rod":{const e=new Y(new Ye(6,14,10),Ne.copper);e.position.set(13,94,0);const n=new nt;return n.add(K(10,16,28,92,-3,3,2,et.gunmetal),e),{add:n}}case"generator":{const e=new nt;return e.add(K(30,100,-26,14,36,48,5,et.gunmetal),Xe(65,-6,11,3,Ne.copper,48.5)),{add:e}}}return null}setTrigger(t){this.trig.rotation.z=-.3*t,this.pull=t}spin(t){this.clock=(this.clock||0)+t;const e=this.clock,n=this.pull||0;this.core.scale.setScalar(1+.08*Math.sin(e*23)*Math.sin(e*7.3)+n*.18),this.glow.emissiveIntensity=1+.25*Math.sin(e*31)*Math.sin(e*5.1)+n*.8,this.turns.forEach((s,r)=>s.scale.setScalar(1+.025*Math.max(0,Math.sin(e*6-r*.9))+n*.08*Math.max(0,Math.sin(e*30-r*.9))))}}const Fe={body:B("#36445b",{spec:.06,rim:.09}),lower:B("#232b39",{spec:.03,rim:.06}),rear:B("#323d51",{spec:.05,rim:.08}),pale:B("#7f8ea7",{spec:.08,rim:.08}),sight:B("#7c8ba5",{spec:.08,rim:.08}),cuff:B("#aacee6",{spec:.12,gloss:14,rim:.08}),cap:B("#8ec9e8",{spec:.12,gloss:14,rim:.08}),band:B("#354358",{spec:.05,rim:.07}),grip:B("#262f3e",{spec:.03,rim:.07}),front:B("#2a3445",{spec:.03,rim:.07}),insert:B("#333e52",{spec:.04,rim:.06}),trigger:B("#2a3243",{spec:.04,rim:.06}),capsule:B("#378399",{emissive:"#378399",emissiveIntensity:1,spec:.25,gloss:20,rim:.1}),glass:B("#bfe9ff",{transparent:!0,opacity:.45,spec:.8,gloss:30,rim:.4}),glow:B("#3e9eba",{emissive:"#3e9eba",emissiveIntensity:1,spec:0,rim:0})},Rs=(i,t,e,n,s=6)=>Tt(It(i,s),t,e,n);function Gi(i,t,e,n,s,r,a=40,o=s){const l=[],c=(d,f,g,_)=>{for(let m=0;m<=6;m++){const p=g+m/6*(Math.PI/2);l.push(new J(d+Math.cos(p)*_,f+Math.sin(p)*_))}};e>0?c(e+s,i+s,Math.PI,s):l.push(new J(0,i)),c(n-s,i+s,-Math.PI/2,s),c(n-o,t-o,0,o),e>0?(c(e+o,t-o,Math.PI/2,o),l.push(l[0].clone())):l.push(new J(0,t));const h=new Mn(l,a);h.rotateZ(-Math.PI/2);const u=new Y(h,r);return u.castShadow=u.receiveShadow=!0,u}class Qy extends nn{constructor(){super(),this.root.name="Cryo gun — orthographic v2",this.handStyle="scifi-glove",this.spec={cycle:{delay:0,back:.04,hold:0,fwd:.07,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[5,6.5],push:[2.4,3],roll:1,squash:1},pose:{tilt:.25,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:34,magIn:50,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"frost",scale:.8,smoke:4,rings:1,bubble:!0},pellet:1.1,impact:1,rack:1,ammo:"ice"},this.frost=B("#283951",{emissive:"#4fd8ff",emissiveIntensity:0,spec:0,rim:0}),this.magAxis.set(0,-1,0),this.magCenter.set(167,-76,0),this.inset=28;const t=this.model;t.add(Rs([[-15.8,38.9,12],[268.6,38.9,8],[268.6,-38.2,8],[-15.8,-38.2,12]],68,10,Fe.body)),t.add(K(203.8,261.4,-64.8,-24,-28,28,10,Fe.lower)),t.add(K(-15.8,64,-38.2,36.5,-39.5,39.5,11,Fe.rear)),t.add(K(13,59.8,-27.4,42.5,-41.5,41.5,7,Fe.pale)),t.add(Rs([[23.8,34,3],[97.9,34,3],[92.9,59,5],[31,59,5]],40,4,Fe.sight,3)),t.add(Gi(268.6,356.4,0,50.4,10,Fe.cuff)),this.cap=new nt,this.cap.name="Cap",this.cap.add(Gi(352,381,23,34.4,3,Fe.cap,40,6)),this.emitter=Gi(340,362,0,23.6,1,this.frost),this.emitter.castShadow=!1,this.cap.add(this.emitter),t.add(this.cap),t.add(Rs([[13.7,-28,4],[84.2,-28,4],[82.1,-49,6],[66,-151,10],[-17,-152,10],[-22.3,-139,6]],46,7,Fe.grip));for(const e of[-1,1]){const n=Rs([[18,-52],[70,-52],[57,-138],[-10,-138]],2,.8,Fe.insert,8);n.position.z=e*23,t.add(n)}this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(86,-40,0),this.trig.add(Rs([[-4,2,2],[8,2,2],[7,-20,4],[6,-42,4],[-6,-43,4],[-4,-20,4]],10,2.5,Fe.trigger,2)),t.add(this.trig),t.add(Rs([[279.4,-30,4],[321.1,-30,4],[326.2,-146.2,14],[275.8,-146.2,14]],55,8,Fe.front));for(const e of[-1,1]){const n=Rs([[287,-66],[313.6,-66],[316,-134],[285,-134]],2,.8,Fe.insert,8);n.position.z=e*27.5,t.add(n)}this.muzzleAnchor.position.set(384,0,0),this.portAnchor.position.set(180,10,36),this.finish(new y(34,-90,0))}buildMag(){const t=new nt;t.name="Coolant capsule";const e=Gi(90,244.8,0,37.8,30,Fe.capsule,40),n=Gi(141,180,28,40,5,Fe.band,40);for(const s of[e,n])s.position.y=-76,s.scale.z=1.25,t.add(s);return this.wrapMag(t)}kitPart(t){switch(t){case"optic":return{add:si(110,38.9,70)};case"cryotank":{const e=gt(196,254,12,Fe.glass,54);e.castShadow=!1;const n=new nt;return n.add(e,gt(198,252,7.5,Fe.glow,54),Gi(188,198,0,14,3,et.gunmetal,24,3),Gi(252,262,0,14,3,et.gunmetal,24,3)),n.add(K(204,246,36,46,-8,8,3,Fe.band)),{add:n}}case"lens":{const e=new nt;return e.add(Gi(379,392,22,36,3,Fe.cuff),Gi(380,391.4,0,22.5,1,Fe.glow)),{add:e,parent:this.cap,muzzle:396}}case"bayonet":return{add:Tt(It([[340,-40,2],[440,-48,2],[340,-62,3]]),6,1.5,Fe.cap)};case"compressor":{const e=new nt;return e.add(K(110,196,-22,22,30,44,7,et.gunmetal),Xe(153,0,11,3,et.dark,44.5),Xe(153,0,7,3.4,Fe.glow,45)),{add:e}}}return null}setAction(t){this.cap.position.x=-4*t,this.flash=t}setTrigger(t){this.trig.rotation.z=-.3*t,this.pull=t}spin(t){this.clock=(this.clock||0)+t,this.frost.emissiveIntensity=.06*(1+Math.sin(this.clock*4))+.9*Math.max(this.flash||0,(this.pull||0)*.5)}}const fi={body:B("#c7702b",{spec:.07,rim:.09}),lever:B("#323c4e",{spec:.05,rim:.08}),rail:B("#2c3544",{spec:.04,rim:.07}),nose:B("#30394a",{spec:.04,rim:.07}),bore:B("#1b212b",{spec:0,rim:0}),steel:B("#9aa3b2",{spec:.3,gloss:24,rim:.1}),chrome:B("#c9d2e0",{spec:.5,gloss:30,rim:.15})},mf=(...i)=>{const t=new nt;return t.add(...i),t};function tb(i,t,e,n,s){const r=i.geometry,a=r.attributes.position,o=r.attributes.normal,l=(s-n)/(e-t);for(let c=0;c<a.count;c++){const h=(a.getX(c)-t)/(e-t),u=a.getZ(c),d=n+(s-n)*Math.min(1,Math.max(0,h)),f=h>0&&h<1?l:0;a.setZ(c,u*d);const g=o.getX(c)-u*f/d*o.getZ(c),_=o.getY(c),m=o.getZ(c)/d,p=Math.hypot(g,_,m)||1;o.setXYZ(c,g/p,_/p,m/p)}return a.needsUpdate=o.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),i}const gf=new y(58,83,0);class eb extends nn{constructor(){super(),this.root.name="Stapler — orthographic v2",this.handStyle="rubber-glove",this.spec={cycle:{delay:0,back:.03,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[2,3],push:[1,1.6],roll:.6,squash:.7},pose:{tilt:.25,yaw:.25,roll:.5,lift:.5},reload:"mag",magOut:160,magIn:170,dropSize:.1,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{scale:.35,smoke:1,rings:0,bubble:!1},pellet:1,impact:.6,rack:0,ammo:"staple"},this.magAxis.set(-1,0,0),this.magCenter.set(40,-58,0),this.inset=40;const t=this.model,e=It([[-.6,-43.5,4.4],[272.2,-43.5,3.3],[272.2,34.1,16.5],[92.4,51.7,4.4],[78.7,81.4,5.5],[47.3,81.4,8.8],[26.4,53.4,22],[9.9,18.2,22],[1.1,-11.6,16.5]]);e.holes.push(_n([[77,20.9,5],[205.2,14.3,12],[205.2,-25.3,4],[51.2,-25.3,7]])),t.add(Tt(e,65,7,fi.body)),t.add(K(-3.9,280.5,-72.1,-44,-29.5,29.5,7,fi.rail)),t.add(K(266,289.3,-24.8,24.8,-19.8,19.8,6,fi.nose));const n=K(288.4,289.9,-10,10,-11,11,2,fi.bore);n.castShadow=!1,t.add(n,K(270,272.9,-42.5,-24,-17.6,17.6,2,fi.bore)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(97,21,0),this.trig.add(Tt(It([[-5,1],[5,1],[4,-8],[11,-17],[6,-21],[-2,-15],[-6,-7]],2.5),10,2,fi.lever)),t.add(this.trig),this.arm=new nt,this.arm.name="Lever",this.arm.position.copy(gf),this.armIn=new nt,this.armIn.position.copy(gf).negate(),this.arm.add(this.armIn),t.add(this.arm),this.armIn.add(tb(Tt(It([[54,82.5,4],[84.7,93,16.5],[168.9,106.7,33],[220,102.3,11],[234.9,87.5,5.5],[228.8,79.2,4.4],[159,71,22],[111.7,62.2,11],[95.2,50.1,3.3],[79.8,61.1,3.3],[72,79,2.2],[58,79,2]]),54,6,fi.lever),50,235,1,.63)),this.muzzleAnchor.position.set(291,0,0),this.portAnchor.position.set(150,30,33),this.finish(new y(32,-5,0))}buildMag(){const t=this.kit.has("clip"),e=new nt;e.name="Staple strip",e.add(K(4,t?262:250,-63,-53,-9,9,1.5,fi.steel));for(let n=12;n<(t?258:246);n+=10)e.add(K(n-.6,n+.6,-63.2,-52.8,-9.2,9.2,.3,et.gunmetal));return e.add(K(t?-19:-7,3,-68,-48,-25,25,5,fi.rail)),t&&e.add(K(-17,-11,-66.5,-49.5,-25.6,25.6,2,et.orange)),this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:si(140,103,46),parent:this.armIn};case"spring":{const e=new nt;for(let n=0;n<5;n++){const s=new Y(new Fn(9,2.4,8,18),fi.chrome);s.rotation.x=Math.PI/2,s.position.set(212,44+n*7.5,0),e.add(s)}return{add:e}}case"brace":return{add:mf(K(-90,20,30,36,-4,4,2,Wt.black),K(-98,-84,-56,36,-5,5,3,Wt.black),K(-90,0,-56,-50,-4,4,2,Wt.black))};case"motor":return{add:mf(K(214,262,-38,4,30,44,6,et.gunmetal),Xe(238,-17,10,3,fi.chrome,45),K(218,226,-34,0,43,45.5,1,et.orange))}}return null}setAction(t){this.arm.rotation.z=-.1*t}setTrigger(t){this.trig.rotation.z=-.3*t}}const be={body:B("#3f4d64",{spec:.07,rim:.09}),dark:B("#2c3545",{spec:.04,rim:.08}),grip:B("#272f3c",{spec:.03,rim:.07}),cream:B("#c7b69e",{spec:.05,rim:.07}),red:B("#b23324",{spec:.14,gloss:20,rim:.05}),glow:B("#ff7a6a",{emissive:"#ff2a1a",emissiveIntensity:2.4,rim:0}),cyan:B("#a8f6ff",{emissive:"#36d6ff",emissiveIntensity:2.2,rim:0}),glass:B("#cfefff",{transparent:!0,opacity:.4,spec:.8,gloss:30,rim:.4}),alu:B("#b9c1cf",{spec:.4,gloss:26,rim:.12})},Ma=(...i)=>{const t=new nt;return t.add(...i),t};function nb(i,t,e,n,s){const r=i.geometry,a=r.attributes.position,o=r.attributes.normal,l=(s-n)/(e-t);for(let c=0;c<a.count;c++){const h=(a.getX(c)-t)/(e-t),u=a.getZ(c),d=n+(s-n)*Math.min(1,Math.max(0,h)),f=h>0&&h<1?l:0;a.setZ(c,u*d);const g=o.getX(c)-u*f/d*o.getZ(c),_=o.getY(c),m=o.getZ(c)/d,p=Math.hypot(g,_,m)||1;o.setXYZ(c,g/p,_/p,m/p)}return a.needsUpdate=o.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),i}function oc(i){const t=i?K(134.7,199.2,-14,9.9,i>0?21:-25.25,i>0?25.25:-21,2,be.dark):K(134.7,199.2,21,26.2,-12.4,12.4,2,be.dark),e=i?K(137.3,197.1,-12,7.8,i>0?21:-25.5,i>0?25.5:-21,2,be.red):K(137.3,197.1,21,26.45,-10.4,10.4,2,be.red);return Ma(t,e)}class ib extends nn{constructor(){super(),this.root.name="Laser — orthographic v2",this.handStyle="scifi-glove",this.spec={cycle:{delay:0,back:.01,hold:0,fwd:.01,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[.3,.5],push:[.2,.3],roll:.2,squash:.15},pose:{tilt:.25,yaw:.25,roll:.5,lift:.5},reload:"mag",magOut:30,magIn:50,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"laser",scale:.3,smoke:0,rings:0,bubble:!1},pellet:1,impact:.3,rack:0,ammo:"cell"},this.magAxis.set(-.164,-.986,0),this.magCenter.set(217.6,-72,0),this.inset=30,this.clock=0,this.pull=0;const t=this.model;t.add(nb(Tt(It([[-12,25,5],[9.9,25,5],[30.2,12,4],[62,12,1],[62,-23.9,1],[38.5,-25,4],[8.3,-57.7,5],[-12,-57.7,5]]),42,6,be.cream),-12,62,1,.86)),t.add(K(58.2,108.2,-26,21.8,-27.5,27.5,9,be.dark)),t.add(Tt(It([[82.2,20,3],[94.1,37.4,6],[118.6,37.4,6],[134.7,20,3]]),26,4,be.dark)),t.add(K(107.6,264.7,-29.1,26,-25,25,8,be.body)),t.add(Tt(It([[229.3,22,2],[241.8,37.4,5],[273.5,37.4,5],[273.5,22,2]]),26,4,be.dark)),t.add(oc(1),oc(-1),oc(0)),t.add(K(265.2,292.2,-25,25,-26,26,8,be.cream)),this.lens=K(286,296.5,-12.5,12.5,-12.5,12.5,3,be.red),t.add(this.lens),t.add(Tt(It([[67.6,-20,3],[112.3,-20,2],[112.3,-43.2,3],[94.6,-101.9,6],[92.6,-114.9,6],[42.6,-114.9,7],[41.6,-100.4,6]]),28,5,be.grip)),t.add(K(108,137.3,-57.7,-24,-15,15,7,be.grip)),t.add(K(205.9,245.4,-41.6,-27,-18,18,4,be.dark)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(115,-56,0),this.trig.add(Tt(It([[-5,1],[5,1],[4,-9],[12,-18],[8,-24],[-2,-19],[-6,-10]],2.5),9,2,be.grip)),t.add(this.trig),this.muzzleAnchor.position.set(298,0,0),this.portAnchor.position.set(167,-2,27),this.finish(new y(75,-68,0))}buildMag(){const t=this.kit.has("powercell"),e=t?16:0;this.magCenter.set(217.6-e*.08,-72-e/2,0);const n=new nt;return n.name="Power cell",n.add(Tt(It([[207.3,-36,4],[240.6,-36,4],[230.4-e*.166,-103.5-e,7],[195-e*.166,-103.5-e,7]]),33,6,be.cream)),t&&n.add(K(196.5,231,-100,-94,-17.4,17.4,2,be.red)),this.wrapMag(n)}kitPart(t){switch(t){case"lens2":return{add:Ma(K(292,304,-20,20,-21,21,6,be.cream),K(300,309,-15,15,-15,15,3,be.glow)),muzzle:311};case"radiator":{const e=Ma(K(140,222,23,30,-17,17,2,be.dark));for(let n=146;n<220;n+=9)e.add(K(n-1.5,n+1.5,29,41,-15,15,1,be.alu));return{add:e}}case"prism":{const e=new Y(new Yi(13,0),be.glass);e.position.set(253,54,0);const n=new Y(new Yi(5.5,0),be.glow);return n.position.copy(e.position),{add:Ma(K(244,262,36,42,-6,6,2,Wt.black),e,n)}}case"diode":return{add:Ma(K(102,111,-31,28,-28.5,28.5,3,be.cyan),K(98,115,-6,6,28,31,2,et.gunDark))}}return null}setTrigger(t){this.trig.rotation.z=-.3*t,this.pull=t}spin(t,e){this.clock+=t;const n=1+(e?.18:.05)*Math.sin(this.clock*(e?40:4));this.lens.scale.set(1,n,n)}}const Ti={body:B("#cd9634",{spec:.07,rim:.09}),housing:B("#e1a93e",{spec:.07,rim:.09}),cass:B("#bf8a2f",{spec:.06,rim:.08}),dark:B("#2f3846",{spec:.04,rim:.08}),grip:B("#272e3b",{spec:.03,rim:.07}),blade:B("#9a999b",{spec:.25,gloss:22,rim:.12})},sb=(...i)=>{const t=new nt;return t.add(...i),t},uh=Math.PI/180,oa=new y(220.3,0,0),lc={r:65.9,tip:84.8,teeth:10},Mo=(i,t,e,n,s=0)=>Array.from({length:n+1},(r,a)=>{const o=(t+(e-t)*a/n)*uh;return[Math.cos(o)*i,Math.sin(o)*i,a===0||a===n?s:0]});function dh(i){const t=new es,e=i.length;return i.forEach(([n,s,r=0],a)=>{if(!r){a?t.lineTo(n,s):t.moveTo(n,s);return}const[o,l]=i[(a+e-1)%e],[c,h]=i[(a+1)%e],u=Math.hypot(o-n,l-s)||1,d=Math.hypot(c-n,h-s)||1,f=Math.min(r,u/2,d/2),g=n+(o-n)/u*f,_=s+(l-s)/u*f;a?t.lineTo(g,_):t.moveTo(g,_),t.quadraticCurveTo(n,s,n+(c-n)/d*f,s+(h-s)/d*f)}),t.closePath(),t}function rb({r:i,tip:t,teeth:e},n){const s=[],r=360/e,a=(o,l,c)=>[Math.cos(o*uh)*l,Math.sin(o*uh)*l,c];for(let o=0;o<e;o++){const l=n+o*r;s.push(a(l-r*.28,i,2),a(l-r*.16,t,3.5),a(l+r*.16,t,3.5),a(l+r*.28,i,2),a(l+r*.5,i,0))}return dh(s)}class ab extends nn{constructor(){super(),this.root.name="Saw launcher — orthographic v2",this.handStyle="rubber-glove",this.spec={cycle:{delay:0,back:.04,hold:.12,fwd:.16,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[6,8],push:[3,4],roll:1.5,squash:1.2},pose:{tilt:.3,yaw:.25,roll:.6,lift:.55},reload:"mag",magOut:34,magIn:54,dropSize:.25,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{scale:.5,smoke:3,rings:0,bubble:!1},pellet:1,impact:1.2,rack:1,ammo:"saw"},this.magAxis.set(0,-1,0),this.magCenter.set(105,-13,0),this.inset=34,this.prevS=0,this.fed=1;const t=this.model;t.add(Tt(It([[23.8,55.1,12],[162,55.1,3],[162,-1,2],[72.4,-1,2],[25.9,6.5,5]]),36,6,Ti.body)),t.add(K(85.9,119.3,17.8,58.3,-21,21,7,Ti.dark)),t.add(Tt(It([[94.5,52.9,1],[108,97.2,13.5],[217.1,109.1,6.5],[221.9,74.5,1],[198.7,74.5,1],[198.7,84.2,5.4],[132.3,84.2,5.4],[119.9,52.9,1]]),27,5,Ti.dark)),t.add(Tt(It([[27,6.5,3],[72.4,2.2,3],[52.9,-67,6],[50.8,-78.8,6],[-5.4,-78.8,7],[-8.6,-63.7,7]]),24,5,Ti.grip)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(76,-6,0),this.trig.add(Tt(It([[-6,0],[0,0],[12,-16],[13,-22],[7,-24],[-1,-14],[-6,-6]],2.5),9,2,Ti.grip)),t.add(this.trig);const e=Tt(dh([...Mo(89.6,62,226,40,6),...Mo(19.5,226,62,16,3)]),48,7,Ti.housing);e.position.copy(oa);const n=new es;n.absarc(0,0,24.5,0,Math.PI*2,!1);const s=Tt(n,36,3,Ti.dark);s.position.copy(oa),t.add(e,s),this.spinner=new nt,this.spinner.name="Blade",this.spinner.position.copy(oa),this.blade=Tt(rb(lc,7),12,2,Ti.blade),this.spinner.add(this.blade),t.add(this.spinner),this.muzzleAnchor.position.set(oa.x+lc.tip,0,0),this.portAnchor.position.set(110,30,20),this.finish(new y(30,-36,0))}buildMag(){const t=this.kit.has("blades")?14:0;this.magCenter.set(105,-13-t/2,0);const e=new nt;return e.name="Blade cassette",e.add(Tt(It([[72.4,-1,3],[138.2,-1,2],[138.2,-25.9-t,3],[91.8+t*.78,-25.9-t,5]]),36,5,Ti.cass)),t&&e.add(K(100,132,-34,-30,17.6,18.6,1,Ti.dark)),this.wrapMag(e)}kitPart(t){switch(t){case"optic":{const e=new nt;return e.position.set(158,102,0),e.rotation.z=.109,e.add(si(-25,0,50)),{add:e}}case"motor":{const e=n=>{const s=new Y(new Fn(21.5,2.6,10,28),et.orange);return s.rotation.y=Math.PI/2,s.position.set(n,31,0),s};return{add:sb(gt(-28,26,21,Wt.black,31),e(-16),e(-4))}}case"sawguard":{const e=Tt(dh([...Mo(94,226,320,24,2),...Mo(87,320,226,24,2)]),22,2,Wt.black);return e.position.copy(oa),{add:e}}case"diamond":return{add:new Y(new Fn(lc.r,2.6,8,40),et.yellow),parent:this.spinner}}return null}setAction(t){t>this.prevS&&t>.1?this.fed=0:(t<this.prevS||t<=0)&&(this.fed=1-t),this.prevS=t,this.spinner.visible=this.fed>.05,this.spinner.scale.setScalar(.4+.6*this.fed)}setTrigger(t){this.trig.rotation.z=-.3*t}spin(t,e){this.spinner.rotation.z-=t*(e?40:7)}}const ye={wood:B("#aa7441",{spec:.06,rim:.08}),navy:B("#343e58",{spec:.05,rim:.08}),cap:B("#2a3249",{spec:.03,rim:.06}),tray:B("#2b3347",{spec:.03,rim:.05}),cream:B("#e4d8ca",{spec:.08,rim:.05}),steel:B("#9aa4b4",{spec:.32,rim:.1})},la=(i,t,e,n)=>Tt(It(i,6),t,e,n);function ob(i){const t=pn.smoothstep;return 1-6/29*t(i,34,70)-3/29*t(i,272,300)}function vf(i){const t=i.geometry.attributes.position;for(let e=0;e<t.count;e++)t.setZ(e,t.getZ(e)*ob(t.getX(e)));return t.needsUpdate=!0,i.geometry.computeBoundingBox(),i.geometry.computeBoundingSphere(),i}const pi={nockDrawn:62,rest:132,stringY:-14,boltLen:144},Ar=[[236.5,0],[234.5,34],[227,66],[213,92],[195,115],[174,131],[153,143],[132,152]],fh=152;function _f(i){const t=[...Ar.slice(1).reverse().map(([h,u])=>new J(h,-u)),...Ar.map(([h,u])=>new J(h,u))],e=new Uh(t),n=[],s=[],r=64;for(let h=0;h<=r;h++){const u=e.getPoint(h/r),d=e.getTangent(h/r),f=(40-14*Math.min(1,Math.abs(u.y)/fh)**2)/2;n.push(new J(u.x+d.y*f,-(u.y-d.x*f))),s.push(new J(u.x-d.y*f,-(u.y+d.x*f)))}const a=new es([...n,...s.reverse()]),o=Tt(a,44,7,i),l=o.geometry;l.rotateX(-Math.PI/2);const c=l.attributes.position;for(let h=0;h<c.count;h++){const u=Math.min(1,Math.abs(c.getZ(h))/fh)**2;c.setY(h,-42+13*u+c.getY(h)*(22.5-7*u)/22)}return c.needsUpdate=!0,l.computeBoundingBox(),l.computeBoundingSphere(),o}function xf(i,t=0){const[e,n]=Ar[Ar.length-2],[s,r]=Ar[Ar.length-1],a=Math.atan2(-(r-n),s-e);return[1,-1].map(o=>{const l=new nt;return l.add(K(-12-t,12+t,-48-t,-10+t,-10-t,10+t,5,i)),l.position.set(s+2,0,o*r),l.rotation.y=o*a,l})}class lb extends nn{constructor(){super(),this.root.name="Crossbow — orthographic v2",this.handStyle="work-glove",this.spec={cycle:{delay:0,back:.05,hold:.2,fwd:.3,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[3,4],push:[2,2.5],roll:1,squash:.8},pose:{tilt:.2,yaw:.25,roll:.5,lift:.5},reload:"mag",magOut:34,magIn:56,dropSize:.18,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"string",scale:.3,smoke:1,rings:0,bubble:!1},pellet:1,impact:1.1,rack:0,ammo:"bolt"},this.magAxis.set(0,1,0),this.magCenter.set(8,-14,0),this.inset=46,this.prevS=0,this.drawing=!0,this.loose=0,this.leverCycle=0,this.leverReload=0;const t=this.model;t.add(vf(la([[-24,-24,2],[40,-24,2],[40,1,2],[64,2,6],[143,-5,40],[233,-6,20],[262,-3,8],[300,-3,5],[300,-58,6],[264,-61,10],[211,-90,18],[77,-55,12],[54,-46,6],[18,-36,6],[-24,-38,8]],58,6,ye.wood)));for(const s of[1,-1]){const r=la([[-24,7,5],[34,7,14],[66,0,6],[66,-26,2],[-24,-30,2]],8,2.5,ye.wood);r.geometry.translate(0,0,s*25),t.add(vf(r))}t.add(la([[208,-3],[276,-3],[276,-62],[208,-62]],60,8,ye.wood)),t.add(la([[22,-30,4],[56,-40,4],[51.6,-47,6],[36,-86,10],[27,-120,10],[23,-128,8],[-10,-131,12],[-27,-126,10],[-29,-116,8],[-13,-86,10],[10,-54,8]],42,10,ye.navy)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(63,-48,0),this.trig.add(la([[-9,2,2],[10,2,2],[5,-12,4],[3,-21,3],[-3,-21,3],[-8,-9,4]],9,2.5,ye.wood)),t.add(this.trig),this.limb=_f(ye.navy),this.caps=xf(ye.cap),t.add(this.limb,...this.caps),this.strings=[1,-1].map(()=>{const s=new Y(new He(1.6,1.6,1,8),ye.cream);return t.add(s),s}),this.bolt=new nt,this.bolt.name="Bolt",this.bolt.add(gt(0,pi.boltLen-16,3,ye.cream,0,0,12));const e=new Y(new yi(4.5,18,12),ye.navy);e.rotation.z=-Math.PI/2,e.position.x=pi.boltLen-9,this.bolt.add(e),this.bolt.position.set(pi.nockDrawn,0,0),t.add(this.bolt),this.lever=new nt,this.lever.name="Lever",this.lever.position.set(58,4,0);const n=new nt;n.rotation.z=-Math.PI/2,n.add(K(-82,-16,-8,3,-20.5,20.5,4,ye.navy),K(-20,4,-8,8,-15,15,4.5,ye.navy)),this.lever.add(n),t.add(this.lever),this.setLever(),this.setString(pi.nockDrawn),this.muzzleAnchor.position.set(pi.nockDrawn+pi.boltLen+2,0,0),this.portAnchor.position.set(100,6,16),this.finish(new y(32,-64,0))}setString(t){this.nockX=t,this.strings.forEach((e,n)=>{const s=n?-1:1,r=cb.set(pi.rest,pi.stringY,s*fh),a=hb.set(t,0,0);e.scale.set(1,r.distanceTo(a),1),e.position.addVectors(r,a).multiplyScalar(.5),e.quaternion.setFromUnitVectors(db,ub.subVectors(a,r).normalize())})}setLever(){this.lever.rotation.z=Math.PI/2-Math.max(this.leverCycle,this.leverReload)}buildMag(){const t=this.kit.has("boltbox"),e=t?-46:-22;this.magCenter.set((e+38)/2,-14,0);const n=new nt;n.name="Bolt tray",n.add(K(e,38,-23,-6,-19,19,4,ye.tray));for(const s of[-10,0,10])n.add(gt(e+4,34,2.6,ye.cream,-6,s,10));return this.wrapMag(n)}kitPart(t){switch(t){case"optic":{const e=si(212,8,58);for(const n of[1,-1])e.add(K(218,266,-4,9,n>0?13:-27,n>0?27:-13,3,ye.navy));return{add:e}}case"crank":return{add:cc(Xe(-6,-12,9,10,ye.navy,32),K(-10,-2,-12,18,35,39,3,ye.navy),Xe(-6,18,4.5,12,ye.cream,43))};case"steelprod":return{add:cc(_f(ye.steel),...xf(ye.steel,1.5)),hide:[this.limb,...this.caps]};case"stock":return{add:cc(gt(-82,-22,4,ye.navy,-8,25),gt(-82,-22,4,ye.navy,-8,-25),gt(-82,-22,4.5,ye.navy,-30,0),K(-94,-78,-46,6,-30,30,6,ye.cap))}}return null}setAction(t){t<=0||t<this.prevS?this.drawing=!0:t>this.prevS&&t>.1&&(this.drawing=!1),this.prevS=t;let e=pi.nockDrawn+(pi.rest-pi.nockDrawn)*t;if(this.drawing)this.loose=0;else{this.loose||(this.loose=performance.now());const n=(performance.now()-this.loose)/1e3;e+=Math.sin(n*80)*6*Math.exp(-n*10)*t}this.bolt.visible=this.drawing,this.bolt.position.x=e,this.setString(e),this.leverCycle=.6*t,this.setLever()}reloadPhase(t){const e=t<0?0:pn.smoothstep(t,.02,.1)-pn.smoothstep(t,.62,.72);this.leverReload=2*e,this.setLever()}setTrigger(t){this.trig.rotation.z=-.3*t}}function cc(...i){const t=new nt;return t.add(...i),t}const cb=new y,hb=new y,ub=new y,db=new y(0,1,0),cn={body:B("#3a4b69",{spec:.07,rim:.09}),rail:B("#384867",{spec:.07,rim:.09}),sight:B("#2f3c55",{spec:.04,rim:.07}),cap:B("#2b3142",{spec:.03,rim:.06}),grip:B("#2e3446",{spec:.03,rim:.07}),cream:B("#dacbb5",{spec:.06,rim:.06}),glass:B("#cfefff",{transparent:!0,opacity:.4,spec:.8,gloss:30,rim:.4})},Mf={core:"#66defe",rim:"#2fa9e2"},yf=i=>B("#000000",{emissive:i,emissiveIntensity:1,spec:0,rim:0}),yo=(i,t,e,n,s=6)=>Tt(It(i,s),t,e,n);function Yo(i,t,e,n,s){const r=Tt(i,e-t,n,s);return r.rotation.y=Math.PI/2,r.position.x=(t+e)/2,r}function bf(i,t,e){const n=Math.sign(e),s=Math.min(5,Math.abs(e-t)/3);return It([[-i,t,3],[-7.5,t,1.5],[-7.5,19*n,1.5],[7.5,19*n,1.5],[7.5,t,1.5],[i,t,3],[i,e,s],[-i,e,s]])}function Sf(i,t,e){const n=[];for(const[r,a]of[[8,33.1],[-35.4,-8]])for(const o of[1,-1])n.push(K(i,t,r,a,o>0?7.5:-18,o>0?18:-7.5,4,cn.rail));const s=[Yo(bf(15,8,30.4),t-1,e,3,cn.cap),Yo(bf(15,-8,-31.7),t-1,e,3,cn.cap)];return{bars:n,caps:s}}function wf(i,t,e,n){const s=K(i,t-1,-18.5,18.5,-6.5,6.5,6,e),r=K(i+1.5,t,-6.9,6.9,-7,7,5,n),a=K(t-4,t+.6,-16,16,-5.2,5.2,2.5,n);return s.castShadow=r.castShadow=a.castShadow=!1,[s,r,a]}const fb=()=>It([[-22,-21,3],[-14,-29,3],[14,-29,3],[22,-21,3],[22,21,3],[12,35.9,4],[-12,35.9,4],[-22,21,3]]),pb=()=>It([[-21,-30],[-13,-39.1],[13,-39.1],[21,-30],[21,30],[12,39.5],[-12,39.5],[-21,30]],3),bo=469.7;class mb extends nn{constructor(){super(),this.root.name="Railgun — orthographic v2",this.handStyle="scifi-glove",this.spec={cycle:{delay:0,back:.05,hold:.3,fwd:.6,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[12,14],push:[6,7],roll:2.5,squash:1.6},pose:{tilt:.3,yaw:.25,roll:.6,lift:.6},reload:"mag",magOut:34,magIn:56,dropSize:.25,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"rail",scale:1.4,smoke:5,rings:2,bubble:!0},pellet:1,impact:1.6,rack:1,ammo:"slug"},this.magAxis.set(0,-1,0),this.magCenter.set(142,-30,0),this.inset=30,this.clock=0,this.charge=1,this.glowMat=yf(Mf.core),this.rimMat=yf(Mf.rim);const t=this.model;t.add(K(-73.6,-50,-29,26.2,-19,19,7,cn.cap)),t.add(Yo(pb(),-55.7,11,8,cn.cream)),t.add(K(.9,15.2,-29,28.5,-21,21,5,cn.cap)),t.add(Yo(fb(),11,204.7,5,cn.body)),t.add(yo([[32.7,33],[95.2,33],[88.8,49.2],[39.1,49.2]],27,3.5,cn.sight,3)),t.add(yo([[17.9,-26,3],[69,-26,3],[48.3,-85.1,9],[-3.2,-85.1,9]],30,7,cn.grip)),this.trig=new nt,this.trig.name="Trigger",this.trig.position.set(75,-28,0),this.trig.add(yo([[-4,2],[4,2],[3,-8],[0,-16],[-4,-14],[-3.5,-6]],7,2,cn.grip,2)),t.add(this.trig);const e=Sf(205.6,456,bo);this.caps=e.caps,t.add(...e.bars,...e.caps);const[n,s,r]=wf(208,452,this.rimMat,this.glowMat);this.channel=s,t.add(n,s,r),this.cores=[n,s,r],this.muzzleAnchor.position.set(bo+2,0,0),this.portAnchor.position.set(120,36,22),this.finish(new y(32,-58,0))}buildMag(){const t=this.kit.has("capacitor"),e=t?-52:-40;this.magCenter.set(142,(-20+e)/2,0);const n=new nt;return n.name="Slug box",n.add(yo([[78,-20,2],[204.7,-20,4],[204.7,e+6],[199,e,5],[96,e,8],[78,-29,10]],44,8,cn.body)),t&&n.add(K(104,186,-47,-42,19.6,21.6,1.5,this.rimMat)),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:So(gt(30,104,9,Wt.black,66),gt(100,112,12.5,Wt.black,66),gt(22,32,11,Wt.black,66),K(46,56,47,58,-5,5,2,Wt.black),K(76,86,47,58,-5,5,2,Wt.black))};case"coolant":{const e=gt(112,188,9.5,cn.glass,6,30);e.castShadow=!1;const n=gt(116,184,5.5,this.glowMat,6,30);return n.castShadow=!1,{add:So(e,n,K(118,126,-6,18,20,32,2,cn.cap),K(174,182,-6,18,20,32,2,cn.cap))}}case"rails":{const e=Sf(452,492,bo+36);return{add:So(...e.bars,...e.caps,...wf(440,488,this.rimMat,this.glowMat)),hide:this.caps,muzzle:bo+38}}case"core":{const e=new Y(new Ye(15,18,12),cn.glass);e.position.set(-22,58,0);const n=new Y(new Ye(8,14,10),this.glowMat);return n.position.copy(e.position),{add:So(K(-38,-6,36,45,-10,10,3,cn.cap),e,n)}}}return null}glow(){const t=(.25+.75*this.charge)*(1+.08*Math.sin(this.clock*9));this.glowMat.emissiveIntensity=this.rimMat.emissiveIntensity=t}setAction(t){this.charge=1-t,this.glow()}setTrigger(t){this.trig.rotation.z=-.3*t}spin(t){this.clock+=t,this.glow()}}function So(...i){const t=new nt;return t.add(...i),t}const jp={glock19:uy,glock19x:my,revolver:zy,uzi:Gy,m870:$y,ak47:Ay,minigun:Uy,flamer:vy,plasma:jy,cryo:Qy,bow:_y,grenade:xy,tesla:Jy,stapler:eb,laser:ib,saw:ab,crossbow:lb,rail:mb};function gb(i,t){const e=new De({side:mn,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new _t(t)},uStrength:{value:0},uViewport:{value:new J(innerWidth,innerHeight)}},vertexShader:`uniform vec2 uViewport; uniform float uStrength;
      void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vec4 p=projectionMatrix*mv;
      vec2 n=(projectionMatrix*vec4(normalize(normalMatrix*normal),0.)).xy;
      p.xy+=normalize(n+vec2(.00001))*mix(2.,5.,uStrength)*2./uViewport*p.w;gl_Position=p;}`,fragmentShader:`uniform vec3 uColor; uniform float uStrength;
      void main(){gl_FragColor=vec4(uColor*(1.+uStrength*.8),uStrength*.9);}`}),n=[];i.traverse(r=>{var a;r.isMesh&&!r.userData.noBounds&&!((a=r.material)!=null&&a.transparent)&&n.push(r)});const s=n.map(r=>{const a=new Y(r.geometry,e);return a.userData.noBounds=!0,a.renderOrder=4,r.add(a),a});return{update(r){e.uniforms.uStrength.value=Math.min(1,r*1.6)*(.8+.2*Math.sin(r*7)),e.uniforms.uViewport.value.set(innerWidth,innerHeight)},dispose(){for(const r of s)r.removeFromParent();e.dispose()}}}const Ef=new Mn([[0,0],[.2,.08],[.24,.28],[.17,.5],[.08,.76],[0,1]].map(([i,t])=>new J(i,t)),6),vb=new Ge({color:"#ff762b",transparent:!0,opacity:.88,depthWrite:!1,side:Oe,toneMapped:!1}),_b=new Ge({color:"#ffe45d",transparent:!0,opacity:.96,depthWrite:!1,side:Oe,toneMapped:!1});class xb{constructor(t){this.root=new nt,this.root.userData.noBounds=!0,t.pivot.add(this.root),this.t=0,this.flames=[];for(let e=0;e<9;e++){const n=new nt,s=new Y(Ef,vb),r=new Y(Ef,_b);r.scale.set(.52,.62,.52),r.position.z=.015,n.add(s,r),this.root.add(n),this.flames.push(n)}this.update(0,!1,t)}update(t,e,n){var o;if(this.root.visible=e,!e){(o=this.outline)==null||o.dispose(),this.outline=null;return}this.outline??(this.outline=gb(n.model,"#ff941f")),this.outline.update(1+Math.sin(this.t*4)*.15),this.t+=t;const s=n.rest,r=s.max.x-s.min.x,a=n.muzzleAnchor.position.y*n.model.scale.y+n.model.position.y;for(let l=0;l<this.flames.length;l++){const c=this.flames[l],h=this.t*10+l*2.4;c.position.set(s.min.x+r*(.08+l/8*.84),a-.27+Math.sin(l*1.8)*.12,s.max.z+.035),c.scale.set(.4+r*.065,.9+.38*Math.sin(h)+.28*Math.sin(h*.61),.55),c.rotation.z=Math.sin(h*.68)*.2}}}const gi=(i,t)=>i+Math.random()*(t-i),wo=([i,t])=>gi(i,t),Zp=i=>Math.min(1,Math.max(0,i)),Tf=i=>1-Math.pow(1-i,3),Af=i=>i*i*i,Rf=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ca=(i,t,e)=>Zp((i-t)/(e-t)),Mb=new y,yb=new y,bb=new y,Sb=new y;class wS{constructor(t,e,n,s,r={}){this.scene=t,this.fx=e,this.fxTier=0,this.hooks=r,this.m=new jp[n],this.spec=this.m.spec,t.add(this.m.root),this.magSize=s,this.ammo=s,this.state="ready",this.reloadDur=1.8,this.minInterval=.3,this.cycle=null,this.trigger=0,this.pendingEject=-1,this.lockTimer=0,this.firing=0,this.rec={a:0,av:0,y:0,yv:0,b:0,bv:0,r:0,rv:0,s:0,sv:0},this.time=Math.random()*10,this.settle=1,this.reload=null,this.muzzleGetter=a=>this.m.muzzleWorld(a),this.blastOpts=null,this.casingScale=1}get canFire(){return this.state==="ready"&&this.ammo>0}get reloadProgress(){return this.reload?Zp(this.reload.t/this.reloadDur):0}fire(t=null){var g;(g=this.m.receiver)==null||g.userData.shot(),this.pendingEject>=0&&this._eject(),this.ammo--,this.m.root.updateMatrixWorld(!0);const e=this.m.muzzleWorld(new y),n=this.m.boreDir(new y),s=this.m.upDir(new y),r=this.spec;this.fx.muzzleBlast(e,n,s,this.muzzleGetter,this.m.blast??r.blast,this.fxTier,this.blastOpts);const a=r.cycle,o=a.delay+a.back+a.hold+a.fwd,l=Math.min(1,this.minInterval*.9/o),c=this.ammo===0;this.cycle={t:0,k:l,locked:c&&a.lockOnEmpty},this.pendingEject=r.casing?(a.delay+a.ejectAt)*l:-1,this.trigger=1,this.firing=.2;const h=r.recoil;let u=t==null?void 0:t.x,d=t==null?void 0:t.y;if(t==null){const _=Math.random()*Math.PI*2,m=Math.sqrt(Math.random());u=Math.cos(_)*m,d=Math.sin(_)*m}const f=wo(h.kick);return this.rec.av+=f*(.25+.75*pn.clamp(d,-1,1)),this.rec.yv-=f*.75*pn.clamp(u,-1,1),this.rec.bv+=wo(h.push),this.rec.rv+=gi(-h.roll,h.roll),this.rec.sv+=(h.squash??1)*9,c&&(this.state="locked",this.lockTimer=Math.max(.22,o*l+.05)),{pos:e,dir:n}}kick(){var a;(a=this.m.receiver)==null||a.userData.shot(),this.m.root.updateMatrixWorld(!0);const t=this.m.muzzleWorld(new y),e=this.m.boreDir(new y),n=this.m.upDir(new y),s=this.spec;if(this.fx.muzzleBlast(t,e,n,this.muzzleGetter,this.m.blast??s.blast,this.fxTier,this.blastOpts),this.state==="ready"&&!this.cycle){const o=s.cycle,l=o.delay+o.back+o.hold+o.fwd;this.cycle={t:0,k:Math.min(1,this.minInterval*.9/l),locked:!1}}this.trigger=1,this.firing=.2;const r=wo(s.recoil.kick);return this.rec.av+=r*(this.upwardRecoil?gi(.55,.8):.25+.75*gi(-1,1)),this.rec.yv+=r*(this.upwardRecoil?.12:.5)*gi(-1,1),this.rec.bv+=wo(s.recoil.push),this.rec.sv+=(s.recoil.squash??1)*9,{pos:t,dir:e}}_eject(){if(this.pendingEject=-1,!this.spec.casing)return;const t=this.m;t.root.updateMatrixWorld(!0),this.fx.ejectCasing(t.portWorld(Mb),t.boreDir(yb),t.sideDir(bb),t.upDir(Sb),this.spec.casing,this.spec.eject,this.casingScale)}reset(){var t,e;this.cycle=null,this.reload=null,this.pendingEject=-1,this.state="ready",this.ammo=this.magSize,this.m.setAction(0),this.m.setHold(0),this.m.setCatch(0),this.m.setLoading(-1),(e=(t=this.m).reloadPhase)==null||e.call(t,-1)}startReload(){var t,e;this.state!=="reload"&&(this.state="reload",this.reload={t:0,ejected:!1,incoming:null,seated:!1,released:!1,need:-1,done:0,racked:!1},(e=(t=this.hooks).onReloadStart)==null||e.call(t))}_freeMag(){const t=this.m;let e=t.mags.find(n=>n.userData.free);return e||(e=t.buildMag(),e.traverse(n=>n.isMesh&&!n.material.transparent&&(n.castShadow=!0)),t.mags.push(e)),e.userData.free=!1,e}_ejectMag(){const t=this.m,e=t.mag;e.userData.setLoaded(!1),this.scene.attach(e);const n=t.model.getWorldQuaternion(new ts),s=t.magAxis.clone().applyQuaternion(n).multiplyScalar(4.5).add(new y(gi(-.4,.4),0,gi(.4,1.2))),r=new y(gi(-3,3),gi(-2,2),gi(-5,5));s.multiplyScalar(Math.sqrt(this.casingScale)),this.fx.drop(e,s,r,this.spec.dropSize*this.casingScale,()=>{var a;if(!t.mags.includes(e)){(a=e.parent)==null||a.remove(e);return}t.magSlot.add(e),e.quaternion.identity(),t.setMagOut(e,0),e.scale.setScalar(1),e.visible=!1,e.userData.free=!0})}_rack(){const t=this.spec.cycle;t.lockOnEmpty?(this.m.setHold(0),this.cycle={t:t.delay+t.back+t.hold,k:1,locked:!1}):this.spec.rack>0&&(this.cycle={t:0,k:this.spec.rack,locked:!1}),this.rec.av+=2.2,this.rec.rv+=gi(-1,1)}_updateMagReload(t){var r,a;const e=this.reload,n=this.m,s=this.spec;if(n.setCatch(t>.07&&t<.3?1:0),e.ejected||(n.setMagOut(n.mag,Af(ca(t,.1,.27))*s.magOut),t>=.27&&(e.ejected=!0,this._ejectMag())),t>=.3&&!e.incoming&&(e.incoming=this._freeMag(),e.incoming.userData.setLoaded(!0),n.magSlot.add(e.incoming),e.incoming.visible=!0),e.incoming&&!e.seated){const o=Tf(ca(t,.32,.6));n.setMagOut(e.incoming,(1-o)*s.magIn,1-o),t>=.6&&(e.seated=!0,n.setMagOut(e.incoming,0),n.mag=e.incoming,this.ammo=this.magSize,this.rec.av-=3.5,(a=(r=this.hooks).onMagIn)==null||a.call(r))}!e.released&&t>=.72&&(e.released=!0,this._rack())}_updateTubeReload(t){var s,r;const e=this.reload;e.need<0&&(e.need=this.magSize-this.ammo,e.wasEmpty=this.ammo===0);const n=.68/Math.max(1,e.need);for(;e.done<e.need&&t>=.12+n*(e.done+1);)e.done++,this.ammo++,this.rec.av-=.9,(r=(s=this.hooks).onMagIn)==null||r.call(s);this.m.setLoading(e.done<e.need?ca(t,.12+n*e.done,.12+n*(e.done+1)):-1),!e.racked&&t>=.83&&(e.racked=!0,e.wasEmpty&&this._rack())}_updateReload(t){var s,r,a,o,l,c;const e=this.reload;e.t+=t;const n=e.t/this.reloadDur;this.spec.reload==="tube"?this._updateTubeReload(n):this._updateMagReload(n),(r=(s=this.m).reloadPhase)==null||r.call(s,Math.min(1,n)),n>=1&&(this.m.setLoading(-1),(o=(a=this.m).reloadPhase)==null||o.call(a,-1),this.reload=null,this.state="ready",(c=(l=this.hooks).onReloadEnd)==null||c.call(l))}_reloadPose(){if(!this.reload)return 0;const t=this.reload.t/this.reloadDur;return Rf(ca(t,0,.14))*(1-Rf(ca(t,.8,1)))}update(t,e){var f,g;this.time+=t,(f=this.m.receiver)==null||f.userData.update(t),this.frenzy&&!this.flames&&(this.flames=new xb(this.m)),(g=this.flames)==null||g.update(t,!!this.frenzy,this.m),this.settle=e;const n=this.m,s=this.spec;if(this.cycle){const _=this.cycle,m=s.cycle;_.t+=t/_.k;const p=_.t-m.delay;let M;if(p<0)M=0;else if(p<m.back)M=Tf(p/m.back);else if(_.locked||p<m.back+m.hold)M=1;else{const x=(p-m.back-m.hold)/m.fwd;M=x>=1?0:x<.8?1-Af(x/.8):Math.sin((x-.8)/.2*Math.PI)*.04,x>=1&&(this.cycle=null)}n.setAction(M),_.locked&&p>=m.back&&n.setHold(1)}this.pendingEject>=0&&(this.pendingEject-=t,this.pendingEject<0&&this._eject()),this.trigger=Math.max(0,this.trigger-t*9),n.setTrigger(this.trigger),this.firing=Math.max(0,this.firing-t),n.spin(t,this.firing>0),this.state==="locked"&&(this.lockTimer-=t,this.lockTimer<=0&&this.startReload()),this.reload&&this._updateReload(t);const r=this.rec;r.av+=(-170*r.a-15*r.av)*t,r.a+=r.av*t,r.yv+=(-150*r.y-15*r.yv)*t,r.y+=r.yv*t,r.bv+=(-260*r.b-24*r.bv)*t,r.b+=r.bv*t,r.rv+=(-120*r.r-12*r.rv)*t,r.r+=r.rv*t,r.sv+=(-320*r.s-16*r.sv)*t,r.s+=r.sv*t;const a=this.time,o=(1-e)*.045,l=s.vibrate?s.vibrate*(n.spinning??0):0,c=this._reloadPose(),h=s.pose,u=n.pivot;u.rotation.z=r.a+Math.sin(a*1.7)*.008+Math.sin(a*11.3)*o+c*h.tilt+(Math.random()-.5)*l,u.rotation.y=r.y+Math.sin(a*9.1+1)*o*.6+c*h.yaw,u.rotation.x=r.r*.3+Math.sin(a*1.1)*.01-c*h.roll+(Math.random()-.5)*l,u.position.x=-r.b,u.position.y=Math.sin(a*1.7+.5)*.02+c*h.lift;const d=pn.clamp(r.s,-1,1);u.scale.set(1-d*.07,1+d*.05,1+d*.03)}}const mi=256,Wn=128,Rn=2;let qn=null,Cs=null,hc=null;const hs=new Ko(-1,1,1,-1,.1,100),uc=new Map,dc=new y,ha=new y,ua=new ii;function ES(i){qn=i}const ko=new Uint8Array(256);for(let i=0;i<256;i++){const t=i/255;ko[i]=Math.round(255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055))}function TS(i,t=null){var p;if(!qn)return null;const e=`${i.weapon}|${i.evo||0}|${JSON.stringify(i.mods||{})}|${t}`;if(uc.has(e))return uc.get(e);if(!Cs){Cs=new y_,Cs.add(new wp(Ci.sky,Ci.ground,1));const M=new Tp(Ci.key,Ci.keyIntensity);M.position.copy(Ci.keyDir).multiplyScalar(20),Cs.add(M),hc=new Jn(mi*Rn,Wn*Rn)}const n=new jp[i.weapon];i.evo&&n.setEvo(i.evo,Np[i.weapon==="plasma"?"flamer":i.weapon]),n.setReceiver(((p=i.mods)==null?void 0:p.receiver)!=null),ey(n,i.mods||{}),n.root.rotation.set(-.08,t?-.6:-.22,0),n.root.updateMatrixWorld(!0),n.measure();let s=n.root;if(t){const M=n.evoParts.find(x=>x.userData.kind===t)??n.magSlot;if(M!=null&&M.children.length){s=new nt;const x=M.clone(!0);x.matrix.copy(M.matrixWorld),x.matrix.decompose(x.position,x.quaternion,x.scale),x.traverse(v=>{v.userData.noBounds&&(v.visible=!1)}),s.add(x),s.updateMatrixWorld(!0)}}Cs.add(s),t?(ua.makeEmpty(),s.traverseVisible(M=>{!M.geometry||M.userData.noBounds||(M.geometry.computeBoundingBox(),ua.union(M.geometry.boundingBox.clone().applyMatrix4(M.matrixWorld)))})):ua.copy(n.rest).applyMatrix4(n.root.matrixWorld),ua.getSize(dc),ua.getCenter(ha);const r=Math.max(dc.x/2/(mi/Wn),dc.y/2)*1.08;hs.left=-r*(mi/Wn),hs.right=r*(mi/Wn),hs.top=r,hs.bottom=-r,hs.position.set(ha.x,ha.y,30),hs.lookAt(ha.x,ha.y,0),hs.updateProjectionMatrix();const a=qn.getRenderTarget(),o=qn.getClearColor(new _t),l=qn.getClearAlpha();qn.setRenderTarget(hc),qn.setClearColor(0,0),qn.clear(),qn.render(Cs,hs);const c=new Uint8Array(mi*Rn*Wn*Rn*4);qn.readRenderTargetPixels(hc,0,0,mi*Rn,Wn*Rn,c),qn.setRenderTarget(a),qn.setClearColor(o,l),Cs.remove(s),n.root.traverse(M=>M.geometry&&M.geometry.type!=="LatheGeometry"&&M.geometry.dispose());const h=document.createElement("canvas");h.width=mi*Rn,h.height=Wn*Rn;const u=h.getContext("2d"),d=u.createImageData(mi*Rn,Wn*Rn),f=mi*Rn*4;for(let M=0;M<Wn*Rn;M++){const x=(Wn*Rn-1-M)*f,v=M*f;for(let R=0;R<f;R+=4){const T=c[x+R+3],C=T?255/T:0;d.data[v+R]=ko[Math.min(255,Math.round(c[x+R]*C))],d.data[v+R+1]=ko[Math.min(255,Math.round(c[x+R+1]*C))],d.data[v+R+2]=ko[Math.min(255,Math.round(c[x+R+2]*C))],d.data[v+R+3]=T}}u.putImageData(d,0,0);const g=document.createElement("canvas");g.width=mi,g.height=Wn;const _=g.getContext("2d");_.imageSmoothingQuality="high",_.drawImage(h,0,0,mi,Wn);const m=g.toDataURL("image/png");return uc.set(e,m),m}const da=B("#ffcf3a",{spec:.85,gloss:28,sheen:.15,rim:.45,emissive:"#5a3a00",emissiveIntensity:.5}),Cf=B("#e0a020",{spec:.6,gloss:22,rim:.3,emissive:"#3a2200",emissiveIntensity:.4}),Eo=B("#ff9fb8",{spec:.35,gloss:18,rim:.25}),wb=B("#e0607e",{spec:.2,rim:.1}),Pf=B("#1b1d23",{spec:.3,gloss:30,rim:0}),Lf=B("#fffaf0",{spec:.15,rim:.35}),Eb=B("#ffffff",{spec:.1,rim:.5,emissive:"#cfe8ff",emissiveIntensity:.25}),Tb=B("#3a2200",{spec:0,rim:0}),AS=["#ffd23f","#ffb020","#fff4dc","#ff9fb8"],Ee=.8,Ab=new Ye(1,32,24);function Hi(i,t,e,n,s,r,a=r,o=r){const l=new Y(Ab,t);return l.position.set(e,n,s),l.scale.set(r,a,o),i.add(l),l}function RS(){const i=new nt;Hi(i,da,0,0,0,Ee*1.22,Ee,Ee*.98),Hi(i,Cf,.05,-Ee*.35,0,Ee*1.05,Ee*.55,Ee*.86);for(const u of[.42,-.42])Hi(i,Eo,-Ee*.82,-.12,u,.16,.12,.08);const t=new Y(new He(.3,.32,.26,28),Eo);t.rotation.z=Math.PI/2,t.position.set(-Ee*1.18,-.05,0),i.add(t);const e=new Y(new Qo(.28,28),Eo);e.rotation.y=-Math.PI/2,e.position.set(-Ee*1.18-.131,-.05,0),i.add(e);for(const u of[.1,-.1]){const d=Hi(i,wb,-Ee*1.18-.13,-.05,u,.02,.085,.055);d.rotation.y=0}const n=[];for(const u of[.3,-.3]){const d=new nt;d.position.set(-Ee*.78,.26,u),Hi(d,Lf,0,0,0,.14,.16,.1),Hi(d,Pf,-.07,-.01,u>0?.04:-.04,.08,.1,.07),Hi(d,Lf,-.12,.04,u>0?.07:-.07,.025,.025,.02),i.add(d),n.push(d)}const s=[];for(const u of[.42,-.42]){const d=new nt;d.position.set(-.3,Ee*.8,u);const f=new Y(new yi(.24,.42,3),da);f.scale.z=.35,f.rotation.z=.5;const g=new Y(new yi(.15,.3,3),Eo);g.scale.z=.3,g.rotation.z=.5,g.position.set(-.04,-.03,u>0?.03:-.03),d.add(f,g),d.rotation.x=u>0?-.35:.35,i.add(d),s.push(d)}const r=new Y(new ni(.46,.06,.12),Pf);r.position.set(.12,Ee*.98,0),i.add(r);const a=new Y(new He(.2,.2,.05,28),da);a.rotation.x=Math.PI/2,a.position.set(.12,Ee*1.08,0),i.add(a);for(const[u,d]of[[-.42,.36],[-.42,-.36],[.45,.36],[.45,-.36]]){const f=new Y(new Nh(.12,.16,6,14),da);f.position.set(u,-Ee*.86,d),i.add(f),Hi(i,Cf,u,-Ee*.86-.17,d,.12,.06,.12)}const o=[];for(let u=0;u<=24;u++){const d=u/24*Math.PI*3,f=.13-u*.003;o.push(new y(Ee*1.18+u*.012,.15+Math.sin(d)*f,Math.cos(d)*f))}i.add(new Y(new kh(new gp(o),48,.035,8),da));const l=[1,-1].map(u=>{const d=new nt;d.position.set(.05,Ee*.45,u*Ee*.72);for(let f=0;f<4;f++){const g=Hi(d,Eb,-.08+f*.13,.32-f*.04,u*(.18+f*.03),.11,.42-f*.05,.035);g.rotation.z=-.25+f*.22,g.rotation.x=u*.35}return i.add(d),d}),c=[],h=[[.2,.35],[-.35,-.1],[.45,-.25]];for(const[u,d]of h){const f=new nt;let g=new y(u,d,0);for(let _=0;_<5;_++){const m=g.clone().add(new y((Math.random()-.3)*.32,(Math.random()-.5)*.3,0)),p=g.clone().add(m).multiplyScalar(.5),M=g.distanceTo(m),x=p.x/(Ee*1.22),v=p.y/Ee,R=Math.sqrt(Math.max(.05,1-x*x-v*v));for(const T of[1,-1]){const C=new Y(new ni(M,.035,.02),Tb);C.position.set(p.x,p.y,T*R*Ee*.985),C.rotation.z=Math.atan2(m.y-g.y,m.x-g.x),f.add(C)}g=m}f.visible=!1,i.add(f),c.push(f)}return{body:i,wings:l,eyes:n,ears:s,coin:a,cracks:c}}export{zb as $,Hp as A,ii as B,Pb as C,Tp as D,Fh as E,Wo as F,nt as G,wp as H,hS as I,t0 as J,Xx as K,nS as L,Y as M,Np as N,Ko as O,Qn as P,Op as Q,Gs as R,Ye as S,uS as T,dS as U,y as V,Rb as W,Ge as X,Qb as Y,fn as Z,jp as _,_t as a,Ee as a$,u0 as a0,Vb as a1,Gb as a2,Ib as a3,ey as a4,wS as a5,Ox as a6,tS as a7,Se as a8,Lb as a9,zp as aA,fS as aB,jx as aC,wr as aD,ks as aE,Ho as aF,gb as aG,Qo as aH,Fn as aI,Jb as aJ,Ax as aK,Ph as aL,Zt as aM,J as aN,KM as aO,yS as aP,Fb as aQ,bS as aR,Db as aS,r0 as aT,e0 as aU,Qh as aV,eu as aW,s0 as aX,Ub as aY,RS as aZ,Nb as a_,Fr as aa,Xi as ab,tu as ac,c0 as ad,h0 as ae,Ob as af,ll as ag,iu as ah,nu as ai,Bp as aj,Cb as ak,Bb as al,Wb as am,oS as an,lS as ao,iS as ap,kb as aq,rS as ar,Fp as as,cS as at,qx as au,Ad as av,ni as aw,_S as ax,Yb as ay,Ps as az,He as b,AS as b0,Xb as b1,qb as b2,p0 as b3,gs as b4,jn as b5,jb as b6,Zi as b7,Zb as b8,Ua as b9,pp as bA,xh as bB,Li as bC,n_ as bD,z0 as bE,Mx as bF,bx as bG,yx as bH,ei as bI,Ue as bJ,mS as bK,SS as bL,Kb as ba,fx as bb,eS as bc,MS as bd,cx as be,TS as bf,kx as bg,ES as bh,ZM as bi,ts as bj,We as bk,re as bl,np as bm,tn as bn,$b as bo,mp as bp,w_ as bq,ue as br,mn as bs,Qt as bt,Bs as bu,vS as bv,AM as bw,gS as bx,Xs as by,Mn as bz,Dd as c,pS as d,we as e,pn as f,Ke as g,A_ as h,In as i,Ln as j,es as k,fs as l,y_ as m,Ci as n,vs as o,Jn as p,xS as q,Ud as r,De as s,B as t,Qe as u,Hb as v,Oe as w,aS as x,sS as y,Wh as z};
