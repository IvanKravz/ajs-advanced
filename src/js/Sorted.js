export default function orderByProps(obj, list) {
    const arrayKey = [];
    const arraySorted = [];

    for (let key in obj) {
        if (list.includes(key)) {
            arrayKey.push({key, value: obj[key]})
        } else {
            arraySorted.push({key, value: obj[key]})
        }
    }
    
    arraySorted.sort((a,b) => {
        return a.key > b.key ? 1 : -1;
    })
    
    return [...arrayKey, ...arraySorted]
}