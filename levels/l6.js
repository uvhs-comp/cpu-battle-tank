bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:4, y:1,
		name: "You", color:"rgba(0, 255,0,0.8)",
		code:"Ly8gSGludDogTG9hZCAoTERBKSB0aGUgcmVxdWlyZWQgZGF0YQ0KLy8gSGludDogT3V0cHV0IChPVVQpIG9uIHRoZSByaWdodCBjaGFubmVsDQoNCi8vIFlvdXIgaW5zdHJ1Y3Rpb25zDQoNCg0KLy8gRGF0YSBMYWJlbHMNCi8vIE1vdmVtZW50IGRhdGEgKGNoYW5uZWwgMSkNCkZvcndhcmQgICAgREFUIDANCkJhY2t3YXJkICAgREFUIDENCg0KLy8gU3RlZXJpbmcgZGF0YSAoY2hhbm5lbCAyKQ0KTm9ydGggIERBVCAwDQpFYXN0ICAgREFUIDINClNvdXRoICBEQVQgNA0KV2VzdCAgIERBVCA2DQo="
		},
	title: "Level 6",
	description:"<p>Visit the checkpoints whilst avoiding the mine.</p><p>You cannot drive a tank through water!</p>",
	tasks:[
		[3, 2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[5, 4, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[3, 3, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[4, 3, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[5, 3, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[3, 4, bt.ITEM_TYPE_MINE, bt.ACTION_STATIC]
	]
});
