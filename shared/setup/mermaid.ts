// Slidev picks up any `setup/mermaid.ts` from theme/addon roots and merges
// its return value into the global Mermaid config — this applies to every
// diagram in every talk that includes this addon, no per-diagram markup.
//
// Colors copied from the RSTL. Design System tokens (shared/style.css).
// `theme: 'base'` + `themeVariables` is Mermaid's supported way to fully
// re-skin a diagram; values are literal hex, not CSS custom properties,
// since Mermaid computes derived shades from these at render time.
export default () => ({
  theme: 'base',
  themeVariables: {
    fontFamily: 'Inter, sans-serif',

    background: 'transparent',
    primaryColor: '#ece9e2', // paper-100 — node fill (a sunken/card surface, not an accent wash)
    primaryTextColor: '#1a1a18', // ink-900
    primaryBorderColor: '#a3a19a', // ink-300
    secondaryColor: '#e2ded3', // paper-200
    tertiaryColor: '#f5f4f0', // paper-50

    lineColor: '#3d3c38', // ink-700 — arrows/connectors
    textColor: '#1a1a18', // ink-900

    // gitGraph: neutral ink for the trunk, the one accent color reserved
    // for the branch actually being discussed — matches "one confident
    // accent color, used sparingly" rather than tinting every branch.
    //
    // Slots are ordered so a diagram can reach "paler" (git2, 1 dummy
    // `branch` before the real one) or "very faint" (git3, 2 dummies)
    // without needing many throwaway branches - see the fast-forward and
    // rebasing diagrams for the dummy-branch trick this relies on.
    git0: '#3d3c38', // ink-700
    git1: '#d4632c', // accent-600
    git2: '#a3a19a', // ink-300 — "paler"
    git3: '#c9c7be', // ink-150 — "very faint"
    git4: '#6b6a64', // ink-500
    git5: '#b34f1f', // accent-700
    git6: '#eeae85', // accent-300
    git7: '#fbe4d5', // accent-100

    gitBranchLabel0: '#f5f4f0',
    gitBranchLabel1: '#f5f4f0',
    gitBranchLabel2: '#1a1a18',
    gitBranchLabel3: '#1a1a18',
    gitBranchLabel4: '#f5f4f0',
    gitBranchLabel5: '#f5f4f0',
    gitBranchLabel6: '#1a1a18',
    gitBranchLabel7: '#1a1a18',

    commitLabelColor: '#1a1a18',
    commitLabelBackground: '#ece9e2',

    tagLabelColor: '#7a3512', // accent-900
    tagLabelBackground: '#fbe4d5', // accent-100
    tagLabelBorder: '#eeae85', // accent-300

    // sequenceDiagram: same neutral surfaces as flowchart nodes, with notes
    // in the soft accent rather than Mermaid's default yellow.
    actorBkg: '#ece9e2', // paper-100
    actorBorder: '#a3a19a', // ink-300
    actorTextColor: '#1a1a18', // ink-900
    actorLineColor: '#a3a19a', // ink-300
    signalColor: '#3d3c38', // ink-700
    signalTextColor: '#1a1a18', // ink-900
    noteBkgColor: '#fbe4d5', // accent-100
    noteBorderColor: '#eeae85', // accent-300
    noteTextColor: '#1a1a18', // ink-900
  },
})
