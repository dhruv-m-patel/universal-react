try {
  (() => {
    var b = __STORYBOOK_API__,
      {
        ActiveTabs: h,
        Consumer: g,
        ManagerContext: f,
        Provider: A,
        RequestResponseError: P,
        addons: n,
        combineParameters: v,
        controlOrMetaKey: R,
        controlOrMetaSymbol: x,
        eventMatchesShortcut: B,
        eventToShortcut: D,
        experimental_MockUniversalStore: M,
        experimental_UniversalStore: k,
        experimental_requestResponse: E,
        experimental_useUniversalStore: N,
        isMacLike: U,
        isShortcutTaken: C,
        keyToSymbol: I,
        merge: w,
        mockChannel: H,
        optionOrAltSymbol: K,
        shortcutMatchesShortcut: L,
        shortcutToHumanString: Y,
        types: q,
        useAddonState: G,
        useArgTypes: F,
        useArgs: V,
        useChannel: j,
        useGlobalTypes: z,
        useGlobals: J,
        useParameter: Q,
        useSharedState: W,
        useStoryPrepared: X,
        useStorybookApi: Z,
        useStorybookState: $,
      } = __STORYBOOK_API__;
    var S = (() => {
        let e;
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        );
      })(),
      _ = 'tag-filters',
      p = 'static-filter';
    n.register(_, (e) => {
      let u = Object.entries(S.TAGS_OPTIONS ?? {}).reduce((t, r) => {
        let [o, i] = r;
        return (i.excludeFromSidebar && (t[o] = !0), t);
      }, {});
      e.experimental_setFilter(p, (t) => {
        let r = t.tags ?? [];
        return (
          (r.includes('dev') || t.type === 'docs') &&
          r.filter((o) => u[o]).length === 0
        );
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
