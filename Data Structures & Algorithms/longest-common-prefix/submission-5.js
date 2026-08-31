class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        //declare prefix
        let prefix=strs[0]

        //loop through the string
        for (let i=1;i<strs.length;i++){
            while(!strs[i].startsWith(prefix)){
                prefix=prefix.slice(0,-1);
            }

        }
        return prefix

        
    }
}
