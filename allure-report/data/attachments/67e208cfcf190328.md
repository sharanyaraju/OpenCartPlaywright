# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomtest.spec.ts >> User can login , add product to cart
- Location: tests\pomtest.spec.ts:6:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('.card-title').first()

```

```
Error: browserContext.close: Target page, context or browser has been closed
```