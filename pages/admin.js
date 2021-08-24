var dataParent = document.getElementById('stdData')
var arr = []

function getData(){

    
    firebase.database().ref('/').child('studentData').on('child_added', function (data) {
        arr.push(data.val())
        dataParent.innerHTML= ''
        for(var i=0; i<arr.length; i++){    
            dataParent.innerHTML += ` <tr>
            <td>${arr[i].stdName}</td>
            <td>${arr[i].fthrName}</td>
            <td>${arr[i].inst}</td>
            <td>${arr[i].course}</td>
            <td>${arr[i].email}</td>
          </tr>`
        }
    })
    console.log(arr)
}
getData()