let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-container .image');
let categoryBtn = document.querySelectorAll('.container .btn');

function updateSearch() {
   let categ = ''
   categoryBtn.forEach(btn =>{
      if (btn.classList.contains('active')){
            categ += btn.getAttribute('data-category')
      }});
   if (categ.length == 0){
      categ = '!@#$%^&*'
   }
   //console.log(categ);
   images.forEach(hide => hide.style.display = 'none');
   let value = searchBox.value.toLowerCase();
   images.forEach(filter =>{
      let title = filter.getAttribute('data-title');
      if(title.includes(value)){
         filter.style.display = 'block';
      }
      if(searchBox.value == ''){
         filter.style.display = 'block';
      }
      if (categ.includes(title[0]) == false){
            filter.style.display = 'none';
      }
   });
};

searchBox.oninput = updateSearch


categoryBtn.forEach(btn =>{
   btn.onclick = () =>{
      if (btn.classList.contains('active')){
            btn.classList.remove('active')
      }
      else{
            btn.classList.add('active');
      }
      updateSearch();
   };
});
updateSearch()