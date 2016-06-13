bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:2, y:4,
		name: "You", color: "rgba(0, 255, 0,0.8)",
		code: "Ly8gTW92ZSB0aGUgdGFuayBmb3J3YXJkIDMgc3F1YXJlcw0KDQovLyBJbnN0cnVjdGlvbnMNCglMREEgRm9yd2FyZCAvLyBMb2FkIEJhY2t3YXJkICgxKQ0KCU9VVCAxICAgICAgIC8vIE1vdmUgZm9yd2FyZCAxIHNxdWFyZQ0KCU9VVCAxICAgICAgIC8vIE1vdmUgZm9yd2FyZCAxIHNxdWFyZQ0KCS8vIE1vdmUgdGhlIHRhbmsgZm9yd2FyZCAxIG1vcmUgc3F1YXJlDQoJDQoJSExUICAgICAgICAgLy8gU3RvcCB0aGUgcHJvZ3JhbQ0KDQovLyBEYXRhIGxhYmVscw0KLy8gQ2hhbm5lbCAxIC0gbW92ZW1lbnQNCkZvcndhcmQgICAgIERBVCAwDQpCYWNrd2FyZCAgICBEQVQgMQ0K"
		},
	title: "Level 1",
	description: "<p>In this level your job is to move forwards to the checkpoint.</p><p>Click on edit code label above the tank to get started!</p>",
	tasks:[
		[2, 1, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT]
	]
});
