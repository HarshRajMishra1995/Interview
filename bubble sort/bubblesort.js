function bubblesort(n)
{
    
    var count=0;
    for(let i=0;i<=n.length;i++)
    {
        for(let j=0;j<=n.length;j++)
        {
            if(n[j]>=n[j+1])
            {
                let temp=n[j];
                n[j]=n[j+1];
                n[j+1]=temp;
                count++;

            }
        }
    }
    console.log(`The no of swaps required is ${count} for sorting.`);
    console.log(`The Array after sorting is ${n}`);
}
var arr=[3,1,2,5,4];
bubblesort(arr);