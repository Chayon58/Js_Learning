function subscribe(){
    document.getElementById('text').innerHTML = 'Subscribed';
    document.getElementById('btn').innerHTML = 'Subscribed';
    document.getElementById('btn').style.backgroundColor = '#252525';
}

function like() {
    document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> liked';
}
function keyPress(){
    document.getElementById("text").innerHTML ='Key Pressed';
}
// function onLoad(){
    //     alert('Testing js onload...')
    //     document.getElementById("text").innerHTML ='Website Loaded Properly!';
    // }
    
    function windowResize() {
        document.getElementById("textarea").style.height ='100px';
        document.getElementById("form").style.fontFamily ='Courier New';
    }
    