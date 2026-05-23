# AVANOR E-Commerce Platform

A professional, scalable, and feature-rich e-commerce platform built with cutting-edge technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - Component library
- **Redux Toolkit** - State management
- **React Query** - Server state management
- **Axios** - HTTP client
- **Stripe** - Payment processing

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Prisma** - ORM
- **JWT** - Authentication
- **Redis** - Caching
- **AWS S3** - File storage
- **Docker** - Containerization

### DevOps
- **GitHub Actions** - CI/CD
- **Docker Compose** - Local development
- **PostgreSQL** - Primary database
- **Redis** - Cache layer

## 📁 Project Structure

```
avanor-ecommerce/
├── frontend/                 # Next.js application
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── store/
│   │   └── utils/
│   └── package.json
├── backend/                  # Express.js API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── config/
│   ├── prisma/
│   └── package.json
├── docker-compose.yml
├── .github/
│   └── workflows/
└── README.md
```

## 🎯 Features

- ✅ User Authentication & Authorization
- ✅ Product Catalog with Advanced Filtering
- ✅ Shopping Cart Management
- ✅ Secure Checkout Process
- ✅ Payment Integration (Stripe)
- ✅ Order Management System
- ✅ Admin Dashboard
- ✅ Inventory Management
- ✅ Customer Reviews & Ratings
- ✅ Wishlist Functionality
- ✅ Real-time Notifications
- ✅ Search & Recommendations
- ✅ Multi-language Support (i18n)
- ✅ Mobile Responsive Design

## 🏃 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 7+

### Installation

```bash
# Clone repository
git clone https://github.com/nlcoffice30-create/avanor-ecommerce.git
cd avanor-ecommerce

# Using Docker Compose
docker-compose up -d

# Or Manual Setup
# Frontend
cd frontend
npm install
npm run dev

# Backend (in another terminal)
cd backend
npm install
npm run dev
```

## 🔑 Environment Variables

Create `.env.local` files in both frontend and backend directories with required variables.

## 📚 Documentation

- [Frontend Setup](./frontend/README.md)
- [Backend Setup](./backend/README.md)
- [API Documentation](./backend/API.md)
- [Database Schema](./backend/DATABASE.md)

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines.

## 📄 License

MIT License - see LICENSE file for details

## 👥 Support

For support, email support@avanor.com or open an issue on GitHub.

---

**Made with ❤️ for AVANOR**
