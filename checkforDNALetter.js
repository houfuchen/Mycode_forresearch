function checkforDNALetter(longStr, shortStr){
    let k=0;
    for (i=0; i<longStr.length;i++) {
        if (longStr[i].toLowerCase()==shortStr.toLowerCase()){
            k=k+1;
        }
    }
    return k
}
const longStr="AAAGGTCCACCCGATACATTGA";
console.log("A",checkforLetter(longStr,"A"));
console.log("T",checkforLetter(longStr,"T"));
console.log("C",checkforLetter(longStr,"C"));
console.log("G",checkforLetter(longStr,"G"));
