# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomtest.spec.ts >> User can login , add product to cart
- Location: tests\pomtest.spec.ts:6:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a:has-text("Add to cart")')

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```