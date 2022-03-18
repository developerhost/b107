process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const line = lines[0].split(" ");
    const N = Number(line[0]);
    const S = Number(line[1]);
    const K = Number(line[2]);
    
    let array = [];
    for(let i = 1; i < N+1; i++){
        array.push(i)
    }
    
    // [1,2,3,4]
    
    const arrayChunk = ([...array], size = 1) => {
        return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
    }
    
    let n = 0
    
    while(n < K){
        const sp = arrayChunk(array,S);
        sp.reverse();
        
        for(let l in sp){
        for(let m in sp[l]){
    
        console.log("sp",sp[l][m])
        }
    }
        
        
        n++;
    }
    
    let testArray = [];
    
    for(let l in sp){
        for(let m in sp[l]){
            testArray.push(sp[l][m])
        }
    }
    
    const second = arrayChunk(testArray,S);
    
    second.reverse();
    
        for(let l in second){
        for(let m in second[l]){
            console.log(second[l][m])
        }
    }
    
});
