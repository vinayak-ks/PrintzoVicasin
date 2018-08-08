
// firebase =  require("firebase") ; 
// Initialize Firebase
  var config = {
		apiKey: "AIzaSyC5RdTPHSkQh3JeIqkYjXGQWsfBEFSGcVg",
		authDomain: "xeroxapp-a0093.firebaseapp.com",
		databaseURL: "https://xeroxapp-a0093.firebaseio.com",
		storageBucket: "gs://xeroxapp-a0093.appspot.com"
	  };
	  firebase.initializeApp(config);



ref = firebase.database().ref('/xerox').child() ;
function createUserFromRow(email){
  
  
}
console.log("This is doing ! ") ;
ref.once('value', snap=>{
  obj = snap.val() ;

  console.log(obj);
  
  Object.keys(obj).map((sample_no , index) =>{
    data = obj[sample_no] ;

 
    
    $('#xeroxRequestEntries').append(`
    <tr>
    <td class="text-center" id="">${sample_no}</td>
    <td><span class="font-medium">${data.name}</span>
       
    <td>Visual Designer
        <br/><span class="text-muted">Past : teacher</span></td>
    <td>${data.xemail}
        <br/><span class="text-muted">${data.pnumber}</span></td>
    <td>15 Mar 1988
        <br/><span class="text-muted">10: 55 AM</span></td>
    <td>
        <select class="form-control">
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
        </select>
    </td>
    <td>
     <a href="javascript: void(0);" target="_blank" data-toggle="modal" data-id=${sample_no} data-target="#addUser"><button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key" </i></button> </a>
        <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-trash"></i></button>
    </td>
</tr>
    `) ; 
  })

  
  
})





