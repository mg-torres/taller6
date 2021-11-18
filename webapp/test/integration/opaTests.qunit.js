/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"Namespace1/productsmanager/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});