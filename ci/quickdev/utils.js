const chalk = require('chalk')
const { capitalize } = require('lodash')

const { ERROR_TEXT_COLORHEX } = require('../colors-cnsts')
const {
  CMD_HELP_KEYS,
  CMD_MOD_PATH_KEYS,
  CMD_MOD_NAME_KEYS,
  CMD_VIEW_BASE_KEYS,
  RESERVED_KEYWORDS_4FILE,
  RESERVED_KEYWORDS_4NAME,
  CDM_VIEW_FORCE_FULLPATH,
} = require('./quick-helper')

const MOD_PATH_REGEX = /^[a-z]+([a-z0-9]*([\-\/]?)(?!\2))*[a-z0-9]+$/
const MOD_NAME_REGEX = /^[a-z]+([a-z0-9]*([\-]?)(?!\2))*[a-z0-9]+$/

/**
 *
 * @param {Array} originalArgvs array[string]
 */
function getModPathVal(originalArgvs) {
  if (typeof originalArgvs !== 'object' && !originalArgvs.length) {
    exitProgress(`Parse argument originalArgvs illegal.`)
  }

  const fullKey = CMD_MOD_PATH_KEYS[0]
  const shortKey = CMD_MOD_PATH_KEYS[1]
  const crossKey = CMD_MOD_PATH_KEYS.length > 2 ? CMD_MOD_PATH_KEYS[2] : ''

  let _argv = crossKey && process.env ? process.env[crossKey] : ''

  const _len = originalArgvs.length
  let _idx = -1
  _idx = originalArgvs.findIndex((argv) => argv === shortKey)
  if (_idx + 1 < _len && _idx > 0) {
    _argv = originalArgvs[_idx + 1]
  }

  _idx = originalArgvs.findIndex((argv) => argv === fullKey)
  if (_idx + 1 < _len && _idx > 0) {
    _argv = originalArgvs[_idx + 1]
  }

  if (!validModPath(_argv)) {
    let msg =
      'module path required.\n' +
      `Please used command ${CMD_MOD_PATH_KEYS[0]} <module path> or ${CMD_MOD_PATH_KEYS[1]} <module path>.\n`
    throw Error(msg)
  }

  return _argv
}

function getModNameVal(originalArgvs) {
  if (typeof originalArgvs !== 'object' && !originalArgvs.length) {
    exitProgress(`Parse argument originalArgvs illegal.`)
  }

  const fullKey = CMD_MOD_NAME_KEYS[0]
  const shortKey = CMD_MOD_NAME_KEYS[1]
  const crossKey = CMD_MOD_NAME_KEYS.length > 2 ? CMD_MOD_NAME_KEYS[2] : ''

  let _argv = crossKey && process.env ? process.env[crossKey] : ''

  const _len = originalArgvs.length
  let _idx = -1
  _idx = originalArgvs.findIndex((argv) => argv === shortKey)
  if (_idx + 1 < _len && _idx > 0) {
    _argv = originalArgvs[_idx + 1]
  }

  _idx = originalArgvs.findIndex((argv) => argv === fullKey)
  if (_idx + 1 < _len && _idx > 0) {
    _argv = originalArgvs[_idx + 1]
  }

  // if (!_argv && modPath) {
  //   // make modPath last part set modName
  //   const _parts = modPath.split(/\//).filter(Boolean)
  //   _parts.length && (_argv = _parts[_parts.length - 1])
  // }

  return _argv
}

function getViewBasePath(originalArgvs) {
  if (typeof originalArgvs !== 'object' && !originalArgvs.length) {
    exitProgress(`Parse argument originalArgvs illegal.`)
  }

  if (
    originalArgvs.includes(CDM_VIEW_FORCE_FULLPATH[0]) ||
    originalArgvs.includes(CDM_VIEW_FORCE_FULLPATH[1])
  ) {
    // force fullpath
    return ''
  }

  const fullKey = CMD_VIEW_BASE_KEYS[0]
  const shortKey = CMD_VIEW_BASE_KEYS[1]
  const crossKey = CMD_VIEW_BASE_KEYS.length > 2 ? CMD_VIEW_BASE_KEYS[2] : ''

  let _argv = crossKey && process.env ? process.env[crossKey] : ''

  const _len = originalArgvs.length
  let _idx = -1
  _idx = originalArgvs.findIndex((argv) => argv === shortKey)
  if (_idx + 1 < _len && _idx > 0) {
    _argv = originalArgvs[_idx + 1]
  }

  _idx = originalArgvs.findIndex((argv) => argv === fullKey)
  if (_idx + 1 < _len && _idx > 0) {
    _argv = originalArgvs[_idx + 1]
  }

  return _argv || ''
}

