# CiviFlow

CiviFlow is an accountability-first municipal service platform with two verifiable intelligence layers:

1. A real Groq municipal agent classifies incidents, explains routing, exposes confidence, raises safety flags, and sends uncertain decisions to manual review.
2. A real Solana devnet proof flow connects an injected wallet, signs a versioned CiviFlow memo transaction, confirms it, and verifies the memo against devnet RPC.

## Live workflows

- `/report` Groq-powered resident intake and production report submission
- `/agent` live AI Agent Lab with validated structured output
- `/proof` wallet connect, devnet funding, signed memo proof, and verification
- `/track/RPT-8F2A91` public noindex case timeline
- `/map` privacy-aware public issue map
- `/dashboard` department operations, case workbench, duplicate insight, and SLA monitor
- `/api/agent` real Groq structured decision endpoint
- `/api/devnet/status` live Solana devnet health
- `/api/devnet/verify?signature=...` on-chain CiviFlow memo verifier

## Production environment

Set `GROQ_API_KEY`, `GROQ_MODEL`, `SOLANA_RPC_URL`, and `NEXT_PUBLIC_SOLANA_RPC_URL`. Browser signing uses Phantom or another injected Solana-compatible provider; private keys are never sent to CiviFlow.

Verified production demo signature: `2oQjqt3bmw7PGjjEsguL6xpSPuY1P9PhHf3QZzvmD6R4VmqZ2Bs7kBVpKd32LBgPB1Sx1s2SjT15JuEdzbGc3eqF` on Solana devnet.

## Validation

```bash
npm run typecheck
npm run test:workflow
npm run build
```
