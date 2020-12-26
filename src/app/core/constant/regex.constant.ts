export const RegexPatterns = Object.freeze({
  // TODO used this
  ALPHA_NUMERIC_WITH_SPACE: /^[a-z\d\s]+$/iu,
  // eslint-disable-next-line max-len
  EMAIL: /^(("[\w\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/iu,
  // No special character
  NO_SECIAL_CHARACTER: /[&\\#,+()$~%.'":*?<>{}-]/gsu,
  NUMBER_WITH_SPACE: /^(?=.*\d)[\d ]+$/u,
  ONE_LOWER_CASE: /[a-z]/u,
  ONE_NUMBER: /[0-9]/u,
  // One space only pattern
  ONE_SPACE: /\s\s+/gu,
  ONE_SPECIAL_CHARACTER: /^[a-zA-Z0-9_.-]*$/u,
  ONE_UPPER_CASE: /[A-Z]/u,
  // Only numbers,
  ONLY_NUMBER: /\D/gu,
  // TODO used this
  PASSWORD: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/u,
  PASSWORD_SPECIAL_CHARACTER: /[!@#$%^&*-]/u,
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/u,
  USERNAME: /^[a-zA-Z0-9]*$/u,
  WHITE_SPACE: /\s/gu
});
