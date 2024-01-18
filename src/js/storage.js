function storeObject(key,value){
    console.log(key,value);
    if (objectWasModified(key)){
        if(key === PPOPT_DICT_SKEY){
            retrieveImages(value)
        }
        /*
        chrome.storage.sync.set(
            {
            key: value
            },function(){
            console.log('Object of key'+key+'has been stored with value'+value);
            }
        );
        */
    }

}

function getObject(key,value){
    chrome.storage.sync.get(
        [key],function(res) {
            console.log('Value currently is' + res.key);
        }
    );
}

function objectWasModified(key) {
    return true;
}