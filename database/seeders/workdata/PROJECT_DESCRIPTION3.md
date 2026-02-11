# Secure Education Platform

**A comprehensive e-learning platform combining web-based course delivery with military-grade content protection through an encrypted desktop application.**

---

## Short Summary

Built a full-featured education platform that protects digital course content through video encryption and a secure desktop player. The system prevents unauthorized screen recording and downloading while providing seamless course purchasing, enrollment, and progress tracking for students and instructors.

---

## Problem

Online education platforms face critical revenue loss from content piracy—students often record or download paid video courses and redistribute them. Traditional DRM solutions are expensive and easily bypassed. Education providers needed an affordable, effective way to protect their intellectual property while maintaining a smooth user experience that doesn't frustrate legitimate learners.

---

## Solution

Developed a dual-component platform: a web application handling course discovery, purchases, and enrollment, paired with a secure desktop application for video playback. Videos are encrypted server-side using asymmetric encryption (public key cryptography) and can only be decrypted and played through the proprietary desktop player, which actively blocks screen recording attempts and prevents file extraction. This approach makes content piracy technically challenging while keeping the legitimate viewing experience simple.

The platform includes:
- **Course Management**: Instructors create structured courses with blocks and resources
- **Payment System**: Integrated payment processing with coupon support and order management
- **Progress Tracking**: Students can monitor their learning journey across enrolled courses
- **Package Bundles**: Ability to purchase multiple courses at discounted rates
- **Admin Dashboard**: Comprehensive management interface for platform oversight

---

## My Role & Contributions

**Fullstack Developer** — Sole developer responsible for complete platform architecture and implementation.

**Backend Development**:
- Designed and implemented secure video encryption workflow using RSA public key cryptography
- Built RESTful API and business logic using Laravel framework
- Developed relational database schema handling courses, enrollments, orders, and payments
- Created comprehensive admin panel using Filament for content and user management
- Implemented authentication, authorization, and role-based access control
- Integrated payment processing with transaction verification system

**Frontend Development**:
- Built responsive web interface using React, TypeScript, and Inertia.js
- Developed user dashboard for course browsing, enrollment, and progress tracking
- Implemented shopping cart, checkout flow, and payment confirmation pages
- Created instructor interfaces for course creation and student management
- Ensured seamless server-side rendering and optimal performance

**Security & Integration**:
- Architected video encryption and secure delivery pipeline
- Designed API integration between web platform and desktop application
- Implemented content protection measures preventing unauthorized access
- Established secure token-based authentication for desktop app

---

## Tech Stack

**Backend**: Laravel 10, PHP 8.1, MySQL  
**Frontend**: React 18, TypeScript, Inertia.js, TailwindCSS  
**Admin Panel**: Filament PHP  
**Video Streaming**: HLS (HTTP Live Streaming)  
**Security**: RSA Encryption, Laravel Sanctum  
**Additional**: Ant Design components, Video.js

---

## Key Challenges & Decisions

**Content Protection Architecture**  
Initially considered client-side watermarking, but determined it was insufficient against determined pirates. Chose server-side RSA encryption paired with a custom desktop player to create a genuine technical barrier, accepting the added complexity of maintaining a desktop application in exchange for substantially better security.

**Performance vs Security Trade-off**  
Video encryption adds processing overhead. Implemented on-demand encryption rather than pre-encrypting all content, balancing storage costs and performance while maintaining security. Videos are encrypted once upon upload and served efficiently using HLS streaming protocols.

**User Experience Without Friction**  
The desktop application requirement could frustrate users. Designed a one-time installation process with automatic license verification tied to user accounts, making subsequent course access seamless. The web platform handles all discovery and purchasing, keeping the desktop app focused solely on secure playback.

**Scalable Course Structure**  
Designed a flexible three-tier content hierarchy (Courses → Blocks → Resources) allowing instructors to organize content logically, whether delivering short tutorials or comprehensive multi-module programs. This structure also supports various resource types beyond just videos.

**Revenue Model Flexibility**  
Built support for both individual course sales and package bundles with independent pricing, enabling various business models—from single-course purchases to subscription-like course collections with volume discounts.
