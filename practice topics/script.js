// ======================================
// 1. NORMAL FUNCTION
// ======================================

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// ======================================
// 2. ARROW FUNCTION
// ======================================

const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(5, 4));


// ======================================
// 3. CALLBACK FUNCTION
// ======================================

function calculate(a, b, callback) {

    let result = a + b;

    callback(result);
}

calculate(10, 20, (result) => {
    console.log("Callback Result:", result);
});


// ======================================
// 4. CALLBACK HELL
// ======================================

function login(callback) {

    setTimeout(() => {
        console.log("Login successful");
        callback();
    }, 1000);
}

function getUser(callback) {

    setTimeout(() => {
        console.log("User received");
        callback();
    }, 1000);
}

function getCourses(callback) {

    setTimeout(() => {
        console.log("Courses received");
        callback();
    }, 1000);
}


// Nested callbacks

login(() => {

    getUser(() => {

        getCourses(() => {

            console.log("Callback Hell completed");

        });

    });

});


// ======================================
// 5. PROMISE
// ======================================

function getData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = true;

            if (success) {
                resolve("Promise successful");
            } else {
                reject("Promise failed");
            }

        }, 2000);

    });
}

getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


// ======================================
// 6. PROMISE CHAINING
// ======================================

Promise.resolve(10)

    .then((num) => {

        console.log("Starting value:", num);

        return num + 5;

    })

    .then((num) => {

        console.log("After + 5:", num);

        return num * 2;

    })

    .then((num) => {

        console.log("After * 2:", num);

        return num - 4;

    })

    .then((num) => {

        console.log("After - 4:", num);

        return num / 2;

    })

    .then((result) => {

        console.log("Final Result:", result);

    })

    .catch((error) => {

        console.log("Error:", error);

    });
