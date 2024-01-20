function node(value, next = null) {
    return { value , next};
}

function linkedList() {
    // if (values.length === 0){
    //     return null;
    // }
    // const head = node(values[0]);
    // let current = head;

    // for(i = 1; i < values.length; i++){
    //     current.next = node(values[i]);
    //     current = current.next;
    // }

    let head = null;

    const append = (value) => {
        const newNode = node(value);
        if(!head) {
            head = newNode;
            return;
        }
        current = head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    const prepend = (value) => {
        const newNode = node(value,head);
        head = newNode;
    }

    const getSize = () => {
        let count = 0;
        let current = head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    const getHead = () => {
        return head;
    }

    const getTail = () => {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    const getIndex = (index) => {
        if (index < 0 || index > getSize()) return null;
        let current = head;
        let count = 0
        while(count < index){
            current = current.next;
            count++;
        }
        return current;
    }
    const getPop = () => {
        if(!head) return null;
        if(!head.next){
            head = null;
            return head;
        }
        let current = head;
        while (current) {
            if(current.next.next == null){
                current.next = null;
                return current
            }
            current = current.next;
        }
    }

    const contains = (value) => {
        let current = head;
        while(current) {
            if (current.value == value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    const find = (value) => {
        let current = head;
        let count = 0;
        while(current) {
            if (current.value == value){
                return count;
            }
            current = current.next;
            count++;
        }
        return false; 
    }

    const toString = () => {
        let current = head;
        let str = ``;
        while(current) {
            str += `${current.value} -> `;
            current = current.next;
        }
        str += `null`;
        return str;
    }
    return{
        append,
        prepend,
        getSize,
        getHead,
        getTail,
        getIndex,
        getPop,
        contains,
        find,
        toString,
    }
}

const list = linkedList();
list.append('a');
list.append('b');
list.prepend('c')
console.log(list.toString());
console.log(list.getSize()); 
console.log(list.getHead()); 
console.log(list.getTail()); 
console.log(list.getIndex(1)); 
console.log(list.getPop()); 
console.log(list.contains('a')); 
console.log(list.find('a'));
console.log(list.toString());
