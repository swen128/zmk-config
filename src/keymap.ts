import { keys, behaviors, type Keymap, type HoldTapDefinition } from 'keymap-ts';
import {glove80Layer} from 'keymap-ts/glove80';
import {bt0, bt1, bt2, bt3, magic} from "./glove80";
import {copySelection, deleteSelection, selectLine, smartLeft, smartRight, smartSelect} from './cursor';

const {mo, mt, lt, ht, sk, out, rgb_ug, bt, bootloader, sys_reset, to, trans, none, caps_word} = behaviors;

const {
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
  N0, N1, N2, N3, N4, N5, N6, N7, N8, N9,
  F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F18, F19, F20, F24,
  UP, DOWN, LEFT, RIGHT,
  TAB, RET, SPACE, BSPC, ESC,
  LSHFT, RSHFT, LCTRL, RCTRL, LALT, LGUI, RALT, RGUI,
  COMMA, DOT, SEMI, SQT, GRAVE, MINUS, EQUAL, LBKT, RBKT, BSLH, FSLH,
  C_PP, C_NEXT, C_PREV, C_PLAY, C_STOP, C_EJECT, C_MEDIA_HOME, C_VOL_UP, C_VOL_DN, C_MUTE,
  LC, LA, LG, LS, RA,
} = keys;

const pinky: HoldTapDefinition = {
  name: 'pinky',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 200,
  quickTapMs: 300
};

const copy: HoldTapDefinition = {
  name: 'copy',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 300,
  flavor: 'tap-preferred'
};

const ltNum: HoldTapDefinition = {
  name: 'lt_num',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 170,
  flavor: 'tap-preferred',
  quickTapMs: 300,
  requirePriorIdleMs: 100,
  holdTriggerKeyPositions: [60, 59, 41, 42, 43, 61, 31, 30, 29, 44, 62]
};

const hmrLeft: HoldTapDefinition = {
  name: 'HMR_left',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 170,
  flavor: 'tap-preferred',
  quickTapMs: 300,
  requirePriorIdleMs: 100,
  holdTriggerKeyPositions: [58, 40, 28, 16, 18, 6, 5, 17, 19, 7, 9, 21, 20, 8, 30, 29, 41, 42, 43, 32, 31, 44, 33, 45, 63, 79, 78, 62, 77, 61, 59, 76, 60, 75, 57, 56, 55, 72, 73, 74, 52, 53, 54, 71, 70, 69]
};

const hmrRight: HoldTapDefinition = {
  name: 'HMR_right',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 170,
  flavor: 'tap-preferred',
  quickTapMs: 300,
  requirePriorIdleMs: 100,
  holdTriggerKeyPositions: [15, 3, 4, 14, 13, 12, 2, 1, 0, 10, 11, 23, 22, 24, 25, 26, 27, 38, 39, 37, 36, 34, 47, 35, 46, 64, 65, 66, 48, 49, 67, 68, 50, 51, 54, 71, 70, 53, 52, 69]
};

const ltSpace: HoldTapDefinition = {
  name: 'lt_space',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 170,
  flavor: 'balanced',
  quickTapMs: 150
};

const thumb: HoldTapDefinition = {
  name: 'thumb',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 200,
  quickTapMs: 300
};

const modCapsWord: HoldTapDefinition = {
  name: 'mod_caps_word',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 200,
  flavor: 'tap-preferred'
};

const leftPinkyCtrl = ht(pinky, LCTRL, TAB);
const rightPinkyCtrl = ht(pinky, RCTRL, RET);
const numberLayer = ht(ltNum, mo('Number'), D);
const leftHomeShift = ht(hmrLeft, LSHFT, F);
const rightHomeShift = ht(hmrRight, RSHFT, J);
const cursorThumb = ht(thumb, mo('Cursor'), BSPC);
const symbolSpace = ht(ltSpace, mo('Symbol'), SPACE);
const capsWordKey = ht(modCapsWord, LALT, caps_word);

