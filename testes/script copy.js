function objectToQueryString(initialObj){

    const reducer = (obj, parentPrefix = null) => (prev, key) => {   
        const val = obj[key];
        key = encodeURIComponent(key)
        const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key;
      
        if (val == null || typeof val === 'function') {
            prev.push(`${prefix}=`);
            return prev;
        }    

        if (['number', 'boolean', 'string'].includes(typeof val)) {
            prev.push(`${prefix}=${encodeURIComponent(val)}`);
            return prev;
        }

        prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'));
        console.log(prev)
        return prev;     
    };

    return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&');
}


const a = 
[{ 
    "Nome": "as",
    "imagemUrl": "asa",
    "whatsapp": "455",
    "valorTicket": "74615048"
},
{
     "Nome": "as",
    "imagemUrl": "asa",
    "whatsapp": "455",
    "valorTicket": "74615048"
}]





objectToQueryString(a)