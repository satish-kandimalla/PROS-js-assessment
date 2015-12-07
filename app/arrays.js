if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return _.indexOf(arr, item, true);
    },

    sum: function(arr) {
      var total = 0;
      for (var i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    },

    remove: function(arr, item) {
      var temp = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != item) {
          temp.push(arr[i]);
        }
      }
      return temp;
    },

    removeWithoutCopy: function(arr, item) {
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i -= 1;
          len -= 1;
        }
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function(arr) {
      arr.shift();
      return arr;
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      var count = 0,
        len = arr.length;
      for (var i = 0; i < len; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates: function(arr) {
      var seen = {},
        dupli = [],
        len = arr.length;
      for (var i = 0; i < len; i++) {
        seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      }
      for (var item in seen) {
        if (seen.hasOwnProperty(item) && seen[item] > 1) {
          dupli.push(item);
        }
      }
      return dupli;
    },

    square: function(arr) {
      var res = [],
        len = arr.length;
      for (var i = 0; i < len; i++) {
        res.push(arr[i] * arr[i]);
      }
      return res;
    },

    findAllOccurrences: function(arr, target) {
      var res = [],
        len = arr.length;
      for (var i = 0; i < len; i++) {
        if (arr[i] === target) {
          res.push(i);
        }
      }
      return res;
    }
  };
});
