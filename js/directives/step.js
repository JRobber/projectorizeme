angular.module('projectorize').directive('step', function(){
    return {
        scope: {
            data: '=',
            stepNum: '&'
        },
        template: ` <div class="right-icon">
                        <span class="text">Step {{stepNum()}}</span>
                        <span ng-click="toggleVerbosity()"><i class="fa fa-question-circle fa-2x"></i></span>
                    </div>
                    <div>{{currentInstructions}}</div>
                    </div>`,
        controller: function($scope){
            $scope.currentIndex = 0;
            $scope.currentInstructions = $scope.data[$scope.currentIndex];
            
            $scope.toggleVerbosity = function(){
                //Ternary Operator
                $scope.currentIndex = $scope.currentIndex === 2 ? 0 : $scope.currentIndex + 1;
                
                $scope.currentInstructions = $scope.data[$scope.currentIndex];
                // if($scope.currentIndex === 2) {
                //     $scope.currentIndex = 0
                // } else {
                //    $scope.currentIndex = $scope.currentIndex++;
                // }
                        
            }
        }      
    }
})