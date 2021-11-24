/**
 * @param {number[]} nums
 * @return {number[]}
 */

 class Node {
    constructor(val) {
      this.val = val
      this.countOfLeftTree = 0
      this.countOfSelf = 1
      this.left = null
      this.right = null
    }
  }
  
  var countSmaller = function(nums) {
        if (nums.length === 0) return []
    
    const root = new Node(nums[nums.length - 1])
    // return the smaller numbsers
    const searchAndInsert = (nodeVal) => {
      const node = new Node(nodeVal)
      let p = root
      let countOfSmaller = 0
      while (p) {
        if (node.val === p.val) {
          p.countOfSelf += 1
          return p.countOfLeftTree + countOfSmaller
        }
        
        if (node.val < p.val) {
          p.countOfLeftTree += 1
          if (p.left) {
            p = p.left
          } else {
            p.left = node
            return countOfSmaller
          }
        } else {
          countOfSmaller += p.countOfLeftTree + p.countOfSelf
          if (p.right) {
            p = p.right
          } else {
            p.right = node
            return countOfSmaller
          }
        }
      }
    }
    
    const result = [0]
    
    for (let i = nums.length - 2; i >= 0; i--) {
      result.push(searchAndInsert(nums[i]))
    }
    
    return result.reverse()
  };