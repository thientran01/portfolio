
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NavigationSystem from "@/components/NavigationSystem";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <NavigationSystem />
      <main className="flex-grow flex items-center justify-center">
        <div className="portfolio-container py-24 text-center">
          <h1 className="text-7xl font-bold mb-6">404</h1>
          <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-portfolio-deepblue hover:text-portfolio-periwinkle transition-colors"
            data-cursor="pointer"
          >
            <ArrowLeft size={16} />
            <span>Return to home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
