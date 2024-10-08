///---------------------------------------------
//0-Import modules
const logger = require('./AppModules/logger');
//const appConf = require('./appConfig');
const mydb = require('./AppModules/mydb');

const xpress = require('express');
const app = xpress();


///---------------------------------------------
logger.logg('info', '-------------------------------------');
logger.logg('info', 'Hello world');
//console.log('Hello world');

app.use(xpress.json());

app.route('/test1').get((reques, respon) => {

    objRes = {
        id: 1001,
        message: 'REST response success',
        data: ['value1', 'value2', 'value3', 'value4', 'value5']
    }

    //1-Write to file    
    let logmsg = `GET: /test1 : success`;
    logger.logg('info', logmsg);
    
    //2-Send HTTP response
    respon.send(objRes);        
});

app.route('/mongotest').get((req,res)=>{   
    logger.logg('info', `Request received : /mongotest`);

    mydb.fetchMongoDocuments().then(objArr => {        
        logger.logg('info', `Request processing : fetchMongoDocuments`);
        var ret = [];
        if (objArr)
            ret = objArr; 
        res.send(ret);
    });    
});

//3-Start Express Server and Listen at port 8800
app.listen(8800, () => {    
    logger.logg('info', 'Server started at 8800 port');    

    /*try{
        let x =a/1;
    }
    catch(e){        
        console.error(e);
    }*/
});