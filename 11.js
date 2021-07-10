var word=prompt("Enter any sectence to convert into title case : ");
document.write("INPUT = "+word);

var newword;
var w2='';

for(var i=0;i<word.length;i++)
{
    if(i==0)
    {
        newword=word.slice(0,1).toUpperCase();
        w2=w2+newword;
    }


    else if(word[i-1]==' ')
    {
        newword=word.slice(i,i+1).toUpperCase();
        w2=w2+newword;
    }

    else
    {
        w2=w2+word[i];
    }
    
}


document.write("<br> Title Case = "+w2);
