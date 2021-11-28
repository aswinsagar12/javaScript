function nodeADD() {

    //calling asynchronous
    dbADD().then(
        (value) => {
            console.log("Success");
        },

        (err) => {
            console.log("Error");
        });

    doSomething();

}

function doSomething() {
    console.log("Doing Something");
}

function dbADD() {
    return new Promise((resolve, reject) => {
        //add data
        data = 6;
        if (data == 5) {
            err == true;
            console.log(err);

        } else {
            err = false;
            console.log(err);
        }
        serTimeout(resolve, 5000);
        //if(err){
        // reject(err);
        //}
    });
}

nodeADD();