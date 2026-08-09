class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //create hashmap
        const numberHash={};

        //loop through nums
        for(let i=0;i<nums.length;i++){
            //find the difference
            let diff= target-nums[i];
            //if the difference plus current equals target then return array of indexes [diff,current]
            if(diff in numberHash){
                return [numberHash[diff],i];
            }

            //if not then store diff in the hashmap
            numberHash[nums[i]]=i;

        }

        
    }
}
