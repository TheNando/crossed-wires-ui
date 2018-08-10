interface ApiLogin {
  time: number
  session: string
}

interface Robot {
  team: string
  name: string
  colorHex: string
}

interface User {
  name: string
  handle: string
  robot: string
  team: string
}

interface Session {
  id: string
  user: User
}

interface Cache extends Session, User {
  sessionId: string
  timeOffset: number
}

interface HMR extends NodeModule {
  hot: { accept: Function }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
