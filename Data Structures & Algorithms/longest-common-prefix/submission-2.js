class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        //ok to start with first string as prefix 
        let prefix=strs[0];
        //loop through the strings
        for(let i=1;i<strs.length;i++){
            //if current string isnt the same as prefix, lets take one letter off prefix
            while(!strs[i].startsWith(prefix)){
                prefix=prefix.slice(0,-1)
            }

        }
        return prefix

    }
}
