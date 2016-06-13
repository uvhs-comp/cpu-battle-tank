bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER,
	tank: {
		x:1, y:3,
		name: "You", color:"rgba(0, 255,0,0.8)",
		code:"Ly8gSGludDogbWFrZSBzdXJlIHlvdXIgc3RvcmUgbG9jYXRpb24gaXMgQUZURVIgdGhlIGxhc3QgaW5zdHJ1Y3Rpb24NCi8vIFJlbWVtYmVyIHRvIGNsaWNrIHRoZSBIZWxwIGJ1dHRvbiBhYm92ZSB0byB0aGUgdmlldyB0aGUgSW5zdHJ1Y3Rpb24gU2V0DQovLyBUaGlzIHByb2dyYW0gYXNrcyB0aGUgdXNlciBmb3IgYW4gaW5wdXQNCi8vIFN0b3JlcyBpdCBpbiBsb2NhdGlvbiA5DQovLyBMb2FkcyB0aGF0IHZhbHVlIGJhY2sgaW50byB0aGUgQUNDDQovLyBGaW5hbGx5IGRpc3BsYXlzIGl0IHRvIHRoZSB1c2VyDQoNCglJTlAgMA0KCVNUQSA5DQoJTERBIDkNCglPVVQgMA0KCUhMVA0K"
		},
	title: "Level 8",
	description:"<p><b>It is strongly recommended that you look at the Help panel which explains the Instruction Set of the Battle Turtle.</b></p><p>In this exercise you are going to make use of both input and output channel 0.</p><p>This channel is used to get input from the user and display information to them. You are going to write the following programs, make sure you save a copy of them on your home drive:</p><p><ol><li>Ask the user for 2 numbers and store them in memory. Then add them and display the answer</li><li>Ask the user for 2 numbers, subtract them and display the answer.</li><li>Ask the user for a number, if it is 7 stop the program. Otherwise, ask them again and repeat until 7 is entered.</li></ol>",
	tasks:[
		[5, 4, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
		[4, 3, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[5, 3, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[6, 3, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[4, 4, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[6, 4, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[4, 5, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[5, 5, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC],
		[6, 5, bt.ITEM_TYPE_WATER, bt.ACTION_STATIC]
	]
});
