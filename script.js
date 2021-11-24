/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    
    let letters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r','s'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y','z'],
    }
    
    let num = [];
    num = [" "];
    
    if(!digits)return [];
    
    for(let i=0; i < digits.length; i++){
        let digit = digits[i]
        
        let n = num.length;
        
        for(let j=0; j < n; j++){
            
            let lookUp = letters[digit];
            let pop = num.shift();
            for(let k =0; k < lookUp.length; k++){
                
                let newData = pop + lookUp[k]
                num.push(newData.trim())
            }
        }
    }
    return num
};