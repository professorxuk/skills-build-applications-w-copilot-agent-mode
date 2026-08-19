const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev/api`
  : '/api'

export function getRecords(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.items)) return payload.items
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data?.items)) return payload.data.items
  return []
}

export async function fetchRecords(resource) {
  const response = await fetch(`${API_BASE_URL}/${resource}/`)
  if (!response.ok) throw new Error(`Unable to load ${resource}`)
  return getRecords(await response.json())
}
