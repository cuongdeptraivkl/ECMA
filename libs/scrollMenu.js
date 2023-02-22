window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    const navbarFixded = document.querySelector('.navbarFixded')
 
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

   navbarFixded.style.backgroundColor="#fff";
   navbarFixded.style.top="0"
   navbarFixded.style.padding="10px 0px 5px 0px"   
   navbarFixded.style.boxShadow="0px 2px 10px gray"
  } else {
    
  navbarFixded.style.background="transparent"
   navbarFixded.style.top="0px"
   navbarFixded.style.padding="5px 0px 26px 0px"
   navbarFixded.style.boxShadow="none"
  }

  AOS.init();

}


  

export default scrollFunction;