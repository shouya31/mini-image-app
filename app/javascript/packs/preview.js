document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#message_image'),addEventListener('change', function(e){
    const preview = e.target.files[0];
    const blob = window.URL.createObjectURL(preview);
    const html = `<img src="${blob}">`;
    document.querySelector('form').insertAdjacentHTML('afterend' , html);
  });
});