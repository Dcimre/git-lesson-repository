'use strict';



const Malvin = {
    név: 'Malvin',
    sándorIskolatársa: true,
    árpádNővére: true,
    kora: 'sándorral egykora születésű',

};


const Sándor = {
    név: 'Sándor',
    hollakik: 'Jókai ut huszonhét szám alatti lakos és mikó?',
    kivelJártIskolába: Malvin,

    kérem( ) {
        console.log ("kéremkapcsoljaki!");
    },
    tudomásomszerint(){
        console.log('ez ahogy a zoxigén kihasználására ilyesmit hallottam én');
        console.log('magyarázta ki árpi');
    }

};


const Arpad = {
    név: 'Árpád',
    jomunkásember: true,
    sándorSzerint: 'biztos jómunkásember',
    pluszInfo: {
        sándorSzerint: 'semmi többet nemtudok elmondani',
},
    kora: 'sándortól egy évvel fiatalabb',
    malvinBátyja: false,
};



const zojjektum = {
    cél:'zoxigén kihasználására',
    másodCél: 'a vízbű veszi ki a zoxigént',
    űrtartalma: [30_000, 300_000, 'mittudomén'],
    zengedély: {
        megvaneadva: true,
        kiadtaMeg: 'kocsordi tanács részirűl',

    },

    tagok: [
        Malvin,
        Sándor,
        Arpad
    ],

    atomTámadásEllenVéd: {
        nem: true,
        igen: true,
        other: 'az ellen nem véd',
        deviszont: 'a vízbűl nyeri ki az oxigént '
    },
    atomTámadásEllenVédNagyvonalakban1: undefined,
    atomTámadásEllenVédNagyvonalakban2: null,


};

console.log( 'a zojjektum célja' , zojjektum [ 'cél' ] , "és ",  zojjektum.másodCél );

const property = "zengedély";
console.log( 'zojjektum űrtartalma:' , zojjektum [property]);


console.log("................................................................................................................................");




for (let ix in zojjektum.tagok);  //indexek




for ( let tag of zojjektum.tagok ){  // elemek
    console.log (tag.név);
    console.log ( tag.jomunkásember);

   if (tag.hasOwnProperty('kérem')) {
        console.log (tag.kérem);
   }


}

console.log("................................................................................................................................");

console.log(Object.keys(zojjektum));



for ( let key of Object.keys(zojjektum)) {
    console.log( zojjektum [key]) ;

}

console.log("................................................................................................................................");

console.log ( Object.values(zojjektum));

console.log("................................................................................................................................");

console.log ( Object.entries ( zojjektum.zengedély ) );

console.log("................................................................................................................................");




// destruction syntax

// let űrtartalma1 = zojjektum.űrtartalma[0];
// let űrtartalma1 = zojjektum.űrtartalma[1];
// let űrtartalma3 = zojjektum.űrtartalma[2];

let [űrtartalma1, űrtartalma2, űrtartalma3] = zojjektum.űrtartalma;
console.log('ű1 ', űrtartalma1);
console.log('ű2 ', űrtartalma2);
console.log('ű3 ', űrtartalma3);

let [ű1,...Űrest] = zojjektum.űrtartalma;
console.log('ű1', ű1);
console.log('űrest' , Űrest);


console.log("................................................................................................................................");


let { megvaneadva, kiadtaMeg : zengedélyKiadtameg, nonExistingProperty } = zojjektum.zengedély;
console.log( 'megadva', megvaneadva);
console.log( 'kiadtameg', zengedélyKiadtameg);
console.log( 'nonExisting' , nonExistingProperty);

zojjektum.nonExistingProperty = 'mégis létezik';
zojjektum['nonExistingProperty'] = 'megint létezik';



//reference vs value//