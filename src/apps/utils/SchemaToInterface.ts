type _Type = 'array' | 'integer' | 'string' | 'boolean' | 'number' | 'object'
export type Schema = {
  type: _Type
  format?: string | 'double' | 'int32' | 'int64',
  items?: Schema
  properties?: Record<string, Schema>
  enum?: string[]
  required?: string[]
  $ref?: string
}

export function SchemaToInterface({
                                    type,
                                    format,
                                    items,
                                    properties,
                                    enum: _enum,
                                    required,
                                    $ref
                                  }: Schema, schemas?: Record<string, Schema>, level = -1): string | {
  definitions: string
  _type: string
} {
  let definitions: string | null | string[] = null
  if (level == -1) {
    if (schemas) {
      definitions = []
      for (const [k, v] of Object.entries(schemas)) {
        definitions.push(`type ${k} = ` + SchemaToInterface(v, schemas, 0))
      }
      definitions = definitions.join('\n\n')
    } else {
      definitions = ''
    }
  }

  if ($ref) {
    if (schemas) {
      if (definitions) {
        return {
          definitions,
          _type: $ref.split('/').slice(-1)[0]
        }
      }
      return $ref.split('/').slice(-1)[0]
    }
    return 'any'
  }
  if (!type) {
    if (definitions) {
      return {
        definitions,
        _type: 'any'
      }
    }
    return 'any'
  }
  if (type === 'object') {
    if (!properties) {
      if (definitions) {
        return {
          definitions,
          _type: 'Record<string, any>'
        }
      }
      return 'Record<string, any>'
    }
    if (level === -1) {
      level = 0
    }
    if (definitions) {
      return {
        definitions,
        _type: '{\n' + Object.keys(properties as Record<string, Schema>).map(property => {
          return `${'  '.repeat(level + 1)}${property}${required ? (required.includes(property) ? '' : '?') : '?'}: ${SchemaToInterface(properties[property], schemas, level + 1)}\n`
        }).join('') + '  '.repeat(level) + '}'
      }
    }
    return '{\n' + Object.keys(properties as Record<string, Schema>).map(property => {
      return `${'  '.repeat(level + 1)}${property}${required ? (required.includes(property) ? '' : '?') : '?'}: ${SchemaToInterface(properties[property], schemas, level + 1)}\n`
    }).join('') + '  '.repeat(level) + '}'
  }
  if (type === 'array') {
    if (!items) {
      if (definitions) {
        return {
          definitions,
          _type: 'any[]'
        }
      }
      return 'any[]'
    }
    if (definitions) {
      return {
        definitions,
        _type: SchemaToInterface(items, schemas, 0) + '[]'
      }
    }
    return SchemaToInterface(items, schemas, 0) + '[]'
  }
  if (type === 'string') {
    if (definitions) {
      return {
        definitions,
        _type: _enum
          ? '(string | ' + _enum.map(i => '"' + i + '"').join(' | ') + ')'
          : 'StringProperty'
      }
    }
    return _enum
      ? '(string | ' + _enum.map(i => '"' + i + '"').join(' | ') + ')'
      : 'StringProperty'
  }
  if (type === 'number' || type === 'integer') {
    if (definitions) {
      return {
        definitions,
        _type: 'number' + (format ? ' /* schema format: ' + format + '*/' : '')
      }
    }
    return 'number' + (format ? ' /* schema format: ' + format + '*/' : '')
  }
  if (Array.isArray(type)) {
    if (definitions) {
      return {
        definitions,
        _type: type.map(type => SchemaToInterface({type}, schemas, level)).join(' | ')
      }
    }
    return type.map(type => SchemaToInterface({type}, schemas, level)).join(' | ')
  }
  if (definitions) {
    return {
      definitions,
      _type: type
    }
  }
  return type
}