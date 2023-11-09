// class SinglyLinkList{
//     constructor(){
//         this.head= null 
//         this.tail= null 
//         this.length= 0
//     }
//     isEmpty(){
//         return this.length === 0
//     }
//     push(value){
//         let newNode={
//             value: value,
//             next: null
//         }

//         if(this.isEmpty()){
//             this.head= newNode 
//             this.tail= newNode
//         }else{
//             this.tail.next= newNode 
//             this.tail=newNode 
//         }
//         this.length++
//     }
// }
// let list = new SinglyLinkList()
// list.push(10)
// list.push(15)
// // list.push(25)
// console.log(list);



// class SinglyLinkList{
//     constructor(){
//         this.head= null 
//         this.tail= null 
//         this.length = 0
//     }

//     isEmpty(){
//         return this.length === 0
//     }

//     push(value){
//         let newNode={
//             value: value, 
//             next: null
//         }
//         if(this.isEmpty()){
//             this.head= newNode 
//             this.tail=newNode
//         }else{
//             this.tail.next = newNode 
//             this.tail= newNode
//         }
//         this.length ++
//     }
//     pop(){
//         if(!this.head){
//             return null
//         }

//         if(this.length === 1){
//             let removeNode= this.head 
//             this.head = null 
//             this.tail= null 
//             return removeNode
//         }

//         let currentNode= this.head 
//         let lastNode =this.tail 
//         let newLastNode

//         while(currentNode){
//             if(currentNode.next == this.tail){
//                 newLastNode = currentNode 
//                 break
//             }
//             currentNode = currentNode.next
//         }

//         newLastNode.next = null
//         this.tail= newLastNode 
//         this.length --
//         return lastNode
//     }
// }

// let num1= new SinglyLinkList()
// num1.push(10)
// num1.push(15)
// num1.push(35)
// console.log(num1);
// num1.pop()
// console.log(num1);


class SinglyLinkList{
    constructor(){
        this.head= null 
        this.tail= null 
        this.length = 0
    }
    length(){
        return this.length === 0
    }
    push(){
        let newNode={
        value: value, 
        next: null
    }
    if(this.isEmpty()){
        this.head= newNode 
        this.tail=newNode
    }else{
        this.tail.next = newNode 
        this.tail= newNode
    }
    this.length ++
}
    sift(){
        if(this.length){
            return null
        }
    }
}

























