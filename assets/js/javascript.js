function openPDF() {
    // Replace with the actual PDF file URL
    const pdfUrl = 'assets/online application form/Online-Application-Form.pdf';
    window.open(pdfUrl, '_blank');
}


/* dropdown course */

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".plus-icon");

            // Close all other dropdowns
            document.querySelectorAll(".dropdown-content").forEach(dropdown => {
                if (dropdown !== content) {
                    dropdown.style.display = "none";
                    dropdown.previousElementSibling.querySelector(".plus-icon").style.transform = "rotate(0deg)";
                }
            });

            // Toggle current dropdown and rotate icon
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.style.transform = "rotate(0deg)";
            } else {
                content.style.display = "block";
                icon.style.transform = "rotate(45deg)";
            }
        });
    });
});
