const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./config.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, obrigadoEXT, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, rggold, anotar, getRandom, NodeCache } = require('./config.js');

var { fundo1, fundo2 } = require("./DADOS/links.json");

const pushnames = JSON.parse(fs.readFileSync("./DADOS/pushnames.json"))

const getname = (nmr) => {
  buscar = nmr.includes(`@s.whatsapp.net`) ? nmr : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  matheuzinho = JSON.stringify(pushnames).includes(buscar) ? pushnames[pushnames.map(i => i.id).indexOf(buscar)].nick : "usuário (a)"
  return matheuzinho
}

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

var qrcode = "./DADOS/BLACKMD-QR";

const readline = require("readline");

const pairingCode = process.argv.includes("--code");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function STBLK() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);

const { version, isLatest } = await fetchLatestBaileysVersion();

const blackmd = makeWASocket({
version,
auth: state,
syncFullHistory: true,
printQRInTerminal: !pairingCode,
qrTimeout: 180000,
logger: P({ level: 'silent' }),
browser: ["Chrome (Linux)", "", ""],
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message.buttonsMessage || message.listMessage);
if (requiresPatch) {
message = {viewOnceMessage: {
message: {messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},...message }}}}
return message;
}});

const PhoneNumber = require('awesome-phonenumber')

if(pairingCode && !blackmd.authState.creds.registered) {
let phoneNumber = await question(`${colors.white("- ")}${colors.cyan("Insira no parâmetro o número de telefone que deseja conectar o bot:")} `);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
let code = await blackmd.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.white("- ")}${colors.cyan("Código de Emparelhamento no WhatsApp:")} ${code}`);
rl.close();
}

blackmd.ev.process(
async(events) => {
  
if(events["group-participants.update"]){
try {
var BLKMD = events["group-participants.update"];
if(!fs.existsSync(`./DADOS/grupos/${BLKMD.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS/grupos/${BLKMD.id}.json`));

if(BLKMD.participants[0].startsWith(blackmd.user.id.split(':')[0])) return;

try {
var grpmdt = await blackmd.groupMetadata(BLKMD.id);
} catch (e) {
return;
}
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await blackmd.groupMetadata(BLKMD.id): "";
} catch (e) {
return;
}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(BLKMD.action == 'add'){
num = BLKMD.participants[0];
if(obrigadoEXT.listanegraG.includes(num)){
await blackmd.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban*'});
blackmd.groupParticipantsUpdate(GroupMetadata_.id, [BLKMD.participants[0]], 'remove');
return;
}}
/*if(BLKMD.action == 'remove'){
num = BLKMD.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage));
}
}*/
if(BLKMD.action == 'add' && jsonGp[0].listanegra.includes(BLKMD.participants[0])){
await blackmd.sendMessage(GroupMetadata_.id,{text: '*Oxi oxi kkkkkk vc não é bem vindo aqui... METE O PÉ*'});
blackmd.groupParticipantsUpdate(GroupMetadata_.id, [BLKMD.participants[0]], 'remove');
}
if(jsonGp[0].antifake && BLKMD.action === 'add' && !BLKMD.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await blackmd.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
blackmd.groupParticipantsUpdate(GroupMetadata_.id, [BLKMD.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await blackmd.groupMetadata(BLKMD.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !BLKMD.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
getpp = await blackmd.profilePictureUrl(`${BLKMD.participants[0].split('@')[0]}@c.us`, 'image');
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${getpp}`);
ppimg = shortpc.data
} catch(e) {
ppimg = 'https://telegra.ph/file/d9909cc45b86459fcb8a9.jpg'
}
try {
ppgp = await blackmd.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(BLKMD.action === 'add' && !jsonGp[0].listanegra.includes(BLKMD.participants[0]) && !obrigadoEXT.listanegraG.includes(BLKMD.participants[0])) {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#tempo#', tempo)
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+BLKMD.participants[0].split('@')[0])
.replace('#numerobot#', blackmd.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(BLKMD.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
blackmd.sendMessage(mdata_2.id, {image: {url: `https://blackmd.online/api/canvas/welcome?titulo=Bem%20Vindo%20(a)&perfil=${ppimg}&fundo=${fundo1}&desc=${encodeURI(getname(BLKMD.participants[0]))}`},
mentions: BLKMD.participants, caption: teks});
DLT_FL(ran);
} else if(BLKMD.action === 'remove') {
mem = BLKMD.participants[0];

try {
getpp = await blackmd.profilePictureUrl(`${mem.split('@')[0]}@c.us`, 'image');
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${getpp}`);
ppimg = shortpc.data
} catch (e){
ppimg = 'https://telegra.ph/file/d9909cc45b86459fcb8a9.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#tempo#', tempo)
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', "@"+BLKMD.participants[0].split('@')[0])
.replace('#numerobot#', blackmd.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(BLKMD.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
blackmd.sendMessage(mdata_2.id, {image: {url: `https://blackmd.online/welcome?titulo=${tempo.toUpperCase()}&nome=Bye%20Bye%20${encodeURI(getname(BLKMD.participants[0]))}&perfil=${ppimg}&fundo=${fundo2}&grupo=Saiu%20de%20${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: BLKMD.participants})
DLT_FL(ran)
}
}

if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(BLKMD.action === 'add' && !jsonGp[0].listanegra.includes(BLKMD.participants[0]) && !obrigadoEXT.listanegraG.includes(BLKMD.participants[0])) {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#tempo#', tempo)
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+BLKMD.participants[0].split('@')[0])
.replace('#numerobot#', blackmd.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(BLKMD.participants[0].split('@')[0], mdata_2.subject)
}
blackmd.sendMessage(mdata_2.id, {text: teks, mentions: BLKMD.participants})
} else if(BLKMD.action === 'remove') {
var mem = BLKMD.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#tempo#', tempo)
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', blackmd.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
blackmd.sendMessage(mdata_2.id, {text: teks, mentions: BLKMD.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, blackmd)
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"))
exec(`rm -rf ${qrcode}`);
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
STBLK()
}
break;

case 'connecting':
console.log(colors.yellow('Estabilizando conexão do Black...'))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.cyan(
`〘 BLACK V4 CONECTADO 〙`))
await blackmd.sendPresenceUpdate("available")
break;

default:
break;
}
}


if(events["creds.update"]) {
await saveCreds();
}

require("./index.js")(blackmd, qrcode)

})
}
STBLK().catch(async(e) => {
console.log(colors.red("ERROR EM START.JS: "+e))
})