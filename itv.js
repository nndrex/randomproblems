const n = [3,12,456,13,45,78,0,1,2];
const even = []
const odds = [];
n.map(x=>{
    x%2==0? even.push(x):odds.push(x);
});
const ans = even.concat(odds);
console.log(ans);