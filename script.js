const formTitle = (id, title) => {
    return `
    <div>
        <h2 id="${id}">${title}</h2>
    </div>
    `
}

const inputElement = (type, name, label) => {
    return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}">
        </div>
    `
};

const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `<option>${option}</option>`;
    }

    return `
        <div>
            <label>${label}</label>
            <${type} name="${name}">
                ${optionElements}
            </${type}>
        </div>
    `
}

const formElement = `
    <form id="form">
        ${formTitle("title", "Hozd létre a karaktered!")}
        ${inputElement("text", "név", "Válassz nevet!")}
        ${selectElement("select", "gender", "Nemed:", ["Férfi", "Nő"])}
        ${selectElement("select", "race", "Rasszod:", ["Törpe", "Ork", "Tünde", "Vérfarkas", "Vámpír", "Sárkány"])}
        ${selectElement("select", "class", "Osztályod:", ["Kezdő", "Haladó", "Profi"])}
        <button>Elküldés</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    event.target.classList.add("submit");
};

const inputEvent = (event) => {
    console.log(event.target.value);

    if (event.target.getAttribute("type") === "text") {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
    }

    if (event.target.value === "Férfi") {
        document.getElementById("inputValueContent").innerHTML = "";
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="man" src="http://simpleicon.com/wp-content/uploads/business-man-3.png">
        `);
    }
    
    if (event.target.value === "Nő") {
        document.getElementById("inputValueContent").innerHTML = "";
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="woman" src="http://simpleicon.com/wp-content/uploads/business-woman-2.png">
        `);
    }
    if (event.target.value === "Törpe") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="midget" src="https://cdn-icons-png.flaticon.com/512/90/90329.png">
        `);
    }
    if (event.target.value === "Ork") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="orc" src="https://cdn-icons-png.flaticon.com/512/1615/1615683.png">
        `);
    }
    if (event.target.value === "Tünde") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="fairy" src="https://www.seekpng.com/png/full/19-197169_fairy-smelling-flower-silhouette-icons-png-fairy-clipart.png">
        `);
    }
    if (event.target.value === "Vérfarkas") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="werewolf" src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Halloween-PNG-Pictures/Halloween_Werewolf_Silhouette_PNG_Clip_Art_Image.png?m=1508813701">
        `);
    }
    if (event.target.value === "Vámpír") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="vampire" src="https://icon-library.com/images/vampire-icon/vampire-icon-27.jpg">
        `);
    }
    if (event.target.value === "Sárkány") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="dragon" src="https://cdn.icon-icons.com/icons2/390/PNG/512/sea-dragon_38125.png">
        `);
    }

    if (event.target.value === "Kezdő") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="dragon" src="https://icon-library.com/images/weak-icon/weak-icon-8.jpg">
        `);
    }

    if (event.target.value === "Haladó") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="dragon" src="http://simpleicon.com/wp-content/uploads/weightlifting.png">
        `);
    }

    if (event.target.value === "Profi") {
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img id="dragon" src="https://www.svgrepo.com/show/14222/strong-man-silhouette-with-weight.svg">
        `);
    }


};


function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
        <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("div")
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }

   /* const selectList = form.querySelectorAll("option")
    for (const option of selectList) {
        option.addEventListener("onclick", inputEvent);
    }*/
}

window.addEventListener("load", loadEvent);