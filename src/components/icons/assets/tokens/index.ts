import { _Default } from '@components/icons/assets/tokens/_Default'
import { dBCH } from './dBCH'
import { dBTC } from './dBTC'
import { BTC } from './BTC'
import { BCH } from './BCH'
import { LTC } from './LTC'
import { dDFI } from './dDFI'
import { dDOGE } from './dDOGE'
import { dETH } from './dETH'
import { DFI } from './DFI'
import { dLTC } from './dLTC'
import { dUSDC } from './dUSDC'
import { dUSDT } from './dUSDT'
import { dTSLA } from './dTSLA'
import { DUSD } from './DUSD'
import { dAAPL } from './dAAPL'
import { dAMD } from './dAMD'
import { dGME } from './dGME'
import { dBABA } from './dBABA'
import { dGOOG } from './dGOOG'
import { dPLTR } from './dPLTR'
import { dARKK } from './dARKK'
import { dSPY } from './dSPY'
import { dQQQ } from './dQQQ'
import { dGLD } from './dGLD'
import { dSLV } from './dSLV'
import { dPDBC } from './dPDBC'
import { dVNQ } from './dVNQ'
import { dURTH } from './dURTH'
import { dTLT } from './dTLT'
import { SVGProps } from 'react'
import { USDT } from '@components/icons/assets/tokens/USDT'
import { USDC } from '@components/icons/assets/tokens/USDC'
import { ETH } from '@components/icons/assets/tokens/ETH'
import { DOGE } from '@components/icons/assets/tokens/DOGE'

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  _UTXO: DFI,
  DFI: DFI,
  'DFI (UTXO)': DFI,
  'DFI (Token)': dDFI,
  BTC: BTC,
  BCH: BCH,
  LTC: LTC,
  USDT: USDT,
  USDC: USDC,
  ETH: ETH,
  DOGE: DOGE,
  dBCH: dBCH,
  dBTC: dBTC,
  dDFI: dDFI,
  dDOGE: dDOGE,
  dETH: dETH,
  dLTC: dLTC,
  dUSDT: dUSDT,
  dUSDC: dUSDC,
  dAAPL: dAAPL,
  dAMD: dAMD,
  dGME: dGME,
  dBABA: dBABA,
  dGOOG: dGOOG,
  dGOOGL: dGOOG,
  dDUSD: DUSD,
  DUSD: DUSD,
  dPLTR: dPLTR,
  dARKK: dARKK,
  dSPY: dSPY,
  dQQQ: dQQQ,
  dGLD: dGLD,
  dSLV: dSLV,
  dPDBC: dPDBC,
  dVNQ: dVNQ,
  dURTH: dURTH,
  dTLT: dTLT,
  dTSLA: dTSLA
}

// TODO(@defich): move assets into it's own repo where anyone can create pull request into.
//  Following a vector specification guideline, this allows anyone to create PR into that repo.

/**
 * @param {string} symbol of the asset icon
 * @return {(props: SVGProps<SVGSVGElement>) => JSX.Element}
 */
export function getAssetIcon (symbol: string): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Icon = mapping[`d${symbol}`]
  if (Icon === undefined) {
    return _Default(symbol)
  }
  return Icon
}

/**
 * @param {string} symbol of the token icon, AKA DCT
 * @return {(props: SVGProps<SVGSVGElement>) => JSX.Element}
 */
export function getTokenIcon (symbol: string): (props: { className: string }) => JSX.Element {
  return _Default(symbol)
}

/**
 * @param {string} symbol of the native asset icon
 * @return {(props: SVGProps<SVGSVGElement>) => JSX.Element}
 */
export function getNativeIcon (symbol: string): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Icon = mapping[symbol]
  if (Icon === undefined) {
    return _Default(symbol)
  }
  return Icon
}
