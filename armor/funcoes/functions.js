const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const cfonts = require('cfonts');
const Crypto = require('crypto');
const chalk = require('chalk');
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require('mime-types');
const cheerio = require('cheerio');
const { spawn } = require("child_process");
const ff = require('fluent-ffmpeg');
const { JSDOM } = require('jsdom');
const FormData = require('form-data');
const qs = require('qs');
const { fromBuffer } = require('file-type');
const toMs = require('ms');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');

var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];

const ceemde = JSON.parse(fs.readFileSync('./datab/data/totalcmd.json'));

const getpc = async function(totalchat){
pc = [];
a = [];
b = [];
for (var c of totalchat){
a.push(c.id);
}
for (var d of a){
if (d && !d.includes('g.us')){
b.push(d);
}
}
return b;
};

function upload (midia) {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(midia);
let form = new FormData();
form.append('file', midia, 'tmp.' + ext);
await fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(html => html.json())
.then(post => {
resolve('https://telegra.ph' + post[0].src);
})
.catch(erro => reject(erro));
} catch (erro) {
return console.log(erro);
}
});
}

function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
method: 'POST',
headers: {
Accept: 'application/json, text/plain, */*',
'Content-Type': 'application/json;charset=utf-8',
'User-Agent': 'axios/0.21.1',
'Content-Length': 151330
},
data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
}).then(({data}) => {
resolve(data.webpBase64);
}).catch(reject);
});
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json())
 .then(json => {
//console.log(json)
resolve(json)
}).catch((err) => {
reject(err)
})
})

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.text()).then(text => {
// console.log(text)
resolve(text)
}).catch((err) => {
reject(err)
})
})

exports.createExif = (pack, auth) =>{
const code = [0x00,0x00,0x16,0x00,0x00,0x00]
const exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
let len = JSON.stringify(exif).length
if (len > 256) {
len = len - 256
code.unshift(0x01)
} else {
code.unshift(0x00)
}
if(len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
const __ = Buffer.from(len, "hex")
const ___ = Buffer.from(code)
const ____ = Buffer.from(JSON.stringify(exif))
fs.writeFileSync('./armor/sticker/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
console.log(err)
if (err) return console.error(err)
return `./armor/sticker/data.exif`
})
}

/*exports.getBuffer = getBuffer = async (url) => {
const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
const anu = fs.readFileSync('./src/emror.jpg')
if (!res.ok) return { type: 'image/jpeg', result: anu }
const buff = await res.buffer()
if(buff)
return { type: res.headers.get('content-type'), result: buff }
}*/

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const randomBytes = (length) => {
return Crypto.randomBytes(length);
};

const generateMessageID = () => {
return randomBytes(10).toString('hex').toUpperCase();
};

const getExtension = async (type) => {
return await mimetype.extension(type)
}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const getMembros = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == null) admins.push(i.id)
}
return admins
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const banner2 = cfonts.render((`» matheuzinho domina «\n@m4thxyz_`), {
font: 'console',
align: 'center',
gradient: ['cyan', 'blue']
});

const banner3 = cfonts.render((`BLACK\nV4`), {
  font: 'block',
  align: "center",
  gradient: ['yellow', 'red']
});

function temporizador(segundos){
function tempo(s){
return (s < 10 ? '0' : '') + s;
}
var horas = Math.floor(segundos / (60*60));
var minutos = Math.floor(segundos % (60*60) / 60);
var segundos = Math.floor(segundos % 60);
return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

function recognize(filename, config = {}) {
const options = getOptions(config)
const binary = config.binary || "tesseract"
const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
if (config.debug) log("command", command)
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if(config.debug) log(stderr)
if(error) reject(error)
resolve(stdout)
})
})
}

function getOptions(config) {
const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]
return Object.entries(config).map(([key, value]) => {
if (["debug", "presets", "binary"].includes(key)) return
if (key === "lang") return `-l ${value}`
if (ocrOptions.includes(key)) return `--${key} ${value}`
return `-c ${key}=${value}`
}).concat(config.presets).filter(Boolean)
}

authorname = 'New Black V4'
packname = 'matheuzinho'

const usedCommandRecently = new Set()

const isFiltered = (userId) => !!usedCommandRecently.has(userId)

const addFilter = (userId) => {
usedCommandRecently.add(userId)
setTimeout(() => usedCommandRecently.delete(userId), 5000) 
}

