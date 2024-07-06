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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_06_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkw2SWo0WUVOK3lGb1lobWpuaXRaRE0wQ0FNZHB2SUZpT2I4ajRkVTJHdUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFJUjB5NVBNUTB1SlVGTHVacENhNkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWJjY2JlZjUtZjJmNy00NGExLWEyMGYtZjExYmU0MDI3Y2Q0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDEsXG4gICAgICA3MCxcbiAgICAgIDQsXG4gICAgICA4NSxcbiAgICAgIDE0MixcbiAgICAgIDkzLFxuICAgICAgMjEsXG4gICAgICA5NixcbiAgICAgIDE2LFxuICAgICAgMTMzLFxuICAgICAgMjAwLFxuICAgICAgOTEsXG4gICAgICAyNDIsXG4gICAgICAxMTksXG4gICAgICA2NixcbiAgICAgIDIyNixcbiAgICAgIDIyNCxcbiAgICAgIDExOSxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDExNSxcbiAgICAgIDgyLFxuICAgICAgMzksXG4gICAgICAxNTQsXG4gICAgICAxMDUsXG4gICAgICA0NixcbiAgICAgIDE2NixcbiAgICAgIDIzMyxcbiAgICAgIDIxOSxcbiAgICAgIDIyNixcbiAgICAgIDEwMyxcbiAgICAgIDIxNCxcbiAgICAgIDM5LFxuICAgICAgNzYsXG4gICAgICAyMzAsXG4gICAgICAyMTksXG4gICAgICAxNTYsXG4gICAgICA5NyxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU2MUJURlhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDA0ODI0NzI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLw6NzaCBGw6VybcOqclwiLFxuICAgIFwibGlkXCI6IFwiMjU0MDM0ODE2NTc3NjIwOjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDbHkva0hFSkdTcExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEc3RnV2QnRnZnBDeXV3NDhRVThVdVovcTlxMS9OUVB3cUdSZ1p4TmhFND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsaTNkdDA3MjZFSW95azVKdXlKTElkMEd0WGRkcWZZN3NuSUs0d0RlRFFaWHBldW5TUzV6Q21Rd0RySHUwWW03ck5mblEwWFZ1TXlvRW5BbTNJUGhBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlYzZEYzUwVnV1RFFYRTZ2Y0tTRzlEMmtEZmlrWlllWk5JZ3VqVWJUMTViajNxSmNSeHVMWjVydXB6Tm1rVHE1Ky9HUFNmRWVLL0l0YllBNk9NdkRBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDA0ODI0NzI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTY3OTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
