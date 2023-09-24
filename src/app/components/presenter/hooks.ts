const ZERO = 0;

export default (
  { perspectives }: {
    readonly perspectives: readonly {
        readonly id: number, readonly text: string
    }[]
},
) => {
  const hasPerspectives = perspectives.length !== ZERO;
  return { hasPerspectives };
};
