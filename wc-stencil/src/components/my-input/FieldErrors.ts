export default class FieldRules  {
  static required(value: unknown): boolean {
      return value !== undefined && value !== null && value !== '';
  }
}