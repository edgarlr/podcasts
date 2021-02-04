export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const jsonResponse = await fetch(input, init)
  const res = await jsonResponse.json()
  return res.body
}
