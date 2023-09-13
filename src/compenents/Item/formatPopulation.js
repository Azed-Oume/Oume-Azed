const formatPopulation = (population)=>{
    if(isNaN(population)){
        console.log("la population a formated nest pas un number.⚠️")
        return "N/A"
        
    }
    if(population >= 1000000){
        const formatedPopulation = (population / 1000000).toLocaleString("fr", {minimumFractionDigits: 3, maximumFractionDigits:3});
        return formatedPopulation + " M" + " d'habitants";
    }else if(population >= 1000 ){
        const formatedPopulation = (population / 1000).toLocaleString("fr", {minimumFractionDigits: 3, maximumFractionDigits:3});
        return formatedPopulation + " K" + " d'habitants";
    }else if(population < 1000){
        const formatedPopulation =(population)
        return formatedPopulation + " habitants"
    }
    
}

// console.log(formatPopulation(1500000)); 
// console.log(formatPopulation(750000)); 
// console.log(formatPopulation(400)); 

export default formatPopulation;