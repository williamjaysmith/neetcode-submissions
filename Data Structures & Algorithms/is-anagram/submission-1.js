class Solution {
  
    isAnagram(s, t) {
        if (s.length!==t.length){return false}

        let first={};
        let second={};
        for(let i=0; i<s.length; i++){
            first[s[i]] = (first[s[i]] || 0)+1;
            second[t[i]] = (second[t[i]] || 0)+1;
        }

        for(const key in first){
            if (first[key] !== second[key]){
                return false
            }
        }
        return true; 
    }
}
