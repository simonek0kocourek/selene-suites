# REACT-BITS-SKILL.md

Canonical skill location: `.claude/skills/react-bits/`

This React Bits setup is now split into a slim main skill plus per-component mini files so token usage stays low.

## Structure

- `.claude/skills/react-bits/SKILL.md`
- `.claude/skills/react-bits/text-animations/*.md`
- `.claude/skills/react-bits/animations/*.md`
- `.claude/skills/react-bits/components/*.md`
- `.claude/skills/react-bits/backgrounds/*.md`

## Workflow

1. Read `.claude/skills/react-bits/SKILL.md` first.
2. Open only the single component file you need.
3. Use that file's install command, npm dependency line, usage snippet, best-fit notes, and extracted TSX source.

## Rules

- Use the official TS-TW variant.
- Do not hand-code a replacement for an existing React Bits component.
- Customize through props and usage code, not by reinventing the component.
- Keep context small by avoiding loading multiple component files unless the task is a comparison.
