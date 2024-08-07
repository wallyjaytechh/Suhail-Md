const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="posh110302@gmail.com"
global.location="Osun,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/wallyjaytechh/wallyjaytech-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.website=process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY POSH TECH" 


global.devs = "2349066686756" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349066686756";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKRmdTSHhSL2k3dURoSkl1Q3ZjTFRkRVk2OVhqSDNvRzZPUlZsZEJQaEt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLeXliM2pkcVItcWRjYUVjeEZuNWh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI3ZTkzYTJiLTFlYjktNDI1MS1hMWZhLTkwOGFhY2QwZGFkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAyNDIsXG4gICAgICA1MyxcbiAgICAgIDE5MixcbiAgICAgIDIzOSxcbiAgICAgIDE4OCxcbiAgICAgIDUwLFxuICAgICAgNDcsXG4gICAgICAxNjgsXG4gICAgICAxMDQsXG4gICAgICA1OCxcbiAgICAgIDIzOSxcbiAgICAgIDE5OSxcbiAgICAgIDEyMixcbiAgICAgIDMwLFxuICAgICAgMjA2LFxuICAgICAgMTAyLFxuICAgICAgMjM5LFxuICAgICAgNjUsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgOTEsXG4gICAgICAyMjIsXG4gICAgICAyNCxcbiAgICAgIDc5LFxuICAgICAgMTQwLFxuICAgICAgMTgyLFxuICAgICAgMTg5LFxuICAgICAgMTg2LFxuICAgICAgNDcsXG4gICAgICAyOCxcbiAgICAgIDEzMixcbiAgICAgIDIyOCxcbiAgICAgIDcxLFxuICAgICAgMjIyLFxuICAgICAgOTIsXG4gICAgICAxMDksXG4gICAgICAyMDksXG4gICAgICAxOTAsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKOUw2WkY2VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NjY4Njc1Njo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlDDllNIXCIsXG4gICAgXCJsaWRcIjogXCIyMjY4NTYxNDYwOTYzMjM6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkM2Z2RNR0VQcnF6TFVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrN1F1V09PSlF4ZWpCejlMeEJWUTQrNlpFT0pEbkZsWnR3NCtyRGJzQkRBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNkUjJIK2t2QUEvaXZTdnhyamNSZkM4V04rY1hRcUFxbFpYZEg5cCs5VkNIM1dYSnVhYlVXc0l6WGdkb3ZaZlBObG56alVBaE5vNzc1YjlHREs5eEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlozYUk0RzVPeFVGQzFZR1R4RFc1cFQ5MjMwUThJZXFGbUpxaUNpbXRSbk0rUkgvOW9GclN0MEE1NEpNeExGVGRuYk1DTmpJaHVnY1kwcXA4dG1kOEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjY2ODY3NTY6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDIwNjcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVZCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVkIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5cUwzREUxZmlzTEtnWWdWMFNLRE1GcHFBVkk0UlpPWndCSjE2dkw5MG9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3ODQ3MDAyMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 POWERED BY POSH TECH 』```", //*『POWERED BY POSH TECH』*\n youtube.com/@wallyjaytechy"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "POSH-MD",
  ownername:process.env.OWNER_NAME|| "Posh Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "POSH"  ).toUpperCase(),



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
