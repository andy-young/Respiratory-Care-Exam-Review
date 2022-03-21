function shuffle(obj) {
    console.log(obj);
}

function abbrTester(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);
    
    
        delete obj[key];

        console.log(Object.keys(obj).length);
    }
}

abbrTester(abbreviations);