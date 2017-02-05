const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head=null;
        this._tail=null;
    }

    append(data) {
        var node = new Node(data, null, null);

        if (this.length==0) {
            this._head=node;
            this._tail=node;
        } else {
            this._tail.next=node;
            node.prev=this._tail;
            this._tail=node;
        }        

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
            currentNext=current.next;
            current=currentNext;
        }
        return current.data;
    }

    insertAt(index, data) {
        var current=this._head;
        var currentNext=current.next;
        var currentPrev=current.prev;

        if((currentPrev==null)&&(currentNext==null)){
            var node = new Node(data, null, null);
            this._head=node;
            this._tail=node;
        }else{
            for(var i=0; i<index; i++){
                console.log(current);
                current=current.next;
                console.log(current);
                currentPrev=current.prev;
                console.log(currentPrev);
                currentNext=current.next;
                console.log(currentNext);
            }

            if(currentPrev==null){
                var node = new Node(data, currentPrev, current);
                current.prev=node;
                this._head=node;
            }

            if(currentPrev){
                var node = new Node(data, currentPrev, current)
                currentPrev.next=node;
                current.prev=node;            
            }            
        }

        this.length++;
        return this;
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
        return this;
    }

    deleteAt(index) {

        var current=this._head;
        var currentPrev=current.prev;        
        var currentNext=current.next;

        for(var i=0; i<index; i++){
            current=current.next;
            currentPrev=current.prev;
            currentNext=current.next;
        }

        current.data=null;
        current.prev=null;
        current.next=null;

        if(currentPrev==null&&this.length>1){
            currentNext.prev=null;
            this._head=currentNext;
        }

        if(currentNext==null&&this.length>1){
            currentPrev.next=null;
            this._tail=currentPrev;
        }

        if(currentNext==null&&currentPrev==null){
            this._head.data=null;
            this._tail.data=null;
        }

        if(currentPrev&&currentNext){
            currentPrev.next=currentNext;
            currentNext.prev=currentPrev;            
        }

        this.length--;
        return this;
    }

    reverse() {
        var headOfList=this._head;
        var tailOfList=this._tail;
        this._head=tailOfList;
        this._tail=headOfList;

        this.linksReverse=function(current){
            var currentNext=null;
            var currentPrev=null;

            for(var i=0; i<this.length; i++){
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
