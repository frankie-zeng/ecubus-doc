import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EcuBus-Pro",
  description: "EcuBus Pro, Super automotive dev tool",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
     
      { text: 'Login', link: 'https://door.whyengineer.com/login/ecubuspro' },
      { text: 'User Manual', link: 'https://www.yuque.com/frankie-axwvu/mx7w4f' },
    ],
    search: {
      provider: 'local'
    },
    logo:'/assets/logo256.png',
    

    socialLinks: [
      { icon: {
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M17.005 13.018c-.779-.547-1.751-.51-2.304.277c-.553.785-4.418 5.633-10.751 3.619q.358.313.755.592c4.153 2.926 9.892 1.928 12.816-2.225c.555-.787.263-1.714-.516-2.263m-12.22-.617c-.404-.871-2.669-6.643 2.24-11.121a9.2 9.2 0 0 0-5.371 12.57c.403.871 1.353 1.084 2.218.684c.864-.401 1.316-1.262.913-2.133M10.826.823c-.956-.086-1.614.629-1.7 1.578s.435 1.771 1.391 1.857s7.087 1.01 8.51 7.502q.092-.466.136-.949c.455-5.061-3.277-9.533-8.337-9.988M6.891 10.53c-.264.619-.306 1.213-.094 1.322c.146.076.374-.098.588-.416c.085.347.295.662.595.914c-.314.115-.52.305-.52.519c0 .354.556.639 1.241.639c.618 0 1.13-.232 1.225-.537h.147c.095.305.607.537 1.226.537c.686 0 1.241-.285 1.241-.639c0-.215-.205-.404-.52-.519c.299-.252.51-.566.594-.914c.214.318.442.492.589.416c.211-.109.17-.703-.095-1.322c-.207-.488-.488-.848-.702-.926q.005-.047.004-.094a.93.93 0 0 0-.142-.504q.003-.018.002-.033a.5.5 0 0 0-.056-.238C12.16 7.467 11.335 6.461 10 6.461c-1.336 0-2.161 1.006-2.215 2.273a.5.5 0 0 0-.057.238l.002.033a.96.96 0 0 0-.137.599c-.213.078-.495.437-.702.926"/></svg>'
      }, link: 'https://qm.qq.com/q/A9RmWtTvig' }
    ]
  },
  base:'/ecubus-doc/'
})
