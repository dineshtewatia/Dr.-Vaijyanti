create extension if not exists "uuid-ossp";

create table if not exists public.leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text not null,
  country text,
  treatment text,
  source text,
  message text,
  status text not null default 'new',
  assigned_to uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.hospitals (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  status text not null default 'draft',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.doctors (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  status text not null default 'draft',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  status text not null default 'draft',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique,
  status text not null default 'draft',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.hospitals enable row level security;
alter table public.doctors enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;

create policy "Admins can manage leads" on public.leads
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Public can read published hospitals" on public.hospitals
  for select using (status = 'published' or auth.role() = 'authenticated');

create policy "Admins can manage hospitals" on public.hospitals
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Public can read published doctors" on public.doctors
  for select using (status = 'published' or auth.role() = 'authenticated');

create policy "Admins can manage doctors" on public.doctors
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Public can read published testimonials" on public.testimonials
  for select using (status = 'published' or auth.role() = 'authenticated');

create policy "Admins can manage testimonials" on public.testimonials
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Public can read published posts" on public.blog_posts
  for select using (status = 'published' or auth.role() = 'authenticated');

create policy "Admins can manage posts" on public.blog_posts
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
