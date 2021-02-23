/* 
Below program is to How we can access data of array of objects
and display them. We use filter function as main role play.

*/


var obj1 = { 
    'Students': [{ 
            "name": "Raj", 
             "Age":"15", 
            "RollNumber": "123", 
            "Marks": "99", 
              
        }, { 
            "name": "Aman", 
             "Age":"14", 
            "RollNumber": "223", 
            "Marks": "69", 
           }, 
           { 
            "name": "Vivek", 
             "Age":"13", 
            "RollNumber": "253", 
            "Marks": "89", 
           }, 
        ] 
}; 

function getobj(obj)

{
    return obj.Students.filter(function(o){
        return o.Age>10
    })
}
console.log(getobj(obj1).length)