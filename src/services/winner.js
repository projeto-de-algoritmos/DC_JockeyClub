const functionToGenarateRandomArrayNotRepeted = (min, max) => {
  const array = [];
  while (array.length < max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (array.indexOf(randomNumber) === -1) array.push(randomNumber);
  }
  console.log(array);
  return array;
};

export const cavalos = [
  {
    id: 1,
    name: "Cavalos",
    priorityList: functionToGenarateRandomArrayNotRepeted(1, 10),
  },
];

export function func(userPriority, candidatePriority) {
  var array = [];
  var tmp = Array(userPriority.length);
  console.log(userPriority);

  for (var index = 0; index < userPriority.length; index++) {
    tmp[userPriority[index] - 1] = index + 1;
  }
  userPriority = tmp;

  for (var i in candidatePriority) {
    array.push(userPriority[candidatePriority[i] - 1]);
  }
  console.log("userPriority", userPriority);
  console.log("array", array);
  return array;
}

export function mergeAndCount(a, b) {
  var array = [];
  var i = a.length;
  var j = b.length;
  var r = 0;

  while (i !== 0 || j !== 0) {
    if (j !== 0 && (i === 0 || b[b.length - j] < a[a.length - i])) {
      array.push(b[b.length - j]);
      j -= 1;
      r += i;
    } else {
      array.push(a[a.length - i]);
      i -= 1;
    }
  }
  return [r, array];
}

export function sortAndCount(userPriority) {
  var rb, ra, r;
  if (userPriority.length === 1) {
    return [0, userPriority];
  }

  var a = userPriority.slice(0, Math.floor(userPriority.length / 2));
  var b = userPriority.slice(
    Math.floor(userPriority.length / 2),
    userPriority.length
  );

  [ra, a] = sortAndCount(a);
  [rb, b] = sortAndCount(b);
  [r, userPriority] = mergeAndCount(a, b);

  return [r + ra + rb, userPriority];
}

export function winner(priorityList, priorityList2) {
  console.log("priorityList: ", priorityList);
  console.log("priorityList2: ", priorityList2);
  var [inversions] = sortAndCount(func(cavalos[0].priorityList, priorityList));
  console.log(inversions);
  var [inversions2] = sortAndCount(
    func(cavalos[0].priorityList, priorityList2)
  );
  console.log(inversions2);

  if (inversions < inversions2) {
    return "Player 1 venceu";
  } else if (inversions > inversions2) {
    return "Player 2 venceu";
  } else {
    return "Empate";
  }
}
