console.log('index.js loaded')

funGraphQL = function(){
    var q =`# Write your query or mutation here
  {
    records(q:"${queryQraphQL.value}")
    {
      facility_name
      age_group
      ccs_diagnosis_description
      ccs_procedure_description
      length_of_stay
      total_costs
    }
  }`

  data = JSON.stringify({query:q})

  fetch("https://i2apollo.herokuapp.com",
    {
      method:'POST',
      body:data,
      headers:{
        "Content-Type": "application/json",
        //"Accept": "application/json",
        //"cache-control": "no-cache"
      }
    }
  ).then(x=>x.json().then(x=>{
    var div=document.getElementById('graphqlData')
    div.innerHTML=''
    var pre = document.createElement('pre')
    div.appendChild(pre)
    pre.innerHTML=JSON.stringify(x,null,3)
    plotData(x)
  }))
}

funGraphQL()

// Plot Data
plotData=function(dt){
  /*
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  */

  var trace1 = {
    x: [],
    y: [],
    mode: 'markers',
    type: 'scatter'
  }

  dt.data.records.forEach(xi=>{
    trace1.x.push(parseFloat(xi.length_of_stay))
    trace1.y.push(parseFloat(xi.total_costs))
  })

  layout={
    title:'lala'
  }

  Plotly.newPlot('graphqlPlot', [trace1],layout);


  //debugger
}

plotButton.onclick=funGraphQL