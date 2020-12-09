sap.ui.define([
	"kpmg/home/Exercise4/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise4.controller.MainView", {
		onInit: function () {

		},
		onListItemPress: function (oEvent) {
			debugger;
		

			var painterPath = oEvent.getSource().getBindingContext("PaintersModel").getPath().substr(1); 

			// // var painter = painterPath.split("(").slice(-1).pop();
	
			// // var painter = new JSONModel(painterPath); 
			
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("painter", {
				Firstname: window.encodeURIComponent(painterPath)
			});
	
	
// 	[5:38 PM] Stefanov, Pavel
    
// // onListItemPress: function (oEvent) 

//  var oItem = oEvent.getSource();
// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
// oRouter.navTo("detail", {
// teamPath: window.encodeURIComponent(oItem.getBindingContext("soccerModel").getPath().substr(1))
// }
// }

	
	
		// var productPath = oEvent.getSource().getBindingContext("products").getPath(),
		// 		product = productPath.split("/").slice(-1).pop(),
		// 		oNextUIState;
		// 	this.getOwnerComponent().getHelper().then(function (oHelper) {
		// 		oNextUIState = oHelper.getNextUIState(1);
		// 		this.oRouter.navTo("detail", {
		// 			layout: oNextUIState.layout,
		// 			product: product
		// 		});
		// 	}.bind(this));
		// }
		}
	});
});