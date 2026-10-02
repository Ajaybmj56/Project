    const btnEI= document.getElementById("btn");
    const birthdayEI= document.getElementById("birthday");
    const resultEI= document.getElementById("result");

    function calculateAge(){
        const birthdayValue = birthdayEI.value;
        if(birthdayValue ===""){
        alert("Please enter your birthday");
        } else{
            const age = getAge(birthdayValue);
            resultEI.innerText = `Your age is ${age} ${age > 1 ? "years": "year"} old`;
        }
    }

    function getAge(birthdayValue){
        const currentDate = new Date();
        const birthadyDate = new Date(birthdayValue);
        let age = currentDate.getFullYear()-birthadyDate.getFullYear();
        const month = currentDate.getMonth()-birthadyDate.getMonth();

        if(
            month < 0||
            (month === 0&& currentDate.getDate() < birthadyDate.getDate())
        ){
            age--;
        }

        return age;
    }

    btnEI.addEventListener("click",calculateAge);