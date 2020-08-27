$(document).ready(function() {
    window.sr = ScrollReveal();

    sr.reveal('.SR_portfolioRow1', {
        duration: 2000,
        origin: "bottom",
        distance: "100px"
    });
    sr.reveal('.SR_portfolioRow2', {
        duration: 2000,
        origin: "bottom",
        distance: "100px"
    });
    sr.reveal('.SR_portfolioRow_btn', {
        duration: 2000,
        delay: 200,
        origin: "bottom",
    });
    sr.reveal('.SR_skills', {
        duration: 2000,
        origin: "right",
        distance: "300px"
    });
    sr.reveal('.SR_about', {
        duration: 2000,
        origin: "right",
        distance: "300px"
    });
    sr.reveal('.SR_about_pic', {
        duration: 2000,
        delay: 300,
        origin: "top",
    });
    sr.reveal('.SR_about_button', {
        duration: 2000,
        delay: 500,
        origin: "bottom",
    });
    sr.reveal('.SR_background', {
        duration: 2000,
        origin: "left",
        distance: "300px"
    });
    sr.reveal('.SR_otherSkills', {
        duration: 2000,
        origin: "right",
        distance: "300px"
    });
    sr.reveal('.SR_rating', {
        duration: 2000,
        delay: 300,
        origin: "top",
    });
    sr.reveal('.SR_contact', {
        duration: 2000,
        delay: 300,
        origin: "top",
    });
});