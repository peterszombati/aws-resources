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

export function SchemaToInterface_deep({
                                    type,
                                    format,
                                    items,
                                    properties,
                                    enum: _enum,
                                    required,
                                    $ref
                                  }: Schema, schemas?: Record<string, Schema>, level = 0): string {
  if ($ref) {
    if (schemas) {
      const schema = schemas[$ref.split('/').slice(-1)[0]]
      if (schema) {
        return SchemaToInterface_deep(schema, schemas, level)
      }
    }
    return 'any'
  }
  if (!type) {
    return 'any'
  }
  if (type === 'object') {
    if (!properties) {
      return 'Record<string, any>'
    }
    return '{\n' + Object.keys(properties as Record<string, Schema>).map(property => {
      return `${'  '.repeat(level + 1)}${property}${required ? (required.includes(property) ? '' : '?') : '?'}: ${SchemaToInterface_deep(properties[property], schemas, level + 1)}\n`
    }).join('') + '  '.repeat(level) + '}'
  }
  if (type === 'array') {
    if (!items) {
      return 'any[]'
    }
    return SchemaToInterface_deep(items, schemas, level) + '[]'
  }
  if (type === 'string') {
    return _enum
      ? '(string | ' + _enum.map(i => '"' + i + '"').join(' | ') + ')'
      : 'StringProperty'
  }
  if (type === 'number' || type === 'integer') {
    return 'number' + (format ? ' /* schema format: ' + format + '*/' : '')
  }
  if (Array.isArray(type)) {
    return type.map(type => SchemaToInterface_deep({type}, schemas, level)).join(' | ')
  }
  return type
}