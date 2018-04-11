

Survey.Survey.cssType = "bootstrap";


function printResult(results){
    var results = results;
    
    var i = getChartData(results)
    
     //console.log(printChart);
    makechart(i.data,i.dataO,i.dataC,i.dataE,i.dataA,i.dataN);
   
    document.getElementById("ocean").style.display = "block";
 
    console.log(results);
    return "result: " + JSON.stringify(results);
    
};

var survey = new Survey.Model(surveyJSON);
$("#surveyElement").Survey({model:survey});
survey.onComplete.add(function (result) {
        printResult(result.data);
//        document.querySelector('#surveyResult').innerHTML = "From the way you answered the questions, you seem to describe yourself as someone who is energetic and active. Your answers describe you as someone who has the following traits";
        document.getElementById("surveyResult").style.display = "block";
    });



//make the chart, pass result data
makechart = function(printChart,dataO){
    
    //print volume chart
    var ctx = document.getElementById("myChart");
    //remove the scale    
    var options = {scale: {display: false }};
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: printChart,
        options: options
    });
    
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
    
    
    openness = result.openness+result.openness_r;
    conscientiousness = result.conscientiousness+result.conscientiousness_r;
    extraversion = result.extraversion+result.extraversion_r;
    agreeableness = result.agreeableness+result.agreeableness_r;
    neuroticism = result.neuroticism+result.neuroticism_r;
    
    //O
    if(openness >= 7)
{        document.getElementById("Creative").style.display = "block";
        document.getElementById("Creative_image").style.display = "block";}
    else 
        {document.getElementById("Conventional").style.display = "block";
        document.getElementById("Conventional_image").style.display = "block";}
   //C
    if(conscientiousness >= 7)
        document.getElementById("Dependable").style.display = "block";
    else 
        document.getElementById("Careless").style.display = "block";
    
    //E
    if(extraversion >= 7)
        document.getElementById("Extroverted").style.display = "block";
    else 
        document.getElementById("Reserved").style.display = "block";
    //A
    if(agreeableness >= 7)
        document.getElementById("Warm").style.display = "block";
    else 
        document.getElementById("Critical").style.display = "block";
    //N
    if(neuroticism >= 7)
        document.getElementById("Anxious").style.display = "block";
    else 
        document.getElementById("Calm").style.display = "block";
    
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
            data: [openness, 14],
            backgroundColor: ["#0074D9", "#FF4136"],
        }]
    };
     dataC = {
        datasets: [{
            data: [conscientiousness, 14],
            backgroundColor: ["#0074D9", "#FF4136"],
        }]
    };
     dataE = {
        datasets: [{
            data: [extraversion, 14],
            backgroundColor: ["#0074D9", "#FF4136"],
        }]
    };
     dataA = {
        datasets: [{
            data: [agreeableness, 14],
            backgroundColor: ["#0074D9", "#FF4136"],
        }]
    };
     dataN = {
        datasets: [{
            data: [neuroticism, 14],
            backgroundColor: ["#0074D9", "#FF4136"],
        }]
    };
    
    return{
        data: data,
        dataO: dataO,
        dataC: dataC,
        dataE : dataE,
        dataA : dataA,
        dataN : dataN,
    };
    
}