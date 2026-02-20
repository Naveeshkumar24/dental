/**
 * TypeScript Types for Dental Clinic
 * These types should match your PostgreSQL schema and Golang models
 */
interface ImportMetaEnv {
  readonly VITE_API_BASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


export interface Service {
  id: number;
  name: string;
  description: string;
  image_url: string;
  created_at?: string;
}

export interface Certification {
  id: number;
  title: string;
  institution: string;
  year: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export interface Appointment {
  id?: number;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  message: string;
  created_at?: string;
}
