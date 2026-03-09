/*
  # Create Properties Management System

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text) - Property title
      - `type` (text) - Property type (Kothi, Farmhouse, Retail, Shop, Flat, Office, Plot)
      - `location` (text) - Location of property
      - `price` (text) - Price or price range
      - `area` (text) - Area size
      - `description` (text) - Property description
      - `status` (text) - Status (For Sale, For Rent, For Purchase)
      - `featured` (boolean) - Whether property is featured
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `properties` table
    - Add policy for public read access (property listings are public)
    - Add policy for authenticated users to manage properties
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  location text NOT NULL,
  price text NOT NULL,
  area text,
  description text,
  status text NOT NULL DEFAULT 'For Sale',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view properties"
  ON properties
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert properties"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update properties"
  ON properties
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete properties"
  ON properties
  FOR DELETE
  TO authenticated
  USING (true);