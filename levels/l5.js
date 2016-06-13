bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:1, y:1,
		name: "You", color: "rgba(0, 255,0,0.8)",
		code: "Ly8gSGludDogTG9hZCAoTERBKSB0aGUgcmVxdWlyZWQgZGF0YQ0KLy8gSGludDogT3V0cHV0IChPVVQpIG9uIHRoZSBjb3JyZWN0IGNoYW5uZWwNCg0KLy8gWW91ciBpbnN0cnVjdGlvbnMNCg0KDQovLyBEYXRhIExhYmVscw0KLy8gTW92ZW1lbnQgZGF0YSAoY2hhbm5lbCAxKQ0KRm9yd2FyZCAgICBEQVQgMA0KQmFja3dhcmQgICBEQVQgMQ0KDQovLyBTdGVlcmluZyBkYXRhIChjaGFubmVsIDIpDQpOb3J0aCAgREFUIDANCkVhc3QgICBEQVQgMg0KU291dGggIERBVCA0DQpXZXN0ICAgREFUIDYNCg=="
		},
	title: "Level 5",
	description: "<p>In this level your job is to navigate to three checkpoints.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[5, 1, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[5, 3, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[3, 2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
