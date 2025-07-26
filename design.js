// let header = document.querySelector('.menu');
  // document.querySelector('.ri-menu-line').onclick = () => {
  //   header.classList.toggle("active"); searchBtn.classList.remove('active');
  //  console.log('click')
  // }

  // let searchBtn = document.querySelector('.input');
  //   document.querySelector('.searching').onclick = () => {
  //     searchBtn.classList.toggle("active"); header.classList.remove('active');
     

  //   }
 const menu = document.querySelector('.ri-menu-line')
  const header = document.querySelector('heading')

 menu.addEventListener('click', () => {
  header.classList.toggle('menu')
 });

  // const signBtn = document.querySelector('.sign-again-link')
  // const signup = document.querySelector('signup')

  // signBtn.addEventListener('click', () => {
  //   signup.classList.toggle('signing-up')
  //   login.classList.remove('logging')
  // });

 const cartBtn = document.querySelector('.cart-link')
  const cart = document.querySelector('cart')

  cartBtn.addEventListener('click', () => {
    cart.classList.toggle('cart-items')
    
  });


 const searchBtn = document.querySelector('.searching')
  const search = document.querySelector('search')

  searchBtn.addEventListener('click', () => {
    search.classList.toggle('input')
  });

  const logBtn = document.querySelector('.Login-link')
    const login = document.querySelector('login')

    logBtn.addEventListener('click', () => {
      login.classList.toggle('logging')
      
    });
  