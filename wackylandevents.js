function ringthebell(){
    document.getElementById("vision").src = "los.jpg";
    document.getElementById("storypage").innerHTML = "you have no idea what you've just done";
    
    document.getElementById("A View on Poetry").innerHTML = "";
    remove("A View on Poetry");
    document.getElementById("bell").innerHTML = "";
    remove("bell");
}