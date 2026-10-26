/**
 * Silky-smooth custom ease-in-out cubic scroll engine with clean URL management
 */

// Custom cubic-bezier easing: easeInOutCubic (soft acceleration, smooth glide, soft deceleration)
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

let activeScrollAnimation = null

/**
 * Smoothly scrolls to any element by ID, updating the URL bar to clean paths without '#'
 * @param {string} targetId - Element ID ('home', 'about', 'work', etc.)
 * @param {string} [path] - Clean URL to display (e.g. '/about', '/work', or '/')
 * @param {number} [duration=750] - Animation duration in ms
 */
export function smoothScrollToSection(targetId, path = null, duration = 750) {
  const target = document.getElementById(targetId)
  if (!target) return

  // Cancel any running scroll animation
  if (activeScrollAnimation) {
    cancelAnimationFrame(activeScrollAnimation)
    activeScrollAnimation = null
  }

  // Update browser URL without the '#' hash
  if (path && typeof window !== 'undefined' && window.history) {
    try {
      window.history.pushState({ sectionId: targetId }, '', path)
    } catch {
      // In case of restricted environments
    }
  }

  const navbarHeight = 72
  const targetPosition = Math.max(
    0,
    target.getBoundingClientRect().top + window.pageYOffset - navbarHeight
  )
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition

  if (Math.abs(distance) < 2) return

  let startTime = null

  function step(currentTime) {
    if (startTime === null) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (elapsed < duration) {
      activeScrollAnimation = requestAnimationFrame(step)
    } else {
      window.scrollTo(0, targetPosition)
      activeScrollAnimation = null

      // Subtle arrival ripple / highlight animation
      target.classList.add('section-smooth-arrival')
      setTimeout(() => {
        target.classList.remove('section-smooth-arrival')
      }, 1200)
    }
  }

  activeScrollAnimation = requestAnimationFrame(step)
}

