// Put your application javascript here
document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});