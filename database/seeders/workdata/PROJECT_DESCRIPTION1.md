# Sind-bad B2B Ecommerce Platform

## Short Summary

A comprehensive B2B ecommerce platform designed for wholesale distributors in Arabic-speaking markets. The system unifies order management, inventory control, driver assignments, financial tracking, and customer relationship management into a single mobile-first application that handles the complete order-to-delivery lifecycle.

## Problem

Wholesale distributors operating in regional markets face fragmented workflows across ordering, inventory, delivery logistics, and financial accounting. Manual processes lead to stock discrepancies, delayed order fulfillment, and poor visibility into business performance. Existing B2B solutions often lack proper Arabic language support and fail to address the unique operational needs of traditional wholesale businesses—particularly the coordination between warehouse staff, delivery drivers, and field sales teams.

## Solution

Sind-bad provides an integrated business management platform that connects all stakeholders in the wholesale distribution chain. The system features:

- **Customer-facing storefront** – Mobile-optimized catalog with cart, wishlists, and real-time order tracking
- **Administrative control panel** – Complete backoffice for managing products, customers, orders, and business operations
- **Inventory management** – Stock counting, warehouse transfers, product expiration tracking, and automated shortage alerts
- **Logistics coordination** – Driver task assignment, delivery tracking, and returned product management
- **Financial operations** – Purchase invoices, expense tracking, cash settlements, vault management, and multi-dimensional reporting
- **Real-time notifications** – Web push alerts for order updates, stock changes, and driver assignments

The platform is built mobile-first with full RTL Arabic support, ensuring usability for users on the ground while providing comprehensive analytics for decision-makers.

## My Role & Contributions

**Role:** Fullstack Developer

**Key Contributions:**
- Architected the complete application from database schema to frontend components
- Implemented complex business logic for order processing, inventory management, and financial accounting
- Built comprehensive reporting system with 15+ dynamic reports (sales by customer, inventory movements, driver performance, cash flow analysis)
- Developed real-time notification system using Laravel Reverb and web push
- Created mobile-first, RTL-compatible UI components using React and shadcn/ui
- Integrated Inertia.js for seamless SPA experience while maintaining server-side rendering benefits
- Implemented role-based access control with granular permissions across 50+ resources
- Designed and optimized database queries for handling large product catalogs and order volumes
- Built PDF invoice generation system with customizable templates
- Established CI/CD practices with automated testing (Pest), code quality checks (PHPStan), and formatting standards

## Tech Stack

**Backend:**
- Laravel 11 (API & business logic)
- FilamentPHP 3 (admin panel)
- MySQL (database)
- Laravel Scout with TNTSearch (full-text search)
- Laravel Reverb (WebSocket server)
- Laravel Sanctum (API authentication)

**Frontend:**
- React 18 with TypeScript
- Inertia.js 2 (SPA without API complexity)
- Tailwind CSS
- shadcn/ui + Radix UI components
- Recharts (data visualization)
- Laravel Echo (real-time events)

**Infrastructure & Tools:**
- Pest PHP (testing framework)
- PHPStan (static analysis)
- Laravel Pint (code formatting)
- Web Push Notifications
- Image optimization
- Activity logging

## Key Challenges & Decisions

**Challenge:** Maintaining data consistency across complex inventory operations  
**Decision:** Implemented a service-layer architecture with dedicated services for stock operations, ensuring atomic transactions and audit trails for every stock movement (receipt notes, issue notes, returns, waste).

**Challenge:** Real-time order updates for mobile users without excessive server load  
**Decision:** Used Laravel Reverb for WebSocket connections combined with selective broadcasting—only pushing critical updates (order status changes, driver assignments) rather than polling for all changes.

**Challenge:** Supporting both Arabic RTL and potential future English LTR interfaces  
**Decision:** Built direction-agnostic components using Radix UI primitives with `@radix-ui/react-direction`, allowing runtime language switching without component rewrites.

**Challenge:** Complex reporting requirements across sales, inventory, and financial domains  
**Decision:** Created dedicated report services using Laravel's query builder with date range filtering, caching strategies, and export capabilities. Each report follows a consistent interface for maintainability.

**Challenge:** Managing permissions for 50+ admin resources across different user roles  
**Decision:** Integrated Filament Shield for automated policy generation and role-based access control, reducing manual permission assignment from hours to minutes.

**Challenge:** Handling large product catalogs with variants, pricing tiers, and stock across multiple warehouses  
**Decision:** Implemented Laravel Scout with TNTSearch for instant search, combined with eager loading strategies and database indexing to maintain sub-100ms query times on 10,000+ product datasets.
