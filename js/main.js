const hamburger = document.querySelector('.menu')
const navLinks = document.querySelectorAll('.links')
const container = document.querySelector('.link-container');

hamburger.addEventListener('click', (e)=> {
hamburger.classList.toggle('is-active')
container.classList.toggle('open')
})

//Toggle active state for links and remove from all the elements
navLinks.forEach(elements => {
    elements.addEventListener('click', (e) => {
         navLinks.forEach(navLink => {
            navLink.classList.remove('is-active')
            e.target.classList.add('is-active')
            container.classList.remove('open')
            hamburger.classList.remove('is-active');
           
        })
    })
})

//Get the button:
let scrollBtn = document.querySelector('.scroll')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scroll() };

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

//handles back to top button
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})


// HANDLE FORM
const form = document.getElementsByTagName('form')[0];
   
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission, I will be in touch!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form, try again"
      });
    }
    form.addEventListener("submit", handleSubmit)

