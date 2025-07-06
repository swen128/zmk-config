import {behaviors} from 'keymap-ts';

const {bt, ht, macro, mo, out, rgb_ug} = behaviors;

export const bt0 = macro('bt_0')
  .behavior(out('OUT_BLE'))
  .behavior(bt('BT_SEL', 0))
  .build();

export const bt1 = macro('bt_1')
  .behavior(out('OUT_BLE'))
  .behavior(bt('BT_SEL', 1))
  .build();

export const bt2 = macro('bt_2')
  .behavior(out('OUT_BLE'))
  .behavior(bt('BT_SEL', 2))
  .build();

export const bt3 = macro('bt_3')
  .behavior(out('OUT_BLE'))
  .behavior(bt('BT_SEL', 3))
  .build();

const rgbStatus = macro('rgb_ug_status_macro')
  .behavior(rgb_ug('RGB_STATUS'));

export const magic = ht({
  name: 'magic',
  compatible: 'zmk,behavior-hold-tap',
  flavor: 'tap-preferred',
  tappingTermMs: 200
}, mo('Magic'), rgbStatus.build());
