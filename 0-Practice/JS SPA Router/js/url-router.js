document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    urlRoute();
});

const urlRoutes = {
    404: {
        template: "/templates/404.html",
        title: "",
        description: ""
    },
    "/": {
        template: "/templates/index.html",
        title: "",
        description: ""
    },
    "/about": {
        template: "/templates/about.html",
        title: "",
        description: ""
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "",
        description: ""
    }
};
const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    const location = window.location.pathname
    if (location.length == 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((Response) => Response.text());
    document.getElementById("content").innerHTML = html;


};
