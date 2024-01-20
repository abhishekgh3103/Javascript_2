function HashMap(initialCapacity = 16) {
    let size = 0;
    const loadFactor = 0.75;
    const map = {};
    function hash(value) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < value.length; i++){
            hashCode = primeNumber * hashCode + value.charCodeAt(i);
        }
        return hashCode;
    }

    function resize() {
        initialCapacity *= 2;
        const oldMap = map;
        map = {};
        size = 0;

        for(const key in oldMap) {
            map[key] = oldMap[key];
            size++;
        }
    }

    function set(key, value) {
        const hashCode = hash(key);
        map[hashCode] = value;
        if((size + 1) / initialCapacity > loadFactor) {
            resize();
        }
        size++;
    }

    function get(key) {
        const hashCode = hash(key);
        if(map.hasOwnProperty(hashCode)){
            return map[hashCode];
        }
        else return null;
    }

    function has(key) {
        const hashCode = hash(key);
        if(map.hasOwnProperty(hashCode)){
            return true;
        }
        else return false;
    }

    function remove(key) {
        const hashCode = hash(key);
        if(map.hasOwnProperty(hashCode)){
            delete map[hashCode];
            return true;
        }
        else return false;
    }
    function length() {
        let 
    }

    return {
        set,
        get,
        has,
        remove,


    }
}