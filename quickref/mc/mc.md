# Midnight Commander (mc): Survival Cheat Sheet

## Mental model

- Two panes = two directories
- One pane is active (highlighted)
- Most actions move/copy from active → other pane

---

## Absolute essentials

- Tab: switch pane
- ↑ ↓: move cursor
- Enter: open directory / file
- Backspace: go up a directory
- Ctrl+O: hide/show panels (quick shell view)

---

## File operations (function keys)

- F3: view file (read-only)
- F4: edit file
- F5: copy
- F6: move / rename
- F7: mkdir
- F8: delete
- F10: quit

Mnemonic: **F5 copies, F6 moves**

---

## Selection & marking

- Insert or Ctrl+T: mark file
- `+`: select by pattern
- `*`: invert selection
- `-`: unselect by pattern

Example: Select all `.log` files  
→ `+` → `*.log` → `F8`

---

## Navigation shortcuts

- Alt+Enter: paste filename into command line
- Ctrl+\\: quick jump (type a path fragment)
- Ctrl+Space: show size of file under cursor
- Ctrl+PgUp: go to parent directory

---

## Search & commands

- Alt+?: search for file
- Ctrl+S: incremental search in panel
- :: open command line (or just start typing)

---

## When you feel lost

1. Ctrl+O: check where you are
2. Backspace until sanity returns
3. Tab: confirm active pane

---

## Pro tip

Use mc primarily for:

- bulk copy/move operations
- visual comparison of directories
- destructive actions you don’t want to mistype in shell

Use the shell for everything else.
