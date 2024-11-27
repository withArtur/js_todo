console.log('ciao Promise');

function test() {
    const p1 = new Promise(function (resolve, reject) {
        // pending 

        // fulfilled 
        // rejected 

        setTimeout(() => {
            reject(new Error("Erroreeeeeeeeee"));
            // resolve('some data 5555');
        }, 3000);

    });

    console.log(p1);


    /* p1.then((result) => {
        console.warn("Fulfilled: " + result),
            console.log(p1);
    }, (error) => {
        console.error("Rejected: " + error)
    }); */
}

test();