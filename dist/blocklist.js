(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.minterBlockList = factory());
})(this, (function () { 'use strict';

	var blockList = [
		"BEEBIP",
		"BEEHIVE",
		"BIPXBSC",
		"BITCOIN",
		"BTCM",
		"CARDANO",
		"CELSIUS",
		"CHAINLINK",
		"COMPOUND",
		"DECECOIN",
		"DECIMAL",
		"ETHEREUM",
		"ETHM",
		"EVERSCALE",
		"EVERSTAKE",
		"FINIKO",
		"FREETON",
		"GROMAPP",
		"HARMONY",
		"HONEEBEE",
		"HONEESWAP",
		"HONEEWOOD",
		"HUBXBIP",
		"INUSHIBA",
		"MANA",
		"MARCONA",
		"MBIPXXX",
		"MHUBXXX",
		"MINTER",
		"MINTER3",
		"MINTERUSD",
		"MINTUSD",
		"MUSDT",
		"NEWMINTER",
		"NEWTON",
		"PANCAKE",
		"POLKADOT",
		"POLYGON",
		"SHIBAINU",
		"SHIKYH1",
		"SQDGAME",
		"SQUID",
		"STELLAR",
		"SUSHISWAP",
		"SYNTHETIX",
		"TONCOIN",
		"TONCRYSTAL",
		"TONXBIP",
		"UNISWAP",
		"USD",
		"USDBIP",
		"USDM",
		"USDSC",
		"USDT",
		"USDTB",
		"VKCOIN",
		"VKCOINS"
	];

	return blockList;

}));
