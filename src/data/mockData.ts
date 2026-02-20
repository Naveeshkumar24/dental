/**
 * MOCK DATA FILE
 * 
 * =====================================================
 * This data is used when the backend is not connected.
 * Once your Golang backend is running, the app will
 * fetch real data from your PostgreSQL database.
 * =====================================================
 * 
 * You can use this data to seed your PostgreSQL database.
 * See the SQL schema below for table structure.
 */

import { Service, Certification, Achievement } from "@/types";

export const mockServices: Service[] = [
   {
    id: 1,
    name: "Root Canal Treatment",
    description: "Anterior and posterior root canal treatments using modern techniques.",
    image_url: "/images/rct.jpg",
  },
  {
    id: 2,
    name: "Tooth Extractions",
    description: "Safe and painless dental extractions.",
    image_url: "/images/extraction.jpg",
  },
  {
    id: 3,
    name: "Dental Restorations",
    description: "Composite restorations and crown preparation.",
    image_url: "/images/restoration.jpg",
  },
];

export const mockCertifications: Certification[] = [
  {
    id: 1,
    title: "Bachelor of Dental Surgery (BDS)",
    institution: "Government Dental College and Research Institute, Bangalore",
    year: "2019 – 2024",
  },
  {
    id: 2,
    title: "Comprehensive Clinical Residency Program",
    institution: "Indian Dental Association, Mumbai",
    year: "2025",
  },
  {
    id: 3,
    title: "Registered Dentist – License #59839A",
    institution: "Karnataka State Dental Council",
    year: "2024",
  },
];
export const ABOUT_FALLBACK = `
Dr. Sayana Sebastian is a qualified Dental Surgeon with a Bachelor of Dental Surgery
from Government Dental College and Research Institute, Bangalore.

She has hands-on experience in restorative dentistry, endodontics, prosthodontics,
and oral surgery.

She is currently working as an Associate Dentist and has completed a
Comprehensive Clinical Residency Program under the Indian Dental Association,
gaining expertise in patient management, digital dentistry, infection control,
and clinical documentation.
`;
export const mockAchievements: Achievement[] = [
  {
    id: 1,
    title: "1000+ Patients Treated",
    description: "Successfully provided dental care to over a thousand patients with excellent outcomes.",
  },
  {
    id: 2,
    title: "Dental Awareness Camps",
    description: "Participated in multiple community dental awareness and free checkup camps.",
  },
  {
    id: 3,
    title: "Excellence in Patient Care",
    description: "Recognized for outstanding patient satisfaction and quality of dental treatments.",
  },
  {
    id: 4,
    title: "Community Oral Health Initiatives",
    description: "Led initiatives for school dental health programs and rural dental care.",
  },
  {
    id: 5,
    title: "Professional Workshops & Seminars",
    description: "Regular speaker and participant at dental conferences and workshops.",
  },
];

/**
 * SQL SCHEMA FOR POSTGRESQL
 * Run this in your PostgreSQL database to create the required tables:
 * 
 * -----------------------------------------------------
 * 
 * CREATE TABLE services (
 *   id SERIAL PRIMARY KEY,
 *   name VARCHAR(255) NOT NULL,
 *   description TEXT,
 *   image_url VARCHAR(500),
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 * );
 * 
 * CREATE TABLE certifications (
 *   id SERIAL PRIMARY KEY,
 *   title VARCHAR(255) NOT NULL,
 *   institution VARCHAR(255),
 *   year INTEGER
 * );
 * 
 * CREATE TABLE achievements (
 *   id SERIAL PRIMARY KEY,
 *   title VARCHAR(255) NOT NULL,
 *   description TEXT
 * );
 * 
 * CREATE TABLE appointments (
 *   id SERIAL PRIMARY KEY,
 *   full_name VARCHAR(255) NOT NULL,
 *   email VARCHAR(255) NOT NULL,
 *   phone VARCHAR(20) NOT NULL,
 *   service VARCHAR(255) NOT NULL,
 *   preferred_date DATE NOT NULL,
 *   message TEXT,
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 * );
 * 
 * -----------------------------------------------------
 * SAMPLE INSERT STATEMENTS (Seed Data):
 * -----------------------------------------------------
 * 
 * INSERT INTO services (name, description, image_url) VALUES
 * ('General Dental Checkup', 'Comprehensive oral examination...', 'https://...'),
 * ('Teeth Cleaning & Scaling', 'Professional cleaning...', 'https://...');
 * 
 * INSERT INTO certifications (title, institution, year) VALUES
 * ('Bachelor of Dental Surgery (BDS)', 'State Dental College', 2020),
 * ('Certified in Preventive Dentistry', 'Indian Dental Association', 2021);
 * 
 * INSERT INTO achievements (title, description) VALUES
 * ('1000+ Patients Treated', 'Successfully provided dental care...'),
 * ('Dental Awareness Camps', 'Participated in multiple community...');
 * 
 */
