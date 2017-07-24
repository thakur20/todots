var app;
(function (app) {
    var todoList;
    (function (todoList) {
        var ToDoListCtrl = (function () {
            function ToDoListCtrl() {
                this.initialise();
            }
            ToDoListCtrl.prototype.removeItem = function (item) {
                var removeItemIndex = this.items.indexOf(item);
                if (removeItemIndex > -1) {
                    this.items.splice(removeItemIndex, 1);
                }
            };
            ;
            ToDoListCtrl.prototype.addItem = function () {
                if (this.items != undefined || this.items != null) {
                    this.items.push({
                        item: this.newItem.item,
                        assignTo: this.newItem.assignTo,
                        date: this.newItem.date,
                        description: this.newItem.description,
                        complete: false
                    });
                }
                this.newItem = null;
            };
            ;
            ToDoListCtrl.prototype.removeAll = function () {
                this.items = [];
            };
            ToDoListCtrl.prototype.initialise = function () {
                this.items = [];
            };
            return ToDoListCtrl;
        }());
        angular
            .module("myToDoApp")
            .controller("ToDoListCtrl", ToDoListCtrl);
    })(todoList = app.todoList || (app.todoList = {}));
})(app || (app = {}));
