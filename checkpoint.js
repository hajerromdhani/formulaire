function verify() {
    var myInputList = document.getElementsByClassName("enter-text");
    for (let e of myInputList) {
      //console.log("hello" + e.value);
      if (e.value === null || e.value === "" || e.value === undefined) {
        alert("Please Fill All Required Fields");
        return false;
      }    
    }
    if (
      document.getElementById("input-email").value !==
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) {
      alert("Not a valid mail");
      return false;
    }
    if (
      document.getElementById("password-input").value !==
      /(?=.*\d) (?=.* [a - z])(?=.* [A - Z]).{ 8,}/
    ) {
      alert(
        "The password must be a combination of charatacters , numbers and at least a capital letter"
      );
      return false
    }
   
  }
  document.getElementById("button-send").addEventListener("click", verify);