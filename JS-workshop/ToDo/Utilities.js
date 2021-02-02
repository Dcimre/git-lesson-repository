
import fs from 'fs';

let  utility = {



    loadJson(filename){

        if (fs.existsSync(filename)){
    
            return JSON.parse(fs.readFileSync(filename))
        }
        else{
            console.log("file not exist");
        }
    },

    saveJson(path,dataToSave){

        return fs.writeFileSync(path , JSON.stringify (dataToSave) );
    
    },



}

export {utility} ;