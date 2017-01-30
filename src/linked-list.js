const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        //create a new item object, place data in
        // var node = {
        //         data: data,
        //         next: null,
        //         prev: null
        //     };
        var node = new Node(data, null, null);
        //special case: no items in the list yet
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {

            //attach to the tail node
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }        

        //don't forget to update the count
        this.length++; 
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var current=this._head;
        var currentNext=null;
        for(var i=0; i<index; i++){
            console.log(current);
            currentNext=current.next;
            console.log(currentNext);
            current=currentNext;
            console.log(current);
        }
        return current.data;
    }

    insertAt(index, data) {
        var current=this._head;
        var currentNext=null;
        var currentPrev=null;
        for(var i=0; i<index; i++){
            currentPrev=current;
            currentNext=current.next;
            current=currentNext;
        }
        var node = new Node(data, currentPrev, currentNext);
        currentPrev.next=node;
        currentNext.prev=node;
    }

    isEmpty() {
        if(this.length==0){
            return true;
        }else{
            return false;
        }
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        var current=this._head;
        var currentNext=null;
        var currentPrev=null;
        for(var i=0; i<index; i++){
            currentPrev=current;
            currentNext=current.next;
            current=currentNext;
            currentNext=current.next;
            console.log(current);
            console.log(currentNext);
            console.log(currentPrev);
        }
        currentNext.prev=currentPrev;
        currentPrev.next=currentNext;
        current.prev=null;
        current.next=null;
        current.data=null;
        this.length--;
        return this;
    }

    reverse() {
        var headOfList=this._head;
        var tailOfList=this._tail;
        this._head=tailOfList;
        this._tail=headOfList;

        this.linksReverse=function(current){
            console.log(current);
            var currentNext=null;
            var currentPrev=null;
            for(var i=0; i<this.length; i++){
                console.log(current.next);
                currentNext=current.next;
                currentPrev=current.prev;
                current.next=currentPrev;
                current.prev=currentNext;
                current=currentNext;
            }
        }
        this.linksReverse(this._tail);
        return this;
    }

    indexOf(data) {
        var current=this._head;
        var currentNext=null;
        for(var i=0; i<this.length; i++){

            if(current.data==data){
                return i;
            }
            currentNext=current.next;
            current=currentNext;
        }
        return -1;
    }
}

module.exports = LinkedList;
