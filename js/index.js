const modeToggle = document.getElementById("mode-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (modeToggle) {
        const darkMode = theme === "dark";
        modeToggle.querySelector("img").src = darkMode ? "../images/sun.png" : "../images/moon.png";
        modeToggle.setAttribute("aria-label", darkMode ? "Switch to light theme" : "Switch to dark theme");
    }
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

modeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
});

document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const contactBtn = document.getElementById("contact-btn");

contactBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const email = "ipa24.l.surgunte@vtdt.edu.lv";
    const subject = encodeURIComponent("Let's create something");
    const mailtoUrl = `mailto:${email}?subject=${subject}`;

    let mailAppOpened = false;
    const handleBlur = () => {
        mailAppOpened = true;
    };

    window.addEventListener("blur", handleBlur, { once: true });
    window.location.href = mailtoUrl;

    setTimeout(() => {
        window.removeEventListener("blur", handleBlur);
        if (!mailAppOpened) {
            window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
                "_blank",
                "noopener,noreferrer"
            );
        }
    }, 600);
});
