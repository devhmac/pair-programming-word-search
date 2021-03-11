//Pair programmed: Devin MacGillivray and Karina Song

const wordSearch = (letters, word) => {

    if (letters.length === 0) {
        return false;
    }
    //this looks for the word horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(horizontalJoin);
    for (let l of horizontalJoin) {
        //console.log(l)
        if (l.includes(word)) {
            //console.log(l.includes(word))
            return true;
        }
    }
    // Checks for word vertically
    const verticalArr = []
    let vertRow = ''
    for (let i = 0; i < letters.length; i++) {
        vertRow = '';
        for (let j = 0; j < letters[i].length + 1; j++) {
            if (i < letters.length - 1) {
                vertRow += letters[j][i];
                //console.log(vertRow)
            }
        }
        verticalArr.push(vertRow)
    }
    for (let colWord of verticalArr) {
        if (colWord.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch;