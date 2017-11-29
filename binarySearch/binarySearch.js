function binarySearch (stuff, searchElement) {
	
	// Set some starting values
	var currentElement;
	var currentIndex;
	var maxIndex = stuff.length - 1;
	var minIndex = 0;

	// This is the main loop
	while (minIndex <= maxIndex) {

		// Get a position near the middle
		currentIndex = Math.floor((minIndex + maxIndex) / 2);

		// Get that element
		currentElement = stuff[currentIndex];
		console.log("Start Index: ", minIndex)
		console.log("End Index: ", maxIndex)
		console.log("Current Element", stuff[currentIndex])

		// Test it & conditional check
		if (currentElement < searchElement) {

			// If it is less than number we are looking for, look *above* this value
			minIndex = currentIndex + 1;
		}

		else if (currentElement > searchElement) {

			// If it is more than number we are looking for, look *below* this value
			maxIndex = currentIndex - 1;
		}

		else {

			// We found it; return the index
			console.log("Current Index: ", currentIndex)
			console.log("Current Element", stuff[currentIndex])
			console.log(" ------------- ")
			return currentIndex;
		}
	}

	return false;
}