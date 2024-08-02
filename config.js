const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://graph.org/file/21e984a94def2215b0215.jpg" ;  
global.video= "https://graph.org/file/21e984a94def2215b0215.jpg" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wallyjay123@gmail.com"
global.location="Lagos,Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Wallyjaytechh/WALLYJAYTECH-MD";
global.gurl  =process.env.GURL  || "hhttps://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.website=process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://graph.org/file/21e984a94def2215b0215.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕎𝔸𝕃𝕃𝕐 𝕁𝔸𝕐 𝕋𝔼ℂℍ" 


global.devs = "2348144317152" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348144317152";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348144317152";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://graph.org/file/21e984a94def2215b0215.jpg" // set Image/video urls here7
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348144317152,234xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_36_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBkdy9pMEc4TExyQzZ4M1BxcWpKL3dSbldRQmN6NUY3QytCTitoVU83LzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVHbzdQNkxGUWFpSzY5alcwRkxlRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjc0NDQ0MDYtYWIwYS00NTU0LWIwZGUtMmJmNzNmYTcwOGViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDM3LFxuICAgICAgNTgsXG4gICAgICAxNzMsXG4gICAgICAyMzgsXG4gICAgICA4MCxcbiAgICAgIDE0MixcbiAgICAgIDkzLFxuICAgICAgMTExLFxuICAgICAgMjA0LFxuICAgICAgMTUzLFxuICAgICAgMjQyLFxuICAgICAgMTUzLFxuICAgICAgMTEzLFxuICAgICAgNjIsXG4gICAgICA5OSxcbiAgICAgIDEzMSxcbiAgICAgIDc3LFxuICAgICAgMTM1LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDIxNyxcbiAgICAgIDI3LFxuICAgICAgMTMxLFxuICAgICAgMzksXG4gICAgICAyMTYsXG4gICAgICA0MCxcbiAgICAgIDAsXG4gICAgICAyMzgsXG4gICAgICAxNTQsXG4gICAgICAxMzMsXG4gICAgICAxNDQsXG4gICAgICAxNzIsXG4gICAgICAzMSxcbiAgICAgIDEzNyxcbiAgICAgIDYwLFxuICAgICAgMTMxLFxuICAgICAgMTksXG4gICAgICA5MyxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p1ci81d0NFUHZkczdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ0Y0eVZEVWxZcE4xd0hnK1hLaG1UZFNWMFpOMmJVV2h1WUNMSlNsbUYzND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVTUprQWE5dnZpdXlCVnpGUVNzYWI0L3NONnh0R296WW1KMmZhaEhMUWUrcDlIakg1TElSVDFLam52TkdxamFDbENER2ozUk5uN05IeFVVZitha0dDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0d1laQlRMSy9hVjV5UjR5WjZ3dVlCbnpIR2ppeDV0NGg4bVlhQmU1K09pa1dJaXo4UGtSQlJmTldLeXJIS05FUWdjVVlab0E0Wk16Z3pub0NCZFJCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDQzMTcxNTI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NTY5ODU5NTA1Nzg2NjoyN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDQzMTcxNTI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MDk0MDhcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕎𝔸𝕃𝕃𝕐 𝕁𝔸𝕐 𝕋𝔼ℂℍ" , // ```
 
  author : process.env.PACK_AUTHER|| "WALLY JAY TECH",
  packname: process.env.PACK_NAME || "WALLY JAY TECH STICKER",
  botname : process.env.BOT_NAME  || "WALLYJAYTECH-MD",
  ownername:process.env.OWNER_NAME|| "WALLY JAY TECH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "WALLYJAYTECH"  ).toUpperCase(),



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
