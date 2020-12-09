sap.ui.define([
	"kpmg/home/Exercise4/controller/BaseController"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise4.controller.Paintings", {
		onInit: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("toPaintings").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			
			debugger;
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").Firstname),
				model: "PaintersModel"
			});
		}
	});
});