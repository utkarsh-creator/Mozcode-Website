window.addEventListener("load", () => {
  const form = document.querySelector("form");

  $("#idForm").submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var url = form.attr("action");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://mozcode-test-api.herokuapp.com/reg/signup/",
      data: form.serialize(),
      processData: false,
      success: function (data, textStatus, jQxhr) {
        alert("Registration Successful");
      },
      error: function (jqXhr, textStatus, errorThrown) {
        alert("Username or Email already exists");
      },
    });
  });
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   var name = document.getElementById("name").value;
//   var clg_name = document.getElementById("clg_name").value;
//   var ph_num = document.getElementById("ph_num").value;
//   var hacker_email_id = document.getElementById("email").value;
//   var hacker_user = document.getElementById("user_name").value;
//   var formdata = { "name": name, "college": clg_name, "number": ph_num, "email": hacker_email_id, "username": hacker_user };
//   console.log(formdata);

//   $("#idForm").submit(function(e) {

// 	e.preventDefault(); // avoid to execute the actual submit of the form.

// 	// var name = document.getElementById("name").value;
// 	// var clg_name = document.getElementById("clg_name").value;
// 	// var ph_num = document.getElementById("ph_num").value;
// 	// var hacker_email_id = document.getElementById("email").value;
// 	// var hacker_user = document.getElementById("user_name").value;
// 	// var formdata = { "name": name, "college": clg_name, "number": ph_num, "email": hacker_email_id, "username": hacker_user };

// 	var form = $(this);
// 	var url = form.attr('action');
// 	// console.log(form.serialize().data);
// 	// console.log(formdata);

// 	$.ajax({
//    		type: "POST",
// 		dataType: 'json',
//    		url: "https://mozcode21-backend.herokuapp.com/signup/",
// 		data: form.serialize(),
// 		processData: false,
//   		success: function( data, textStatus, jQxhr ){
//       		console.log(JSON.stringify( data ));
//   		},
//   		error: function( jqXhr, textStatus, errorThrown ){
//       		console.log( errorThrown );
//   		}
//  });