const HYPER = LG(LA(LC(LSHFT)))

const keymap: Keymap = {
  includes: [
    'behaviors.dtsi',
    'dt-bindings/zmk/outputs.h',
    'dt-bindings/zmk/keys.h',
    'dt-bindings/zmk/bt.h',
    'dt-bindings/zmk/rgb.h'
  ],
  layers: [
    glove80Layer({
      name: 'Base',
      layout: {
        left: {
          finger: [
            [F1, F2, F3, F4, F5],
            [LALT, N1, N2, N3, N4, N5],
            [LGUI, Q, W, E, R, T],
            [leftPinkyCtrl, A, S, numberLayer, leftHomeShift, G],
            [mt(LSHFT, LS(TAB)), Z, X, C, V, B],
            [magic, sk(LALT), sk(LGUI), sk(LCTRL), sk(LSHFT)]
          ],
          thumb: [
            [lt('Function', F11), UP, DOWN],
            [cursorThumb, mt(LGUI, ESC), capsWordKey]
          ]
        },
        right: {
          finger: [
            [F6, F7, F8, F9, F10],
            [N6, N7, N8, N9, N0, mt(RALT, RA(RET))],
            [Y, U, I, O, P, mt(LGUI, LG(RET))],
            [H, rightHomeShift, K, L, SEMI, rightPinkyCtrl],
            [N, M, COMMA, DOT, FSLH, mt(RSHFT, LS(RET))],
            [sk(RSHFT), sk(RCTRL), sk(LGUI), sk(RALT), magic]
          ],
          thumb: [
            [LEFT, RIGHT, F12],
            [mt(RGUI, LG(F12)), LC(LA(SPACE)), symbolSpace]
          ]
        }
      }
    }),

    glove80Layer({
      name: 'Cursor',
      layout: {
        left: {
          finger: [
            [none, none, none, none, none],
            [trans, none, none, none, none, none],
            [trans, smartSelect, smartLeft, UP, smartRight, SPACE],
            [LC(TAB), sk(LSHFT), LEFT, DOWN, RIGHT, RET],
            [LC(LS(TAB)), LG(Z), LG(LS(Z)), ht(copy, LG(X), LG(C)), to('Selection'), BSPC],
            [none, trans, trans, trans, trans]
          ],
          thumb: [
            [none, none, none],
            [none, none, none]
          ]
        },
        right: {
          finger: [
            [none, none, none, none, none],
            [none, none, none, none, none, trans],
            [none, none, none, none, none, trans],
            [none, sk(LSHFT), sk(LCTRL), sk(LGUI), sk(HYPER), trans],
            [none, none, none, none, none, trans],
            [none, trans, trans, trans, trans]
          ],
          thumb: [
            [none, none, none],
            [none, none, LC(Q)]
          ]
        }
      }
    }),

    glove80Layer({
      name: 'Symbol',
      layout: {
        left: {
          finger: [
            [none, none, none, none, none],
            [trans, N1, N2, N3, N4, N5],
            [trans, none, LBKT, RBKT, LS(MINUS), none],
            [trans, LS(N8), LS(N9), LS(N0), MINUS, LS(BSLH)],
            [trans, none, LS(N2), LS(N3), LS(EQUAL), LS(N7)],
            [none, trans, trans, trans, trans]
          ],
          thumb: [
            [trans, trans, trans],
            [LS(SQT), SQT, GRAVE]
          ]
        },
        right: {
          finger: [
            [none, none, none, none, none],
            [N6, N7, N8, N9, N0, trans],
            [none, LS(N5), LS(N6), LS(N4), none, trans],
            [LS(COMMA), EQUAL, LS(DOT), LS(LBKT), LS(RBKT), trans],
            [none, LS(N1), BSLH, LS(GRAVE), none, trans],
            [none, trans, trans, trans, trans]
          ],
          thumb: [
            [none, none, none],
            [none, none, none]
          ]
        }
      }
    }),

    glove80Layer({
      name: 'Number',
      layout: {
        left: {
          finger: [
            [trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans]
          ],
          thumb: [
            [trans, trans, trans],
            [trans, trans, trans]
          ]
        },
        right: {
          finger: [
            [trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, N7, N8, N9, trans, trans],
            [trans, N4, N5, N6, N0, trans],
            [trans, N1, N2, N3, N0, trans],
            [trans, trans, trans, trans, trans]
          ],
          thumb: [
            [trans, trans, trans],
            [trans, trans, trans]
          ]
        }
      }
    }),

    glove80Layer({
      name: 'Function',
      layout: {
        left: {
          finger: [
            [none, none, none, none, none],
            [none, none, none, none, none, none],
            [none, none, none, none, none, none],
            [none, LALT, LGUI, LCTRL, LSHFT, none],
            [none, none, none, none, none, none],
            [none, none, none, none, none]
          ],
          thumb: [
            [none, none, none],
            [none, none, none]
          ]
        },
        right: {
          finger: [
            [none, none, none, none, none],
            [C_MEDIA_HOME, C_PLAY, C_PREV, C_NEXT, C_STOP, C_EJECT],
            [F20, F7, F8, F9, F10, F13],
            [F19, F4, F5, F6, F11, F14],
            [F18, F1, F2, F3, F12, F15],
            [F24, F24, F24, F24, F24]
          ],
          thumb: [
            [C_PP, C_NEXT, C_PREV],
            [C_VOL_UP, C_VOL_DN, C_MUTE]
          ]
        }
      }
    }),

    glove80Layer({
      name: 'Magic',
      layout: {
        left: {
          finger: [
            [bt('BT_CLR'), none, none, none, none],
            [to('Base'), to('Cursor'), to('Symbol'), to('Number'), to('Function'), to('Magic')],
            [none, rgb_ug('RGB_SPI'), rgb_ug('RGB_SAI'), rgb_ug('RGB_HUI'), rgb_ug('RGB_BRI'), rgb_ug('RGB_TOG')],
            [bootloader, rgb_ug('RGB_SPD'), rgb_ug('RGB_SAD'), rgb_ug('RGB_HUD'), rgb_ug('RGB_BRD'), rgb_ug('RGB_EFF')],
            [sys_reset, none, none, none, none, none],
            [none, none, none, none, none]
          ],
          thumb: [
            [bt2, bt3, none],
            [bt0, bt1, out('OUT_USB')]
          ]
        },
        right: {
          finger: [
            [none, none, none, none, bt('BT_CLR_ALL')],
            [to('Base'), to('Base'), to('Selection'), none, none, none],
            [none, none, none, none, none, none],
            [none, none, none, none, none, bootloader],
            [none, none, none, none, none, sys_reset],
            [none, none, none, none, none]
          ],
          thumb: [
            [none, none, none],
            [none, none, none]
          ]
        }
      }
    }),

    glove80Layer({
      name: 'Selection',
      layout: {
        left: {
          finger: [
            [trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, trans, LS(LA(RIGHT)), trans, trans, trans],
            [trans, trans, trans, deleteSelection, trans, trans],
            [trans, trans, trans, trans, selectLine, LS(LA(LEFT))],
            [trans, trans, trans, trans, trans]
          ],
          thumb: [
            [trans, trans, trans],
            [trans, to('Base'), trans]
          ]
        },
        right: {
          finger: [
            [trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [copySelection, trans, trans, trans, trans, trans],
            [LS(LEFT), LS(DOWN), LS(UP), LS(RIGHT), trans, trans],
            [trans, trans, trans, trans, trans, trans],
            [trans, trans, trans, trans, trans]
          ],
          thumb: [
            [trans, trans, trans],
            [trans, trans, trans]
          ]
        }
      }
    })
  ]
};

export default keymap;
