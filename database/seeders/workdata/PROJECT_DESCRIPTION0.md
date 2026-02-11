# Vilain E-Commerce Platform

## Short Summary

A production-ready bilingual e-commerce platform built for Vilain, featuring a modern React-powered storefront with comprehensive inventory management, multi-tier promotion engine, and integrated payment processing. Designed to handle complex product catalogs with regional shipping calculations and real-time order tracking across Egyptian governorates.

## Problem

Vilain needed a scalable e-commerce solution that could serve both Arabic and English-speaking customers while managing complex inventory scenarios including product variants, location-based shipping costs, and sophisticated promotional campaigns. The platform required seamless integration between customer-facing operations and administrative workflows, with support for multiple payment methods and order lifecycle management including returns and refunds.

## Solution

Developed a full-stack e-commerce platform that addresses each business requirement through targeted features:

**Customer Experience**
- Bilingual interface (Arabic/English) with RTL support and locale-specific formatting
- Advanced product catalog with categories, brands, and variant management
- Intelligent search with real-time suggestions powered by TNT Search
- Dynamic shopping cart with automatic promotion application
- Wishlist functionality for customer engagement
- Multi-step checkout with address validation and shipping calculations
- Order tracking with detailed status updates and return request capabilities

**Business Operations**
- Comprehensive admin panel built with FilamentPHP for inventory management
- Region-aware shipping cost calculator based on Egyptian governorates and areas
- Multi-layered promotion system supporting cart discounts, product-specific offers, and direct promotions
- Automated inventory tracking with low-stock alerts
- Order workflow management including cancellations and returns
- Purchase invoice system for supplier relationship management

**Technical Architecture**
- Server-side rendered React components using Inertia.js for SEO optimization and fast page loads
- Type-safe development with TypeScript interfaces for all data models
- Responsive design system built with Shadcn/ui ensuring consistency across mobile, tablet, and desktop
- Payment gateway integration with Kashier for secure online transactions
- Web push notifications for order updates and promotional campaigns
- Docker containerization for consistent deployment across development and production environments

## My Role & Contributions

**Full-Stack Developer**

Led the complete development lifecycle from database design to production deployment:

**Backend Development**
- Architected database schema supporting 25+ interconnected models with proper normalization
- Implemented business logic across 15+ service classes for cart management, order processing, promotion calculations, and inventory control
- Built RESTful APIs and Inertia.js controllers for seamless frontend-backend communication
- Developed comprehensive factory and seeder system for realistic testing data
- Integrated Kashier payment gateway with webhook handling for transaction verification
- Created FilamentPHP admin resources for efficient content and order management

**Frontend Development**
- Built 40+ reusable React components following atomic design principles
- Implemented responsive layouts supporting mobile-first design across all breakpoints
- Developed complex UI patterns including dynamic product filters, multi-step forms, and infinite scroll
- Integrated i18next for comprehensive internationalization with dynamic language switching
- Created smooth animations and transitions using Framer Motion for enhanced UX
- Implemented type-safe form handling with React Hook Form and Zod validation

**DevOps & Quality**
- Configured Docker multi-stage builds for development and production environments
- Set up automated testing pipeline with PEST covering critical business logic
- Implemented static analysis with PHPStan to maintain code quality
- Established git workflow and deployment procedures

## Tech Stack

**Backend**
- Laravel 11 (PHP 8.2+)
- MySQL with Scout search indexing
- Filament 3 for admin panel
- Sanctum for API authentication
- Laravel Socialite for OAuth integration

**Frontend**
- React 18 with TypeScript
- Inertia.js for SPA-like experience
- Shadcn/ui component library
- Tailwind CSS for styling
- Radix UI primitives
- Framer Motion for animations
- i18next for internationalization

**Development Tools**
- Vite for fast builds
- PEST for testing
- PHPStan for static analysis
- Laravel Pint for code formatting
- Docker for containerization

**Integrations**
- Kashier payment gateway
- TNT Search engine
- Web Push notifications
- Social login (Facebook, Google)

## Key Challenges & Decisions

**Bilingual Data Architecture**
Early on, decided to use column-level translation (`name_en`, `name_ar`) rather than a separate translations table. This simplified queries and improved performance at scale, though required consistent naming conventions across migrations and models.

**Promotion Logic Complexity**
The promotion system needed to support cart-level discounts, product-specific offers, and automatic promotions with various conditions (minimum amount, specific products, categories). Implemented a service-based architecture with separate condition evaluation and reward application logic, making the system extensible for future promotion types.

**Cart State Management**
Chose server-side cart persistence over client-side state to prevent inventory conflicts and enable cross-device cart synchronization. This required careful session handling but eliminated race conditions during concurrent checkouts.

**Regional Shipping Calculations**
Egyptian shipping costs vary significantly by governorate and area. Built a hierarchical location system (Gov → Area) with flexible cost tables, allowing business users to adjust rates through the admin panel without code changes.

**Type Safety Across Stack**
Maintaining type consistency between PHP models and TypeScript interfaces was critical. Established a convention of using `index.d.ts` files mirroring backend models, with manual synchronization during schema changes. Considered code generation but opted for explicit typing to maintain control.

**Performance Optimization**
Implemented eager loading strategies to prevent N+1 queries, especially in product listings with variants, categories, and brands. Used Laravel Scout for search performance and added Redis caching for frequently accessed data like shipping costs and active promotions.

**Mobile-First Responsive Design**
Given the target market's mobile shopping preference, designed all components mobile-first. Used Tailwind's responsive utilities extensively and tested across real devices to ensure touch interactions, scroll performance, and form usability met production standards.