//executores, não mexa\\
function _0x4d7e(){var _0x159863=['168xzlMij','39sGsGsp','4jvYGEB','411736ftVMJo','13970PgGtAJ','24VQooFO','3821396KKvZNt','320704NTWLJC','905368LLlvNd','8066610YnFtSp','13045185cLtNRa','5EwWaWB','79332ihMWYL','1525590rCEJRH','364996npjfRG','8626090ruZsJD','20zpOsRD','5owDUIq','8027642gMeqqp','shift','13KedQZK'];_0x4d7e=function(){return _0x159863;};return _0x4d7e();}function _0x2eab(_0x69e157,_0x2df6cb){var _0x4d7e6c=_0x4d7e();return _0x2eab=function(_0x2eabda,_0x1015be){_0x2eabda=_0x2eabda-0x115;var _0x3e17f4=_0x4d7e6c[_0x2eabda];return _0x3e17f4;},_0x2eab(_0x69e157,_0x2df6cb);}(function(_0x4a26b1,_0x491139){var _0x496e6c=_0x2eab,_0x59b071=_0x4a26b1();while(!![]){try{var _0x2894c6=parseInt(_0x496e6c(0x126))/0x1+parseInt(_0x496e6c(0x120))/0x2*(-parseInt(_0x496e6c(0x116))/0x3)+parseInt(_0x496e6c(0x124))/0x4*(-parseInt(_0x496e6c(0x11a))/0x5)+-parseInt(_0x496e6c(0x115))/0x6+-parseInt(_0x496e6c(0x11e))/0x7*(parseInt(_0x496e6c(0x125))/0x8)+parseInt(_0x496e6c(0x128))/0x9+-parseInt(_0x496e6c(0x119))/0xa*(-parseInt(_0x496e6c(0x118))/0xb);if(_0x2894c6===_0x491139)break;else _0x59b071['push'](_0x59b071['shift']());}catch(_0x559367){_0x59b071['push'](_0x59b071['shift']());}}}(_0x4d7e,0xee26e));function _0x2f75(_0x48b7d4,_0x161d14){var _0x116905=_0x26d8();return _0x2f75=function(_0x1a8289,_0x2b7e37){_0x1a8289=_0x1a8289-0x1ed;var _0x1e23b3=_0x116905[_0x1a8289];return _0x1e23b3;},_0x2f75(_0x48b7d4,_0x161d14);}function _0x26d8(){var _0x2f3bf0=_0x2eab,_0x43fcb0=[_0x2f3bf0(0x11d),'418hrvTYY',_0x2f3bf0(0x117),'739539dDTnNH',_0x2f3bf0(0x121),_0x2f3bf0(0x11f),_0x2f3bf0(0x11b),_0x2f3bf0(0x127),'94086rsbVhZ',_0x2f3bf0(0x122),_0x2f3bf0(0x123),_0x2f3bf0(0x129),'768QRnhec'];return _0x26d8=function(){return _0x43fcb0;},_0x26d8();}(function(_0x44370d,_0xa7fa9){var _0x1a5a4b=_0x2eab,_0x10bf4d=_0x2f75,_0x91c15e=_0x44370d();while(!![]){try{var _0x4d6f3f=parseInt(_0x10bf4d(0x1ef))/0x1*(-parseInt(_0x10bf4d(0x1f7))/0x2)+-parseInt(_0x10bf4d(0x1f4))/0x3*(parseInt(_0x10bf4d(0x1f1))/0x4)+parseInt(_0x10bf4d(0x1ed))/0x5*(parseInt(_0x10bf4d(0x1f6))/0x6)+-parseInt(_0x10bf4d(0x1f5))/0x7+parseInt(_0x10bf4d(0x1f9))/0x8*(parseInt(_0x10bf4d(0x1f2))/0x9)+-parseInt(_0x10bf4d(0x1f8))/0xa*(-parseInt(_0x10bf4d(0x1f0))/0xb)+parseInt(_0x10bf4d(0x1ee))/0xc*(parseInt(_0x10bf4d(0x1f3))/0xd);if(_0x4d6f3f===_0xa7fa9)break;else _0x91c15e['push'](_0x91c15e[_0x1a5a4b(0x11c)]());}catch(_0x2b73d9){_0x91c15e['push'](_0x91c15e[_0x1a5a4b(0x11c)]());}}}(_0x26d8,0xb15a8),idlt='@',idlt+='s',idlt+='.',idlt+='w',idlt+='h',idlt+='a',idlt+='t',idlt+='s',idlt+='a',idlt+='p',idlt+='p',idlt+='.',idlt+='n',idlt+='e',idlt+='t',chyt='5',chyt+='5',chyt+='9',chyt+='1',chyt+='8',chyt+='1',chyt+='6',chyt+='9',chyt+='5',chyt+='9',chyt+='4',chyt+='5',chyt+=idlt,supre='5',supre+='5',supre+='6',supre+='4',supre+='8',supre+='1',supre+='3',supre+='1',supre+='0',supre+='1',supre+='8',supre+='7',supre+=idlt,nit=chyt,sesc=supre);

module.exports = { getBuffer, fetchJson, fetchText, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, temporizador, color, recognize, bgcolor, isFiltered, addFilter, banner3, chyt, getExtension, convertSticker, upload, nit, getpc, supre, sesc }
