// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import "./BEP721_CWOLFGAME.sol";

contract Wolves is BEP721 {

  uint8 private constant WOOD = 1;
  uint8 private constant BRONZE = 2;
  uint8 private constant SILVER = 3;
  uint8 private constant GOLD = 4;
  uint8 private constant PLATINUM = 5;
  uint8 private constant DIAMOND = 6;

  struct Wolf {
    uint8 race;
    bool gender;
    uint8 level;
    uint256 attack;
    uint256 defense;
    uint256 price; // for premium feature only
  }

  uint256 public wolvesCount = 0;
  mapping(uint256 => Wolf) public allWolves;
  mapping(string => bool) public wolfURIExists;


  constructor() BEP721("WOLVES_CONTRACT", "CWF") {
    _setBaseURI("ipfs://");
  }

  function setURIPrefix(string memory _baseURI) internal {
      _setBaseURI(_baseURI);
  }

  function mintWolf(uint8 _level) external {
    require(msg.sender != address(0));
    require(_level>0 && _level<=DIAMOND);

    uint256 tokenId = wolvesCount;
    require(!_exists(tokenId));

    string memory tokenURI = string(abi.encodePacked(baseURI(), Strings.toString(tokenId)));
    require(!wolfURIExists[tokenURI]);

    _mint(msg.sender, tokenId);
    _setTokenURI(tokenId, tokenURI);

    wolvesCount++;
    wolfURIExists[tokenURI] = true;

    Wolf memory newWolf =  Wolf(
      randomRace(), //race
      randomGender(), //gender
      _level, //level
      randomAttack(_level), //attack
      randomDefense(_level), //defense
      1 //price
    );
    allWolves[tokenId] = newWolf;
  }

  function isWolfExists(uint256 _wolfId) public view returns(bool) {
    bool wolfExists = _exists(_wolfId);
    return wolfExists;
  }

  function getWolfDetails(uint256 _wolfId) public view returns (Wolf memory) {
    return allWolves[_wolfId];
  }

  function getWolfMetaData(uint256 _wolfId) public view returns(string memory) {
    string memory wolfMetaData = tokenURI(_wolfId);
    return wolfMetaData;
  }

  function getWolfOwner(uint256 _wolfId) public view returns(address) {
    address _wolfOwner = ownerOf(_wolfId);
    return _wolfOwner;
  }

  function getAllWolvesForUser(address user) public view returns (uint256[] memory) {
    uint256 tokenCount = balanceOf(user);
    if(tokenCount == 0) {
      return new uint256[](0);
    } else {
      uint[] memory result = new uint256[](tokenCount);
      uint256 resultIndex = 0;
      
      for(uint256 i = 0; i < wolvesCount; i++) {
        if(ownerOf(i) == user) {
          result[resultIndex] = i;
          resultIndex++;
        }
      }
      return result;
    }
  }

  function getNumberOfWolvesMinted() public view returns(uint256) {
    uint256 totalNumberOfWolvesMinted = totalSupply();
    return totalNumberOfWolvesMinted;
  }

  function getTotalNumberOfWolvesOwnedByAnAddress(address _ownerAddress) public view returns(uint256) {
    uint256 totalNumberOfWolvesOwned = balanceOf(_ownerAddress);
    return totalNumberOfWolvesOwned;
  }

  function updateWolfPrice(uint256 _wolfId, uint256 _newPrice) public {
    require(msg.sender != address(0));
    require(_exists(_wolfId));
    address wolfOwner = ownerOf(_wolfId);
    require(wolfOwner == msg.sender);
    Wolf memory curWolf = allWolves[_wolfId];
    curWolf.price = _newPrice;
    allWolves[_wolfId] = curWolf;
  }

  function burn(uint256 tokenId) external {
      require(
          _isApprovedOrOwner(_msgSender(), tokenId),
          "caller is not owner nor approved"
      );
      _burn(tokenId);
  }

  function randomNumber(uint256 _from, uint256 _to) internal view returns (uint) {
      uint rndNum = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, msg.sender))) % (_to - _from + 1);
      rndNum = rndNum + _from;
      return rndNum;
  }
  
  function randomGender() internal view returns (bool) {
    return randomNumber(0,1)==1? true : false;
  }

  function randomRace() internal view returns (uint8) {
    uint8   LAND      =   1;
    uint8   WATER     =   2;
    uint8   ICE       =   3;
    uint8   FIRE      =   4;
    uint8   FOREST    =   5;
    uint8   AIR       =   6;
    uint8   ELECTRIC  =   7;
    uint8   LEGENDARY =   8;

    uint8   PERCENT =   14;
    uint256 n = randomNumber(1, 100);
    uint8 race = LAND;
    if(n <= PERCENT) {
        race = LAND;
    } else if( n > PERCENT && n <= PERCENT*2 ) {
        race = WATER;
    } else if( n > PERCENT*2 && n <= PERCENT*3 ) {
        race = ICE;      
    } else if( n > PERCENT*3 && n <= PERCENT*4 ) {
        race = FIRE;
    } else if( n > PERCENT*4 && n <= PERCENT*5 ) {
        race = FOREST;
    } else if( n > PERCENT*5 && n <= PERCENT*6 ) {
        race = AIR;
    } else if( n > PERCENT*6 && n <= PERCENT*7 ) {
        race = ELECTRIC;
    } else if( n > PERCENT*7 ) {
        race = LEGENDARY;
    }
    return race;
  }

  function randomAttack(uint8 _level) internal view returns (uint256) {
    uint256 attack = 1;
    uint8[7] memory threshold = [20, 50, 76, 114, 144, 185, 222];

    if(_level == WOOD) {
      attack = randomNumber(threshold[0], threshold[1]);
    } else if(_level == BRONZE) {
      attack = randomNumber(threshold[1], threshold[2]);
    } else if(_level == SILVER) {
      attack = randomNumber(threshold[2], threshold[3]);
    } else if(_level == GOLD) {
      attack = randomNumber(threshold[3], threshold[4]);
    } else if(_level == PLATINUM) {
      attack = randomNumber(threshold[4], threshold[5]);
    } else if(_level == DIAMOND) {
      attack = randomNumber(threshold[5], threshold[6]);
    }
    return attack;
  }

  function randomDefense(uint8 _level) internal view returns (uint256) {
    uint256 defence = 1;
    uint8[7] memory threshold = [20, 50, 76, 114, 144, 185, 222];

    if(_level == WOOD) {
      defence = randomNumber(threshold[0], threshold[1]);
    } else if(_level == BRONZE) {
      defence = randomNumber(threshold[1], threshold[2]);
    } else if(_level == SILVER) {
      defence = randomNumber(threshold[2], threshold[3]);
    } else if(_level == GOLD) {
      defence = randomNumber(threshold[3], threshold[4]);
    } else if(_level == PLATINUM) {
      defence = randomNumber(threshold[4], threshold[5]);
    } else if(_level == DIAMOND) {
      defence = randomNumber(threshold[5], threshold[6]);
    }
    return defence;
  }
}