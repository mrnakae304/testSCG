//contain view showing element
const view = {
  view01: (answer) => `the answer of question one is ${answer}`,
  view02: (answer) => `${answer} is the value of Y`,
  view03: (answer) => `this is array of your answer ${answer}`
}

//modal to assing value
let modal = {
  answerQ01: [3],
  answerQ02: "",
  answerQ03: []
}

//controller wrap up all function
exports.controller = {
  func01: (indexOfX) => {
    for (let i = 0; i < indexOfX; i++) {
      modal.answerQ01.push(modal.answerQ01[i]+(2 * (i + 1)));
    }
    return view.view01(modal.answerQ01)
  },
  func02: () => {
    modal.answerQ02 = 99 - (10 * 2) - 24
    return view.view02(modal.answerQ02)
  },
  func03: (indexOfX) => {
    let contentWillShow = 4;

    for (let i = 0; i < indexOfX; i++) {
      const iPlus = i+ 1;
      const indexValue = contentWillShow + ((iPlus) * Math.pow(10, i))
      contentWillShow = indexValue
      modal.answerQ03.push(`${iPlus} = ${indexValue}`)
    }
    return view.view03(modal.answerQ03)
  }
}
