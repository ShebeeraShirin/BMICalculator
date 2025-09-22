// 
function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age=document.getElementById('age').value;
    const result = document.getElementById('result');

    if (height === "" || weight === ""||age==="") {
        alert("Please fill all the fields");
    } else {
        const bmi = Math.ceil(weight / ((height / 100) ** 2));

        if (bmi < 18.5) {
            result.innerHTML = `<h2 style="margin-left:400px;font-size:30px;padding:10px;margin-top:-1px;">${bmi} kg/m²</h2> <h4 style="margin-left:400px;font-size:30px;margin-top:-30px; color:blue">Underweight</h4><p style="margin-left:20px;font-size:25px;margin-top:-30px; " >Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.</p>`;
            document.getElementById("arrow").style.transform="rotate(-191deg)"
        } else if (bmi < 25) {
            result.innerHTML = `<h2 style="margin-left:400px;font-size:30px;margin-top:-1px;">${bmi} kg/m²</h2> <h4 style="margin-top:-1px;margin-left:400px;font-size:30px; color:green;">Healthy</h4><p style="margin-left:120px;font-size:25px;margin-top:-30px;" >Maintain a balanced diet and regular physical activity to sustain overall health.</p>`;
            document.getElementById("arrow").style.transform="rotate(-129deg)"

        } else if (bmi < 30) {
            result.innerHTML = `<h2 style="margin-left:400px;font-size:30px;margin-top:-1px;">${bmi} kg/m²</h2><h4 style="margin-left:400px;font-size:30px;margin-top:-1px;color:red;" >Overweight</h4><p style="margin-left:20px;font-size:15px;margin-top:-30px;">Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance.</p>`;
            document.getElementById("arrow").style.transform="rotate(-68deg)"

        } else {
            result.innerHTML = `<h2 style="margin-left:400px;font-size:30px;margin-top:-1px;">${bmi} kg/m²</h2><h4 style="margin-left:400px;font-size:30px;margin-top:-1px;color:red;">Obese</h4><p style="margin-left:10px;font-size:20px;margin-top:-30px;" >Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.</p>`;
            document.getElementById("arrow").style.transform="rotate(4deg)"

        }
        const speech= new SpeechSynthesisUtterance(` your bmi is ${result.innerHTML}`);
        speechSynthesis.speak(speech);
    }
  

}

function allclear(){
    height.value = "" 
    weight.value = "" 
    age.value= ""
    result.innerHTML = ""
}
