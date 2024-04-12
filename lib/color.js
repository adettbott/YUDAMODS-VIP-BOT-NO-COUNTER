const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const yudamodsLog = (text, color) => {
	return !color ? chalk.greenBright('[ YUDAMODS ] ') + chalk.magentaBright(text) : chalk.greenBright('[ YUDAMODS ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
    yudamodsLog
}
