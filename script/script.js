

Survey.Survey.cssType = "bootstrap";


function printResult(results){
    var results = results;
    
    var printChart = getChartData(results);
     //console.log(printChart);
    makechart(printChart);
    document.getElementById("ocean").style.display = "block";
 
    
    //return "result: " + JSON.stringify(results);
    
};

    var survey = new Survey.Model(surveyJSON);
    $("#surveyElement").Survey({model:survey});
    survey.onComplete.add(function (result) {
        printResult(result.data);
//        document.querySelector('#surveyResult').innerHTML = "From the way you answered the questions, you seem to describe yourself as someone who is energetic and active. Your answers describe you as someone who has the following traits";
        document.getElementById("surveyResult").style.display = "block";
    });



//make the chart, pass result data
    makechart = function(printChart){
    var ctx = document.getElementById("myChart");
    
    //remove the scale    
    var options = {scale: {display: false }};
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: printChart,
        options: options
    });
};

//parse json object to create chart data
    getChartData = function(result){
    
    total_score = result.openness + result.conscientiousness + result.extraversion + result.agreeableness + result.neuroticism + result.openness_r + result.conscientiousness_r + result.extraversion_r + result.agreeableness_r + result.neuroticism_r;
    data = {
    datasets: [{
//        data: [ Math.round((result.openness+result.openness_r)/ total_score *100), Math.round((result.conscientiousness+result.conscientiousness_r)/ total_score *100), Math.round((result.extraversion+result.extraversion_r)/ total_score *100),Math.round((result.agreeableness+result.agreeableness_r)/ total_score *100), Math.round((result.neuroticism+result.neuroticism_r)/ total_score *100)],
        data: [ result.openness+result.openness_r, result.conscientiousness+result.conscientiousness_r, result.extraversion+result.extraversion_r,result.agreeableness+result.agreeableness_r, result.neuroticism+result.neuroticism_r],
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