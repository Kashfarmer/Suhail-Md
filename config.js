const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_39_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMnlYZ3hocnc3WlhtN2RreGt5dUNYR0NQcGdGaFZ2SVRJalNLTENTRG11ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFYwbFJMd1lReGE2dGFHTEExU3NGQVwiLFxuICBcInBob25lSWRcIjogXCJmNDY3NjUwOC1hYjBjLTRjYjUtYTg4NC02ZDJhMjA2ZDdiNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTY0LFxuICAgICAgMTMxLFxuICAgICAgMjMxLFxuICAgICAgMjQsXG4gICAgICA3MyxcbiAgICAgIDkxLFxuICAgICAgMjA3LFxuICAgICAgODIsXG4gICAgICA4OCxcbiAgICAgIDksXG4gICAgICAxMTYsXG4gICAgICAxMjksXG4gICAgICA2MyxcbiAgICAgIDQxLFxuICAgICAgMTA3LFxuICAgICAgNjQsXG4gICAgICAyMTcsXG4gICAgICAzMCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDUsXG4gICAgICAxOTcsXG4gICAgICAxNTIsXG4gICAgICA4NSxcbiAgICAgIDMsXG4gICAgICAzNSxcbiAgICAgIDU5LFxuICAgICAgNTEsXG4gICAgICAyMzYsXG4gICAgICAxNTgsXG4gICAgICAxNyxcbiAgICAgIDg3LFxuICAgICAgMTYsXG4gICAgICA3NSxcbiAgICAgIDI0OSxcbiAgICAgIDEyMyxcbiAgICAgIDE5NCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQR1JRQjZUTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQwNDgyNDcyOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS8Ojc2ggRsOlcm3DqnJcIixcbiAgICBcImxpZFwiOiBcIjI1NDAzNDgxNjU3NzYyMDoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLS2x5L2tIRU82R3lyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRHN0Z1dkJ0Z2ZwQ3l1dzQ4UVU4VXVaL3E5cTEvTlFQd3FHUmdaeE5oRTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibDExV1ZCWUZ5UWdwYTBZYURFenhRbDJpZ0xmNksrb0lzaWM1NUVTNjBCci82SUhSRUpDQjNSYTFUbElMdk5sSmNHZjZ6Z05UTVM2MGJQUDJTZ1lkQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMEtJS2NSaldNaHBnL3RYcWNDU0J4UDk2NnlMZUE1OXN3MHNpKzVHY0NFRjYzMm1tV1FUYWNBRktsT2hXRTZuTWs3V292ckloZVdpbmJqSnZ2OWgxQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQwNDgyNDcyOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODc3OTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGNIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMY0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIYzA4ZTMvNlU1NlhPSG1TNXF6QTlWSm90b3ZZL0hGUnRKSlM2MFk5MXNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzQwMzcxNTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4Nzc4OTY2MzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Kash",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
