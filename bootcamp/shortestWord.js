export default function shortestWord(str) {
    var strSplit = str.split(' ');
    var shortest = strSplit;
    for(var i = 0; i < strSplit.length; i++) {
      if(strSplit[i].length <= shortest.length){
      shortest = strSplit[i];
       }
    }
    return shortest;
  }