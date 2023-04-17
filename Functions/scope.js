let a = 20  //global variable
function add(b) {
    console.log(a+b); 
    let fruit = 'Apple'; //local variable cannot be accessed outside the  function
    console.log(fruit);
}
add (50);

function greet(){
    let hello = "hi";
    // hey = "hey"
    function talk() {
        let c = "hello there"
        console.log(`${hello} ${c}`);
        
    }
    talk();
    // console.log(hey);
}
greet();