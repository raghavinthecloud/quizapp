

Survey.Survey.cssType = "bootstrap";


function printResult(results){
    var results = results;
    
    var printChart = getChartData(results);
    makechart(printChart);
    console.log(results.yes);
    
 
    
    return "result: " + JSON.stringify(results);
    
};

var survey = new Survey.Model(surveyJSON);
                $("#surveyElement").Survey({model:survey,});
                survey.onComplete.add(function (result) {
                        
                        document.querySelector('#surveyResult').innerHTML = printResult(result.data);
                });



//make the chart, pass result data
makechart = function(printChart){
    var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: printChart,
});
};

//parse json object to create chart data
getChartData = function(result){
    
    total_score = result.openness + result.conscientiousness + result.extraversion + result.agreeableness + result.neuroticism
    data = {
    datasets: [{
        data: [ Math.round(result.openness/ total_score *100), Math.round(result.conscientiousness/ total_score *100), Math.round(result.extraversion/ total_score *100),Math.round(result.agreeableness/ total_score *100), Math.round(result.neuroticism/ total_score *100)],
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
    return data;
}