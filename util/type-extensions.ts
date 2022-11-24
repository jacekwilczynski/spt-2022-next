// allow setting CSS custom properties in the `style` attribute
declare module 'csstype' {
  interface Properties {
    [key: `--${string}`]: string
  }
}

// (un)necessary hack so we can keep TS's "isolatedModules" flag
export {}
