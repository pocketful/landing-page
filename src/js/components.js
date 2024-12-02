const componentCache = new Map()

const loadComponent = async (name) => {
  if (componentCache.has(name)) {
    return componentCache.get(name)
  }

  try {
    const response = await fetch(`/components/${name}.html`)
    const html = await response.text()
    componentCache.set(name, html)
    return html
  } catch (error) {
    console.error(`Failed to load component: ${name}`, error)
    return ''
  }
}

export const renderComponents = async () => {
  // Load header
  const headerHtml = await loadComponent('header')
  document.querySelector('header').innerHTML = headerHtml

  // Load sections
  const sections = [
    'benefits',
    'blend',
    'certification',
    'features',
    'hero',
    'process',
    'subscribe',
  ]

  for (const section of sections) {
    const html = await loadComponent(`sections/${section}`)
    document.querySelector(`.${section}`).innerHTML = html
  }

  // Load footer
  const footerHtml = await loadComponent('footer')
  document.querySelector('footer').innerHTML = footerHtml
}
