class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    appentNumber(number){
        if(number == '.' && this.currentOperand.includes("."))
        {
            return
        }
        this.currentOperand = this.currentOperand + number
    }
    getDisplayNumber(number){
        let stringNumber = number.toString()
        let integerDigits = parseFloat(stringNumber.split('.')[0])
        let decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if(isNaN(integerDigits))
        {
            integerDisplay = ''
        }
        else{
            integerDisplay = integerDigits.toLocaleString('en',{
                maximumFractionDigits:0
            })
        }
        if(decimalDigits != null)
        {
            return `${integerDisplay}.${decimalDigits}`
        }
        else{
            return integerDisplay;
        }
    }
    storeData(){
        let store = []
        store = store + this.previousOperand
        console.log(store)
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null)
        {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
        else{
            this.previousOperandTextElement.innerText = ''
        }
        // this.storeData()
    }
    chooseOperation(operation){
        if(this.currentOperand === ''){
            return
        }
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        // console.log(prev,current)
        if(isNaN(prev) || isNaN(current))
        {
            return
        }
        // console.log(this.operation)
        switch(this.operation)
        {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '/':
                computation = prev / current
                break
            case '*':
                computation = prev * current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    clear(){
        this.currentOperand = '';
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
console.log(Array.from(numberButtons))
const operationButtons = document.querySelectorAll('[data-operation]')
console.log(Array.from(operationButtons))
const equalsButton = document.querySelector('[data-equals]')
console.log((equalsButton))
const deleteButton = document.querySelector('[data-delete]')
console.log((deleteButton))
const allClearButton = document.querySelector('[data-all-clear]')
console.log((allClearButton))
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
console.log((previousOperandTextElement))
const currentOperandTextElement = document.querySelector('[data-current-operand]')
console.log((currentOperandTextElement))



const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appentNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click',()=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',()=>{
    calculator.delete()
    calculator.updateDisplay()
})