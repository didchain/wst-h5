/** File write out options */
const FILE_OUTPUT_OPTS = {
  encoding: 'utf8',
}

module.exports = {
  FILE_OUTPUT_OPTS,
  CMD_HELP_KEYS: ['--help', '-h'],
  CMD_MOD_PATH_KEYS: ['--mod-path', '-m', 'MOD_PATH'],
  CMD_MOD_NAME_KEYS: ['--mod-name', '-n', 'MOD_NAME'],
  CMD_VIEW_BASE_KEYS: ['--view-base', '-v', 'VIEW_BASE'],
  CDM_VIEW_FORCE_FULLPATH: ['--force-fullpath', '-f'],
  CDM_VIEW_OVERRIDE_KEYS: ['--override', '-o'],
  CDM_VIEW_OUTPUT_KEYS: ['--output', '-o'],
  CDM_VIEW_NOSASS_KEYS: ['--no-sass'],
  RESERVED_KEYWORDS_4FILE: ['index'],
  RESERVED_KEYWORDS_4NAME: ['index', 'page'],
}
