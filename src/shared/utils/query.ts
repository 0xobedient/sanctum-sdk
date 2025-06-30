export function toQueryString(
  obj: Record<string, string | number | boolean | string[]>
) {
  const query = Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return flatQueryString(key, value);
      }
      return `${key}=${value}`;
    })
    .join("&");
  return query ? `?${query}` : "";
}

export function flatQueryString(key: string, arr: string[]) {
  const query = arr.map((value: string) => `${key}=${value}`).join("&");
  return query ? `${query}` : "";
}
