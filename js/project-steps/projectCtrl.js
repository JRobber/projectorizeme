angular.module('projectorize').controller('projectCtrl', function($scope, projectService){
    $scope.isLoading = true;
    
    $scope.getProject = function(){
        projectService.getProject().then(function(data){
            $scope.isLoading = false;
            
            $scope.project = data;  
            $scope.currentPart = $scope.project.parts[0];
        })
    }
    
    $scope.getProject();
    
    $scope.setCurrentPart = function(part) {
        $scope.currentPart = part;
    }
})