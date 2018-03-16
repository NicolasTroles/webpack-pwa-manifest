import { PresetError } from '../errors'

const presets = {
  dir: ['ltr', 'rtl', 'auto'],
  orientation: [
    'any', 'natural', 'landscape', 'landscape-primary',
    'landscape-secondary', 'portrait', 'portrait-primary',
    'portrait-secondary'
  ],
  display: [
    'fullscreen', 'standalone', 'minimal-ui', 'browser'
  ]
}

function hasPreset (key, value) {
  return presets[key].indexOf(value) >= 0
}

export default function (config, ...properties) {
  if (!config) return
  properties.forEach((property) => {
    const value = config[property]
    if (value && !hasPreset(property, value)) throw new PresetError(property, value)
  })
}
