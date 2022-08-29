
export const DEFAULT_PLACEMENT = 'bottom'

export const PLACEMENT_NAME = 'tooltip_pm'

export const PLACEMENT_DICT = [
  'top',
  'top-start',
  'top-end',
  DEFAULT_PLACEMENT,
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end'
]

export const getPlacementClass = (pm = DEFAULT_PLACEMENT, name = PLACEMENT_NAME) =>
  PLACEMENT_DICT.reduce((x, y) => ({ ...x, [y]: [name, y].join('_') }), {})[pm || DEFAULT_PLACEMENT]