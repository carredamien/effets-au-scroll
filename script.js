const cardfive = document.querySelector('.card--five');

window.addEventListener('scroll', function(){
  // console.log(window.innerHeight);
  // console.log(window.scrollY);
  // console.log(document.body.offsetHeight);

  scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
  console.log("scrollVAlue = " + scrollValue);

  //show card--five
  if (scrollValue > 1){
    cardfive.style.opacity = '1';
    cardfive.style.transform = 'translateX(0)';
  }else{
    cardfive.style.opacity = '0';
    cardfive.style.transform = 'translateX(-200px)';

  }
})
