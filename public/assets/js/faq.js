var config = {
  apiKey: "AIzaSyB-HyJyq5vB3kPf3rKYOtdQwpLmZX8v_PA",
  authDomain: "kisanmitra-3895b.firebaseapp.com",
  databaseURL: "https://kisanmitra-3895b.firebaseio.com",
  projectId: "kisanmitra-3895b",
  storageBucket: "kisanmitra-3895b.appspot.com",
  messagingSenderId: "523180486596"
};
firebase.initializeApp(config);



ref = firebase.database().ref('/Query') ;
console.log("This is doing ! ") ;
ref.once('value', snap=>{
obj = snap.val() ;
Object.keys(obj).map((key , index) =>{
  var i =1;
  data = obj[key] ;
  console.log("value obtained !") ;
  console.log(data.qestion) ;

  $('#questionanswerentries').append(`
    <div class="panel">
        <div class="panel-heading" id="exampleHeadingDefault${i++}" role="tab"> <a class="panel-title" data-toggle="collapse" href="#exampleCollapseDefaultOne" data-parent="#questionanswerentries" aria-expanded="true" aria-controls="exampleCollapseDefaultOne"> ${data.qestion}</a> </div>
        <div class="panel-collapse collapse in" id="exampleCollapseDefaultOne" aria-labelledby="exampleHeadingDefault${i++}" role="tabpanel">
            <div class="panel-body"> ${data.answer} </div>
        </div>
    </div>

`) ;

})

$('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
// $('#editable-datatable').editableTableWidget().numericInputExample().find('td:first').focus(); //This makes the table editable
$(document).ready(function () {
    $('#editable-datatable').DataTable();
});

})
