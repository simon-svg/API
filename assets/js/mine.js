const table = document.querySelector("tbody");
const table__checkbox = document.querySelector(".table__checkbox");
const table__checkbox1 = document.querySelector(".table__checkbox2");
const table__checkbox2 = document.querySelector(".table__checkbox3");
const table__checkbox3 = document.querySelector(".table__checkbox4");
const table__checkbox4 = document.querySelector(".table__checkbox5");
const reset = document.querySelector(".reset__btn");
const arrow = document.querySelector(".arrow");




// fetch request 

fetch('https://reqres.in/api/unknown?per_page=12')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data = data.data
        data.forEach(e => {
            const tr = document.createElement("tr");
            tr.className = "tr"
            table.append(tr)
            for (let i in e) {
                const td = document.createElement("td");
                if (i === "color") {
                    td.setAttribute("class", `${i} colorBef`)
                    let span = document.createElement("span");
                    span.className = "span";
                    span.style["background-color"] = e[i]
                    td.append(span)
                }
                else {
                    td.setAttribute("class", `${i}`)
                }
                td.innerHTML += e[i]
                tr.append(td)
            }
        });
    }).then((e) => {
        let tdId = document.querySelectorAll(".id");
        let tdname = document.querySelectorAll(".name");
        let tdyear = document.querySelectorAll(".year");
        let tdcolor = document.querySelectorAll(".color");
        let tdvalue = document.querySelectorAll(".pantone_value");




        // localStorage
        function forLocal(classname, arr){
            if (localStorage.getItem(classname) === "false") {
                for (let i = 0; i < arr.length; i++) {
                    arr[i].style.display = "none";
                }
                reset.style.color = "#0075FF";
                arrow.setAttribute("src", "assets/media/img/blueArrow.svg");
            }
        }
        forLocal("id", tdId)
        forLocal("name", tdname)
        forLocal("year", tdyear)
        forLocal("color", tdcolor)
        forLocal("value", tdvalue)




        // checkboxe 
        function checkbox(checkBox, localClass, arr){
            checkBox.addEventListener("click", () => {
                localStorage.setItem(localClass, "false")
                for (let i = 0; i < tdId.length; i++) {
                    arr[i].style.display = "none";
                }
                reset.style.color = "#0075FF";
                arrow.setAttribute("src", "assets/media/img/blueArrow.svg");
            })
        }
        checkbox(table__checkbox, "id", tdId)
        checkbox(table__checkbox1, "name", tdname)
        checkbox(table__checkbox2, "year", tdyear)
        checkbox(table__checkbox3, "color", tdcolor)
        checkbox(table__checkbox4, "value", tdvalue)

    }).then((e) => {
        let tdId = document.querySelectorAll(".id");
        let tdname = document.querySelectorAll(".name");
        let tdyear = document.querySelectorAll(".year");
        let tdcolor = document.querySelectorAll(".color");
        let tdvalue = document.querySelectorAll(".pantone_value");
        let checkboxes = document.querySelectorAll(".checkbox");



        // reset button
        reset.addEventListener("click", () => {
            localStorage.setItem("id", "true")
            localStorage.setItem("name", "true")
            localStorage.setItem("color", "true")
            localStorage.setItem("year", "true")
            localStorage.setItem("value", "true")
            arrow.setAttribute("src", "assets/media/img/arrow.svg");
            reset.style.color = "#888888"
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = true
            }
            for (let i = 0; i < tdId.length; i++) {
                tdId[i].style.display = "table-cell";
                tdname[i].style.display = "table-cell";
                tdyear[i].style.display = "table-cell";
                tdcolor[i].style.display = "table-cell";
                tdvalue[i].style.display = "table-cell";
            }
        })
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".table").style.display = "table";
    });


