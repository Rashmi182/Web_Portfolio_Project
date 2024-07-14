function changeImage() 
{
    var image = document.getElementById("profileImage");
    if (image.src.match("profile.png")) {
        image.src = "profile2.jpeg"; // Replace with the path to your new image
    } 
    else {
        image.src = "profile.png";
    }
}

function show() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
}