// control modal opening on click

'use strict';

angular.module('myApp')
	.controller('ModalController', function($rootScope, $scope, $modal, ChatFactory, ShareFactory) {
		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: 'ModalInstanceController'
			});
			
			modalInstance.result.then(function (name) {
				var found = false;
				var length = ShareFactory.roomList.length;
				var index = 0;

				for(var i = 0; i < length; ++i) {
					if(ShareFactory.roomList[i].roomName === name) {
						found = true;
						index = i;
						console.log('index ' + index);
					}
				}

				if(!found) {
					ShareFactory.roomList.push({ roomName : name, disabled : false });
				}
				else {
					ShareFactory.roomList[index].disabled = false;
				}
			}, function () {
				console.log('cancel');
			});
		};
	});