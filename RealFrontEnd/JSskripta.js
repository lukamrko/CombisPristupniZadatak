$(document).ready(function ()
{
    $("#unos").on("click", function ()
    {
        console.log("kliknuto!");
        var firstname=$("#inputFirstName").val();
        var lastname=$("#inputFirstName").val();
        var email=$("#inputEmail").val();
        var mobliePhone=$("#inputMobilePhone").val();
        var address=$("#inputAddress").val();
        var person = new Person(firstname, lastname, email, mobliePhone, address);
        $.post('https://localhost:7265/People', { myData: person },
            function (data, status, xhr)
        {   
            alert('status: ' + status + ', data: ' + data.responseData);
        },
       'json'); 
    });

});


class Person
{
    constructor(firstname, lastname, email, mobliePhone, address)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobliePhone = mobliePhone;
        this.address = address;
    }
}