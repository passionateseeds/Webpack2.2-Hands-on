var button = document.createElement("input");

button.value = "Click Me";
button.type = "button";
button.addEventListener("click", function(){
    alert('Hey, This is cool');
});

module.exports = button;
