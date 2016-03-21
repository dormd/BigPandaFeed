angular.module("app")
    .controller("CommentsCtrl", [ "gravatar", CommentsCtrl ])

function CommentsCtrl(gravatar) {
    var vm = this;
    vm.comments = [];
    vm.newComment = {};
    vm.query = "";
    
    vm.addComment = function() {        
        vm.comments.push(vm.newComment);
        vm.newComment = {};
    };
    
    vm.getGravatarUrl = function(comment) {
        var email = comment.email.trim().toLowerCase();
        var hash = md5(email);
        return gravatar.prefix + hash + gravatar.suffix;
    }
}