const componentCache = new Map()

const loadComponent = async (name) => {
  if (componentCache.has(name)) {
    return componentCache.get(name)
  }

  try {
    const response = await fetch(`/components/${name}.html`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const html = await response.text()
    componentCache.set(name, html)
    return html
  } catch (error) {
    console.error(`Failed to load component: ${name}`, error)
    return ''
  }
}

export const renderComponents = async () => {
  try {
    const components = document.querySelectorAll('[data-component]')
    await Promise.all(
      Array.from(components).map(async (element) => {
        const name = element.getAttribute('data-component')
        const html = await loadComponent(name)
        element.innerHTML = html
      }),
    )
  } catch (error) {
    console.error('Failed to render components:', error)
  }
}
