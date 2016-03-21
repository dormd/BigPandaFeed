angular.module("app", [ "ngRoute" ]);

angular.module("app")
    .constant("gravatar", {
        prefix: "http://www.gravatar.com/avatar/",
        suffix: "?s=45"
    })
    .config([ "$routeProvider", appConfig ]);
             
function appConfig($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "src/app/comments.tpl.html",
        controller: "CommentsCtrl as cmntCtrl"
    });
}