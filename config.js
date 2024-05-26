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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233240482472";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233240482472"

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_09_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgMjIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjJCcEJ0SXRiYUFkcjg4cGd6RWxvaENmL3BTMGNoRzhmYS92cjExKzFyZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzFRXzNtTFhTTEtaa2J5NF9qVHRZQVwiLFxuICBcInBob25lSWRcIjogXCI2MGE0OTYwYS02ZmZlLTQxZjAtYWQwMC00ZmFjNmYwODE5MGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTY4LFxuICAgICAgMTMsXG4gICAgICAxNjcsXG4gICAgICA4NyxcbiAgICAgIDE4NSxcbiAgICAgIDIyNyxcbiAgICAgIDIwMSxcbiAgICAgIDEzNixcbiAgICAgIDEyMSxcbiAgICAgIDk1LFxuICAgICAgMjA5LFxuICAgICAgMTI2LFxuICAgICAgNzgsXG4gICAgICAxNTYsXG4gICAgICAxMCxcbiAgICAgIDI0MSxcbiAgICAgIDE2OSxcbiAgICAgIDE4OSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDYxLFxuICAgICAgMTQzLFxuICAgICAgMTksXG4gICAgICA2OCxcbiAgICAgIDExMSxcbiAgICAgIDE1LFxuICAgICAgNDcsXG4gICAgICA2MCxcbiAgICAgIDE5MyxcbiAgICAgIDI0NixcbiAgICAgIDU1LFxuICAgICAgNzEsXG4gICAgICA2NSxcbiAgICAgIDEyNSxcbiAgICAgIDMzLFxuICAgICAgMyxcbiAgICAgIDY3LFxuICAgICAgMjE1LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJZOE00TURLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDA0ODI0NzI6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLYXNoIEZhcm1lclwiLFxuICAgIFwibGlkXCI6IFwiMjU0MDM0ODE2NTc3NjIwOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5bHkva0hFSmlJeTdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEc3RnV2QnRnZnBDeXV3NDhRVThVdVovcTlxMS9OUVB3cUdSZ1p4TmhFND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzWXMwWnUzbG5DMmlJbjBOODBnVlpkODBMLzRrTTFybHpMZnJtYjFwb2cxL3lQc0lRUzB4MWlBcmYvUG9ja0VvZzBKeFpYbUl6NVlUdXQ5Mm1zbGtEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCTnZqNmk4UEVxdVp6RGZsRjU0TlJLRUhKaStsRVV1dUVtZ2NxTThCNjgvUEdNQWhmUlEyclhoT1NNNGtsbjlyNTNRbTdtaGhGVUVlZksyT0F0RmFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDA0ODI0NzI6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY3MDAxODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMYjRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxiNC5qc29uIjogIntcImtleURhdGFcIjpcInFxU0pEL2g1eUZvcVhna2txbm45YkxQREtIM3pxK2RqYks3YXc5dUI2ZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzNDAzNzE0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kash farmer",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
