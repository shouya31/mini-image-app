document.addEventListener('DOMContentLoaded', function (){
  const clickLabel = function(){
    const inputAll = document.getElementsByName('message[images][]');
    const inputLast = inputAll[inputAll.length -1];
    const inputId = inputLast.getAttribute('id');
    console.log(inputId);
    document.getElementById('click-upload').setAttribute('for', inputId);
  };

  const changeInput = (inputArrayLast) => {
    inputArrayLast.addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);
      const blobHTML = `<img src="${blob}">`;
      const i = e.target.getAttribute('data-index').to_i +1;
      const inputHTML = `<input type='file' name='message[images][]' id="message_images_${i}" data-index="${i}">`;
      document.getElementById('new_message').insertAdjacentHTML('beforebegin', blobHTML);
      document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
    });
  };

  document.getElementById('click-upload').addEventListener('click', function(){
    clickLabel();
    changeInput();
  });
});