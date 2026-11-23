const modeToggle = document.getElementById("mode-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    if (modeToggle) {
        const darkMode = theme === "dark";
        const icon = modeToggle.querySelector("img");
        if (icon) {
            icon.src = darkMode ? "../images/sun.png" : "../images/moon.png";
        }
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

const skillSnippets = {
    HTML: `<section class="exhibit">\n  <h2>Where code becomes art.</h2>\n</section>`,
    CSS: `.museum-card {\n  display: grid;\n  border: 1px solid #d5a96c;\n}`,
    JavaScript: `const museum = document.querySelector('#gallery');\nmuseum.addEventListener('click', openExhibit);`,
    Laravel: `Route::get('/exhibits', [ExhibitController::class, 'index']);`,
    MySQL: `SELECT title, category FROM exhibits WHERE published = 1;`
};

const skillItems = document.querySelectorAll("#skill-list span");
const codeBox = document.getElementById("skill-code-box");
const codeTitle = document.getElementById("skill-code-title");
const codeContent = document.getElementById("skill-code-content");

skillItems.forEach((item) => {
    item.addEventListener("click", () => {
        const skill = item.dataset.skill;
        const isAlreadyActive = item.classList.contains("active-skill");

        skillItems.forEach((el) => el.classList.remove("active-skill"));

        if (isAlreadyActive) {
            codeBox?.classList.remove("visible");
            return;
        }

        item.classList.add("active-skill");
        if (codeTitle) codeTitle.textContent = `${skill} — CODE SNIPPET`;
        if (codeContent) codeContent.textContent = skillSnippets[skill] || "";
        codeBox?.classList.add("visible");
    });
});

function redirect() {
    window.location.href = "mailto:ipa24.l.surgunte@vtdt.edu.lv";
}
