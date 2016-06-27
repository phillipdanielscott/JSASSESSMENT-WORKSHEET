exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     for (i = 0; i < arr.length; i++){
       if (arr[i] === item)
       return i;
     }
     return -1;
  },
///////////////////////////////////
  sum: function(arr) {
    var a = 0;
     for (var i = 0; i < arr.length; i++) {
         a = a + arr[i];
     }
     return a;

  },
  ///////////////////////////////////

  remove: function(arr, item) {
    var seeya = [];
 for ( var i = 0; i < arr.length; i++){
      if (arr[i] !== item){
        seeya.push(arr[i]);
      }
  }
      return seeya;
  },
  ///////////////////////////////////

  removeWithoutCopy: function(arr, item) {
   var i;

   for (i = 0; i < arr.length;i++){
     if (arr[i] === item){
       arr.splice(i,1);
       i--; }
   }
   return arr;
 },
 ///////////////////////////////////

  append: function(arr, item) {
      arr.push(item)
      return arr; },

///////////////////////////////////
  truncate: function(arr) {
    arr.pop();
    return arr;
  },
///////////////////////////////////
  prepend: function(arr, item) {
   arr.unshift(item);
   return arr;
  },
///////////////////////////////////
  curtail: function(arr) {
    arr.shift();
    return arr;
    },

    ///////////////////////////////////
  concat: function(arr1, arr2) {
  return arr1.concat(arr2);

 },
 ///////////////////////////////////
  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },
  ///////////////////////////////////

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item)
      count++;
    }
    return count;
  },

  ///////////////////////////////////
  duplicates: function(arr) {
   let exists = [];
   let doubles = [];
   for (i = 0;i < arr.length;i++){
     if(exists.indexOf(arr[i]) === -1){
       exists.push(arr[i]);
     } else if (doubles.indexOf(arr[i]) === -1){
       doubles.push(arr[i]);
     }
   }
   return doubles;
 },
  ///////////////////////////////////
  square: function(arr) {
    var math= [];

   for (var i = 0, len = arr.length; i < len; i++) {
       math.push(arr[i] * arr[i]);
   }

   return math;
},
///////////////////////////////////
  findAllOccurrences: function(arr, target) {
     let doubles = [];
     arr.forEach(function(element,index,array){
       if( element === target){
         return doubles.push(index);
       }
     })
     return doubles;
      }
  };
