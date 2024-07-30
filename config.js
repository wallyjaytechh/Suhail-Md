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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_46_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrMkM0alhXWnZ5MXNGY01TNDcveXdVUFdCQzkwbUNyeUNuRVNYeENvbms0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwZms0N2JCOFR6MkJlNGRKdjhxNUR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiZjE2OTkzLWRlNjktNGM0Ny1iOTY3LTJlNGI0OGE2ODc0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyNDMsXG4gICAgICAyMixcbiAgICAgIDIzLFxuICAgICAgNTcsXG4gICAgICAxNjEsXG4gICAgICAxNjEsXG4gICAgICA2MSxcbiAgICAgIDExOSxcbiAgICAgIDg0LFxuICAgICAgOTEsXG4gICAgICAxODUsXG4gICAgICAxMSxcbiAgICAgIDY1LFxuICAgICAgMTYyLFxuICAgICAgMjA3LFxuICAgICAgMjUyLFxuICAgICAgMjMsXG4gICAgICA1NSxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAzNCxcbiAgICAgIDEzNCxcbiAgICAgIDE5NixcbiAgICAgIDE1MCxcbiAgICAgIDc5LFxuICAgICAgMjI3LFxuICAgICAgMzksXG4gICAgICAxMTksXG4gICAgICA1NixcbiAgICAgIDE4NyxcbiAgICAgIDg5LFxuICAgICAgMTk1LFxuICAgICAgNjEsXG4gICAgICAyMzQsXG4gICAgICAxMjQsXG4gICAgICA2NSxcbiAgICAgIDE0MCxcbiAgICAgIDExNSxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQxMUsxMUpWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ0MzE3MTUyOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV0FMTFkgSkFZIFRFQ0hcIixcbiAgICBcImxpZFwiOiBcIjE0NTY5ODU5NTA1Nzg2NjoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdllpWnNIRUt2YXBiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhBVWRwaFc3dDVlQThaT0I5THhldWJHY2pTekVJSnRSM0NpMzdzaGZTMDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib3BhYUxBcE02cmVwREJIcmdIQkp5aTdJN3VQK2V2Q2Vkc0FEZW02TG9YdExWQ1lMZ2RvdDhxU1grYVdtRVhsTFdCbDQ1NmZGaEhPRnhWQzVvRmlqQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1dHRFhVQkdZdE1HTWlTeDk2R3E2Z2FmYXhud0REUU5Vb0xTWE5oNjZVWFk4em01VWFGVTdMa2tDUmdoWFVKb3dlL1lXYzllTm9JRXFoWkQ5YjJUQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NDMxNzE1MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM3OTU2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc2R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwibkJXdUFUYWR0cmkyb2lDbjlsVmhDK3dEend2by83amFtU0tOZ0MrSlh4QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTE5LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
