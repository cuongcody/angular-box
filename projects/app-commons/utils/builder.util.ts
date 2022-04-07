type IBuilder<T> = { [k in keyof T]: (arg: T[k]) => IBuilder<T> } & { build(): T };

export function Builder<T>(): IBuilder<T> {
  const built: any = {};
  const builder = new Proxy(
    {},
    {
      get(target, prop) {
        if ('build' === prop) {
          return () => built;
        }

        return (value: any): any => {
          built[prop] = value;

          return builder;
        };
      }
    }
  );

  return builder as IBuilder<T>;
}
