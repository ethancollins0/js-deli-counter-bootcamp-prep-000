/*function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}*/
var ticketNumber = 1

function takeANumber(line) {

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineList = "The line is currently:";
    for (let i = 0; i < line.length; i++) {
      lineList += ` ${i+1}. ${line[i]}`;
      if (i < line.length - 1) { //i doesn't increment until after loop, so we
        lineList += ",";        //need to check if the list is about to be complete
      } //.join
    }
    return lineList;
  }
  return "The line is currently empty.";
}
