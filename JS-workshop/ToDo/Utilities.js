
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

    saveJson(path,data){

        return fs.writeFileSync(path , JSON.stringify (data) );
    
    },



}

export {utility} ;