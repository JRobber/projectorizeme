angular.module('projectorize').service('projectService', function($http, $q, $timeout){
    
    this.getProject = function() {
        
        var defer = $q.defer();
        
        $http({
            method: 'GET',
            url: '/api/project'
        }).then(function(response){
            if(response.status === 200){
                $timeout(function(){
                    defer.resolve(response.data);
                }, 3000)
            }
            return "Error: All the things are bad!"
        })
        
        return defer.promise;
    }
    
})