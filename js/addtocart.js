const toastTrigger = document.getElementById('addToCart')
const toast = document.getElementById('toast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}