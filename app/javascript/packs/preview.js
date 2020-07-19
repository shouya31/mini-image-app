document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#message_image'),addEventListener('change', function(e){
  const image_content = document.querySelector('img');
    if (image_content){
      image_content.remove();
    };

    const preview = e.target.files[0];
    const blob = window.URL.createObjectURL(preview);
    const html = `<img src="${blob}">`;
    const inputHTML = `<input type='file' name='message[images][]' id="message_images">`;
    document.querySelector('form').insertAdjacentHTML('afterend' , html);
    document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
  });
});