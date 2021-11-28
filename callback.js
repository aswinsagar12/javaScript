const cbPrint = function print() {
    console.log("Data is added");

}

function nodeADD() {
    const data = { name: "Emp1" };
    dbADD(data, cbPrint);
}

function dbADD(data, cb) {
    //add data
    cb();
}

nodeADD();