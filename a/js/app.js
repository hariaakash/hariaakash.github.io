(function ($) {
    $(function () {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

// Initialize Firebase
(function () {

    // Firebase Web API
    var config = {
        apiKey: "AIzaSyBcrTLd_4XlxQ90_FoYyG2NkbJvwQMwEQg",
        authDomain: "tosapp-348a1.firebaseapp.com",
        databaseURL: "https://tosapp-348a1.firebaseio.com",
        storageBucket: "tosapp-348a1.appspot.com",
        messagingSenderId: "386229146391"
    };
    firebase.initializeApp(config);

    // Creating Database Connection
    var appRef = firebase.database().ref("news");

    // Pulling datas from Firebase
    var app = angular.module("newsApp", ["firebase"]);
    app.controller("newsPost", function ($scope, $firebaseArray) {
        $scope.news = $firebaseArray(appRef);
    });

    // Onclick event call to insert data to firebase
    $("#newsSubmit").click(function () {

        // Get values from input and store it into js var's
        var newsName = document.getElementById("newsName");
        var newsEmail = document.getElementById("newsEmail");
        var newsTitle = document.getElementById("newsTitle");
        var newsSub = document.getElementById("newsSubtitle");
        var newsImglink = document.getElementById("newsImglink");
        var newsDescr = document.getElementById("newsDescription");


        if (newsName.value && newsEmail.value && newsTitle.value && newsSub.value && newsImglink.value && newsDescr.value) {
            // Push the values from input
            appRef.push({
                name: newsName.value,
                email: newsEmail.value,
                title: newsTitle.value,
                sub: newsSub.value,
                img: newsImglink.value,
                descr: newsDescr.value
            });
            // Trigger Toast & write to console that data is inserted
            Materialize.toast('Data Inserted Successfully !!', 4000);
            console.log("Data Inserted Successfully !!");
        }
        else
            Materialize.toast('Data Insertion Failed, check your entries !!', 4000);
    });
}());
