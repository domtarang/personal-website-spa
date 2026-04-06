import { computed, onBeforeUnmount, ref } from 'vue'

const NOTICE_META = {
  success: { title: 'Saved successfully', icon: 'mdi-check-circle', typeClass: 'app-notice-success' },
  warning: { title: 'Please review', icon: 'mdi-alert', typeClass: 'app-notice-warning' },
  error: { title: 'Something went wrong', icon: 'mdi-alert-circle', typeClass: 'app-notice-error' },
  info: { title: 'Heads up', icon: 'mdi-information', typeClass: 'app-notice-info' },
}

export const useTimedNotice = (duration = 5000) => {
  const message = ref('')
  const type = ref('info')
  const timeoutId = ref(null)

  const clear = () => {
    if (timeoutId.value !== null) {
      window.clearTimeout(timeoutId.value)
      timeoutId.value = null
    }

    message.value = ''
  }

  const show = (nextMessage, nextType = 'info') => {
    clear()

    message.value = nextMessage
    type.value = nextType

    if (!nextMessage) {
      return
    }

    timeoutId.value = window.setTimeout(() => {
      clear()
    }, duration)
  }

  const meta = computed(() => NOTICE_META[type.value] || NOTICE_META.info)

  onBeforeUnmount(clear)

  return {
    message,
    type,
    meta,
    show,
    clear,
  }
}
