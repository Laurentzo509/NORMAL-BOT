const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUyW6jSBh+l7qatAFjsC1FGozxEkzANvE26kMBxWKgwFRhlsjS3OYwbzLnvEQ/Rr/JCCdR+jDdk+FUguKrr77lfwY4DQnSUA1GzyDLwwukqF3SOkNgBMaF56EcMMCFFIIRWKnpskPqpm4cewXXVdbZ2o8qa1iNKyzM7Nhvni7DIPD8vX8PrgzICjsOnV8ApudMqdlz0Zt215Kq9DbC1FHPUDzwXKeJi4XRWDZOt37AHu7BtUWEYR5iX80ClKAcxhqqTRjmn6PvLBddd6NuyoFVGTiQ0nWtD4nHJ8emobtqa6RP2CTntY1Xn6M/WcOTORUHorGRcMIZQhTFFc76smr6G87yhspFLm1C6336Sp+EPkbuwkWYhrT+tO7Okg0nw33oy4ajrZ9MzVCyUiD9Tq3FuN41cpBwSudUDrfq54gviiC3O9vIZy0/yqtZwu3m8lbLc0urikNzRLy76sk6pKr+I3Ezf89K9H90h4a7xeZOp6p+Xti1hmPrtPPTAzqIe3sxsBbckdXZ7Z7jBp+jP93veVeygzGRI6H78Mhral3OZztPCy8Hb7XK00KKMJr5/OqDPqRF/iuW+j47nZxTXFSFPp+nUtLPx48WD8+P2DFyHEtDocu6WUyyfCd0F+OiOEal4fOnfvpo06hs6AIqVNP14+ExkPxhUjW67N/fbhSheuGCEXdlQI78kNAc0jDFt3eSyADoXjbIyRG9yQs6wqZO4MOS68c5P4bLVWI6h91pseOy/syqSdUzzGJ5cFRrcA8YkOWpgwhB7jwkNM1rHRECfUTA6PevDMCooq/Gtcf1OAZ4YU7oEy6yOIXuu6vvH6HjpAWmmxo7SrtAORixH68RpSH2SatjgWHuBOEFKQGkBIw8GBN0ZYCLLqGDWjyQ3+16lF8nlnwWJim0mm1SC3JLOUjx6xbedUUoDqU7u+d5d4LEoTtb9AZ3oitIgjDoO66DAAPCt860//zUQk3xSrhem/ypdxlOuv7TupmeOS+ZH+SbDa/aoxy5YETzAjHAhk5UZFYaIfwL3OX0qJzLYN+L6WlVTa1z95L2nQe9P/8R99VTMHr+mFNK6rZ4mjx5GCuyBhiQ3CIYtjfvs0OBY4dcbyiNBtJv5EvZ6giz7AtGFDAAw3Yz+P7y1/eXP779Tb6//PntpT3uzYsWyEUUhjEBI6A87vaxQFR16ZFqyc5msu7Lit+K/e7dewleQ9Ys8dzIH8T59hg98HVNJ5ton12WcnqW1f7C6JwOBm6O+WUT3f8LCBgBVcResn0qhcOeCxfm3MG+oQZjsQrHk2A89WR5KstdJxUmoZpv9I1ukFI54qRM6ySa2gMZlbuO6SVinAbrp+klOMLzrTHvGfrxsLpepeNExdsSiVYvc+zFzN1mFq3N4iHesmhd4dPZdHVxYEwmaRzsWIGdmork9OuZ684nalNhkzV66wfd5pKOUR8NfSy/1vM2HuK3sRzeivP8ljgvRLcp92bGf3n2kX32yvwA8TY2f5KvsVP3q+Zco4DbHRWXkHzFZlPRrktN88fGZnJJ+Uk24KHEZuB6/cqALIbUS/MEjABJbAgYEENC5Y/uWmGCCIVJ1k6Y3lAUJZbjGZDUcpZtKKTvlQdy+0yCFbj+A/MK1C0OCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Kaisen",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "50941091397,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'yes',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





