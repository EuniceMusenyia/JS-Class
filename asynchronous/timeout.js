const work = ()=>{
    console.log('let us work');
}
work();

const reminder =()=>{
    console.log('please attend the meeting');

}

setTimeout(reminder,4000);

const takeBreak = ()=>{
    console.log('please rest');
}
takeBreak();

// using normal functions
function work (){
    console.log('lets work');
}
work();

function reminder (){
    console.log('attend meeting');
}
setTimeout(reminder,1000)

function goForBreak () {
    console.log("breaktime");
}
goForBreak()