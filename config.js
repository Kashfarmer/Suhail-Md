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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233240482472";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_06_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGVSsxMzhnNzgxdC9qQVZ1b25veXk3OXhidk1jREcvZlJiR05YaE9jNGc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJycUE4UnJTM1Q1eWxoNFhzOTJ0UWlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyZjNlNGNhLTk3Y2MtNDI0Ny05NGQ2LTJmYjFkY2UxOTdlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyMzIsXG4gICAgICAxMTUsXG4gICAgICAyNTIsXG4gICAgICAyMCxcbiAgICAgIDY5LFxuICAgICAgMTkzLFxuICAgICAgMTUyLFxuICAgICAgMjA0LFxuICAgICAgNyxcbiAgICAgIDIzNyxcbiAgICAgIDEyOSxcbiAgICAgIDM1LFxuICAgICAgMTk1LFxuICAgICAgMjksXG4gICAgICAxODQsXG4gICAgICAxNjQsXG4gICAgICAyNDIsXG4gICAgICA3MyxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDIyNixcbiAgICAgIDIyNSxcbiAgICAgIDMxLFxuICAgICAgMzMsXG4gICAgICA1MyxcbiAgICAgIDIwNSxcbiAgICAgIDE0MyxcbiAgICAgIDEwMixcbiAgICAgIDQzLFxuICAgICAgMTQzLFxuICAgICAgMjA5LFxuICAgICAgMTYsXG4gICAgICAxMDAsXG4gICAgICAxMzQsXG4gICAgICAyMzUsXG4gICAgICAyMTcsXG4gICAgICAxNTQsXG4gICAgICAyMzAsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDFMM0FBSFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0MDQ4MjQ3MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkthc2ggRmFybWVyXCIsXG4gICAgXCJsaWRcIjogXCIyNTQwMzQ4MTY1Nzc2MjA6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnVseS9rSEVMQ2x5YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0RzdGdXZCdGdmcEN5dXc0OFFVOFV1Wi9xOXExL05RUHdxR1JnWnhOaEU0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtHRmFjVFI5OVVjSW04VDBZSTNRdHhTSU1oeFgyMFlRUWdxclZOaHZiZlBEWTE1MncrNW1qTHQzTDU0RDJBRVZiSk9FOVBGM2hEem9QVU5DRXVYc0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZxMjFIU3V4d3IzZS9PVkRCYytlM1dMc1ZpdnBQQ2JSSkVXKzV3WUZGZlhMcUc3NnRSaUErUGtrcGEvWStTR0FFNml5Ni9JcXljeTdzbFpzTnc5bERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MDQ4MjQ3MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY3MTE1NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Kash farmer",
  botname : process.env.BOT_NAME  || "MTCG",
  ownername:process.env.OWNER_NAME|| "Kash farmer",


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
