$(window).load(function(){


var results = {
	openness: localStorage.creative,
	openness_r: localStorage.conventional,
	conscientiousness: localStorage.dependable,
	conscientiousness_r: localStorage.careless,
	agreeableness:localStorage.warm,
	agreeableness_r: localStorage.critical,
	extraversion: localStorage.extroverted,
	extraversion_r: localStorage.reserved,
	neuroticism: localStorage.anxiou,
	neuroticism_r: localStorage.calm,
}

printResult(results);
});
function printResult(results){
    var results = results;
    document.getElementById("surveyResult").style.display = "block";
    var i = getChartData(results)
    
     //console.log(printChart);
    makechart(i.data,i.dataO,i.dataC,i.dataE,i.dataA,i.dataN);
   
    document.getElementById("ocean").style.display = "block";
    document.getElementById("citation").style.display = "block";
   
    console.log(results);
    return "result: " + JSON.stringify(results);
    
};
makechart = function(printChart,dataO){
    

    var opennessChart = document.getElementById("chartO");
    var myDoughnutChart = new Chart(opennessChart, {
        type: 'doughnut',
        data: dataO,
        options: {
             legend: {display: false},
             tooltips: {enabled: false}
        }
    });
    
    var opennessChart = document.getElementById("chartC");
    var myDoughnutChart = new Chart(opennessChart, {
        type: 'doughnut',
        data: dataC,
        options: {
             legend: {display: false},
             tooltips: {enabled: false}
        }
    });
    
    var opennessChart = document.getElementById("chartE");
    var myDoughnutChart = new Chart(opennessChart, {
        type: 'doughnut',
        data: dataE,
        options: {
             legend: {display: false},
             tooltips: {enabled: false}
        }
    });
    
    var opennessChart = document.getElementById("chartA");
    var myDoughnutChart = new Chart(opennessChart, {
        type: 'doughnut',
        data: dataA,
        options: {
             legend: {display: false},
             tooltips: {enabled: false}
        }
    });
    
    var opennessChart = document.getElementById("chartN");
    var myDoughnutChart = new Chart(opennessChart, {
        type: 'doughnut',
        data: dataN,
        options: {
             legend: {display: false},
             tooltips: {enabled: false}
        }
    });

};

