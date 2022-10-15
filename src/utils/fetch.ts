async function _fetch(url: string, { method, headers = {}, body }: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; headers?: HeadersInit_; body?: any; }) {
  const init: RequestInit = {
    method,
    credentials: 'include',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, init);
    return JSON.parse(await response.text());
  } catch(e) {
    console.error(e);
  }
}

export async function post(url: string, body: any) {
  return _fetch(url, { method: 'POST', body })
}
