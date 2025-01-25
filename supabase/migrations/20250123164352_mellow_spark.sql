/*
  # Contact Form Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `business_type` (text) - 业务类型：个人/公司
      - `name` (text) - 联系人姓名
      - `company_name` (text, nullable) - 公司名称
      - `email` (text) - 邮箱地址
      - `phone` (text) - 联系电话
      - `description` (text, nullable) - 需求描述
      - `created_at` (timestamptz) - 提交时间
      - `status` (text) - 处理状态
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_type text NOT NULL,
  name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 允许任何人提交表单
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 只有已认证用户可以查看提交记录
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);