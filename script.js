document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Menu (Sidemenu) ---
    const sidemenu = document.getElementById('sidemenu');
    const openMenuBtn = document.getElementById('menu-open-btn');
    const closeMenuBtn = document.getElementById('menu-close-btn');
    const navLinks = sidemenu.querySelectorAll('a');

    function openMenu() {
        sidemenu.style.right = '0';
    }

    function closeMenu() {
        sidemenu.style.right = '-250px';
    }

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    // Close the menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- Google Sheets Contact Form ---
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ31CrLXd73clYlKtLqJP6UHHc29KqvGMY8YKKFP_tOFwDzABV1IO06_qd3aKqQFRSoQ/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () { msg.innerHTML = "" }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });

});