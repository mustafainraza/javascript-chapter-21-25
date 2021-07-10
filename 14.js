var A = ["cake", "apple pie", "cookie", "chips","patties"];
var inp=prompt("Enter any item to search in our bakery : ");

var available="available";
inp=inp.toLowerCase();
var flag=0;

for(var i=0;i<A.length;i++)
{
    if(inp==A[i])
    {
        flag=1;
        break;
    }
}

if(flag==0)
{
    document.write("we are sorry "+inp.fontcolor("red")+" is not " +available.bold() + " in our bakery !");
}
else
{
    document.write(inp.fontcolor("green")+" is " +available.bold() + " at index "+i+" in our bakery !");
}