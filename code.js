const data = [{
        name: "Robert",
        regno: "52",
        Maths: "96",
        Physics: "95",
        Chemistry: "94",
        Percentage: "95 %"
    },
    {
        name: "Lucas",
        regno: "53",
        Maths: "98",
        Physics: "97",
        Chemistry: "96",
        Percentage: "95.5 %"
    },
    {
        name: "Milo",
        regno: "54",
        Maths: "90",
        Physics: "91",
        Chemistry: "92",
        Percentage: "92.4 %"
    },
    {
        name: "Jacob",
        regno: "55",
        Maths: "99",
        Physics: "99",
        Chemistry: "99",
        Percentage: "99%"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == name.toLowerCase()) {
            console.log(data[i].marks)
            results.innerHTML = "<h3>" + "Maths : " + data[i].Maths + "</h3>" + "<h3>" + "Physics : " +
                data[i].Physics + "</h3>" + "<h3>" + "Chemistry : " + data[i].Chemistry + "</h3>" + "<h3>" +
                "Percentage : " + data[i].Percentage + "</h3>"

            return;
        }
    }
    results.innerHTML = "<h3>" + "The information about the student is not available !!" + "</h3>"
})