angular.module('projectorize').directive('partList', function(){
    
    return {
        template: `<div class="nav-header">{{project.title}}</div>
                    <div class="list">
                        <li ng-repeat="part in project.parts track by $index"
                            ng-click="setCurrentPart(part)">
                            <div class="right-icon">
                                <span class="text">Part {{$index + 1}}) {{part.part_title}}</span>
                                <span><i class="fa fa-check"></i></span>
                            </div>
                        </li>
                    </div>`
    }
})