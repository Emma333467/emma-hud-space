export const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE";https://ilrnkoonjesyexsyseqs.supabase.co/rest/v1/
export const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE";create policy "Authenticated users can upload media"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'media');

create policy "Authenticated users can view media"
on storage.objects
for select
to authenticated
using (bucket_id = 'media');

create policy "Users can update media"
on storage.objects
for update
to authenticated
using (bucket_id = 'media')
with check (bucket_id = 'media');

create policy "Users can delete media"
on storage.objects
for delete
to authenticated
using (bucket_id = 'media');
