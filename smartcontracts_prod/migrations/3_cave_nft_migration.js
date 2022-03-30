const Caves = artifacts.require("Caves");

module.exports = async function (deployer) {
  const prod_mode = false;
  if(prod_mode) { //------- on prod mode ---------
    deployer.deploy(Caves);
  } else { //------- test mint ---------
    await deployer.deploy(Caves); //Cave Id = 0
    let tokenInstance = await Caves.deployed();
    await tokenInstance.mintCave();
    let cave = await tokenInstance.getCaveDetails(0);
    console.log(cave);
  }
};