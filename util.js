const Utils = {
    formatTitle(title = '', {padSize = 100, padIndicator = '=', includeBox = false} = {}){
        const titleLength = title.length;
        const padSide = parseInt((padSize - titleLength - 3) / 2);

        const t = `${padIndicator.repeat(padSide + 2)} ${title.toUpperCase()} ${padIndicator.repeat(padSide + 2)}`;
        
        if(includeBox){
            return `\n${padIndicator.repeat(padSize + 2)}\n${t}\n${padIndicator.repeat(padSize + 2)}\n`
        }else{
            return t
        }
    },
    close(padIndicator = '*I*', padSize = 34){
        return `${'\n'.repeat(1)}${padIndicator.repeat(padSize)}${'\n'.repeat(8)}`
    }
}

export default Utils