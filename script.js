function showMessage() {
    alert("Hello! Welcome to Surajit Nath's Portfolio.");
}


document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        let sectionId = this.getAttribute("href");

        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });

    });

});


let contactLinks = document.querySelectorAll(".contact-card a");

contactLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        console.log("Opening: " + this.innerText);
    });

});
