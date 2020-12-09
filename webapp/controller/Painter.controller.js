sap.ui.define([
	"kpmg/home/Exercise4/controller/BaseController"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise4.controller.Painter", {
		onInit: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("painter").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").Firstname),
				model: "PaintersModel"
			});
		},

		onPaintings: function (oEvent) {
			
			debugger;
			var painterPath = oEvent.getSource().getBindingContext("PaintersModel").getPath().substr(1);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("toPaintings", {
				Firstname: window.encodeURIComponent(painterPath)
			});

		}

		// onNavBack: function () {

		// }

	});
});