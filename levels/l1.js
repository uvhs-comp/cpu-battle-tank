bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:3, y:3,
		name: "You", color: "rgba(0, 255, 0,0.8)",
		code: "Ly8gVGhlIGZpcnN0IDMgaW5zdHJ1Y3Rpb25zIGFyZSBpbmNvbXBsZXRlDQovLyBDb21wbGV0ZSB0aGVtIGJlbG93DQoNCi8vIEluc3RydWN0aW9ucw0KCUxEQSAgLy8gTG9hZCBCYWNrd2FyZCAoMSkNCglPVVQgICAgICAgIC8vIE91dHB1dCBvbiBNb3ZlbWVudCBjaGFubmVsDQoJT1VUICAgICAgICAvLyBPdXRwdXQgb24gTW92ZW1lbnQgY2hhbm5lbA0KCUhMVCAgICAgICAgIC8vIFN0b3AgdGhlIHByb2dyYW0NCg0KLy8gRGF0YSBsYWJlbHMNCi8vIENoYW5uZWwgMSAtIG1vdmVtZW50DQpGb3J3YXJkICAgICBEQVQgMA0KQmFja3dhcmQgICAgREFUIDENCg=="
		},
	title: "Level 1",
	description: "<p>In this level your job is to move backwards to the checkpoint.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[3,5, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
