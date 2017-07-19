$('#loging').click(function() {
    var name = $("input[name=name]").val();
    var psw = $("input[name=psd]").val();
    $.post('/users/Getlogin', {name: name, psw: psw}).success(function(res) {
        console.log(res)
    }).error(function(err) {
        alert("失败")
    });
    $.post('/users/GetAllUser', {}).success(function(res) {
        console.log(res)
    }).error(function(err) {
        console.log(err)
    });
});
$('#reginer').click(function() {
    var name = $("input[name=name]").val();
    var psw = $("input[name=psd]").val();
    $.post("/users/reginer", {name: name, psw: psw}).success(function(res) {
        console.log(res);
    }).error(function(err) {
        console.log(err)
    })
})