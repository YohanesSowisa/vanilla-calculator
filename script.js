const display = document.querySelector('.op')
const result = document.querySelector('.res')
const btns = document.querySelectorAll('.row span')
const symbols = ['%', 'x', '/', '-', '+', '=']
let output = ''

function handleClick(btnValue) {
  if (btnValue === '=' && output !== '') {
    // output = eval(output.replace('%', '/100'))
    // result.innerHTML = eval(output.replace('%', '/100'))
    result.innerHTML = `=${eval(output.replace(/[%x]/g, e => {
      return e == '%' ? '/100' : '*'
    }))}`
  }
  else if (btnValue == 'C') {
    output = ''
    result.innerHTML = ''
  }
  else if (btnValue == 'DEL') output = output.slice(0, -1)
  else if (btnValue == '%') {
    if (output == '') return
    output = eval(output/100)
  }
  else {
    if (output == '' && symbols.includes(btnValue)) return
    if (output == '' && (btnValue == '00' || btnValue == '0')) return
    if (btnValue == 'x') output += 'x'
    else output += btnValue
  }
  display.value = output
}

btns.forEach(btn => btn.addEventListener('click', e => handleClick(e.target.innerHTML)))