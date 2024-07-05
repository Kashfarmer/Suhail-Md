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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_29_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NixcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFqWXJQNG5VL2pxOWtxZjBmUEUvcFpZQlVYOVZ1SUFVRVJDYzJsdHFXSkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl85SjRGd3BhUlhxZ3lFUXRUMnEzd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGIxMzdjNWUtYzRhOC00MWFmLWFmMmEtODBjMDBhNmExZDBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDI2LFxuICAgICAgMjMwLFxuICAgICAgMjQxLFxuICAgICAgMTQxLFxuICAgICAgMTUzLFxuICAgICAgMzksXG4gICAgICAxNDgsXG4gICAgICAyMzEsXG4gICAgICAxNzQsXG4gICAgICA1NyxcbiAgICAgIDIxMixcbiAgICAgIDQ0LFxuICAgICAgMTUwLFxuICAgICAgNDcsXG4gICAgICAyMjYsXG4gICAgICAxNTgsXG4gICAgICAyMzQsXG4gICAgICA4LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgOTIsXG4gICAgICA5OSxcbiAgICAgIDI0LFxuICAgICAgNTMsXG4gICAgICAyMTQsXG4gICAgICA1NSxcbiAgICAgIDEzNCxcbiAgICAgIDE3MCxcbiAgICAgIDE5MSxcbiAgICAgIDYwLFxuICAgICAgMzksXG4gICAgICAyMjksXG4gICAgICAxNjQsXG4gICAgICAxNjAsXG4gICAgICAyNDEsXG4gICAgICAxMjcsXG4gICAgICAxNTIsXG4gICAgICAxOTIsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTVQNjc1SkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0MDQ4MjQ3MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkvDo3NoIEbDpXJtw6pyXCIsXG4gICAgXCJsaWRcIjogXCIyNTQwMzQ4MTY1Nzc2MjA6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSitseS9rSEVKM0xvYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0RzdGdXZCdGdmcEN5dXc0OFFVOFV1Wi9xOXExL05RUHdxR1JnWnhOaEU0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllCalRjcGlVWkFhbGkzdGxzd1FveURFcVhidy82L0RhTVp1MWZTd0p0WHRIVVpWKytEdFNnTFF4aVIrQmdXalc2RUFUZ2YrUEdWSWY5OURFRTI2NUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9YUXd4aDhtSVJUL1paV2NNU1M3RVNCMkVpd0Y3bkZCa1dzamYweHJFbVlXNTJQQnB3QmJMNGV1UGkrT0N4cTNVYUlmN2xtTFVhMVpmT3R3ZTRDVEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MDQ4MjQ3MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIxNDk0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxiK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGIrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVB0TnFQOThxbVJFRXV5Zm56ck84bi82c0JOTnpIVTZCWXlTUDFMeUYrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM0MDM3MTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
