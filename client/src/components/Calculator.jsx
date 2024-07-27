import React from 'react'

const Calculator = () => {
    addEventListener('DOMContentLoaded',(e) => {
        const numbers = document.querySelectorAll('.numbers');
        const textArea = document.querySelector('#text-field')
        const smallTextArea = document.querySelector('#sm-text-field')
        const operators = document.querySelectorAll('.operators')
        let digits = '';
        let values = [];
        let operations = [];
        const clearArea = () => {
            textArea.innerHTML = '';
            smallTextArea.innerHTML = '';
            values = [];
            operations = [];
        }
        numbers.forEach((number) => {
            number.addEventListener('click', (e) => {
                textArea.append(e.target.innerText);
                digits += e.target.innerText;
            })
        })
        operators.forEach((operator) => {
            operator.addEventListener('click',(e) => {
                if(values.length >= operations.length && digits != ''){
                    operations.push(e.target.innerText);
                    smallTextArea.append(textArea.innerText + e.target.innerText);
                    textArea.innerText = '';
                    values.push(parseFloat(digits));
                    digits = '';
                    console.log(values.length, operations.length);
                }
            })
        })

        document.querySelector('#clear').addEventListener('click',clearArea);
        document.querySelector('#delete-button').addEventListener('click',(e) => {
            textArea.innerText = textArea.innerText.substring(0, textArea.innerText.length - 1);
            digits = digits.substring(0, digits.length -1);
        })

        document.querySelector('.equals').addEventListener('click',(e) => {
            if(digits == ''){
                operations.pop();
                smallTextArea.innerText = smallTextArea.innerText.substring(0, smallTextArea.innerText.length - 1);
            }
            else{
                values.push(parseFloat(digits));
            }
            smallTextArea.append(textArea.innerText + e.target.innerText);
            textArea.innerText = '';
            digits = '';

            let result = values[0];
            let k = 1
            for(let i = 0 ; i < operations.length ; i ++ ){
                if(operations[i] == '+'){
                    result += values[k++];
                }else if(operations[i] == '-'){
                    result -= values[k++];
                }else if(operations[i] == 'x'){
                    result *=values[k++];
                }else if(operations[i] == '/'){
                    result /= values[k++];
                }
            }
            textArea.innerText = result;
        })
        document.querySelector('.sign-change').addEventListener('click',(e) => {
            textArea.innerText = String(parseFloat(textArea.innerText) * -1)
        })
    })




  return (
    <div className='w-72 h-96 bg-white rounded-md'>
        <div id='display' className=' w-full h-1/4 rounded-t-md flex items-center justify-center '>
            <div className='w-11/12 h-3/4 bg-white flex'>
                <div className='h-full w-4/5'>
                    <div className=' w-full h-1/3 flex items-center justify-end'><p id="sm-text-field" className='text-black/35'></p></div>
                    <div className=' flex items-center justify-end w-full h-2/3'><p id="text-field" className='m-3 text-base'></p></div>
                </div>
                <div className='h-full w-1/5'>
                <button id="clear" className=' h-1/2 w-full flex justify-center items-center cursor-pointer hover:border hover:border-black/20 transition-all rounded-md text-red-600 hover:text-red-700 hover:bg-gray-100'>C</button>
                <button id="delete-button"  className=' h-1/2 w-full flex justify-center items-center cursor-pointer hover:border hover:border-black/20 transition-all rounded-md  hover:bg-gray-100'>X</button>
                </div>
                
            </div>
        </div>
        <div id='buttons' className=' w-full h-3/4 rounded-b-md flex'>
            <div id='numbers' className='h-full w-3/4 '>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers' >1</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>2</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>3</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>4</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>5</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>6</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>7</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>8</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>9</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>.</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all numbers'>0</button>
                <button className='w-1/3 h-1/4 bg-white hover:bg-gray-200 active:bg-gray-300 transition-all sign-change'>+/-</button>
            </div>
            <div id='operators' className='h-full w-1/4 bg-red-400'>
                <button className='w-full h-1/5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all operators'>+</button>
                <button className='w-full h-1/5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all operators'>-</button>
                <button className='w-full h-1/5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all operators'>x</button>
                <button className='w-full h-1/5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all operators'>/</button>
                <button className='w-full h-1/5 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 transition-all equals'>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator