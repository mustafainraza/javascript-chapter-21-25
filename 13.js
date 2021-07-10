var str=prompt("Enter a name : ");

var x=0;
for(var i=0;i<str.length;i++)
{
    if((str[i]=='!' || str[i]=='@' || str[i]==',' || str[i]=='.')==1)
    {
        alert("Enter a valid name please !");
        x=1;
        break;
    }
}

if(x==0)
{
    alert("OK Fine !");
}

