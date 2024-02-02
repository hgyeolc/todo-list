const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keydown', event => {
  const inputValue = event.target.value;
  const enteredKey = event.key;

  if (inputValue !== '' && enteredKey === 'Enter') {
    const li = document.createElement('li');
    li.innerText = inputValue;
    ul.append(li);
    input.value = '';
  }
});