
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor(){
        this.head = null;
    }
    add(value){
        let temp = null;
        if(this.head === null){
            temp = new Node(value);
            this.head = temp;
        }
        else{
            temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
    }
    viewList(){
        let temp = null;
        if(this.head !== null){
        temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
        }
        else{
            console.log("empty list")
        }
    }
    removeItem(value){
        let temp = null;
        if(this.head !== null){
            let helper = new Node(0); 
            helper.next = this.head;
            temp = helper;
            while(temp !== null){
                if(temp.next.value === value){
                    let next = temp.next;
                    temp.next = next.next;
                    next.next = null;
                    break;
                }
                temp = temp.next;
            }
            this.head = helper.next;
            helper.next = null;
            }
            else{
                console.log("empty list")
            }
    }
    getMiddle(value){
        let temp = null;
        if(this.head !== null){
            temp = this.head; let count = 0,middle = this.head,prev = null;
            while(temp !== null){
                prev = middle;
                middle = middle.next;
                if(((temp.next?.next) != null)){
                    temp = temp.next.next;
                    count = count + 2;
                }
                else{
                    temp = temp.next;
                    count = count + 1;
                }
            }
            temp = null;
                if(count %2 == 0) {
                    return [prev.value,middle.value]
                }
                else return [prev.value];
            }
            else{
               return "empty list";
            }
    }
}

let list1 = new List();
list1.add(1);
list1.add(2);
list1.add(5);
// list1.add(15);
console.log('viewing list One')
list1.viewList();
console.log('middle element : ',list1.getMiddle().toString());
list1.removeItem(5);
console.log("after removing 5")
list1.viewList();


let list2 = new List();
list2.add(15);
list2.add(1);
list2.add(2);
list2.add(5);
console.log('viewing list Two')
list2.viewList();
console.log('middle element : ',list2.getMiddle().toString());
list2.removeItem(15);
console.log("after removing 15")
list2.viewList();
