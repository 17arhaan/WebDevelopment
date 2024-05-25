//! Primitives & Objects

//* Primitive DTs : Null , Number , Symbol , String , Boolean , BigInt , Undefined || NNBBSSU
//* Non Primitive DT -> Object , Array , Functions || 

let a = null
let b = 1727
let c = true
let d = BigInt(100) + BigInt("50")
let e = "Arhaan"
let f = Symbol("Its a symbol bruv")
let g = undefined 
console.log(a,b,c,d,e,f)
console.log(typeof d)

//* Objects

const item = {
    "abc" : true ,
    "def" : undefined ,
    "ghi" : 67 ,
    "jkl" : null 
}

console.log(item["mno"])
