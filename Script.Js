// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// update footer year

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML += " • " + new Date().getFullYear();
}
