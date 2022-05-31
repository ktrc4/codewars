function betterThanAverage(classPoints, yourPoints) {
    let classPoints = [5, 5, 5]
    let yourPoints = [10]
    let average = ()
  }
  //
  //P - need integers that are positive 
  //R - True if scored better false if not
  //E - [5, 5, 5] 
  //P - 1. write a function
  // 2. sum the class points
  // 3. divide the sum by 4 classmates 
  //4. Conditional - if classPoints is less than yourPoints, return true
  // if classPoints is greater than yourPoints, return false 
  
  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }