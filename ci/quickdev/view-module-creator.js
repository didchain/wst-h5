#!/usr/bin/env node

/**
 * node >= 12
 */
const chalk = require('chalk')
const fs = require('fs-extra')
const dayjs = require('dayjs')

const {
  ERROR_TEXT_COLORHEX,
  SUCCESS_TEXT_COLORHEX,
  HELP_TEXT_COLORHEX,
  PREFIX_COLORHEX,
} = require('../colors-cnsts')

const {
  getViewBasePath,
  getModPathVal,
  getModNameVal,
  showHelp,
  validModPath,
  pickFileName,
  pickFuncName,
  pickCssPreffixName,
  getCmdBooleanArgv,
  pickSassFileName,
  pickModFilePrefix,
} = require('./utils')

const {
  CMD_HELP_KEYS,
  CMD_VIEW_BASE_KEYS,
  CDM_VIEW_FORCE_FULLPATH,
  CDM_VIEW_OVERRIDE_KEYS,
  CMD_MOD_NAME_KEYS,
  CMD_MOD_PATH_KEYS,
  CDM_VIEW_NOSASS_KEYS,
  FILE_OUTPUT_OPTS,
} = require('./quick-helper')

const { R, join, src } = require('../paths')

main()
  .then((resp) => {
    console.log(
      chalk.hex(SUCCESS_TEXT_COLORHEX)('✨✨✨ congratulate! ✨✨✨\n') + resp
    )
  })
  .catch((err) => {
    console.log(err)
    if (typeof err === 'object' && err instanceof Error) {
      console.log(
        chalk.hex(ERROR_TEXT_COLORHEX).bold('❌ Error: \n') +
          chalk.hex(ERROR_TEXT_COLORHEX)(err.message)
      )
    } else {
      console.log(
        'Error: ' + err ? err.toString() : 'generate function module fail.'
      )
    }
  })

async function main() {
  let originalArgvs = process.env.npm_config_argv
    ? JSON.parse(process.env.npm_config_argv).original
    : process.argv

  showHelp(originalArgvs, comboDoc())
}

function parseParamsFromArgvs(originalArgvs) {
  let _params = {
    C_CURR_TS: dayjs().format('YY-MM-DD HH:mm dddd'),
    indexFileName: 'index',
    noSass: getCmdBooleanArgv(originalArgvs, CDM_VIEW_NOSASS_KEYS[0]),
    override: getCmdBooleanArgv(
      originalArgvs,
      CDM_VIEW_OVERRIDE_KEYS[0],
      CDM_VIEW_OVERRIDE_KEYS[1]
    ),
    forceFullpath: getCmdBooleanArgv(
      originalArgvs,
      CDM_VIEW_FORCE_FULLPATH[0],
      CDM_VIEW_FORCE_FULLPATH[1]
    ),
    baseView: getViewBasePath(originalArgvs),
  }

  _params.oriModPath = getModPathVal(originalArgvs)
  if (!validModPath(_params.oriModPath)) {
    throw new Error(
      `\tModule path required, you can used ${CMD_MOD_PATH_KEYS[0]} <module path> or ${CMD_MOD_PATH_KEYS[1]} <module path> set it.\n` +
        '\t And also can used cross-env ${CMD_MOD_PATH_KEYS[2]} = <module path> \n'
    )
  }

  _params.oriModName = getModNameVal(originalArgvs, _params.oriModPath)

  _params.modFilePrefix = pickModFilePrefix(
    _params.oriModName,
    _params.oriModPath
  )

  _params.funcName = pickFuncName(_params.oriModName, _params.oriModPath)

  _params.cssPreffix = pickCssPreffixName(_params.oriModName)

  _params.sassFileName = pickSassFileName(_params.oriModName)

  _params.modBaseDir = join(_params.baseView, _params.oriModPath)

  return _params
}

function comboDoc() {
  const wikiColorHex = HELP_TEXT_COLORHEX
  let c =
    '✨✨✨\n' +
    chalk.hex(wikiColorHex)(`Terminal arguments:\n`) +
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CMD_HELP_KEYS.join(' or ')}: show commands help.\n`
    ) +
    '\n' +
    // view base
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CMD_VIEW_BASE_KEYS.join(
        ' or '
      )}: set view base dir. this dir in src .\n\t` +
        `Like cross-env ${CMD_VIEW_BASE_KEYS[2]} = <view base dir> \n\t` +
        `👀 if ${CDM_VIEW_FORCE_FULLPATH.join(
          ' or '
        )} set true, view base dir will ignored. 👀\n`
    ) +
    '\n' +
    // mod path
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CMD_MOD_PATH_KEYS.join(
        ' or '
      )}: set module dir path, this command is required. \n\tmodulePath can only be a file path composed of lowercase letters, numbers or - .\n\t` +
        `Like ${CMD_MOD_PATH_KEYS[0]} <module path> \n\t` +
        `or ${CMD_MOD_PATH_KEYS[1]} "home/top-header" \n`
    ) +
    '\n' +
    // mod name
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CMD_MOD_NAME_KEYS.join(
        ' or '
      )}: set module name, can only be a string composed of lowercase letters, numbers or - .\n\t` +
        `Like: ${CMD_MOD_NAME_KEYS[0]} <module name> \n\t` +
        `or ${CMD_MOD_NAME_KEYS[1]} "top-header" \n`
    ) +
    '\n' +
    // no sass
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CDM_VIEW_NOSASS_KEYS.join(' or ')}: set skip generate sass file.\n`
    ) +
    '\n' +
    // force-fuulpath
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CDM_VIEW_FORCE_FULLPATH.join(' or ')}: set ignored view base dir.\n`
    ) +
    '\n' +
    // force override
    chalk.hex(PREFIX_COLORHEX)('✔ ⇨ \t') +
    chalk.hex(wikiColorHex)(
      `${CDM_VIEW_OVERRIDE_KEYS.join(' or ')}: set force override files.\n`
    ) +
    chalk
      .hex(ERROR_TEXT_COLORHEX)
      .bold(
        '\t👀 Attention: ' +
          'This command will generate file override exist files.' +
          ' 👀👀'
      ) +
    '\n'
  return c
}
