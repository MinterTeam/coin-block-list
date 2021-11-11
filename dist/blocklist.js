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
		"MANA",
		"MINTER",
		"MINTERUSD",
		"MINTUSD",
		"MUSDT",
		"NEWMINTER",
		"NEWTON",
		"PANCAKE",
		"POLKADOT",
		"POLYGON",
		"REDDCOIN",
		"SHIBAINU",
		"SHIKYH1",
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
		"VKCOIN",
		"VKCOINS"
	];

	return blockList;

}));
