// const typed=new Typed(".auto-type",{


const typed = new Typed(".auto-type", {
    strings: ['programmer', 'developer','Cyber security Learner'], // Fixed the key to 'strings'
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

const links = document.querySelectorAll("li");
links.forEach((item) => {
    item.addEventListener("click", function() {
        links.forEach((li) => li.classList.remove("active"));
        item.classList.add("active");
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const value = bar.getAttribute('value');
        bar.style.setProperty('--progress-width', `${value}%`);
    });
});

