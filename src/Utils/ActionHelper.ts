
export function createActionTypes<T extends string>(types: readonly T[], prefix?: string):Record<T, string> {
  const actionTypes:any = {};
  types.forEach((value) => {
    actionTypes[value] = prefix ? prefix + value : value;
  });
  return Object.freeze(actionTypes);
}
