var myApp = angular.module('ionicApp', ['ionic'])


.controller('RootCtrl', function($scope, $ionicSideMenuDelegate) {
     
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.onControllerChanged = function(oldController, oldIndex, newController, newIndex) {
    console.log('Controller changed', oldController, oldIndex, newController, newIndex);
    console.log(arguments);
  };
})


.controller('HomeCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {
  $scope.items = [];

  $ionicModal.fromTemplateUrl('/www/tipresult.html', function(modal) {
    $scope.settingsModal = modal;
  });

  var removeItem = function(item, button) {
    $ionicActionSheet.show({
      buttons: [],
      destructiveText: 'Delete Task',
      cancelText: 'Cancel',
      cancel: function() {
        return true;
      },
      destructiveButtonClicked: function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
        return true;
      }
    });
  };

  var completeItem = function(item, button) {
    item.isCompleted = true;
  };
myApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider
  .tabs.style("standard")
  .tabs.position("bottom")
  .views.transition("ios")
  .navBar.alignTitle("center")
  .navBar.positionPrimaryButtons('left')
  .navBar.positionSecondaryButtons('right')
});
  $scope.onReorder = function(el, start, end) {
    ionic.Utils.arrayMove($scope.items, start, end);
  };

  $scope.onRefresh = function() {
    console.log('ON REFRESH');

    $timeout(function() {
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  }


  $scope.removeItem = function(item) {
    removeItem(item);
  };

  $scope.newTask = function() {
    $scope.settingsModal.show();
  };

  // Create the items
  for(var i = 0; i < 25; i++) {
    $scope.items.push({
      title: 'Task ' + (i + 1),
      buttons: [{
        text: 'Done',
        type: 'button-success',
        onButtonClicked: completeItem,
      }, {
        text: 'Delete',
        type: 'button-danger',
        onButtonClicked: removeItem,
      }]
    });
  }

})

.controller('TaskCtrl', function($scope) {
  $scope.close = function() {
    $scope.modal.hide();
  }
});

