angular.module('myApp').factory('RouteFactory', ['$resource', '$http', function($resource, $http) {

    return {
        getUsers: function() {
            return $http.get('http://spa.tglrw.com:4000/users');
        },
        getUsersId: function(id) {
            return $http.get('http://spa.tglrw.com:4000/users/'+ id);
        },
        getWidgets: function() {
            return $http.get('http://spa.tglrw.com:4000/widgets');
        },
        getWidgetsId: function(id) {
            return $http.get('http://spa.tglrw.com:4000/widgets/'+ id);
        },
        postWidgets: function(widgetData) {
            return $http.post('http://spa.tglrw.com:4000/widgets', widgetData);
        },
        putWidgets: function(id, widgetData) {
            return $http.put('http://spa.tglrw.com:4000/widgets/'+ id, widgetData);
        }
    }
}]);
