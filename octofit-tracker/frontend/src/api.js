const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const API_ORIGIN = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev`
  : ''

export function getRecords(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.items)) return payload.items
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data?.items)) return payload.data.items
  return []
}

export async function fetchRecords(resource, endpoint = `/api/${resource}/`) {
  const url = endpoint.startsWith('http') ? endpoint : `${API_ORIGIN}${endpoint}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Unable to load ${resource}`)
  return getRecords(await response.json())
}
