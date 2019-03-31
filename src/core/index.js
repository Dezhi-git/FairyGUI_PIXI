import {radians} from './physic';
import {hexToDecimal, rgbToHex} from './color';
import {bool} from '../util';

export function position(x, y) {
  return {x, y};
}

export function size(width, height) {
  return {width, height};
}

export function scale(x, y) {
  return {x, y};
}

export function alpha(alpha) {
  return {alpha};
}

export function rotation(_rotation) {
  const rotation = radians(_rotation);
  return {rotation};
}

export function skew(x, y) {
  return {
    x: -1 * radians(x),
    y: radians(y),
  };
}

export function tint({r, g, b}) {
  return hexToDecimal(
      rgbToHex(r, g, b)
  );
}

export function pivot(x, y) {
  return {x, y};
}

export function visible(visible) {
  return {visible: bool(visible)};
}

export * from './color';
export * from './physic';