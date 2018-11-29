console.log('index.js loaded')

x =`# Write your query or mutation here
{
  records(q:"age_group=70 or Older&facility_name=University Hospital")
  {
    facility_name
    age_group
    ccs_diagnosis_description
    ccs_procedure_description
    length_of_stay
    total_costs
  }
}`

data = JSON.stringify({query:x})



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
  var div=document.getElementById('graphqlApplication')
  var pre = document.createElement('pre')
  div.appendChild(pre)
  pre.innerHTML=JSON.stringify(x,null,3)
}))