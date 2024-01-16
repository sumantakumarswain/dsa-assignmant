// //  Q 1


 
//  function findPairsOfsum(arr,k){
// for(var i = 0; i<arr.length; i++){
//     var outPut = []
//     for(var j = i ; j < arr.length; j++){
//         if(k - arr[i] == arr[j] && i != j){
//          outPut.push(arr[i],arr[j]);
//          break;
//         }
//     }
    
//      if(outPut.length != 0){
//         console.log(outPut)
//     }
// }
//  }
//  findPairsOfsum([3,5,4,6,7,2,7,8,6,8,9],12)
    




// // Q2


// function reverse(arr){
// var n = arr.length - 1;
// var i = 0;
// while(i < n ){
//  var t = arr[i];
//  arr[i] = arr[n]
//  arr[n] = t  
// i++;
// n--
// }
// console.log(arr)
// }
// reverse([9,8,7,6,5,4,3,2,1])



// // Q3


// function isRotationOfEachOther(str1,str2){
//  let temp = str1 + str1;
//  if(temp.indexOf(str2) == -1){
//     console.log("two strings are not rotation of each other")
//  }else{
//     console.log("two string are rotation each other")
//  }
// }

// isRotationOfEachOther("johncena", "enajohnc")


// // Q4

// function firstNonRepetedCharecter(str){

//  for(var i = 0 ; i < str.length; i++){
//     var outPut = "true"
//     for(var j = 0; j < str.length; j++){
//         if(i != j && str.charAt(i) == str.charAt(j)){
//            outPut = "false"
//             break;
//         }
//     }
//     if(outPut == "true"){
//         console.log(str.charAt(i));
//         break
//     }
//  }
// }
// firstNonRepetedCharecter("ssuummantan")


// // Q5

// class TOH{
//     constructor(){
//         this.item = [];
//         this.length = 0;
//         this.insert = function(val){
//         this.item[this.length] = val;
//         this.length++
//         return this.item
//         }
//        this.remove = function(){
//         this.item.pop();
//         this.length--;
//         return this.item
//        } 
//        this.peek = function(){
//         return this.item[this.length - 1]
//        }
//        this.reverse = function(){
//         var n = this.length - 1
//         var i = 0;
//         while(i < n){
//             var t = this.item[i];
//             this.item[i]= this.item[n];
//             this.item[n]= t;
//             i++
//             n--
//         }
//         return this.item
//        }
//     }
// }
// var sourceRod = new TOH();
// sourceRod.insert(5);
// sourceRod.insert(4);
//  sourceRod.insert(3);
//  sourceRod.insert(2);
//  sourceRod.insert(1);
//  sourceRod.insert(6);
//  sourceRod.insert(8);
//  sourceRod.insert(10);

// var auxularyRod = [];
// var destinationRod = [];
// var auxRod = []
    
//  var TOHinterval = setInterval(function(){
//     console.log(sourceRod.item);
// if(sourceRod.item.length == 1){
//     destinationRod.push(...sourceRod.item.splice(0,1))   
// }else{
//     auxRod.push(...sourceRod.item.splice(1,sourceRod.length - 1));
//     console.log(`${auxRod}  aux. `)
//     destinationRod.push(...sourceRod.item.splice(0,1))
//     console.log(`${destinationRod}  dest. `)
//     sourceRod.item.push(...auxRod.splice(1,auxRod.length - 1));
//     console.log(`${sourceRod.item}  source.`)
//     destinationRod.push(...auxRod.splice(0,1));
//     console.log(`${destinationRod}  dest. `)
// }
    

// if(sourceRod.item.length == 0 && auxRod.length == 0){
//     clearInterval(TOHinterval)
// }


// },3000)




// function isOperand(x){
//     if((x >= "a" && x <= "z") || (x >= "A" && x <= "Z") || (x >= 0 && x <= 9)){
//        return x
//     }
//    }

// function getPrecedence(c){
//     if(c == "^"){
//         return 3
//     }else if(c == "/" || c =="*"){
//         return 2
//     }else if(c == "+" || c == "-"){
//         return 1
//     }else{
//         return -1
//     }
// }

