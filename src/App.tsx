import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

/* ===== ADMIN ===== */
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AboutAdmin from "./pages/admin/AboutAdmin";
import BlogsAdmin from "./pages/admin/BlogsAdmin";
import CertificationsAdmin from "./pages/admin/CertificationsAdmin";
import QueriesAdmin from "./pages/admin/QueriesAdmin";

import AdminRoute from "@/components/AdminRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* ===== PUBLIC ===== */}
          <Route path="/" element={<Index />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />

          {/* ===== ADMIN ===== */}
         {/* ===== ADMIN ROUTES ===== */}
<Route path="/admin/login" element={<Login />} />

<Route
  path="/admin/dashboard"
  element={
    <AdminRoute>
      <Dashboard />
    </AdminRoute>
  }
/>

<Route
  path="/admin/about"
  element={
    <AdminRoute>
      <AboutAdmin />
    </AdminRoute>
  }
/>

<Route
  path="/admin/blogs"
  element={
    <AdminRoute>
      <BlogsAdmin />
    </AdminRoute>
  }
/>

<Route
  path="/admin/certifications"
  element={
    <AdminRoute>
      <CertificationsAdmin />
    </AdminRoute>
  }
/>

<Route
  path="/admin/queries"
  element={
    <AdminRoute>
      <QueriesAdmin />
    </AdminRoute>
  }
/>

          {/* ===== FALLBACK ===== */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
