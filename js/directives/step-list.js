angular.module('projectorize').directive('stepList', function(){
    
    return {
        template: `<div class="step-list">
                       <div class="step-list-item" ng-repeat="theStep in currentPart.steps">
                           <step data="theStep" step-num="$index + 1"></step>
                        </div>
                        <div class="bar">
                            <button>Part Completed!</button>
                            <button>Help me!</button>
                        </div>
                    </div>`
    }
})