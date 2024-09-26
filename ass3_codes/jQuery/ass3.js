document.getElementById("submitBtn").addEventListener("click", function () {
    // Get the values entered in the form fields
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Validate form inputs
    if (name === "" || age === "") {
        alert("Please fill in both name and age.");
    } else {
        // Display the user information dynamically
        document.getElementById("displayName").innerHTML = name;
        document.getElementById("displayAge").innerHTML = age;

        // Make the user info section visible
        document.getElementById("userInfo").style.display = "block";

        // Change CSS properties dynamically
        document.getElementById("userInfo").style.color = "black";
        document.getElementById("userInfo").style.fontSize = "20px";

        // Add a text node with form information and attach it to the form
        const formTextNode = document.createTextNode(
            `Thank you ${name}, your age is ${age}.`
        );
        const parentForm = document.getElementById("userForm");
        parentForm.appendChild(formTextNode); // Attach the text node to the form
    }
});

// Change image source on button click
document.getElementById("changeImageBtn").addEventListener("click", function () {
    // Change the image to image2.jpg (ensure the file is in the same directory)
    document.getElementById("myImage").src = "image2.png";
});

// jQuery section
$(document).ready(function () {
    // Change heading text using jQuery
    $("#changeTextBtn").click(function () {
        $("#title").text("New Heading: User Info Page");
    });

    // Change button text after submission
    $("#submitBtn").click(function () {
        $(this).text("Submitted"); // Changes the button text to 'Submitted'
    });

    // Access form data using jQuery
    $("#submitBtn").click(function () {
        const nameValue = $("#name").val();
        const ageValue = $("#age").val();

        if (nameValue && ageValue) {
            alert(`Form Submitted. Name: ${nameValue}, Age: ${ageValue}`);
        }
    });
    $("body").css("background-image", "url('bg.jpg')");
});
