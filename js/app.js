import '../css/style.scss';

const app = () => {
  const $counter = document.querySelector('.counter');
  const $textarea = $counter.querySelector('textarea');
  const $characters = $counter.querySelector('.characters strong');
  const $words = $counter.querySelector('.words strong');
  const $numbers = $counter.querySelector('.numbers strong');

  const countCharacters = text => text.split('').length;

  const countWords = text => (text ? text.split(/\s\w/gim).length : 0);

  const countNumbers = text => text.match(/\d/gim)?.length || 0;

  const init = () => {
    $textarea.addEventListener('input', e => {
      e.preventDefault();

      const inputText = e.target.value || '';

      $characters.textContent = countCharacters(inputText);
      $words.innerHTML = countWords(inputText);
      $numbers.innerHTML = countNumbers(inputText);
    });
  };

  return {
    init,
    countCharacters,
    countWords,
    countNumbers,
  };
};

const { init } = app();

window.onload = init;
