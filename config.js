//matheuzinho domina hahaha\\

const { 
'default': makeWASocket,
downloadContentFromMessage, 
fetchLatestBaileysVersion, 
useMultiFileAuthState, 
makeInMemoryStore, 
DisconnectReason,
WAGroupMetadata,
relayWAMessage,	
MediaPathMap, 
mentionedJid, 
processTime,	
MediaType, 
Browser, 
MessageType, 
Presence, 
Mimetype, 
Browsers, 
delay, 
MessageRetryMap
} = require('@whiskeysockets/baileys');

// MÓDULOS ABAIXO.. 

const { Boom }  = require('@hapi/boom');

const axios = require('axios');

const fs = require('fs-extra');

const cheerio = require('cheerio');

const crypto = require('crypto');

const util = require('util');

const P = require('pino');

const NodeCache = require("node-cache");

const linkfy = require('linkifyjs');

const request = require('request');

const ms = require('ms');

const ffmpeg = require('fluent-ffmpeg');

const fetch = require('node-fetch');

const qrterminal = require('qrcode-terminal');

const { exec, spawn, execSync } = require('child_process');

const moment = require('moment-timezone');

const colors = require("colors");

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

// FUNÇÕES ABAIXO... 

const webp_mp4 = require("./armor/js/webp_mp4.js");

const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/sticker/rename.js');

const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/sticker/rename2.js');

const { addLimit, getLimit } = require('./armor/js/limit.js');

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { validmove, setGame } = require('./armor/tictactoe');

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');

const { palavrasANA, quizanimais } = require('./armor/jogo/jogos.js');

const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, isFiltered, addFilter, createExif, getBase64, convertSticker, upload, nit, sesc, getpc, supre, recognize } = require('./armor/funcoes/functions.js'); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS

const { addVote, delVote } = require('./armor/js/vote');

// JSON FUNÇÕES ABAIXO CONSTS >

const voting = JSON.parse(fs.readFileSync('./armor/funcoes/voting.json'));

const sotoy = JSON.parse(fs.readFileSync('./armor/funcoes/sotoy.json'));

const aluguel = JSON.parse(fs.readFileSync("./func/aluguel/aluguel.json"));

const globegroup = JSON.parse(fs.readFileSync("./DADOS/globegroup.json"));

const music = JSON.parse(fs.readFileSync("./DADOS/music.json"));

const tinder = JSON.parse(fs.readFileSync("./DADOS/tinder.json"));

const casamento1 = JSON.parse(fs.readFileSync("./func/casamento1.json"));

const casamento2 = JSON.parse(fs.readFileSync("./func/casamento2.json"));

const amongus = JSON.parse(fs.readFileSync("./armor/jogo/amongus.json"));

const vdddsf = JSON.parse(fs.readFileSync("./armor/jogo/vdddsf.json"));

const akinator = JSON.parse(fs.readFileSync("./armor/jogo/akinator.json"));

const moedas = JSON.parse(fs.readFileSync("./func/aluguel/moedas.json"));

const level = JSON.parse(fs.readFileSync("./DADOS/leveling.json"));

const mute = JSON.parse(fs.readFileSync("./DADOS/mute.json"))

const countMessage = JSON.parse(fs.readFileSync('./DADOS/countmsg.json'));

const comandos = JSON.parse(fs.readFileSync('./DADOS/comandos.json'));

const daily = JSON.parse(fs.readFileSync('./datab/usuarios/diario.json'));

const obrigadoEXT = JSON.parse(fs.readFileSync('./dono/config-all.json'));

const vip = JSON.parse(fs.readFileSync('./DADOS/vip.json'));

const vipgp = JSON.parse(fs.readFileSync("./DADOS/vipgp.json"))

const ban = JSON.parse(fs.readFileSync('./datab/usuarios/banned.json'));

const limitefll = JSON.parse(fs.readFileSync('./datab/usuarios/flood.json'));

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha2.json'));

const antispam = JSON.parse(fs.readFileSync('./dono/media/antispam.json'));

const rggold = JSON.parse(fs.readFileSync('./armor/funcoes/golds.json'));

const anotar = JSON.parse(fs.readFileSync("./func/tabela/anotar.json"));

const setting = JSON.parse(fs.readFileSync('./DADOS/settings.json'));

const logoslink = JSON.parse(fs.readFileSync('./DADOS/logos.json'));

const pushnames = JSON.parse(fs.readFileSync("./DADOS/pushnames.json"))

const stopcmd = JSON.parse(fs.readFileSync("./DADOS/stopcmd.json"))

const ausentes = JSON.parse(fs.readFileSync("./DADOS/ausentes.json"))

const avisos = JSON.parse(fs.readFileSync("./DADOS/avisos.json"))

const grupos = JSON.parse(fs.readFileSync("./func/aluguel/grupos.json"))

const funcgp = JSON.parse(fs.readFileSync("./func/funcgp.json"))

const revealmsg = JSON.parse(fs.readFileSync("./func/revealmsg.json"))

