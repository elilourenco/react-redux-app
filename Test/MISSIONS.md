### Frontend (Next.js + Tailwind + UX)

- NFT Detail: Add “List for sale” UI with validation, optimistic updates; display active listings, recent sales, and owner/creator infos.
- Market UX: Infinite scroll with client-side pagination; persist filters in URL; debounce search; skeleton states.
- Collection Page: Sticky, accessible (ARIA + keyboard) filter bar with category/rarity; fully responsive.
- Watchlist: Heart/favorite with optimistic updates; “My Watchlist” route; store in localStorage for guests and sync on login.

### Backend (Express + MongoDB)

- Listings API: POST list/unlist with zod validation, ownership checks, idempotency, transaction logs; return updated NFT.
- Offers: Create offers collection and endpoints (create, list, accept) with auth, validation, ownership/balance checks, closing related offers, and sale logging.
- Market Aggregates: GET floor by collection with floor price, on-sale count, and 24h volume via aggregation.
- Security/Consistency: Normalize collectionId, required indexes, rate-limit auth, and standardized error responses.

### Full‑stack (end‑to‑end)

- Offers E2E: Backend offers API; frontend offer modal + list + accept/cancel with optimistic UI and toasts; integration and component tests.
- User Profiles: Backend aggregated user stats; frontend public profile with stats, filtered owned NFTs grid, and activity feed using shared components/pagination.
- Observability: Request metadata logging and /admin/metrics; dev-only UI metrics panel.

### Blockchain (wallet + signatures)

- SIWE Hardening: Full EIP‑4361 on backend (domain/uri/version/chainId/issuedAt/exp/nonce, one-time nonce, max age, chain checks); frontend builds, signs, submits; handle chain switching errors.
- Signature Listings: Off‑chain signed listing object with verification endpoint and persistence; frontend “Sign listing” flow with preview and verification before saving.
- Address Linking: POST /auth/wallet/link with nonce + signature verification and uniqueness; frontend link/unlink in Profile with confirmations and ownership checks.
