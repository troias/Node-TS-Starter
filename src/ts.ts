const num1El = document.getElementById("num1") as HTMLInputElement
const num2El = document.getElementById("num2") as HTMLInputElement

const addBtn = document.getElementById("add") as HTMLButtonElement

const resultEl = document.getElementById("result") as HTMLDivElement

const add = (a: number, b: number) => {
  return a + b
}

addBtn.addEventListener("click", () => {
  const num1 = +num1El.value
  const num2 = +num2El.value
  const result = add(num1, num2)
  resultEl.innerText = result.toString()
  console.log("result", result)
})
