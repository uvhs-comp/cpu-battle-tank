bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER, 
	tank: {
		x:1, y:1, 
		name: "You", color:"rgba(0, 255,0,0.8)", 
		code:"Ly8gTERBIGxvYWRzIGEgdmFsdWUgaW50byB0aGUgYWNjdW11bGF0b3IgcmVnaXN0ZXINCi8vIE9VVCBzZW5kcyB0aGUgdmFsdWUgaW4gdGhlIGFjY3VtdWxhdG9yIHJlZ2lzdGVyIHRvIGFuIG91dHB1dCBkZXZpY2UNCg0KLy8gc3RhcnQgb2YgaW5zdHJ1Y3Rpb25zDQoJTERBIEVhc3QNCglPVVQgMiAgICAgICAvLyBTdGVlciB0YW5rDQoNCglMREEgRm9yd2FyZHMNCglPVVQgMSAgICAgICAvLyBNb3ZlIHRhbmsNCglPVVQgMSAgICAgICAvLyBNb3ZlIHRhbmsNCglPVVQgMSAgICAgICAvLyBNb3ZlIHRhbmsNCglPVVQgMSAgICAgICAvLyBNb3ZlIHRhbmsNCg0KCUhMVCAgICAgICAgIC8vIFN0b3AgQ1BVIGJlZm9yZSBpdCBnZXRzIHRvIGRhdGENCg0KLy8gc3RhcnQgb2YgbWVtb3J5DQpFYXN0IERBVCAyICAgICAgLy8gc3RvcmUgMiBpbiB0aGlzIG1lbW9yeSBsb2NhdGlvbg0KRm9yd2FyZHMgREFUIDAgIC8vIHN0b3JlIDAgaW4gdGhpcyBtZW1vcnkgbG9jYXRpb24NCg=="
		}, 
	title: "Level 3", 
	description:"Adapt the Little Man Computer program so that the tank avoids the landmine",
	tasks:[
		[5, 1, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[3, 1, bt.ITEM_TYPE_MINE, bt.ACTION_STATIC],
		[3, 2, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
	]
});