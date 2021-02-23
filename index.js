fetch('https://cat-fact.herokuapp.com/facts')
.then(res=>console.log(res.json()))
.then(data=>console.log(data))



