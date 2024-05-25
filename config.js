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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_59_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDMsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFUFllQnRDbU5vMFYyTzdiT0tJSUhLRlNxYVlxWFFOLy9Yam5HVnNwWVpJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0MDQ4MjQ3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDg2QTcxNkQ4MjlDODk1RDk3QzQyRUQ0QjhDMTMxOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjYzNTM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1fd1d0UlJqUml5U3hXanNRSzRpbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzQxMGI2YWQtNTNlYi00NmUwLWFlYTItNGFkZjIwNDQ2MzI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgNDUsXG4gICAgICA1MyxcbiAgICAgIDExNSxcbiAgICAgIDExLFxuICAgICAgMTMsXG4gICAgICAyNCxcbiAgICAgIDE5OSxcbiAgICAgIDE4MixcbiAgICAgIDI4LFxuICAgICAgNzAsXG4gICAgICAyMTcsXG4gICAgICA5NixcbiAgICAgIDksXG4gICAgICAyOSxcbiAgICAgIDY4LFxuICAgICAgMTEsXG4gICAgICAyMzksXG4gICAgICA5MixcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDQwLFxuICAgICAgMTkxLFxuICAgICAgMTY3LFxuICAgICAgNjUsXG4gICAgICAyMjUsXG4gICAgICAyNDcsXG4gICAgICA3OCxcbiAgICAgIDgsXG4gICAgICAyMTQsXG4gICAgICAyMjYsXG4gICAgICAxNTIsXG4gICAgICAxMDAsXG4gICAgICAxMjgsXG4gICAgICAxMDQsXG4gICAgICAyNDcsXG4gICAgICAyMTYsXG4gICAgICAyMjksXG4gICAgICA4NCxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNBTTZIVkg1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDA0ODI0NzI6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLYXNoIEZhcm1lclwiLFxuICAgIFwibGlkXCI6IFwiMjU0MDM0ODE2NTc3NjIwOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxbHkva0hFT2ZweUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEc3RnV2QnRnZnBDeXV3NDhRVThVdVovcTlxMS9OUVB3cUdSZ1p4TmhFND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqM1JCRVV6NVlESWJVRDQvZ0ZzOEh0Vk9jRTFZY285RHprNVI0Z3hzK29heFo3a3Zlb0N0VmF3TnV1NkZHampJMmNXak9wSmJMZFJvYS9reUxoZDFBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3OXR3S0swUHNaQzVLaGh2RUFaQ2hrc05aaCtLQkpJdVpiSDRac1JxOXdueThvbU1LTWllTkNCOUJhV0tPQnRrQTBGQ1lXdkZzNFpVWWpRUEk5Z0lDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDA0ODI0NzI6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY2NjM1MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMYjRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxiNC5qc29uIjogIntcImtleURhdGFcIjpcInFxU0pEL2g1eUZvcVhna2txbm45YkxQREtIM3pxK2RqYks3YXc5dUI2ZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzNDAzNzE0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NjYzNTM3MzAxXCJ9Igp9"  // PUT your SESSION_ID 


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
