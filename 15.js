var pass=prompt("Enter a strong password : ");
var i=0;
var x=0;
while(x<pass.length)
{
    if(pass.length<=5)
    {
        alert("Password length should be at least 6 , enter again !!!");
        pass=prompt("Enter a strong password : ");
        x=0;
        continue;
    }
    else if(pass[0].search(/\d/)!=-1)
    {
        alert("Password can't start with number , try again !!!");
        pass=prompt("Enter a strong password : ");
        x=0;
        continue;
    }

    if(pass[x]<'A' || pass[x]>'Z')
    {
        if(pass[x]<'a' || pass[x]>'z')
        {
            if(pass[x]<'0' || pass[x]>'9')
            {
                alert("Password can't contain special alphabets !!!");
                pass=prompt("Enter a strong password : ");
                x=0;
                continue;
            }
        }
    }
    x++;
}

document.write("OK perfect password Now !");