// // Q6

// var postfixExp = "abcd+/e*+";

//  function postfixToPrefix(s){
//  let stack = [];
//  for(var i = 0; i < s.length; i++){
//     let c = s[i];
//     if(isOperand(c)){
//         stack.push(c)
//     }else {
//     let opt1 = stack[stack.length - 1];
//     stack.pop();
//     let opt2 =  stack[stack.length - 1];
//     stack.pop();
//     stack.push(c+opt2+opt1)
//     }
//  }
//  console.log(stack[stack.length - 1])
//  }
//  postfixToPrefix(postfixExp);


// //  Q7

// function prefixToinfix(s){
//  var postfix = ""
//  var stack = [];
 
//  for(var i = s.length - 1; i >= 0; i--){
//   postfix += s[i]
//  }
//  var exp = postfix
 
//  for(var i = 0 ; i < exp.length ; i++){
//     var c = exp[i]
  
//     if(isOperand(c)){
//       stack.push(c)
      
//     }else{
//         var operand1 = stack[stack.length - 1];
//         stack.pop()
//         var operand2 = stack[stack.length - 1];
//         stack.pop()
//      stack.push(")" + operand2 + c + operand1 + "(")
//     }
//  }
//  let infix = ""
//  var result = stack[stack.length - 1]
//  for(var i = result.length - 1; i >= 0; i--){
//     infix += result[i]
//    }
//    console.log(infix)
// }



// let items =  "-/*a+bc-def"
// // "a*(b+c)/(d-e)-f"
// prefixToinfix(items)

// // Q8

// let brackets = "{[](){}{[()]}}";

// function isBalncedBrackets(s){
// let stack = [];
// for(var i = 0; i < s.length; i++){
//     let c = s[i]
//     if(c == "(" || c == "[" || c == "{"){
//         stack.push(c);
//     }else{
//         if((stack[stack.length - 1] == "(" && c == ")") ||
//          (stack[stack.length - 1] == "[" && c == "]") || 
//          (stack[stack.length - 1] == "{" && c == "}")){
//             stack.pop()
           
//         }else{
//             console.log("not balanced");
//             break;
//         }
//     } 
//     if(i == s.length - 1  ){
//         if(stack.length == 0){
//             console.log('balanced')
//         }else{
//             console.log("not balanced")
//         }
//     }
// }


// }
// isBalncedBrackets(brackets);

// // Q 9

// class stack{
//     constructor(){
//         this.item = [];
//         this.length = 0;
//         this.insert = function(val){
//           this.item.push(val);
//           this.length++
//           return this.item
//         }
//         this.remove = function(){
//             this.item.pop();
//             this.length--
//             return this.item
//         }
//         this.peek = function(){
//          return this.item[this.length - 1]
//         }
//         this.reverse = function(){
//                     var n = this.length - 1
//                     var i = 0;
//                     while(i < n){
//                         var t = this.item[i];
//                         this.item[i]= this.item[n];
//                         this.item[n]= t;
//                         i++
//                         n--
//                     }
//                     return this.item
//                    }
//                    this.firstElem = function(){
//                     return this.item[0]
//                    }
                   
//       }
// }

// let stack1 = new stack();
//  stack1.insert(8);
//  stack1.insert(7);
//  stack1.insert(6);
//  stack1.insert(5);
//  stack1.insert(4);
//  stack1.insert(3);
//  stack1.insert(2);
//  stack1.insert(1);
//  stack1.remove()
//  stack1.peek()
//  stack1.reverse();
//  console.log(stack1.item)


//  Q 10
// let stack2 = new stack()

//     function findSmallestNum(...s){
//    for(var i = 0; i < s.length; i++){
//     if(stack2.length == 0 ){
//         stack2.insert(s[i])
//     }else{
//         if(s[i] > stack2.peek()){
//             stack2.remove();
//             stack2.insert(s[i]);
//         }
//     }
//    }
//    console.log(...stack2.item)
// }

// findSmallestNum(10,8,6,5,12,1,15,25,13);

  
