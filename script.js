setInterval(() => {
    var date = new Date()
    var clock = document.getElementById("clock")
    clock.innerHTML = 
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
}, 1000)
