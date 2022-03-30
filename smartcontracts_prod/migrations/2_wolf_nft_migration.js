const Wolves = artifacts.require("Wolves");

module.exports = async function (deployer) {
  const prod_mode = false;
  if(prod_mode) { //------- on prod mode ---------
    deployer.deploy(Wolves);
  } else { //------- test mint ---------
    await deployer.deploy(Wolves); //Wolf Id is 0
    let tokenInstance = await Wolves.deployed();
    await tokenInstance.mintWolf(6);
    let wolf = await tokenInstance.getWolfDetails(0);
    console.log(wolf);
  }
};
