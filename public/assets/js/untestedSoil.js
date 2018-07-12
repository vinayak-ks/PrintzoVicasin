
// firebase =  require("firebase") ; 
// Initialize Firebase

  var config = {
    apiKey: "AIzaSyB-HyJyq5vB3kPf3rKYOtdQwpLmZX8v_PA",
    authDomain: "kisanmitra-3895b.firebaseapp.com",
    databaseURL: "https://kisanmitra-3895b.firebaseio.com",
    projectId: "kisanmitra-3895b",
    storageBucket: "kisanmitra-3895b.appspot.com",
    messagingSenderId: "523180486596"
  };


firebase.initializeApp(config);

ref = firebase.database().ref('/Soil Sample') ;
console.log("This is doing ! ") ;
ref.once('value', snap=>{
  obj = snap.val() ;
  
  Object.keys(obj).map((sample_no , index) =>{
    data = obj[sample_no] ;
    console.log("value obtained !") ;
    console.log(data.status) ; 
    if(data.status!="pending")
    return ; 
    
    $('#untested_soil_data_entries').append(`
    <tr>
    <td>${sample_no}</td>
    <td><a href="javascript: void(0);" target="_blank" data-toggle="modal" data-id=${sample_no} data-target="#addDetails">${"NAME"}</a></td>
    <td>${data.phone}</td>
    ${(data.status=="pending")?`<td><span class="label label-danger">pending</span></td></tr>
    `:`<td><span class="label label-success">${data.status}</span></td>`}
    </tr>
    `) ; 
  })

  console.log("making the table editable") ;
  $('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
  // $('#editable-datatable').editableTableWidget().numericInputExample().find('td:first').focus(); //THIS MAKES THE TABLE EDITABLE
  $(document).ready(function () {
      $('#editable-datatable').DataTable();
  });
  
})


//Funtion used to search the elements in the untested soil table 
function search_untested_soil_table(){
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("search_untested_soil_table");
  filter = input.value.toUpperCase();
  table = document.getElementById("editable-datatable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td") ; 
    for(j=0 ; j<td.length ; j++)
    {
      let tdata = td[j] ;
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break ; 
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
}