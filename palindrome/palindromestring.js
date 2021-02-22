function palindromechecker(n)
{
    var str1=n.split('').reverse().join('');
    
    if(n===str1)
    {
        console.log('yes')
    }
    else
    {
        console.log('no');
    }
    
}
palindromechecker('mum')