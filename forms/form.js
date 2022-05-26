function billingFunction() {
    var name = document.getElementById("shippingName").value;
    var zip  = document.getElementById("shippingZip").value;

    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = name;
        document.getElementById("billingName").setAttribute('disabled',true);
        document.getElementById("billingZip").value = zip;
        document.getElementById("billingZip").setAttribute('disabled',true);

    }
    else {
        document.getElementById("billingName").removeAttribute('disabled');
        document.getElementById("billingName").value="";
        document.getElementById("billingZip").removeAttribute('disabled');
		document.getElementById("billingZip").value="";
    }
}