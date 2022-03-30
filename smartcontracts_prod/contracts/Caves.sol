// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import "./BEP721_CWOLFGAME.sol";

contract Caves is BEP721 {

    uint8 private constant WOOD = 1;
    uint8 private constant BRONZE = 2;
    uint8 private constant SILVER = 3;
    uint8 private constant GOLD = 4;
    uint8 private constant PLATINUM = 5;
    uint8 private constant DIAMOND = 6;

    struct Cave {
        uint8 holesCount;
        uint8 materialsCount;
    }

    uint256 public cavesCount = 0;
    mapping(uint256 => Cave) public allCaves;
    mapping(string => bool) public caveURIExists;
    constructor() BEP721("CAVES_CONTRACT", "CCV") {
        _setBaseURI("https://BASEURI");
    }
    
    function setURIPrefix(string memory _baseURI) internal {
        _setBaseURI(_baseURI);
    }

    function mintCave() external {
        require(msg.sender != address(0));
        
        uint256 tokenId = cavesCount;
        require(!_exists(tokenId));

        string memory tokenURI = string(abi.encodePacked(baseURI(), Strings.toString(tokenId)));
        require(!caveURIExists[tokenURI]);

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        cavesCount++;
        caveURIExists[tokenURI] = true;

        Cave memory newCave = Cave(
            1, //initial holes_count of current cave
            0 //initial materials_count used to make current cave
        );
        allCaves[tokenId] = newCave;
    }

    function getCaveDetails(uint256 _caveId) public view returns (Cave memory) {
        return allCaves[_caveId];
    }

    function extendCave(uint256 _caveId, uint8 _level) public {
        Cave memory _cave = getCaveDetails(_caveId);
        _cave.holesCount += increaseHoles(_level);
        require(_cave.holesCount <= DIAMOND*20);
        
        _cave.materialsCount += 1;
        require(_cave.materialsCount <= 20);

        allCaves[_caveId] = _cave;
    }

    function increaseHoles(uint8 _level) internal pure returns(uint8) {
        return _level;
    }

    function decreaseHoles(uint8 _level) internal pure returns(uint8) {
        return _level;
    }

    function getCaveOwner(uint256 _caveId) public view returns(address) {
        return ownerOf(_caveId);
    }

    function getCaveMetaData(uint256 _caveId) public view returns(string memory) {
        return tokenURI(_caveId);
    }

    function getNumberOfCavesMinted() public view returns(uint256) {
        return totalSupply();
    }
}