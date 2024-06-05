# atlasenergyconsulting.github.io
Fill out forms for Atlas Consulting Services.

In order to allow anon (anonomous) user to insert, but not select, you must run the following:
```sql
create policy "Allow insert for anon"
on "Test_Table" for insert
to anon
with check (true);

-- Deny select for the 'anon' role
create policy "Deny select for anon"
on "Test_Table" for select
to anon
using (false);
```

The select statement can still be ran, but there will never be returned results.