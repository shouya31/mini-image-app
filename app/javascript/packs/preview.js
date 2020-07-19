document.addEventListener('DOMContentLoaded', function (){
  const clickLabel = function(){
    const inputAll = document.getElementsByName('message[images][]');
    const inputLast = inputAll[inputAll.length -1];
    const inputId = inputLast.getAttribute('id');
    console.log(inputId);
    document.getElementById('click-upload').setAttribute('for', inputId);
  };

  const changeInput = () => {
    document.getElementById('message_images').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);
      const inputAll = document.getElementsByName('message[images][]');
      const blobHTML = `<img src="${blob}">`;
      const inputHTML = `<input type='file' name='message[images][]' id="message_images">`;
      document.getElementById('new_message').insertAdjacentHTML('beforebegin', blobHTML);
      document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
    });
  };

  document.getElementById('click-upload').addEventListener('click', function(){
    clickLabel();
    changeInput();
  });
});