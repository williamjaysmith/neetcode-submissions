class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const numbersHash={};

        //loop through nums array
        for(let i=0; i<nums.length ;i++){

            //create a variable to find the difference between the target and current number
            let diff= target-nums[i];

            //check if the difference exist already in the hashmap , if so return index of difference and current index
            if(diff in numbersHash){
                return [numbersHash[diff], i]
            }

            // continue creating hashmap of each number and their index
            numbersHash[nums[i]]=i;
        }

    }
}
