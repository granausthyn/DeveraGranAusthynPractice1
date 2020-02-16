function dataValidation() {

    var startDate = document.getElementById("start").value;
    var endDate = document.getElementById("end").value;
    var postDate = document.getElementById("posting").value;
    var submitData = confirm("Confirm values to submit?");
    
    if (submitData == true) {

        if (startDate < endDate || startDate == endDate) {

                if (postDate < startDate) {
                    alert("Entries are accepted and are succesfully submitted!")
                    document.getElementById("data").submit();

                } else {
                    alert("Posting Date must be before date covered!")
                }

        } else {
            alert("Date ranges are incorrect!")

        }

    } else {
        alert("You pressed Cancel!")
    }

}

function resetForm() {

    alert("Entries have been cancelled, values are reset!")

}