const shieldantilinkgp = JSON.parse(fs.readFileSync("./DADOS/shieldantilinkgp.json"))

const shieldantilinkhard = JSON.parse(fs.readFileSync("./DADOS/shieldantilinkhard.json"))

const adsgp = JSON.parse(fs.readFileSync("./func/adsgp.json"))

const bcgp = JSON.parse(fs.readFileSync("./func/bcgp.json"))

const rankcmd = JSON.parse(fs.readFileSync("./DADOS/rankcmd.json"))

//\\

// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { anotacao, infotransmitir } = require('./dono/info/moreinfo.js');

const { infocontador } = require('./armor/js/infocontador.js');

const { infobemvindo } = require('./armor/js/infobv.js');

const { infolistanegra } = require('./armor/js/infolistanegra.js');

const { infopalavrao } = require('./armor/js/infopalavrao.js');

const { infobancarac } = require('./armor/js/infobancarac.js');

const { configbot } = require('./dono/info/configurar.js');

const { cmd_termux } = require('./dono/info/comandos-termux.js');

const { destrava, destrava2 } = require('./armor/funcoes/destrava.js');

const { tabela } = require('./armor/js/tabela');

const { conselhob } = require('./armor/js/conselhob.js');

const { palavrasc } = require('./armor/js/conselhos.js');

//\\

// DELETAR ARQUIVO..
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// FACILITADOR PARA USO DE BOTÕES...
if(!obrigadoEXT.botoes_) {
var EnvBotao = async (id, MR, blackmd, text1, desc1, X) => {
if(X.split("|")[1] != "0") {
blackmd.sendMessage(id, {image: {url: X.split("|")[1]}, caption: text1, mentions: [MR]})} else {blackmd.sendMessage(id, {text: text1, mentions: [MR]})}}
} else {
var EnvBotao = async(id, MR, blackmd, text1, desc1, X, TXT = [], vr) => {
var DMN_ = X.split("|")[0].charAt(0);
var QNT_B = DMN_ == "1" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}] : DMN_ == "2" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}] : DMN_ == "3" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}, {buttonId: TXT[4], buttonText: {displayText: TXT[5]}, type: 1}]: "";
if(X.split("|")[1] == "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
text: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
image: {url: X.split("|")[1]},
caption: text1, footer: desc1, buttons: QNT_B, 
headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && X.split("|")[0].includes("v")) {
var buttonMessage = {
video: {url: X.split("|")[1]},
caption: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [ME]}}
blackmd.sendMessage(id, buttonMessage, {quoted: vr}).catch(e => {
return console.log("Erro no botão, Tente novamente ou avalie o que pode está errando.. "+e);
})}}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function antiModLetra(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`;
}

// FUNÇÃO DO BAILES PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType);

let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (blackmd, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
blackmd.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const RSM_FUNC = async(blackmd, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case "02:00:00": case "04:00:00":
case "07:00:00": case "10:00:00":  
case "13:00:00": case "15:00:00":
case "18:00:00": case "22:00:00":
exec("cd DADOS/BLACKMD-QR && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./start.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
}

const comand = (blackmd, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {

}

}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

// INTELIGENCIA-ARTIFICIAL
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

module.exports = {
  
// MÓDULOS ABAIXO >
  
P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, 
qrterminal, exec, spawn, 
execSync, limitefll, moment, time, hora, date, 

// FUNÇÕES JS ABAIXO >
RSM_FUNC, comand, addVote, delVote, 
getBuffer, convertSticker, fetchJson, 
fetchText, getBase64, createExif, addLimit, 
getLimit, upload, nit, sesc,
addBanned, unBanned, BannedExpired, 
cekBannedUser, validmove, setGame, 
addComandosId, deleteComandos, getComandoBlock, 
getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, 
getExtension, generateMessageID, getGroupAdmins, 
getMembros, getRandom, banner, banner2, banner3,
isFiltered, addFilter,
temporizador, chyt, webp_mp4, simih, 

// JSON FUNÇÕES ABAIXO >
rggold, antispam, anotar, aluguel, globegroup, music, tinder, casamento1, casamento2, amongus, vdddsf, akinator, moedas, level, mute, voting, sotoy, 
addVote, delVote, countMessage, comandos, daily, 
obrigadoEXT, vip, ban, pushnames, stopcmd, ausentes, avisos, grupos, funcgp, revealmsg, vipgp, shieldantilinkgp, shieldantilinkhard, adsgp, bcgp, rankcmd,

// JSON JUNÇÕES DE ATIconst / DESATIconst 

joguinhodavelhajs, joguinhodavelhajs2, 
setting, logoslink,

// JS DE MENUS, INFORMAÇÕES DE UTILIZAR COMANDOS \\

infotransmitir, anotacao,
infocontador, infobemvindo, infolistanegra, 
infopalavrao, infobancarac,
configbot, cmd_termux, 
destrava, destrava2, tabela, conselhob, palavrasc, 
recognize, colors, cheerio, NodeCache,
// FUNÇÃO... 

kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, antiModLetra, convertBytes, EnvBotao
}