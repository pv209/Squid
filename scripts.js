document.addEventListener("DOMContentLoaded", function() {
  fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
       .then((response) => {
        response.json().then((result) => {
          createImage(result);
        });
       });
});

function createImage(result) {
  const section = document.createElement('section');
  document.querySelector('.main_site').appendChild(section);
  section.className ='container';
  result.forEach((img) => {
    section.appendChild(createImageElement(img));


  })
}
  function createImageElement(obj) {
    const img = document.createElement('img');
    img.className = 'img_instagram';
    img.src = obj.imagens.thumbnail.url;
    img.addEventListener('click', () => {
      console.log(obj.imagens);
      window.open(obj.link);
});
    return img;
  }

