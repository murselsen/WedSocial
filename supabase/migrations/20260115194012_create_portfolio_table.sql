/*
  # Portfolio Table Creation

  ## Overview
  Creates a portfolio table to store wedding showcase items including images, titles, descriptions, and categories.

  ## New Tables
  - `portfolio`
    - `id` (uuid, primary key) - Unique identifier
    - `title` (text, required) - Portfolio item title
    - `description` (text) - Detailed description of the item
    - `image_url` (text, required) - URL to the portfolio image
    - `category` (text) - Category like "Wedding", "Engagement", "Pre-Wedding"
    - `date` (date) - Event date
    - `location` (text) - Event location
    - `couple_names` (text) - Names of the couple
    - `featured` (boolean) - Whether to feature this item
    - `created_at` (timestamptz) - Creation timestamp
    - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on portfolio table
  - Add public read policy (anyone can view portfolio)
  - Add authenticated insert/update/delete policies for admin users

  ## Notes
  - Portfolio items are publicly viewable to showcase work
  - Only authenticated users can manage portfolio items
*/

-- Create portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text DEFAULT 'Wedding',
  date date,
  location text,
  couple_names text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

-- Public can view all portfolio items
CREATE POLICY "Anyone can view portfolio items"
  ON portfolio
  FOR SELECT
  TO public
  USING (true);

-- Authenticated users can insert portfolio items
CREATE POLICY "Authenticated users can create portfolio items"
  ON portfolio
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update portfolio items
CREATE POLICY "Authenticated users can update portfolio items"
  ON portfolio
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete portfolio items
CREATE POLICY "Authenticated users can delete portfolio items"
  ON portfolio
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for featured items
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio(featured);

-- Create index for category
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio(category);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_portfolio_updated_at ON portfolio;
CREATE TRIGGER update_portfolio_updated_at
  BEFORE UPDATE ON portfolio
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();