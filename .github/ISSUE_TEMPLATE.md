### Summary
What and why in one paragraph.

---

### Acceptance Criteria
- [ ] User can …
- [ ] Database stores …
- [ ] UI shows …

---

### Out of Scope
(Keep MVP tight)

---

### Testing Steps
1. Open page …
2. Click …
3. Expect …

---

### Codex Task Block
```json
{
  "codex_task": {
    "repo": "zjaunzemis/moving-truck-close-down",
    "branch": "feat/<kebab-case-topic>",
    "runner": "node18",
    "stack": {
      "frontend": "Vite + React + TypeScript + Tailwind",
      "db": "Supabase (Postgres)",
      "hosting": "Netlify"
    },
    "env_expected": [
      "VITE_SUPABASE_URL",
      "VITE_SUPABASE_ANON_KEY",
      "VITE_APP_ENV"
    ],
    "tasks": [
      {
        "type": "scaffold-or-edit",
        "paths": ["<files to create or edit>"],
        "description": "<exact change list>",
        "definition_of_done": [
          "<assertions the app must satisfy>",
          "All checks pass in CI",
          "Preview deploy on Netlify shows feature working"
        ]
      }
    ],
    "post_actions": [
      "open a Pull Request with a clear title/description",
      "include screenshots or short GIF if UI changed"
    ]
  }
}
```
---

At the bottom of each Issue, you’ll add:
```
@codex start this task
```
