export const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const random = () => {
  const randomNumber = Math.floor(Math.random() * 9) + 2;
  return randomNumber;
};

export const updateOptions = answer => {
  function distractors(i) {
    if (i < 3) {
      return answer + random();
    } else {
      return answer - random();
    }
  }

  const distractorsArr = [answer];

  for (let i = 1; i < 6; i++) {
    distractorsArr.push(distractors(i));
  }
  return shuffle(distractorsArr);
};
