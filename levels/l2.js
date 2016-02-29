bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:5, y:5,
		name: "You", color: "rgba(0, 255,0,0.8)",
		code: "Ly8gV3JpdGUgdGhlIGluc3RydWN0aW9ucyBiZWxvdyB0aGUgY29tbWVudHMNCi8vIEhpbnQ6IExvYWQgKExEQSkgdGhlIHJlcXVpcmVkIGRhdGENCi8vIEhpbnQ6IE91dHB1dCAoT1VUKSBvbiB0aGUgcmlnaHQgY2hhbm5lbA0KDQovLyBNb3ZlIGZvcndhcmRzIDMgc3BhY2VzDQoNCi8vVHVybiB0YW5rIHRvIHdlc3QNCg0KLy8gTW92ZSBmb3J3YXJkcyAyIHNwYWNlcw0KDQoNCi8vIERhdGEgTGFiZWxzDQovLyBNb3ZlbWVudCBkYXRhIChjaGFubmVsIDEpDQpGb3J3YXJkICAgIERBVCAwDQpCYWNrd2FyZCAgIERBVCAxDQoNCi8vIFN0ZWVyaW5nIGRhdGEgKGNoYW5uZWwgMikNCk5vcnRoICBEQVQgMA0KRWFzdCAgIERBVCAyDQpTb3V0aCAgREFUIDQNCldlc3QgICBEQVQgNg0K"
		},
	title: "Level 2",
	description: "<p>In this level your job is to navigate to the two checkpoints.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[5,2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[3,2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
