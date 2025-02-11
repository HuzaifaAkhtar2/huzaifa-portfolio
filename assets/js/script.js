const body = document.body;
const toggleBtn = document.querySelector('.toggle-btn');
const toggle = document.querySelector('.toggle-icon');
const burgerBtn = document.querySelector('.burger-btn');
const burger = document.querySelector('.burger-icon');
const navItems = document.querySelector('header nav ul');
const navItem = document.querySelector('header nav ul li a');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) { toggle.classList.add("ri-sun-fill"); toggle.classList.remove("ri-moon-fill") }
    else { toggle.classList.add("ri-moon-fill"); toggle.classList.remove("ri-sun-fill") }
});

burgerBtn.addEventListener("click", () => {
    navItems.classList.toggle('active');
    if (navItems.classList.contains('active')) { burger.classList.add("ri-close-large-line"); burger.classList.remove("ri-menu-line") }
    else { burger.classList.add("ri-menu-line"); burger.classList.remove("ri-close-large-line") }
})

navItem.addEventListener("click", () => {
    navItems.classList.toggle("active")
    burger.classList.add("ri-menu-line")
    burger.classList.remove("ri-close-large-line")
})

function copyNumber() {
    const phoneNumber = "+92 348 5113656";
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            alert("Phone number copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy phone number.");
        });
}

function copyDiscord() {
    const discordID = "iamhuzaifa_akhtar";
    navigator.clipboard.writeText(discordID)
        .then(() => {
            alert("Discord ID copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy phone number.");
        });
}