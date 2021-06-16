var images = 
["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Steve_Jobs.jpg/300px-Steve_Jobs.jpg","https://cdn.britannica.com/45/154745-050-C60B6150/Steve-Jobs-computer-iMac-1998.jpg","https://cdn.britannica.com/s:250x250c:crop/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg"];
var names = ["Steve Jobs","Steve Jobs 2","Steve Jobs 3","Steve Jobs 4"];
var i = 0;
function Click()
{if (i==3)
    {
        i= 0;
    }    
        var uI = images[i];
        var uN = names[i];
        document.getElementById("Steve").src = uI;
        document.getElementById("fmn").innerHTML = uN;
        i++;
}