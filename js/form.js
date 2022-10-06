export const isInputField = el => ['SELECT', 'TEXTAREA'].includes(el.tagName)
  || (el.tagName === 'INPUT' && !['button', 'checkbox', 'radio', 'reset', 'submit'].includes(el.type))
