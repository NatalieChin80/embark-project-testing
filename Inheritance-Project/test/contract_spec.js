// /*global contract, config, it, assert*/

const TipJar = require('Embark/contracts/TipJar');

let accounts;

config({
  contracts: {
    ownerAbstract: {}, 
    eventInterface: {},
    TipJar: {},
    Owner: {fromIndex:0}
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("TipJar", function () {
  this.timeout(0);

  it("should deploy the owner contract", async function() {
    let result = Owner.options.address;
    console.log("---------------------", result);
//    assert.ok(result);
  });
  
  it("should deploy the tipjar", async function() {
    let result = TipJar.options.address;
    console.log(result);
    assert.ok(result);
  });

  it("get owner address", async function () {
    let result = await TipJar.methods.showOwner().call();
    assert.ok(result);
  });
})
