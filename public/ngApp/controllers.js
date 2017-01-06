angular.module('myApp')
.controller('HomeController', ['$scope', 'RouteFactory', function($scope, RouteFactory) {

    RouteFactory.getUsers().then(function(response) {
        $scope.users = response.data;
    }).catch(function(err) {
        throw err;
        console.log(err);
    });

    RouteFactory.getWidgets().then(function(response) {
        $scope.widgets = response.data;
    }).catch(function(err) {
        throw err;
        console.log(err);
    });

}]).controller('UserController', ['$scope', 'RouteFactory', function($scope, RouteFactory) {

    RouteFactory.getUsers().then(function(response) {
        $scope.users = response.data;
    }).catch(function(err) {
        throw err;
        console.log(err);
    });

}]).controller('WidgetController', ['$scope', '$window', 'RouteFactory', function($scope, $window, RouteFactory) {

    $scope.widget_melts = false;
    console.log($scope.widget_melts);

    RouteFactory.getWidgets().then(function(response) {
        $scope.widgets = response.data;
    }).catch(function(err) {
        throw err;
        console.log(err);
    });

    $scope.submit = function() {

        console.log('Inside', $scope.widget_melts)

        var widgetData = {
            name: $scope.widget_name,
            color: $scope.widget_color,
            price: $scope.widget_price,
            melts: true,
            inventory: $scope.widget_inventory
        }


        RouteFactory.postWidgets(widgetData).then(function(response) {
            console.log('Successfully posted', widgetData);
            $window.location="/widget";
        }).catch(function(err) {
            throw err;
            console.log(err);
        });
    }
}]).controller('UDetailController', ['$scope', '$stateParams', 'RouteFactory', function($scope, $stateParams, RouteFactory) {

    RouteFactory.getUsersId($stateParams.id).then(function(response) {
        $scope.user = response.data;
    });

}]).controller('WDetailController', ['$scope', '$stateParams', 'RouteFactory', function($scope, $stateParams, RouteFactory) {

    RouteFactory.getWidgetsId($stateParams.id).then(function(response) {
        $scope.widget = response.data;
    });

}]).controller('EditController', ['$scope', '$stateParams', '$location', 'RouteFactory', function($scope, $stateParams, $location, RouteFactory) {

    RouteFactory.getWidgetsId($stateParams.id).then(function(response) {
        $scope.widget = response.data;
    });

    $scope.submit = function() {
        var widgetData = {
            name: $scope.widget.name,
            color: $scope.widget.color,
            price: $scope.widget.price,
            melts: $scope.widget.melts,
            inventory: $scope.widget.inventory
        }

        RouteFactory.putWidgets($stateParams.id, widgetData).then(function(response) {
            console.log('Successful Edit');
            $location.path('/widget');
        })
    }
}]);
