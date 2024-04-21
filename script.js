document.addEventListener("DOMContentLoaded", function() {
    const headerData = {
        logo: "Y",
        name: "Hacker News",
        menu: ["new", "past", "comments", "ask", "show", "jobs", "submit", "login"]
    };

    const renderHeader = () => {
        const header = document.querySelector("#main-header .header");
        header.innerHTML = `
            <div class="logo">${headerData.logo}</div>
            <div class="name">${headerData.name}</div>
            <div class="menu">${headerData.menu.join(" | ")}</div>
        `;
    };

    const articlesData = [
        { id: "a1", ranking: "1.", title: "Racket Language", subtext: "132 points by swatson741 3 hours ago | hide | 37 comments" },
        { id: "a2", ranking: "2.", title: "Glibc Buffer Overflow in Iconv", subtext: "23 points by teamk 1 hours ago | hide | 1 comment" },
        { id: "a3", ranking: "3.", title: "I bought 300 emoji domain names from Kazakhstan and built an email service (2021)", subtext: "193 points by montyanderson 6 hours ago | hide | 32 comments" },
    ];

    const renderArticles = () => {
        articlesData.forEach(articleData => {
            const article = document.getElementById(articleData.id);
            article.innerHTML = `
                <div class="rank">${articleData.ranking}</div>
                <div class="vote">↑</div>
                <div class="title">${articleData.title}</div>
                <div class="mini-text">${articleData.subtext}</div>
            `;
        });
    };

    // Render Header and Articles
    renderHeader();
    renderArticles();
});
