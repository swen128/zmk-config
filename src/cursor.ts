import {type HoldTapDefinition, behaviors, keys} from "keymap-ts";

const {HOME, END, LEFT, RIGHT, DEL, C, LG, LA, LS} = keys;
const {ht, macro, to} = behaviors;

const smartMove: HoldTapDefinition = {
  name: 'smart_move',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 150,
  flavor: 'tap-preferred',
  quickTapMs: 500
};

export const smartLeft = ht(smartMove, LG(HOME), LA(LEFT));

export const smartRight = ht(smartMove, LG(RIGHT), LA(RIGHT));

const selectWord = macro('select_word')
  .tap(LA(LEFT))
  .tap(LA(RIGHT))
  .tap(LS(LA(LEFT)))
  .build();
export const selectLine = macro('select_line')
  .tap(HOME)
  .tap(LS(END))
  .build();
export const smartSelect = ht({
  name: 'smart_select',
  compatible: 'zmk,behavior-hold-tap',
  tappingTermMs: 150,
  flavor: 'tap-preferred',
  quickTapMs: 500
}, selectLine, selectWord)

export const deleteSelection = macro('delete_selection')
  .tap(DEL)
  .behavior(to('Base'))
  .build();

export const copySelection = macro('copy_selection')
  .tap(LG(C))
  .behavior(to('Base'))
  .build();
