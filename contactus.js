const firebaseConfig = {
    apiKey: "AIzaSyCyCAvwkZfwNqQ8gz4L6dtS1XNwJgAVTSU",
    authDomain: "contact-e89c7.firebaseapp.com",
    projectId: "contact-e89c7",
    storageBucket: "contact-e89c7.appspot.com",
    messagingSenderId: "62012763450",
    appId: "1:62012763450:web:8ef07cc2408a9229337403",
    measurementId: "G-7WGTEDHHT1"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
var contact = firebase.database().ref("contact");

document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contact").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        message: message

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};