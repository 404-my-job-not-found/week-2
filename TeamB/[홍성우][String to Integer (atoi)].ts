function myAtoi(s: string): number {
  const int = parseInt(s);

  if (int > 2147483647) {
    return 2147483647;
  }

  if (int < -2147483648) {
    return -2147483648;
  }

  return isNaN(int) ? 0 : int;
}
