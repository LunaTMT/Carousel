let names = ["Susan Smith", "Anny Cara", "Mika Shava", "Anna Alice"];
let jobs = ["Web Developer", "Software Developer", "HR Lead", "CEO"];
let current = 0;
let n = names.length;

left = () => {
    current -= 1;
    updateElements();
}

right = () => {
    current += 1;
    updateElements();
}


function updateElements(){
    current = current < 0 ? n - 1 : current % n;

    document.getElementById("name").innerHTML = names[current];
    document.getElementById("job-title").innerHTML = jobs[current];
    document.getElementById("profile-pic").src = "assets/images/happy_women" + (current)+ ".jpeg";
    console.log((current) % 4)
}
