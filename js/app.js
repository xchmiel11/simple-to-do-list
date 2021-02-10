document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".list");
    const input = document.querySelector('input');
    const form = document.querySelector("#task-form");

    function addTask(text) {
        console.log("Dodaję zadanie do listy");

        const element = document.createElement("li");
        element.classList.toggle('list-item');

        // pobieranie template
        const elementInner = document.querySelector("#listItemTemplate").content.cloneNode(true);

        // wrzucenie do elementu
        element.append(elementInner);

        // wstawianie tekstu
        element.querySelector(".list-content").innerText = text

        list.append(element);
    }

    form.addEventListener("submit", e => {
        e.preventDefault();

        if (input.value !== "") {
            addTask(input.value);
            input.value = "";
        }
    })

    list.addEventListener("click", e => {
        if ( e.target.classList.contains("close")) {
            e.target.closest(".list-item").remove();
        }
    })
});