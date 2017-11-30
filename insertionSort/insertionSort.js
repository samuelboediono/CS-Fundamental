var arraySize = 40;

var array = [];
for (var index = 0; index < arraySize; index++) {
	var randomNumber = Math.round(Math.random() * arraySize);

	array.push(randomNumber);
}

function insertionSort (items) {

	var i;

	var j;

	for (i = 0; i < items.length; i++) {

		var value = items[i];

		for (j = i - 1; j > -1 && items[j] > value; j--) {
			items[j + 1] = items[j];
		}

		items[j + 1] = value;
	}

	return items;
}

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("----------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));