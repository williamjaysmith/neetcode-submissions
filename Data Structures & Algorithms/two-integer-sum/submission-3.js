class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //create hashmap
        const numsHash={};

        //loop through nums
        for (let i=0; i<nums.length; i++){
             //find the difference between current and target
             let diff= target - nums[i];
             
             //if diff exists return the index of difference and current index
             if(diff in numsHash){
                return [numsHash[diff],i];
             }
             
             //if it doesnt exist yet , add current to hashmap
             numsHash[nums[i]]=i;


        }
       

    }
}
