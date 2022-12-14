function prop<T,U extends keyof T >(key, obj) {
  return obj[key]
}
