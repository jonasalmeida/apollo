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
    plotData()
  }))
}

funGraphQL()

// Plot Data
plotData=function(){}

plotButton.onclick=funGraphQL