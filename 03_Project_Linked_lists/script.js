function node(value, next = null) {
    return { value , next};
}

function linkedList(values) {
    if (values.length === 0){
        return null;
    }
    const head = node(values[0]);
    let current = head;

    for(i = 1; i < values.length; i++){
        current.next = node(values[i]);
        current = current.next;
    }
    return head;
}

const list =  linkedList([1, 2, 3, 4, 5]);
console.log(list);
