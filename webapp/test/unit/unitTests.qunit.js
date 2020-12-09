/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kpmg/home/Exercise4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});