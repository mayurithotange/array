 const mp=[23,22,30,65,64,78,55,33,66]

let largest=mp[0]
for(i=0;i<mp.length;i++){
    if(mp[i]>largest){
        largest = mp[i]
    }
}
console.log(largest)