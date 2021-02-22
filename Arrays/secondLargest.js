function getSecondLargest(nums) {
    
    
    var arr=nums.sort(function(a, b){return a-b});
    var temp=0;
    for(let i=0;i<=arr.length;i++)
    {
        for(let j=0;j<=arr.length;j++)
        {
            if(arr[j]<arr[j+1]&&arr[j]!==arr[j+1])
            {
                temp=arr[j];
            }
        }
    }
    return temp;
}
var numarr=[1,2,3,4,5,6,7,8,9,10]
console.log(getSecondLargest(numarr))