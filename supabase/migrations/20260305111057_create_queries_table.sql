/*
  # Create Queries Table

  1. New Tables
    - `queries`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone
      - `property_type` (text) - Type of property interested in
      - `location` (text) - Location preference
      - `message` (text) - Query message
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `queries` table
    - Public can insert queries
    - Authenticated users can view all queries
*/

CREATE TABLE IF NOT EXISTS queries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  property_type text NOT NULL,
  location text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE queries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit queries"
  ON queries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view queries"
  ON queries
  FOR SELECT
  TO authenticated
  USING (true);