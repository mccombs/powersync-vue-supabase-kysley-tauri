# Building an Offline-First ToDo App with Supabase and PowerSync

This is the finished project from the tutorial Building an Offline-First ToDo App with Supabase and PowerSync

## Project setup

```bash
bun install
```

## Add Env Local Variables

Create a `.env.local` file in the root of the project and add the following variables:

```bash
VITE_SUPABASE_URL=https://<your-supabase-url>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
VITE_POWERSYNC_URL=https://<your-powersync-url>.journeyapps.com
```

## Run the project

```bash
bun dev
```

## Test the offline functionality

```bash
bun vite build
```

## Launch App w/Tauri

```bash
bun tauri dev
```
