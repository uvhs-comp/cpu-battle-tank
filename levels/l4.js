bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:5, y:5,
		name: "You", color: "rgba(0, 255,0,0.8)",
		code: "Ly8gV3JpdGUgdGhlIGluc3RydWN0aW9ucyBiZWxvdyB0aGUgY29tbWVudHMNCi8vIEhpbnQ6IExvYWQgKExEQSkgdGhlIHJlcXVpcmVkIGRhdGENCi8vIEhpbnQ6IE91dHB1dCAoT1VUKSBvbiB0aGUgY29ycmVjdCBjaGFubmVsDQovLyAxID0gbW92ZW1lbnQgYW5kIDIgPSBzdGVlcmluZw0KDQovLyBNb3ZlIGZvcndhcmRzIDMgc3BhY2VzDQoNCi8vVHVybiB0YW5rIHRvIHdlc3QNCkxEQSBXZXN0DQpPVVQgMg0KDQovLyBNb3ZlIGZvcndhcmRzIDIgc3BhY2VzDQoNCg0KLy8gRGF0YSBMYWJlbHMNCi8vIE1vdmVtZW50IGRhdGEgKGNoYW5uZWwgMSkNCkZvcndhcmQgICAgREFUIDANCkJhY2t3YXJkICAgREFUIDENCg0KLy8gU3RlZXJpbmcgZGF0YSAoY2hhbm5lbCAyKQ0KTm9ydGggIERBVCAwDQpFYXN0ICAgREFUIDINClNvdXRoICBEQVQgNA0KV2VzdCAgIERBVCA2DQo="
		},
	title: "Level 4",
	description: "<p>In this level your job is to navigate to the two checkpoints.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[5,2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[3,2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
