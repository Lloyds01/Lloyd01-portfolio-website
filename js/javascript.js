//togle icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        } 
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icn
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

//Email Settings

const form = document.querySelector("form");
const fullName= document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


// function sendEmail(){
//     const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
//     <br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

//     Email.send({
//         // SecureToken: "c63f35e8-b886-4a3c-9c62-27e0a38b1b5f",
//         // To : 'karakusataberkay@gmail.com',
//         // From : "karakusataberkay@gmail.com",
//         SecureToken: "a000caeb-6db7-414f-bb01-b139f5c93bd6",
//         To : 'karakusataberkay@gmail.com',
//         From : "karakusataberkay@gmail.com",
        
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//         message => {
//             if(message == "OK"){
//                 Swal.fire({
//                     title: "Your email was sent successfully!",
//                     text: "I will get back to you as soon as possible!",
//                     icon: "success"
//                   });
//             }
//         }
//     );
// };

// form.addEventListener("submit",(e) => {
//     e.preventDefault();

//     sendEmail();
// });

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "a000caeb-6db7-414f-bb01-b139f5c93bd6", // Gmail SMTP server
        To: "soloyede708@gmail.com", // Recipient's email address
        From: "soloyede708@gmail.com",
        Subject: subject.value || "No Subject", // Subject from the form or default
        Body: bodyMessage,
    }).then(function (message) {
        if (message == "OK") {
            Swal.fire({
                title: "Mail Sent Successfully!",
                text: "I'll get back to you soon!",
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "Failed to Send Mail!",
                text: "Please try again later.",
                icon: "error",
            });
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail(); // Call the sendEmail function
});


document.getElementById('downloadCv').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (confirm('Do you want to download the CV?')) {
        window.location.href = 'images/SEGUN OLOYEDE - RESUME.pdf'; 
    }
});

document.getElementById('downloadCv2').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (confirm('Do you want to download the CV?')) {
        window.location.href = 'images/SEGUN OLOYEDE - RESUME.pdf'; 
    }
});