bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:1, y:1,
		name: "You", color: "rgba(0, 255,0,0.8)",
		code: "Ly8gSGludDogTG9hZCAoTERBKSB0aGUgcmVxdWlyZWQgZGF0YQ0KLy8gSGludDogT3V0cHV0IChPVVQpIG9uIHRoZSByaWdodCBjaGFubmVsDQoNCi8vIFlvdXIgaW5zdHJ1Y3Rpb25zDQoNCg0KLy8gRGF0YSBMYWJlbHMNCi8vIE1vdmVtZW50IGRhdGEgKGNoYW5uZWwgMSkNCkZvcndhcmQgICAgREFUIDANCkJhY2t3YXJkICAgREFUIDENCg0KLy8gU3RlZXJpbmcgZGF0YSAoY2hhbm5lbCAyKQ0KTm9ydGggIERBVCAwDQpFYXN0ICAgREFUIDINClNvdXRoICBEQVQgNA0KV2VzdCAgIERBVCA2DQo="
		},
	title: "Level 3",
	description: "<p>In this level your job is to navigate to three checkpoints.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[5, 1, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[5, 3, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[3, 2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
