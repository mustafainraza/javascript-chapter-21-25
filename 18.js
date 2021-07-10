var str="The quick brown fox jumps over the lazy dog."
var count=0;
var word="'the'";
var str1=str.toLowerCase();
for(var i=0;i<str1.length;i++)
{
    if(str1[i]=='t' && str1[i+1]=='h' && str1[i+2]=='e')
    {
        count++;
    }
}

document.write("Text : "+str);

document.write("<br> There are "+count+" occurences of word "+word);