var app = angular.module("taskApp", []);

app.controller("TaskController", function($scope) {

    // Load from localStorage
    $scope.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add Task
    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({
                name: $scope.newTask,
                completed: false
            });
            $scope.newTask = "";
            $scope.saveTasks();
        }
    };

    // Delete Task
    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
        $scope.saveTasks();
    };

    // Toggle Complete
    $scope.toggleTask = function(task) {
        task.completed = !task.completed;
        $scope.saveTasks();
    };

    // Count Completed
    $scope.getCompletedCount = function() {
        return $scope.tasks.filter(t => t.completed).length;
    };

    // Save to localStorage
    $scope.saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify($scope.tasks));
    };
});