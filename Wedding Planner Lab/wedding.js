let totalGuestsInput = prompt("How many guests do you have?");
let totalTablesInput = prompt("How many tables do you want?");




let totalGuests = parseInt(totalGuestsInput);
let totalTables = parseInt(totalTablesInput);


function distributeGuestsWithTables(totalGuests, totalTables) {
    let guestsPerTable = Math.floor(totalGuests/totalTables)
    let guestsPerBonusTable = guestsPerTable + 1 ;
    let leftoverGuests = totalGuests % totalTables;
    let numberOfBonusTable = leftoverGuests ;
    let numberOfNormalTable = totalTables - leftoverGuests ;


    return {
        totalGuests: totalGuests,
        guestsPerTable: guestsPerTable,
        leftoverGuests: leftoverGuests,
        guestsPerBonusTable: guestsPerBonusTable,
        totalTables: totalTables,
        numberOfBonusTable: numberOfBonusTable,
        numberOfNormalTable: numberOfNormalTable
    };
}


let result = distributeGuestsWithTables(totalGuests, totalTables);


if (isNaN(totalGuests) || isNaN(totalTables) || totalGuests < 0 || totalTables <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");
} else {
    alert(`Your ${result.totalGuests} guest will be seated as follows: ${result.numberOfBonusTable} tables of ${result.guestsPerBonusTable}, and ${result.numberOfNormalTable} tables of ${result.guestsPerTable}.`);
}



