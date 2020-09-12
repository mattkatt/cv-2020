export function camelToSnake(val:string):string {
    return val.replace(
        /([A-Z])/g,
        group => '_' + group.toLowerCase()
    )
}

export function snakeToCamel(val:string):string {
    return val.replace(
        /([-_][a-z])/g,
        group => group.toUpperCase()
            .replace('-', '')
            .replace('_', '')
    )
}