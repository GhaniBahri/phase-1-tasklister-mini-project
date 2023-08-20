document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const list = document.getElementById('list')
  const form =document.getElementById('create-task-form')
  const input= form.querySelector('input[type="text"]')
  const priority = document.createElement('select')
  const date = document.createElement('input')

  date.setAttribute('type', 'date')

  const option0 = document.createElement('option')
  option0.text= 'choose Priority'
  priority.appendChild(option0)

  const option1 = document.createElement('option')
  option1.value= 1
  option1.text= "Very urgent"
  priority.appendChild(option1)

  const option2 = document.createElement('option')
  option2.value= 2
  option2.text= "Urgent"
  priority.appendChild(option2)

  const option3 = document.createElement('option')
  option3.value= 3
  option3.text= "Not urgent"
  priority.appendChild(option3)

  function itemBg(item, color){
    switch (color) {
      case '1':
        item.style.background='red'
        break;
      case '2':
        item.style.background= 'orange'
        break;
      case '3':
        item.style.background= 'green'
        break;
      default:
        item.style.background= 'none'
        break;
    }
  }

  input.insertAdjacentElement('afterend', priority)
  priority.insertAdjacentElement('afterend',date)
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const item = document.createElement('li')
    item.textContent= `${input.value} ${date.value}`
    itemBg(item, priority.value)
    const close = document.createElement('button')
    const edit = document.createElement('button')
    close.textContent= 'X'
    edit.textContent= '+'
    item.appendChild(close)
    item.appendChild(edit)
    list.appendChild(item)
    close.addEventListener('click', (e)=>{
      item.remove()
    })
    edit.addEventListener('click',()=>{
      if(input.value && date.value && priority.value){
        itemBg(item, priority.value)
        item.textContent= `${input.value} ${date.value}`
        item.appendChild(close)
    item.appendChild(edit)
      }
      else{
        if (input.value && date.value) {
          item.textContent= `${input.value} ${date.value}`
          item.appendChild(close)
    item.appendChild(edit)
        }else if(priority.value){
          itemBg(item, priority.value)
        }
      }
    })
  })

});
