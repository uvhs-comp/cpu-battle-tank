bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:3, y:3,
		name: "You", color: "rgba(0, 255, 0,0.8)",
		code: "Ly8gVGhlIGZpcnN0IDMgaW5zdHJ1Y3Rpb25zIGFyZSBpbmNvbXBsZXRlDQovLyBDb21wbGV0ZSB0aGVtIGJlbG93DQoNCi8vIEluc3RydWN0aW9ucw0KICAgIExEQSAgLy8gTG9hZCBCYWNrd2FyZCAoMSkNCiAgICBPVVQgICAgICAgIC8vIE1vdmUgYmFja3dhcmRzIChPVVQgMSkNCiAgICBPVVQgICAgICAgIC8vIE1vdmUgYmFja3dhcmRzIChPVVQgMSkNCiAgICBITFQgICAgICAgICAvLyBTdG9wIHRoZSBwcm9ncmFtDQoNCi8vIERhdGEgbGFiZWxzDQovLyBDaGFubmVsIDEgLSBtb3ZlbWVudA0KRm9yd2FyZCAgICAgREFUIDANCkJhY2t3YXJkICAgIERBVCAxDQo="
		},
	title: "Level 2",
	description: "<p>In this level your job is to move backwards to the checkpoint.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[3,5, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
