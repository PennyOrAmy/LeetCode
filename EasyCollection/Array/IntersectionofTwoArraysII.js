/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let list1 = [],
    list2 = [],
    resultList = [];

  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i] + '';
    if (typeof(list1[key]) === 'undefined') {
      list1[key] = 1;
    } else {
      list1[key] += 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i] + '';
    if (typeof(list1[key]) !== 'undefined') {
      if (typeof(list2[key]) === 'undefined') {
        list2[key] = 1;
      } else {
        list2[key] += 1;
      }
    }
  }

  for (let p in list2) {
    let finalValue = Math.min(list1[p], list2[p]);
    let num = parseFloat(p);
    for (let q = 0; q < finalValue; q++) {
      resultList.push(num);
    }
  }

  return resultList;
  // Runtime: 97 ms
  // Beats: 81.20%

  // Sorted? this way
  /*let resultList = [];
  nums1.sort(asc);
  nums2.sort(asc);

  for(let i=0,j=0;i< nums1.length&&j<nums2.length;) {
      if(nums1[i] === nums2[j]) {
          resultList.push(nums1[i]);
          i ++;
          j ++;
      } else if (nums1[i] > nums2[j]) {
          j ++;
      } else {
          i ++;
      }
  }

  function asc(a, b) {
      return a - b;
  }

  return resultList;*/
  // Runtime: 102 ms
  // Beats: 64.10%
};
