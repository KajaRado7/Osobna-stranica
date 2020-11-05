function submitFunction() {

    var frmName   = document.getElementById('form1').frmName.value;

    var frmEmail = document.getElementById('form1').frmEmail.value;
    
    var frmAdr  = document.getElementById('form1').frmAdr.value;

    var frmCity  = document.getElementById('form1').frmCity.value;

    var frmState  = document.getElementById('form1').frmState.value;

    var frmZip  = document.getElementById('form1').frmZip.value;
    
    var frmNote = document.getElementById('form1').frmNote.value;
   

   
    if( frmName === "" || frmEmail === "" || frmAdr === "" || frmCity === "" || frmState === "" || frmZip === "" || frmNote === "" ) {
        alert("Fill everything,please.");
        return false;
    }
    else
      alert("Thank you 🖤 I'll contact you about the final price !");
    
};