/**
 *
 * @param {string} oriModName
 * @returns string
 */
function pickFileName(oriModName, oriModPath) {
  if (oriModName) return oriModName
  return pickLastPath(oriModPath)
}

function pickLastPath(modPath) {
  const _parts = modPath.split(/\//)
  let _last = _parts[_parts.length - 1]
  return _last
}

/**
 *
 * @param {string} oriModName -n argv
 * @param {string} oriModPath
 * @returns
 */
function pickFuncName(oriModName, oriModPath) {
  if (oriModName) {
    return oriModName
      .split(/-/)
      .map((t) => capitalize(t))
      .join('')
  }

  const lastModPath = pickLastPath(oriModPath)

  const _parts = lastModPath.split(/-/).filter(Boolean)
  let _parts2 = _parts.filter((t) => !RESERVED_KEYWORDS_4NAME.includes(t))

  if (_parts2.length) return _parts2.map((t) => capitalize(t)).join('')

  return _parts.map((t) => capitalize(t)).join('')
}

function pickCssPreffixName(oriModName, oriModPath) {
  if (oriModName) return oriModName

  const lastModPath = pickLastPath(oriModPath)

  const _parts = lastModPath
    .split(/-/)
    .filter(Boolean)
    .filter((t) => !RESERVED_KEYWORDS_4NAME.includes(t))

  const len = _parts.length
  if (len === 0) return lastModPath

  return len > 2 ? _parts.slice(0, 2).join('-') : _parts.slice(0, 1)[0]
}

function pickSassFileName(oriModName, oriModPath) {
  if (oriModName) return oriModName
  const lastModPath = pickLastPath(oriModPath)

  const _parts = lastModPath
    .split(/-/)
    .filter(Boolean)
    .filter((t) => !RESERVED_KEYWORDS_4FILE.includes(t))

  return _parts.length ? _parts.join('-') : lastModPath
}

function validModPath(modPath) {
  if (!modPath || !modPath.trim().length) return false
  return new RegExp(MOD_PATH_REGEX).test(modPath)
}

function validModName(modName) {
  return new RegExp(MOD_NAME_REGEX).test(modName)
}

function exitProgress(text) {
  console.error(chalk.hex(ERROR_TEXT_COLORHEX)(`⛔⛔⛔\t${text}\t`))
  process.exit(0)
}

function getCmdBooleanArgv(originalArgvs, longKey, shortKey) {
  if (typeof originalArgvs !== 'object' && !originalArgvs.length) {
    exitProgress(`Parse argument originalArgvs illegal.`)
  }
  let _b = false

  if (shortKey && originalArgvs.includes(shortKey)) {
    _b = true
  }

  if (longKey && originalArgvs.includes(longKey)) {
    _b = true
  }

  return _b
}

function pickModFilePrefix(modName, modPath) {
  const _modPathParts = modPath.split(/\\/).filter(Boolean)
  const _alter =
    _modPathParts.length >= 2 ? _modPathParts[_modPathParts.length - 2] : ''

  let _nparts = modName
    .split(/-/)
    .filter(Boolean)
    .filter((t) => !RESERVED_KEYWORDS_4NAME.includes(t))

  !_nparts.length &&
    _alter &&
    (_nparts = _alter
      .split(/-/)
      .filter(Boolean)
      .filter((t) => !RESERVED_KEYWORDS_4NAME.includes(t)))

  !_nparts.length && (_nparts = modName.split(/-/).filter(Boolean))

  _nparts.length > 2 && (_nparts = _nparts.slice(0, 2))

  return _nparts.join('-')
}

function showHelp(originalArgvs, helpDoc) {
  let idx = originalArgvs.findIndex((argv) => argv === CMD_HELP_KEYS[0])
  let cidx = originalArgvs.findIndex((argv) => argv === CMD_HELP_KEYS[1])
  if (idx > 0 || cidx > 0) {
    console.log(helpDoc)
    process.exit(0)
  }
}

module.exports = {
  MOD_PATH_REGEX,
  MOD_NAME_REGEX,
  showHelp,
  getModPathVal,
  validModPath,
  getModNameVal,
  validModName,
  pickFileName,
  pickCssPreffixName,
  pickFuncName,
  getViewBasePath,
  getCmdBooleanArgv,
  pickSassFileName,
  pickModFilePrefix,
}
