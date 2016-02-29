bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:2, y:4,
		name: "You", color: "rgba(0, 255,0,0.8)",
		code: "Ly8gQ2xpY2sgQXNzZW1ibGUgYW5kIFJ1bg0KLy8gdG8gc2VlIHRoZSBwcm9ncmFtIGV4ZWN1dGUNCg0KLy8gSW5zdHJ1Y3Rpb25zDQoJTERBIEZvcndhcmQgLy8gTG9hZCBGb3J3YXJkICgwKQ0KCU9VVCAxICAgICAgIC8vIE91dHB1dCBvbiBNb3ZlbWVudCBjaGFubmVsDQoJT1VUIDEgICAgICAgLy8gT3V0cHV0IG9uIE1vdmVtZW50IGNoYW5uZWwNCglPVVQgMSAgICAgICAvLyBPdXRwdXQgb24gTW92ZW1lbnQgY2hhbm5lbA0KCUhMVCAgICAgICAgIC8vIFN0b3AgdGhlIHByb2dyYW0NCg0KLy8gRGF0YSBsYWJlbHMNCi8vIENoYW5uZWwgMSAtIG1vdmVtZW50DQpGb3J3YXJkICAgICBEQVQgMA0KQmFja3dhcmQgICAgREFUIDENCg=="
		},
	title: "Practice",
	description: "<p>This level lets you see how Battle Tanks works.</p><p>Click on the label above the tank to see the assembly code that has been written for you.</p><p>The aim of this first level is to move 3 squares to the north.</p>",
	tasks:[
		[2, 1, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
