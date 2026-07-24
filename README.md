# CiviFlow

CiviFlow is an accountability-first municipal service platform: explainable intake routing, confidence-gated automation, category SLA clocks, append-only public status history, duplicate-response guidance, public maps, staff operations, and auditable administration.

## Workflows

- `/report` resident intake and routing preview
- `/track/RPT-8F2A91` public noindex case timeline
- `/map` privacy-aware public issue map
- `/dashboard` department queue and operating metrics
- `/dashboard/report/RPT-8F2A91` case action workbench
- `/dashboard/sla` independent breach monitor
- `/admin/categories`, `/admin/departments`, `/admin/users` configuration surfaces
- `/api/reports`, `/api/reports/[id]`, `/api/triage`, `/api/sla/check` production-shaped contracts

## Validate

```bash
npm run typecheck
npm run lint
npm run test:workflow
npm run build
```

The MVP uses an in-process persistence adapter so the full workflow runs without credentials. Environment keys in `.env.example` define the production Supabase, AI, map, and cron integration boundary.
