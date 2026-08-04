class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //set up hashmap
        const numHash={};

        //loop through nums
        for(let i=0; i<nums.length; i++){
            //find the difference between current index and target
            let diff= target - nums[i];
            
            //check if that difference exist
            //if difference exist return index of difference and current
            if(diff in numHash){
                return [numHash[diff],i]
            }

            //if diff doesnt exist yet, put current into hashmap
            numHash[nums[i]]=i;
       


        }
        

    }
}
