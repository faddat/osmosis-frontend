import { Bech32Address } from '@keplr-wallet/cosmos';
import { staticAssetsDomain } from './constants/urls';
import { ChainInfoWithExplorer } from './stores/chain';

export const HideCreateNewPool: boolean = window.location.hostname.startsWith('app.');
export const HideLBPPoolFromPage: boolean = false;
export const PromotedLBPPoolIds: {
	poolId: string;
	name: string;
	baseDenom: string;
	destDenom: string;
}[] = [
	{
		poolId: '8',
		name: 'Test',
		baseDenom: 'uosmo',
		destDenom: 'uion',
	},
	{
		poolId: '9',
		name: 'Regen Network',
		baseDenom: 'uosmo',
		destDenom: 'uion',
	},
];
export const HideAddLiquidityPoolIds: {
	[poolId: string]: boolean;
} = {
	'8': true,
};

export const PoolsPerPage = 10;
export const RewardEpochIdentifier = '15min';

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: {
	counterpartyChainId: string;
	// Souce channel id based on the Osmosis chain
	sourceChannelId: string;
	// Destination channel id from Osmosis chain
	destChannelId: string;
	coinMinimalDenom: string;
}[] = [
	{
		counterpartyChainId: 'cosmoshub-devnet-1',
		sourceChannelId: 'channel-0',
		destChannelId: 'channel-3',
		coinMinimalDenom: 'uatom',
	},
	{
		counterpartyChainId: 'irishub-devnet-1',
		sourceChannelId: 'channel-1',
		destChannelId: 'channel-3',
		coinMinimalDenom: 'uiris',
	},
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
	{
		rpc: 'https://rpc-osmosis-testnet.keplr.app',
		rest: 'https://lcd-osmosis-testnet.keplr.app',
		chainId: 'osmo-testnet-5',
		chainName: 'Osmosis (Dev)',
		stakeCurrency: {
			coinDenom: 'OSMO',
			coinMinimalDenom: 'uosmo',
			coinDecimals: 6,
			coinGeckoId: 'pool:uosmo',
			coinImageUrl: staticAssetsDomain + '/public/assets/tokens/osmosis.svg',
		},
		walletUrl: 'https://dev.wallet.keplr.app/#/osmosis/stake',
		walletUrlForStaking: 'https://dev.wallet.keplr.app/#/osmosis/stake',
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('osmo'),
		currencies: [
			{
				coinDenom: 'OSMO',
				coinMinimalDenom: 'uosmo',
				coinDecimals: 6,
				coinGeckoId: 'pool:uosmo',
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/osmosis.svg',
			},
			{
				coinDenom: 'ION',
				coinMinimalDenom: 'uion',
				coinDecimals: 6,
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/ion.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'OSMO',
				coinMinimalDenom: 'uosmo',
				coinDecimals: 6,
				coinGeckoId: 'pool:uosmo',
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/osmosis.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://noop/{txHash}',
	},
	{
		rpc: 'https://rpc-cosmoshub-devnet.keplr.app',
		rest: 'https://lcd-cosmoshub-devnet.keplr.app',
		chainId: 'cosmoshub-devnet-1',
		chainName: 'Cosmos (Dev)',
		stakeCurrency: {
			coinDenom: 'ATOM',
			coinMinimalDenom: 'uatom',
			coinDecimals: 6,
			coinGeckoId: 'cosmos',
			coinImageUrl: staticAssetsDomain + '/public/assets/tokens/cosmos.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('cosmos'),
		currencies: [
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos',
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/cosmos.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos',
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/cosmos.svg',
			},
		],
		coinType: 118,
		features: ['stargate', 'ibc-transfer'],
	},
	{
		rpc: 'https://rpc-irishub-devnet.keplr.app',
		rest: 'https://lcd-irishub-devnet.keplr.app',
		chainId: 'irishub-devnet-1',
		chainName: 'IRISnet (Dev)',
		stakeCurrency: {
			coinDenom: 'IRIS',
			coinMinimalDenom: 'uiris',
			coinDecimals: 6,
			coinGeckoId: 'iris-network',
			coinImageUrl: staticAssetsDomain + '/public/assets/tokens/iris.svg',
		},
		bip44: {
			coinType: 118,
		},
		alternativeBIP44s: [
			{
				coinType: 566,
			},
		],
		bech32Config: Bech32Address.defaultBech32Config('iaa'),
		currencies: [
			{
				coinDenom: 'IRIS',
				coinMinimalDenom: 'uiris',
				coinDecimals: 6,
				coinGeckoId: 'iris-network',
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/iris.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'IRIS',
				coinMinimalDenom: 'uiris',
				coinDecimals: 6,
				coinGeckoId: 'iris-network',
				coinImageUrl: staticAssetsDomain + '/public/assets/tokens/iris.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
	},
];