//parse json object to create chart data
getChartData = function(result){
    
    
    openness = result.openness+ 8-result.openness_r;
    conscientiousness = result.conscientiousness+8 -result.conscientiousness_r;
    extraversion = result.extraversion+ 8-result.extraversion_r;
    agreeableness = result.agreeableness+8 -result.agreeableness_r;
    neuroticism = result.neuroticism+8 -result.neuroticism_r;
    // openness = result.openness+ result.openness_r;
    // conscientiousness = result.conscientiousness+result.conscientiousness_r;
    // extraversion = result.extraversion+result.extraversion_r;
    // agreeableness = result.agreeableness+result.agreeableness_r;
    // neuroticism = result.neuroticism+result.neuroticism_r;
    console.log(result)
    var balance = 0
    //document.getElementById("overall_chart").style.display ="block";
    //O
    if(result.openness > result.openness_r)
{        document.getElementById("Creative").style.display = "block";
        document.getElementById("Creative_image").style.display = "block";
        document.getElementById("Creative_quote").style.display = "block";}
    else if(result.openness < result.openness_r)
        {document.getElementById("Conventional").style.display = "block";
        document.getElementById("Conventional_image").style.display = "block";
        document.getElementById("Conventional_quote").style.display = "block";}
    else{
        document.getElementById("Conventional_Creative").style.display = "block";
        balance++;
    }
   
    if(result.conscientiousness > result.conscientiousness_r){
        document.getElementById("Dependable").style.display = "block";
        document.getElementById("Dependable_quote").style.display = "block";
        document.getElementById("Dependable_image").style.display = "block";
        }
    else if(result.conscientiousness < result.conscientiousness_r){
        document.getElementById("Careless").style.display = "block"
        document.getElementById("Careless_quote").style.display = "block";
        document.getElementById("Careless_image").style.display = "block";
    }else{
        document.getElementById("Dependable_Careless").style.display = "block";
        balance++;
    }
    
    //E
    if(result.extraversion > result.extraversion_r){
        document.getElementById("Extroverted").style.display = "block";
        document.getElementById("Extroverted_quote").style.display = "block";
        document.getElementById("Extroverted_image").style.display = "block";
    }
    else if(result.extraversion < result.extraversion_r){
        document.getElementById("Reserved").style.display = "block";
        document.getElementById("Reserved_image").style.display = "block";
        document.getElementById("Reserved_quote").style.display = "block";
    }else{
        document.getElementById("Reserved_Extroverted").style.display = "block";
        balance++;
    }
    //A
    if(result.agreeableness > result.agreeableness_r){
        document.getElementById("Warm").style.display = "block";
        document.getElementById("Warm_image").style.display = "block";
        document.getElementById("Warm_quote").style.display = "block";
    }
    else if(result.agreeableness < result.agreeableness_r){
        document.getElementById("Critical").style.display = "block";
        document.getElementById("Critical_image").style.display = "block";
        document.getElementById("Critical_quote").style.display = "block";
    }else{
        document.getElementById("Warm_Critical").style.display = "block";
        balance++;
    }
    //N
    if(result.neuroticism > result.neuroticism_r){
        document.getElementById("Anxious").style.display = "block";
        document.getElementById("Anxious_image").style.display = "block";
        document.getElementById("Anxious_quote").style.display = "block";
    }
    else if(result.neuroticism < result.neuroticism_r){
        document.getElementById("Calm").style.display = "block";
        document.getElementById("Calm_image").style.display = "block";
        document.getElementById("Calm_quote").style.display = "block";
    }
    else{
         document.getElementById("Calm_Anxious").style.display = "block";
         balance++;
    }
    if (balance == 5){
        document.getElementById("balanced_quote").style.display = "block";
        document.getElementById("balanced_image").style.display = "block";
        $('#Target_Images').css("height","100x");
        $('#Target_Text').css("height","100px");
       

    }
    
    data = {
    datasets: [{
//        data: [ Math.round((result.openness+result.openness_r)/ total_score *100), Math.round((result.conscientiousness+result.conscientiousness_r)/ total_score *100), Math.round((result.extraversion+result.extraversion_r)/ total_score *100),Math.round((result.agreeableness+result.agreeableness_r)/ total_score *100), Math.round((result.neuroticism+result.neuroticism_r)/ total_score *100)],
        data: [ openness, conscientiousness, extraversion,agreeableness, neuroticism],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
    }],
        
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
    };
    
    dataO = {
        datasets: [{
            //data: [25, 75],
            data: [result.openness,result.openness_r],
            backgroundColor: ["#F65959", "#5271FF"],
        }]
    };
     dataC = {
        datasets: [{
            data: [result.conscientiousness_r, result.conscientiousness],
            backgroundColor: ["#bbbebe", "#009920"],
        }]
    };
     dataE = {
        datasets: [{
            data: [result.extraversion, result.extraversion_r],
            backgroundColor: ["#d66312", "#0b5394"],
        }]
    };
     dataA = {
        datasets: [{
            data: [result.agreeableness_r, result.agreeableness],
            backgroundColor: ["#cc0000", "#ffd966"],
        }]
    };
     dataN = {
        datasets: [{
            data: [result.neuroticism, result.neuroticism_r],
            backgroundColor: ["#000ff0", "#14def3"],
        }]
    };
    //  dataO = {
    //     datasets: [{
    //         //data: [25, 75],
    //         data: [openness,14],
    //         backgroundColor: ["#F65959", "#5271FF"],
    //     }]
    // };
    //  dataC = {
    //     datasets: [{
    //         data: [conscientiousness,14],
    //         backgroundColor: ["#bbbebe", "#009920"],
    //     }]
    // };
    //  dataE = {
    //     datasets: [{
    //         data: [extraversion, 14],
    //         backgroundColor: ["#d66312", "#0b5394"],
    //     }]
    // };
    //  dataA = {
    //     datasets: [{
    //         data: [agreeableness,14],
    //         backgroundColor: ["#cc0000", "#ffd966"],
    //     }]
    // };
    //  dataN = {
    //     datasets: [{
    //         data: [neuroticism, 14],
    //         backgroundColor: ["#000ff0", "#14def3"],
    //     }]
    // };
    
    return{
        data: data,
        dataO: dataO,
        dataC: dataC,
        dataE : dataE,
        dataA : dataA,
        dataN : dataN,
    };
    
}
