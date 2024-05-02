## Ecothot

**Ecothot ©2017** | _Thots Against Climate Change_

Ecothot is a multimedia movement dedicated to the advancement of the scientific community.

Its mission was initiated by **[@pujithegreatest](https://github.com/pujithegreatest)** and has since gained numerous followers and supporters, with hopes to grow for the sake of our planet's future, and increased quality of life for posterity.

Let's act before it's too late, there's no time to lose!

## Getting Started

First, install Node modules:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Ecothot website up and running.

## Initialize the Database

This repository uses several different environments:

### Local Setup

Make sure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed

You'll also probably want to install [Supabase](https://supabase.com/) globally for ease of use in the command line. In your terminal, run:

```bash
brew install supabase/tap/supabase
```

Then, from the project root:

```bash
supabase start
```

This will start a local **supabase** instance inside of a Docker container

### Staging Setup

First, create an `.env` file at root of your project if you haven't yet done so

Then, get the credentials from [@jimbopulos](https://github.com/jimbopulos) and place them in there

If you have access, you can navigate database tables via the [Dashboard](https://supabase.com/dashboard/project/mbcddyyzdcduzmscxflz)

## WIP

This project is a work in progress, slowly becoming the replatformed site for the current production website: [ecothot.com](https://www.ecothot.com/)
