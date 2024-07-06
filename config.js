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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa";
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
global.flush = process.env.FLUSH   || "True"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "True"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "All"

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_59_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkhuN2pNOEt4Rnpoby9sNzRTa05sVVZGQXJqemNGc3FSdmg1UzNDOXU1bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDA0ODI0NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDQTI2M0VERDQ2M0YwQzU3QjdFOTVERjYxQzIwQjRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc2NDM3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJValYwZ0Y4c1RwV3VqaGNzOVFtWWdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4M2MzNjQyLWFlY2ItNDgwMS05ZjFiLWQyMDg1NWU4N2E4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxODgsXG4gICAgICA0MyxcbiAgICAgIDExNSxcbiAgICAgIDkxLFxuICAgICAgMTc0LFxuICAgICAgMjMsXG4gICAgICAxMSxcbiAgICAgIDE5MyxcbiAgICAgIDE5NSxcbiAgICAgIDI1MCxcbiAgICAgIDIyNyxcbiAgICAgIDEwLFxuICAgICAgMjE4LFxuICAgICAgMCxcbiAgICAgIDE5MixcbiAgICAgIDE2NSxcbiAgICAgIDE1NSxcbiAgICAgIDEwNCxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICA4NixcbiAgICAgIDE3MixcbiAgICAgIDI4LFxuICAgICAgMjUyLFxuICAgICAgMjQ5LFxuICAgICAgMjQ5LFxuICAgICAgMTI2LFxuICAgICAgMjMzLFxuICAgICAgMTksXG4gICAgICAyMTcsXG4gICAgICAxMjEsXG4gICAgICAxMzEsXG4gICAgICAxMTQsXG4gICAgICAxMjYsXG4gICAgICAxNzUsXG4gICAgICAyNDcsXG4gICAgICAyMzcsXG4gICAgICAxMTgsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxMUdXWlZRV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQwNDgyNDcyOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2FzaCBGYXJtZXJcIixcbiAgICBcImxpZFwiOiBcIjI1NDAzNDgxNjU3NzYyMDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMmx5L2tIRU0vOXpySUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRHN0Z1dkJ0Z2ZwQ3l1dzQ4UVU4VXVaL3E5cTEvTlFQd3FHUmdaeE5oRTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnRHVmplTnhyZHZ0Znh3dlpyby8vbVVEb0I2QS9KWmtHeTBoRlZrRGRXWEZXc2NOKzdXUFhLZ1pDM3l3b1kwV1JqQVZDL2l3eFZJT1hJQkt5YWdpRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZms5SUQwNER0aHdXTm1wcFYxQXArTUY4bWtYVktScjJxNDB1d2M1U1kvNitnT3VVQjZhNE9EWTZYbEZwTGl5YjlPUmZUUFdadDV2M3l4V2YyQ1h0Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQwNDgyNDcyOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NzY0MzcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGIrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMYisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpUHROcVA5OHFtUkVFdXlmbnpyTzhuLzZzQk5OekhVNkJZeVNQMUx5RitFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzQwMzcxNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjcxMzMyMzA5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Red Dot",
  ownername:process.env.OWNER_NAME|| "It'x Kash farmer",


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
