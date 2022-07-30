export interface IUseCaseSignature<I, O> {
  exec: (input: I) => Promise<O>;
}
