function checkBmi() {
    let weight = +prompt("enter weight your");
    let height = +prompt("enter height your");
    let bmi    = weight/(height * 2);

    if (bmi<18){
        document.write("underweight");
    } else if (bmi<25) {
        document.write("normal");
    } else if (bmi<30) {
        document.write("overweight");
    } else
        document.write("obese");
}