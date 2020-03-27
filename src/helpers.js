const scrollIframeIntoView = () => {
  const element = document.getElementsByClassName('booking-container')[0]
  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })

  setTimeout(() => {
    const element = document.getElementsByClassName('sticky-cta')[0]
    if (element) element.style.opacity = 0
  }, 200)
}

module.exports = { scrollIframeIntoView }
