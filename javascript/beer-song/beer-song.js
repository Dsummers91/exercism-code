'use strict'

class BeerSong {
  constructor() {
    this.verse = verse;
    this.sing = sing;
  };
}

function verse(num) {
  num = num.toString();
  if(num==='0') {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  } else if(num==='1') {
    return  '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  } else if(num==='2') {
    return  '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
  } else {
    return num+' bottles of beer on the wall, '+num+' bottles of beer.\nTake one down and pass it around, '+(num-1)+' bottles of beer on the wall.\n';
  }
}

function sing(start, end) {
  end = end || 0;
  var s = '';
  for (var i = start; i >= end; i--) {
    s += verse(i);
    if(i!==end) s += '\n'
  }
  return s
}

module.exports = BeerSong;

