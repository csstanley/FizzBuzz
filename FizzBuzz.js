for (var i = 1; i <= 100; i++) {

        // The  % returns the remainder, so if the remainder is 0, it's divisible by 3 //
    if (i % 3 == 0) {
        console.log("Fizz");

    } else if (i % 5 == 0) {
        console.log("Buzz");

        // If it's neither divisible by 3 or 5, return the number //
    } else if ((i % 3 != 0) && (i % 5 != 0)) {
        console.log(i);
    }

}