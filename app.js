(function (){
	'use strict';

	angular.module("ColorConverter",[])

	.controller("ColorConverterController", function($scope) {
		$scope.name = "#000000";
		$scope.rgbValue = "rgb(0, 0, 0)";
		$scope.bgColor = "#000000";

		// Every time the user changes the color input, then getConversion() runs.
		$scope.getConversion = function () {
			if(isHex($scope.name)) {
				$scope.rgbValue = hexToRGB($scope.name);
				$scope.bgColor = $scope.rgbValue;
			} else {
				$scope.rgbValue = "INVALID COLOR!";
				$scope.bgColor = "";
			}
		};
	});
 

	function hexToRGB(hex){
		if(hex.length == 4) {
			// Given an array, the slice method returns the subarray between two positions of that original array [slice(begin, end)].
			var r = parseInt(hex.slice(1, 2).repeat(2), 16),
		        g = parseInt(hex.slice(2, 3).repeat(2), 16),
		        b = parseInt(hex.slice(3, 4).repeat(2), 16);
		} else {
			var r = parseInt(hex.slice(1, 3), 16),
		        g = parseInt(hex.slice(3, 5), 16),
		        b = parseInt(hex.slice(5, 7), 16);
		}

	    return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	function isHex(input) {
		return /^#([0-9A-F]{3}){1,2}$/i.test(input);
	}
})();


	function copyToClipboard() {
		var copyText = document.getElementById("rgb-input");
		copyText.select();
		document.execCommand("copy");
	}

	var rgbInput   = document.getElementById("rgb-input");
	var copyButton = document.getElementById("copy");
	var alertBox   = document.getElementById("alert");

	copyButton.addEventListener("click", function() {
		alertBox.classList.add("show");
		copyToClipboard();
		setTimeout(function () {
			alertBox.classList.remove("show");
		}, 1000);
	});