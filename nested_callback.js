const getrollno=()=>{
    setTimeout(()=>{
        console.log("API getting rollno")
        let rollno=[1,2,3,4,5]
        console.log(rollno)
        setTimeout((rollno)=>{
            const biodata={
                name:"pooja",
                age:22

            }
            console.log(`my roll no is ${rollno}.my name is ${biodata.name} and i am ${biodata.age}year old`)
            setTimeout((name)=>{
                biodata.gender="female"
                console.log(`my roll no is ${rollno}.my name is ${biodata.name} and i am ${biodata.age}year old.i am alpha ${biodata.gender}`)
            },2000,biodata.name)
        },2000,rollno[1])
    },2000)
}
getrollno()