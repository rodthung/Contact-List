angular
    .module('contactList')

.controller('HomeListController', ['$scope', '$firebaseArray',
        function ($scope, $firebaseArray, $filter, $http) {

        var myContacts = new Firebase('https://brilliant-torch-6016.firebaseio.com/contacts');

        $scope.items = $firebaseArray(myContacts);

        // Add Contact
        $scope.addContact = function () {

                //Get max Id before assigning new Id to a new contact 
                var maxId = 0;
                for (var i = 0; i < $scope.items.length; i++) {
                    var Id = parseInt($scope.items[i].ID, 10);
                    if (Id > maxId) {
                        maxId = Id;
                    }
                }

                var contactRef = myContacts.child(maxId + 1);
                contactRef.update({
                    ID: maxId + 1,
                    Firstname: $scope.firstname,
                    Lastname: $scope.lastname,
                    Telephone: $scope.telephone
                });


                $('input').val('');

            }
            // Delete Contact
        $scope.deleteContact = function (index) {

            var contactRef = myContacts.child(index);
            contactRef.remove();

        }

        $scope.editContact = function (index) {

            //console.log($scope.items[index - 1].Firstname);
            /*
            Still working on get new value and save it to database
            */
          
        }

}])

.directive('assignFromChild', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            scope.$watch(function () {
                return $parse(attrs.assignFromChild)(scope);
            }, function (val) {
                $parse('$parent.' + attrs.toParent).assign(scope, val);
            })
        }
    };
});