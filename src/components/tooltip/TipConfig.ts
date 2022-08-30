
import { reduceConfigList, DEFAULT_KEY_LIST } from './util/useConfigList'
import type { ConfigItem, ConfigList, ConfigObject } from './util/useConfigList'
export const DEFAULT_PLACEMENT = 'bottom'

export const PLACEMENT_NAME = 'tooltip_pm'

const createPlacementLabel = (label: string, name: string) => [name, label].join('_')

const [LABEL_KEY] = DEFAULT_KEY_LIST
export const getPlacementLabel = (placement: string, dict: ConfigObject) => dict[placement][LABEL_KEY]


const getStartLeft = (bodyRect: DOMRect) => bodyRect.x + 'px'
const getStartTop = (bodyRect: DOMRect) => bodyRect.y + 'px'

const getCenterLeft = (bodyRect: DOMRect, contentRect: DOMRect) => bodyRect.x + bodyRect.width / 2 - contentRect.width / 2 + 'px'
const getCenterTop = (bodyRect: DOMRect, contentRect: DOMRect) => bodyRect.y - contentRect.height / 2 + bodyRect.height / 2 + 'px'

const getEndLeft = (bodyRect: DOMRect, contentRect: DOMRect) => bodyRect.x - (contentRect.width - bodyRect.width) + 'px'
const getLeftLeft = (bodyRect: DOMRect, contentRect: DOMRect) => bodyRect.x - contentRect.width - 10 + 'px'
const getRightLeft = (bodyRect: DOMRect) => bodyRect.x + bodyRect.width + 10 + 'px'

const getTopTop = (bodyRect: DOMRect, contentRect: DOMRect) => bodyRect.y - contentRect.height - 10 + 'px'
const getEndTop = (bodyRect: DOMRect) => bodyRect.y - bodyRect.height / 2 + 'px'
export const getPlacementDict = (name: string = PLACEMENT_NAME) => reduceConfigList(([
  ['top', 'top', {
    getRect: (bodyEl, contentEl) => {
      const left = getCenterLeft(bodyEl, contentEl)
      const top = getTopTop(bodyEl, contentEl)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['top-start', 'top-start', {
    getRect: (bodyEl, contentEl) => {
      const left = getStartLeft(bodyEl)
      const top = getTopTop(bodyEl, contentEl)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['top-end', 'top-end', {
    getRect: (bodyRect, contentRect) => {
      const left = getEndLeft(bodyRect, contentRect)
      const top = getTopTop(bodyRect, contentRect)
      return `left:${left}; top:${top} `
    }
  }
  ],
  [DEFAULT_PLACEMENT, DEFAULT_PLACEMENT, {
    getRect: (bodyRect, contentRect) => {
      const left = getCenterLeft(bodyRect, contentRect)
      const top = bodyRect.y + contentRect.height + 'px'
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['bottom-start', 'bottom-start', {
    getRect: (bodyRect, contentRect) => {
      const left = getStartLeft(bodyRect)
      const top = bodyRect.y + contentRect.height + 'px'
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['bottom-end', 'bottom-end', {
    getRect: (bodyRect, contentRect) => {
      const left = getEndLeft(bodyRect, contentRect)
      const top = bodyRect.y + contentRect.height + 'px'
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['left', 'left', {
    getRect: (bodyRect, contentRect) => {
      const left = getLeftLeft(bodyRect, contentRect)
      const top = getCenterTop(bodyRect, contentRect)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['left-start', 'left-start', {
    getRect: (bodyRect, contentRect) => {
      const left = getLeftLeft(bodyRect, contentRect)
      const top = getStartTop(bodyRect)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['left-end', 'left-end', {
    getRect: (bodyRect, contentRect) => {
      const left = getLeftLeft(bodyRect, contentRect)
      const top = getEndTop(bodyRect)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['right', 'right', {
    getRect: (bodyRect, contentRect) => {
      const left = getRightLeft(bodyRect)
      const top = getCenterTop(bodyRect, contentRect)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['right-start', 'right-start', {
    getRect: (bodyRect) => {
      const left = getRightLeft(bodyRect)
      const top = getStartTop(bodyRect)
      return `left:${left}; top:${top} `
    }
  }
  ],
  ['right-end', 'right-end', {
    getRect: (bodyRect) => {
      const left = getRightLeft(bodyRect)
      const top = getEndTop(bodyRect)
      return `left:${left}; top:${top} `
    }
  }
  ]
]).map((item) => {
  const [label, ...itemArg] = item
  return [createPlacementLabel(label as string, name), ...itemArg] as ConfigItem
}) as ConfigList)
