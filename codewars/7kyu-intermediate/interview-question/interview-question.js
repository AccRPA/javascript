function getStrings(city){
    const regExp = new RegExp('[A-Za-z]', 'gi');
    const lettersArray = city.toLowerCase().match(regExp);

    const objAccumulator = {};
    lettersArray.reduce((accumulator, letter) => {
      let value = '*';
      if (letter in accumulator){
        value += accumulator[letter];
      }
      accumulator[letter] = value;
      return accumulator;
  }, objAccumulator);

  const outArray = Object.keys(objAccumulator).map(x => `${x}:${objAccumulator[x]}`);
  return outArray.join(',');
}
