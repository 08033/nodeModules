//0- Logging format 
// [DATETIME] : [CONSOLETYPE] : [MESSAGE]

//1- Logger based on logType: info, error, warn
const fileSys = require('fs');
const appConf = require('./../appConfig');
const configs = appConf.config;

const mylogg = function (logType, logMessage) {
    if (logType === "info") {
        console.info(logMessage);
    }
    else if (logType === "error") {
        console.error(logMessage);
    }
    else if (logType === "warn") {
        console.warn(logMessage);
    }
    
    //2- Write to file
    let date1 = new Date();
    let dateStr = date1.toLocaleString().replaceAll('/','-').replace(',','').concat('.', date1.getMilliseconds());    
   //let dateStr = new Date().toISOString();

    var logStr = `\n[${dateStr}] : [${logType.toUpperCase()}] : ${logMessage}`;    
    fileSys.appendFile(configs.logPath,  logStr, function (err) {
        if (err)
            console.error('error', err);        
    });
    //end write file
}

exports.logg = mylogg;