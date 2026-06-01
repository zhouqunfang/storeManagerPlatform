---
name: "vue3-code-style"
description: "Defines code style for Vue 3 + Vite JavaScript projects. Invoke when editing Vue SFCs, adding frontend files, or setting up ESLint/Prettier rules."
---

# Vue3 Code Style

Use this skill for `Vue 3 + Vite + JavaScript` frontend work.

Invoke this skill when:
- editing `.vue`, `.js`, `.css`, or `.scss` files in this project
- creating new frontend components, views, composables, or utilities
- refactoring existing frontend code for readability and consistency
- setting up or reviewing `ESLint`, `Prettier`, or general style conventions

## Goal

Keep the frontend codebase consistent, readable, and easy for beginners to maintain.

## Stack Assumptions

- Framework: `Vue 3`
- Build tool: `Vite`
- Language: `JavaScript`
- Component format: `Single File Component`
- UI library may include `Element Plus`

## Core Style Rules

### General JavaScript

- Use `2` spaces for indentation
- Prefer `single quotes`
- Avoid unnecessary semicolons unless the project already uses them consistently
- Use `const` by default, `let` only when reassignment is needed
- Prefer clear variable names over short abbreviations
- Keep functions focused and small when practical
- Avoid dead code, commented-out old code, and unused imports

### Vue SFC Structure

Preferred order inside a component:

```vue
<template>
</template>

<script setup>
</script>

<style scoped>
</style>
```

Rules:
- Prefer `<script setup>`
- Keep template structure simple and readable
- Move repeated logic into small functions
- Use `scoped` styles by default unless a global style is required
- Avoid large inline styles when a class name is clearer

### Template Conventions

- Use descriptive class names
- Keep deeply nested markup to a minimum
- Prefer explicit event handlers such as `@click="handleSubmit"`
- Use computed-like derived display values through script logic when template expressions become too complex
- Keep one attribute per line when tags become long

Example:

```vue
<el-input
  v-model="form.username"
  placeholder="请输入账号"
  clearable
/>
```

### Script Conventions

- Group imports by source and keep them tidy
- Put framework imports first, then third-party imports, then local imports
- Keep reactive state names straightforward, such as `form`, `data`, `loading`
- Use handler names like `handleSubmit`, `handleEdit`, `handleDelete`
- Prefer early returns to reduce nesting

Example:

```js
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import request from '@/utils/request'
```

### Style Conventions

- Prefer class-based styling over large inline `style` attributes
- Keep colors and spacing visually consistent
- Use rounded corners, soft shadows, and clear spacing for dashboard-style pages
- Reuse global utility styles when possible
- Keep selectors shallow and readable

## ESLint / Prettier Guidance

When asked to set up formatting tools for this stack, prefer:

- `eslint`
- `prettier`
- `eslint-plugin-vue`
- `eslint-config-prettier`
- `eslint-plugin-prettier`

Recommended direction:

- enable Vue 3 essential rules first
- avoid overly strict rules that slow beginner development
- keep formatting delegated to Prettier where possible

Suggested conventions:

- single quotes
- trailing commas disabled or used consistently
- no unused vars
- no duplicate keys
- component template parsing enabled

## Element Plus Conventions

When using `Element Plus`:

- keep form items aligned and labels clear
- use consistent button types across pages
- keep dialog widths and table spacing visually unified
- avoid mixing too many inline colors unless matching the page theme

## Review Checklist

Before finishing frontend changes, check:

- Is the code consistent with nearby files?
- Are imports clean and used?
- Is the template easy to scan?
- Are styles readable and not overly inline?
- Does the component follow Vue 3 `script setup` conventions?
- Did formatting stay consistent with the project?

## What To Avoid

- Huge inline style blocks inside template tags
- Mixed quote styles in the same file
- Inconsistent indentation
- Repeated logic copied across pages
- Unclear names like `a`, `b`, `item1`
- Styling changes that break the existing visual language

## Output Preference

When applying this skill:

- preserve existing project behavior
- prefer minimal but clean edits
- explain style-driven refactors briefly
- keep beginner-friendly readability as a priority
