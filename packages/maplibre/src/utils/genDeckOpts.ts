export function genDeckOpts<T>(props: Partial<T>, validProps: (keyof T)[]): Partial<T> {
  for (const opt of Object.keys(props) as Array<keyof T>) {
    if (props[opt] === undefined || !validProps.includes(opt)) {
      delete props[opt]
    }
  }

  return props
}
