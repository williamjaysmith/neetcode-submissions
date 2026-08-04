class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
let storeNums= {};
for (let e of nums){
    if(storeNums[e])return true;
    storeNums[e]=true;
}
return false

    }
}
//p- array of integers
//r- true or false boolean
//e- 
//p- put each element in a hashmap and check against it 