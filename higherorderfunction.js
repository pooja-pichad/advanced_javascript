const interviewquestion=(name)=>{
    if(name=="pooja"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}? plz explain `)
        }
    }if(name=="pihu"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}? plz explain `)
        }
    }if(name=="hello"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}? plz explain `)
        }
    }
}
interviewquestion("pooja")("bsc")
interviewquestion("pihu")("software")
interviewquestion("hello")("botany")

