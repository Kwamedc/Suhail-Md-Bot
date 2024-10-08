const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233531725160";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "composing " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233531725160,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_49_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwTXJxZWZnejBlQ2FNZGIxc3JBZng5MDhXVjVIcmNPc2N5VnNLWk9INzVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzUzMTcyNTE2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTNGNUNERjAxM0UzOEQyNDk0M0M3Nzc1NkQyNjA4MDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MzQ4NTg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll1UlM2aFg2VGo2cUMxWEk5NDMwbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2EwNDk0N2QtNjdiZC00MGVkLWJmZmMtMWQxMTU2MDY5NDcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgODMsXG4gICAgICA3OCxcbiAgICAgIDI1NCxcbiAgICAgIDIwNSxcbiAgICAgIDI1MSxcbiAgICAgIDc5LFxuICAgICAgMTIxLFxuICAgICAgNjAsXG4gICAgICAxNjQsXG4gICAgICAyMDcsXG4gICAgICAxMDgsXG4gICAgICAxMzIsXG4gICAgICA3NSxcbiAgICAgIDIwOCxcbiAgICAgIDE5OCxcbiAgICAgIDE0NyxcbiAgICAgIDg1LFxuICAgICAgMTQ3LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAyNDAsXG4gICAgICAxNDEsXG4gICAgICAxNDAsXG4gICAgICAxODksXG4gICAgICAyOCxcbiAgICAgIDE0OCxcbiAgICAgIDI4LFxuICAgICAgNDIsXG4gICAgICA2NixcbiAgICAgIDIyMixcbiAgICAgIDI0LFxuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgMTY1LFxuICAgICAgMTc1LFxuICAgICAgMjYsXG4gICAgICA1NixcbiAgICAgIDEyOCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxNQkNMTkFWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzE3MjUxNjA6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5MzIyOTU0OTk3ODUxOjQyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKdjOKAv+KdjOKes+G0ueG0v+GthOKFhcOH4pqU77iPIOKEksO44oSb4oWFIOKErOKEm8Orw6vihKThjr3inKfinaTkuYJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU1N2NmtDRUtDRGtyZ0dHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRKSEtGTSs0bitGL1FXdnM5b1YyN1FwWHpxZVczVzJTMHhEajlRRDZjQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlRHTm9CY3pORDU4Mlk1U05PVHBsd202OWJaMi9MNXFDbUJwYWxxSTlpOGF1RkYxZ2cyajFjMUUyUzhFR0RBQ3NRdDRmdXdURjRNeWxLdFhXWERoQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1A4b2hVUTdqdlRzQjVFcUlvcWhPMTBIYWN1blErRENIVkpPR0RTaWFPVDd4K3A5YnlVdzkrKzBDdklXS1I3ZW5QdWw2dUNmQ0VZMFAzSktvSFAvaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTMxNzI1MTYwOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODM0ODU3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVlQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWVCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ0JJelFrNnhkdnNRMGh3Q0Rnak9kMU1tckNKeFpWZGxBMEF6cWZmMjRoZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjM4ODg2ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgwMDI4MjU0NTVcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
