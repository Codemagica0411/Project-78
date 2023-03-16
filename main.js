var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/bw5W5zSK/Mother.jpg"];
var names = ["Family Book","Abhrajit Ray","Arjun Ray","Debrupa Guha"];

var i = 0;

function update() {
    i++
    var number_of_family_member_in_array = 4;
    if(i > number_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").src = updatedName;
}