-- Consultas que llegan desde el formulario de contacto del sitio (puerta de entrada del micro CRM).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  whatsapp text not null,
  email text not null,
  interes text not null,
  nivel text,
  objetivo text,
  acepta_terminos boolean not null,
  source text not null default 'web',
  status text not null default 'nuevo'
);

comment on table public.leads is 'Consultas del formulario de contacto del sitio.';

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

-- El formulario inserta como anónimo. Solo puede crear consultas nuevas, con los términos aceptados.
create policy "Formulario web puede crear leads"
  on public.leads for insert
  to anon
  with check (acepta_terminos = true and source = 'web' and status = 'nuevo');

-- El staff (usuarios autenticados) lee y gestiona los leads.
create policy "Staff puede crear leads"
  on public.leads for insert
  to authenticated
  with check (true);

create policy "Staff puede ver leads"
  on public.leads for select
  to authenticated
  using (true);

create policy "Staff puede actualizar leads"
  on public.leads for update
  to authenticated
  using (true)
  with check (true);

create policy "Staff puede borrar leads"
  on public.leads for delete
  to authenticated
  using (true);

-- Permisos de tabla: anon solo inserta; no puede leer, editar ni borrar.
revoke all on table public.leads from anon;
grant insert on table public.leads to anon;
grant select, insert, update, delete on table public.leads to authenticated;
