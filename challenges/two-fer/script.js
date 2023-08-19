const customers = ['Alice','Bohdan','Zaphod','','Alan',,'Marie','Jimmy'];
for (let i = 0; i < customers.length; i++){
    const element = customers[i];
    const text = `One for ${!!element ? element : 'you'}, one for me.`;
    console.log(`${text}`);
}

// foreach will skip the undefined element in the array and only takes those ones with value even if it is empty.
// example: it will skip non-declared items. It takes only the declared ones: null, undefined and Roy, but the array has 4 positions.
const clients = [null, undefined, , 'Roy'];
clients.forEach(element => {
    const text = `Clients: One for ${!!element ? element : 'you'}, one for me.`;
    console.log(`${text}`);
});

