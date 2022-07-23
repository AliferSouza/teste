function objectToQueryString(initialObj){  
    const reducer = (obj, parentPrefix = null) => (prev, key) => {    
        const val = obj[key];    
        key = encodeURIComponent(key);
        const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key;

        console.log( prefix)

        if (val == null || typeof val === 'function') {
            prev.push(`${prefix}=`);
            return prev;
        }

        if (['number', 'boolean', 'string'].includes(typeof val)) {
            prev.push(`${prefix}=${encodeURIComponent(val)}`);
            return prev;
        }

        prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'));
        return prev;
    };

    return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&');
}


const a = [
    {
 nome:"ALifer",
 valor: 1
   },
   {
    nome:"Souza",
    valor: 2
   }

]

var object = a.reduce((obj, item) => ((obj[item.key] = item.value), obj),{});
 
object = Object.assign({ id: id }, object);
console.log(object);




console.log(ab)

