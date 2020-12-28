import '../css/style.scss';

const app = () => {
  const $counter = document.querySelector('.counter');
  const $textarea = $counter.querySelector('textarea');
  const $characters = $counter.querySelector('.characters strong');
  const $words = $counter.querySelector('.words strong');
  const $numbers = $counter.querySelector('.numbers strong');

  const countCharacters = text => [...text].length;

  const countWords = text => (text ? text.split(/\s\w/gim).length : 0);

  const countNumbers = text => text.match(/\d/gim)?.length || 0;

  const saveTextInLocal = text => {
    window?.localStorage?.setItem('@contador', JSON.stringify(text));
  };

  const getTextFromLocal = () => {
    return JSON.parse(window?.localStorage?.getItem('@contador'));
  };

  const updateCounters = inputText => {
    $characters.textContent = countCharacters(inputText);
    $words.innerHTML = countWords(inputText);
    $numbers.innerHTML = countNumbers(inputText);
  };

  const retrieveInformation = () => {
    const inputText = getTextFromLocal();
    $textarea.value = inputText;
    inputText && updateCounters(inputText);
  };

  const init = () => {
    retrieveInformation();

    $textarea.addEventListener('input', e => {
      e.preventDefault();

      const inputText = e.target.value || '';

      saveTextInLocal(inputText);
      updateCounters(inputText);
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
