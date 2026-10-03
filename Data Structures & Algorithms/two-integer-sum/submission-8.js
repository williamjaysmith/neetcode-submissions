class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numHash={}

        for(let i=0;i<nums.length;i++){
             const diff= target-nums[i];

             if (diff in numHash){
                return [numHash[diff],i]
             }

             numHash[nums[i]]=i


        }
       
    }
}
