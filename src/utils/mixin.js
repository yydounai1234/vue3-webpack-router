export const mixins = {
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
    console.log('错误上报')
  }
}
