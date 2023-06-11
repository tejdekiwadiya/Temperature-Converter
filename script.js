function hidealrt() {
    let eleid = document.getElementById("alert")
    eleid.style.display = "none"
    eleid.setAttribute("class", "panding")
}

let reset_hidealrt = function () {
    let alert = document.getElementById("alert")
    alert.setAttribute("class", "animation")
    alert.style.display = "block"
}

function hideRes() {
    let eleid = document.getElementById("result")
    eleid.style.display = "none"
    eleid.setAttribute("class", "panding")
}

let reset_hideRes = function () {
    let alert = document.getElementById("result")
    alert.setAttribute("class", "result")
    alert.style.display = "block"
}

function temp_value(temp) {

    let value = document.querySelector('#temp').value
    value = Number.parseFloat(value)


    if (value >= 0 || value <= 0) {
        let choice = document.querySelector('input[name="type"]:checked')
        if (choice != null) {
            choice = choice.value
            hidealrt()
            reset_hideRes()
            if (choice == 'c') {
                let celsius = (value - 32) * 5 / 9
                document.getElementById("result").innerHTML = "Temperatur is " + celsius + " °C"
            }
            else if (choice == 'f') {
                let c = 273.15
                let val = Number.parseFloat(value)
                let fahrenheit = (val * 9 / 5) + 32
                document.getElementById("result").innerHTML = "Temperatur is " + fahrenheit + " °F"
            }
        }
        else {
            document.querySelector("#alert").innerHTML = "Please Select Choice !"
            reset_hidealrt()
        }
    }
    else {
        document.querySelector("#alert").innerHTML = "Please Enter Valid Input !"
        reset_hidealrt()
        hideRes()
    }

}