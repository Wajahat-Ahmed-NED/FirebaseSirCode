function register() {
    var model = {}

    model.stdName = document.getElementById('stdName').value
    model.fthrName = document.getElementById('fthrName').value
    model.inst = document.getElementById('inst').value
    model.course = document.getElementById('course').value
    model.email = document.getElementById('email').value
    model.password = document.getElementById('password').value


    console.log(model)

    firebase.database().ref('/').child('studentData').push(model)
}


function signup() {
    var model = {}

    model.stdName = document.getElementById('stdName').value
    model.fthrName = document.getElementById('fthrName').value
    model.inst = document.getElementById('inst').value
    model.course = document.getElementById('course').value
    model.email = document.getElementById('email').value
    model.password = document.getElementById('password').value


    console.log(model)

    firebase.auth().createUserWithEmailAndPassword(model.email, model.password)
        .then(function (success) {
            console.log(success)
        }).catch(function (error) {
            console.log(error)
        })

}



function login(){
    var model = {}
    model.email = document.getElementById('email').value
    model.password = document.getElementById('password').value


    firebase.auth().signInWithEmailAndPassword(model.email,model.password)
    .then(function(success){
        console.log(success)
    })
    .catch(function(err){
        console.log(err.message)
    })

}