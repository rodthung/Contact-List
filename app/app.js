angular

.module('contactList', ["xeditable", "firebase", "ngRoute"])

.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeListController'
    })

    .when('/about', {
        templateUrl: 'pages/about.html'
    })

    .when('/contact', {
        templateUrl: 'pages/contact.html'

    });

})

.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
});