sap.ui.define([
	"kpmg/home/Exercise4/controller/BaseController"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise4.controller.MainView", {
		onInit: function () {

		},
		onListItemPress: function (oEvent) {
	
			var painterPath = oEvent.getSource().getBindingContext("PaintersModel").getPath().substr(1);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("painter", {
				Firstname: window.encodeURIComponent(painterPath)
			});
			
			
		}
	});
});